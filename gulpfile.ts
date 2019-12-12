// tslint:disable: no-implicit-dependencies
import { spawn } from 'cross-spawn'
import * as del from 'del'
import * as gulp from 'gulp'
import * as sourcemaps from 'gulp-sourcemaps'
import tslint from 'gulp-tslint'
import * as ts from 'gulp-typescript'
import { Linter } from 'tslint'

const OUTPUT = 'bin'

const ASSETS = [
    'src/**/*.sql',
]

let _project: ts.Project | undefined

function getProject(): ts.Project {
    if (_project === undefined) {
        _project = ts.createProject('tsconfig.build.json', {
            outDir: OUTPUT,
        })
    }

    return _project
}

const reloadProject: gulp.TaskFunction = done => {
    _project = undefined
    done()
}

const transpile: gulp.TaskFunction = () => {
    const tsProject = getProject()

    const result =
        tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('', {
            includeContent: false,
        }))
        .pipe(gulp.dest(OUTPUT))

    return result
}

const clean: gulp.TaskFunction = async () => {
    await del([
        `${OUTPUT}/**`,
    ])
}

const lint: gulp.TaskFunction = () => {
    const tsProject = getProject()
    const linter = Linter.createProgram(tsProject.configFileName)

    const result =
        tsProject.src()
        .pipe(tslint({
            formatter: 'verbose',
            program: linter,
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true,
        }))

    return result
}

const moveAssets: gulp.TaskFunction = () =>
    gulp.src(ASSETS)
        .pipe(gulp.dest(OUTPUT))

const build: gulp.TaskFunction = gulp.parallel(
    lint,
    gulp.series(
        clean,
        gulp.parallel(
            transpile,
            moveAssets,
        ),
    ),
)

const watchTs: gulp.TaskFunction = () => {
    const tsProject = getProject()

    const result =
        gulp.watch([
            // tslint:disable-next-line: no-non-null-assertion
            ...tsProject.config.include!,
        ],
        gulp.parallel(
            transpile,
            lint,
        ))

    return result
}

const watchTsConfig: gulp.TaskFunction = () => {
    const result =
        gulp.watch([
            'tsconfig.json',
            'tsconfig.build.json',
        ],
        gulp.series(
            reloadProject,
            build,
        ),
    )

    return result
}

const watchAssets: gulp.TaskFunction = () =>
    gulp.watch(ASSETS, moveAssets)

const watch: gulp.TaskFunction = gulp.series(
    build,
    gulp.parallel(
        watchTs,
        watchTsConfig,
        watchAssets,
    ),
)

function runMigrator(command: string) {
    const migrator = spawn(
        'npx',
        [
            'sequelize',
            command,
        ],
        {
            stdio: 'inherit',
        },
    )

    return migrator
}

const migrateUp: gulp.TaskFunction = () =>
    runMigrator('db:migrate')
migrateUp.displayName = 'db:up'

const migrateDown: gulp.TaskFunction = () =>
    runMigrator('db:migrate:undo')
migrateDown.displayName = 'db:down'

const migrateDownAll: gulp.TaskFunction = () =>
    runMigrator('db:migrate:undo:all')
migrateDownAll.displayName = 'db:down:all'

export {
    build,
    clean,
    lint,
    watch,
    migrateUp,
    migrateDown,
    migrateDownAll,
}

export default build

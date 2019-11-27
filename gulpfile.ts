// tslint:disable: no-implicit-dependencies
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

function reloadProject(): void {
    _project = undefined
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
        done => {
            reloadProject()
            done()
        })

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

export {
    build,
    clean,
    lint,
    watch,
}

export default build

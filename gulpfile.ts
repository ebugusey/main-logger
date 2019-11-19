// tslint:disable: no-implicit-dependencies
import * as del from 'del'
import * as gulp from 'gulp'
import * as sourcemaps from 'gulp-sourcemaps'
import tslint from 'gulp-tslint'
import * as ts from 'gulp-typescript'
import { Linter } from 'tslint'

const OUTPUT = 'bin'

let _project: ts.Project | undefined

function getProject(reset: boolean = false): ts.Project {
    if (reset || _project === undefined) {
        _project = ts.createProject('tsconfig.json', {
            outDir: OUTPUT,
        })
    }

    return _project
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

const build: gulp.TaskFunction = gulp.parallel(
    lint,
    gulp.series(
        clean,
        transpile,
    ),
)

export { build, clean, lint }
export default build

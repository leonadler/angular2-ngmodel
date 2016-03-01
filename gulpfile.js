'use strict';

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sourceStream = require('vinyl-source-stream');
const tslint = require('gulp-tslint');
const tslintStylish = require('tslint-stylish');
const typescriptVersion = require('typescript');
const watchify = require('watchify');

gulp.task('default', ['build']);

gulp.task('clean', () => {
    return del([
       'build/**',
       '!build',
       'lib/**',
       '!lib'
    ]);
});

gulp.task('build', ['typescript', 'bundle', 'staticfiles', 'vendorfiles']);

let tsProject;
gulp.task('typescript', () => {
    if (!tsProject) {
        tsProject = gulpTypescript.createProject('tsconfig.json', {
            typescript: typescriptVersion
        });
    }

    const sourceFiles = [
        'typings/browser/**.ts',
        'src/**.ts',
        'node_modules/angular2/typings/browser.d.ts'
    ];

    return (
        gulp.src(sourceFiles, { base: './src' })
        .pipe(sourcemaps.init())
        .pipe(gulpTypescript(tsProject))
        .pipe(sourcemaps.write('.', {
            includeContent: 'true',
            sourceRoot: '../'
        }))
        .pipe(gulp.dest('./lib'))
    );
});

let bundler;
gulp.task('bundle', ['typescript'], () => {
    if (!bundler) {
        bundler = browserify({
            entries: ['lib/app.js'],
            debug: true,
            cache: {},
            packageCache: {},
            plugin: [watchify]
        });
    }

    return (
        bundler.bundle()
        .pipe(sourceStream('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('.', {
            includeContent: 'true',
            sourceRoot: '../'
        }))
        .pipe(gulp.dest('./build'))
    );
});

gulp.task('staticfiles', () => {
    return (
        gulp.src(['src/**', '!**/*.ts', '!**/*.js'])
        .pipe(gulp.dest('build'))
    );
});

gulp.task('vendorfiles', () => {
    const files = [
        'node_modules/angular2/bundles/angular2-polyfills.js'
    ];
    return (
        gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('.', {
            includeContent: 'true',
            sourceRoot: '../'
        }))
        .pipe(gulp.dest('build'))
    );
});

gulp.task('watch', ['build'], () => {
    gulp.watch(['src/**/*.ts'], ['bundle']);
    gulp.watch(['src/**/*.html'], ['staticfiles']);
});

'use strict'

gulp = require 'gulp'
source = require 'vinyl-source-stream'
browserify = require 'browserify'
babelify = require 'babelify'
debowerify = require 'debowerify'
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
browserSync = require 'browser-sync'

NAME = 'domimic'
SRC = './src'
DEST = '.'

gulp.task 'serve', () ->
  gulp.src '.'
    .pipe webserver
      livereload: true,
      directoryListing: false,
      open: true,
  gulp.watch 'src/**/*', ['build']

gulp.task 'browserify', () ->
  return browserify("#{SRC}/main.js")
    .transform(babelify)
    .transform(debowerify)
    .bundle()
    .pipe(source("#{NAME}.js"))
    .pipe(gulp.dest "#{DEST}")

gulp.task 'minify', () ->
  gulp.src("#{DEST}/#{NAME}.js")
    .pipe (uglify {
      preserveComments: 'license',
    })
    .pipe (rename "#{NAME}.min.js")
    .pipe (gulp.dest "#{DEST}")

gulp.task 'js', gulp.series('browserify', gulp.parallel('minify'))

gulp.task 'browser-sync' , () ->
  browserSync
    server: {
      baseDir: DEST
    }

  gulp.watch(["#{SRC}/**/*.js"], gulp.series('js', browserSync.reload))
  gulp.watch(["#{DEST}/index.html"], browserSync.reload)

gulp.task('serve', gulp.series('browser-sync'))

gulp.task('build', gulp.parallel('js'))

gulp.task 'default', gulp.series('build', 'serve')

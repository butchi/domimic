'use strict'

gulp = require 'gulp'
runSequence = require 'run-sequence'
browserify = require 'browserify'
babelify = require 'babelify'
source = require 'vinyl-source-stream'
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
plumber = require 'gulp-plumber'
notify = require 'gulp-notify'
webserver = require 'gulp-webserver'

gulp.task 'serve', () ->
  gulp.src '.'
    .pipe webserver
      livereload: true,
      directoryListing: false,
      open: true,
  gulp.watch 'src/**/*', ['build']

gulp.task 'babel', () ->
  return browserify({entries: 'src/main.js', debug: true})
    .transform ('babelify')
    .bundle()
    .pipe(source('domimic.js'))
    .pipe (gulp.dest 'dist')

gulp.task 'minify', () ->
  gulp.src('dist/domimic.js')
    .pipe (uglify {})
    .pipe (rename 'domimic.min.js')
    .pipe (gulp.dest 'dist')

gulp.task 'build', () ->
  runSequence 'babel', 'minify'

gulp.task 'watch', () ->
  gulp.watch('src/**/*', ['build'])

gulp.task 'default', ['build']

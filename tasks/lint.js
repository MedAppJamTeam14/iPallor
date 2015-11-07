'use strict';

/**
 * Control things.
 */

var gulp        = require('gulp');
var fs          = require('fs');
var _           = require('lodash');
var async       = require('async');
var jshint      = require('gulp-jshint');
var jscs        = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');

module.exports = function (done) {

  function getConfig (file) {
    return _.merge(
      JSON.parse(fs.readFileSync('./.jshintrc', 'utf-8')),
      JSON.parse(fs.readFileSync(file, 'utf-8'))
    );
  }

  function lint (paths, conf) {
    return function (done) {
      gulp.src(paths)
        .pipe(jshint(conf))
        .pipe(jshint.reporter('jshint-stylish'))
        .on('finish', function () {
          gulp.src(paths)
            .pipe(jscs())
            .on('error', function () {})
            .pipe(jscsStylish())
            .on('end', done);
        });
    };
  }

  async.series([
    lint(['client/**/*.js', '!client/bower_components/**'], getConfig('./client/.jshintrc')),
    lint(['server/**/*.js'], getConfig('./server/.jshintrc')),
    lint(['gulpfile.js', 'tasks/**/*.js'], getConfig('./server/.jshintrc'))
  ], done);

};

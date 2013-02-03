/**
 * grunt-commonjs
 * https://github.com/avos/grunt-commonjs
 *
 * Copyright (c) 2013 Team Delicious, AVOS Systems Inc.
 * Licensed under the MIT license.
 */

// commonjs: {
//   modules: {
//    cwd: 'assets/',
//    src: ['assets/*.js'],
//    dest: 'dist/'
//   }
// }

var path = require('path');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('commonjs', 'Wrap .js files for commonjs.', function () {

    this.files.forEach(function(file) {
      return file.src.map(function(filepath) {
        var definePath = (filepath.replace(/\.\w+$/, '')),
            original = grunt.file.read(path.join(file.cwd, filepath));
        return grunt.file.write(file.dest + filepath, 'window.require.define({"' + definePath + '": function(exports, require, module) {\n' + original + '}});\n\n');
      });
    });
  });
}

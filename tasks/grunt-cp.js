/**
 * grunt-commonjs
 * https://github.com/avos/grunt-commonjs
 *
 * Copyright (c) 2013 Team Delicious, AVOS Systems Inc.
 * Licensed under the MIT license.
 */

// commonjs: {
//   modules: {
//     src: ['assets/*.js'],
//     dest: 'dist/',
//     excludeBase: 'assets/'
//   }
// }

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('commonjs', 'Wrap .js files for commonjs.', function () {

    var files = this.files[0].src,
        options = this.data;

    files.map(function(filepath) {
      var file = grunt.file.read(filepath)
      var definepath = filepath.replace(options.excludeBase, '').replace(/\.\w+$/, '');

      var src = 'window.require.define({"' + definepath + '": function(exports, require, module) {\n' + file + '}});\n\n';
      grunt.file.write(filepath, src);
    });
  });
}

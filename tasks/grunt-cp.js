/**
 * grunt-wrap
 * https://github.com/chrissrogers/grunt-wrap
 *
 * Copyright (c) 2012 Christopher Rogers
 * Licensed under the MIT license.
 */

// wrap: {
//   modules: {
//     src: ['assets/*.js'],
//     dest: 'dist/',
//     wrapper: ['define(function (require, exports, module) {\n', '\n});']
//   }
// }

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('wrap', 'Wrap files.', function () {

    var files = this.files[0].src,
        options = this.data;

    //var file = grunt.file.read(this);
    //console.log(files);

    files.map(function(filepath) {
      var file = grunt.file.read(filepath)
      var definepath = filepath.replace(options.excludeBase, '').replace(/\.\w+$/, '');

      var src = 'window.require.define({"' + definepath + '": function(exports, require, module) {\n' + file + '}});\n\n';
      grunt.file.write(filepath, src);
    });
  });

}

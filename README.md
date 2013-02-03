# grunt-commonjs

Wraps client-side commonjs modules.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: ``npm install grunt-commonjs --save-dev``

Then add this line to your project's ``Gruntfile.js``:

```javascript
grunt.loadNpmTasks('grunt-commonjs');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Configure which files to be copied in your `initConfig`:

```javascript
grunt.initConfig({

  // ... other configs

  // wrap my modules with define
  commonjs: {
    modules: {
      cwd: 'assets/',
      src: ['**/*.js'],
      dest: 'dist/'
    }
  },

  // ... other configs
});
```

###Exclude base
Part of the path in each source file to exclude. In the above example, if there was a file in `assets/fonts/all.js` then when the commonjs module path is set, it would be `fonts/all` and not `assets/fonts/all`.

This is useful for when you are copying the contents of a folder into another folder, and the app is initialized in the destination folder.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
* 2013 Jan 29 - v0.1.0rc7 - Initial release.

## License
Copyright (c) 2012 Team Delicious, AVOS Systems Inc.
Licensed under the MIT license.

# grunt-commonjs

Wraps .js files into CommonJS modules for client-side usage.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: ``npm install grunt-commonjs --save-dev``

Then add this line to your project's ``Gruntfile.js``:

```javascript
grunt.loadNpmTasks('grunt-commonjs');
```

###CommonJS loader
You'll need a loader to detect your wrapped packages. You can use this simple [CommonJS loader](https://github.com/chrisabrams/commonjs) which is based off how [brunch.io](http://brunch.io) loads CommonJS packages.

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
* 2013 Feb 04 - v0.2.0rc7 - Refactor to use grunt 0.4.x's file properties.
* 2013 Jan 29 - v0.1.0rc7 - Initial release.

## License
Copyright (c) 2012 Team Delicious, AVOS Systems Inc.
Licensed under the MIT license.

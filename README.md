# BMEAN

A template project, with some bells and whistles, that incorporates Twitter Bootstrap, MongoDB, ExpressJS, AngularJS and NodeJS.

__This is  a work in progress, and a training exercise, so don't be suprised if stuff doesn't work as you expect.__

## Summary

This is a starter template for a MEAN application (with added Bootstrap).

I put this together to help me get to grips with ExpressJS/NodeJS, and workflow automation with Grunt.

There is plenty I still need to learn (as you'll see from the code).  If you plan to use this, then great, read on, but beware, you'll probably find some issues that I'll address and learn from - *you have been warned*.

## Philosophy

Clone, install dependencies, configure, grunt, run, browse.

### Client-side JavaScript

Until I understand a little more about source maps, AngularJS code (your code) uses file concatenation to simplify browser debugging.

## Getting started

I won't cover the clone part - the fact that you're here says you know something about that.

From the command line.

```
npm install
```
Then
```
bower install
```

### Configuration

Configuration is stored in the _config.js_ file.  The configuration you get is based on the ```process.env.NODE_ENV``` value.

Open _config.js_, and edit the ```databaseUrl``` and ```port``` values.  If no port is defined, _server.js_ defaults to port __3000__.

```javascript
(function () {
  "use strict";

  var config = {
    development : {
      databaseUrl : 'mongodb://localhost/bmean',
      port : 3000
    }
  };

  module.exports = function(){
    return config[process.env.NODE_ENV];
  }();
}());

```
#### Angular Locality

By default, the locality is set to ```en-GB```.  To change this, open  _Gruntfile.js_, and edit the ```vendor_body.src``` array to use the appropriate i18n file for your locality. 
 
```javascript
vendor_body : {
        src : [
          'bower/jquery/dist/jquery.min.js',
          'bower/lodash/dist/lodash.min.js',
          'bower/momentjs/min/moment.min.js',
          'bower/stringjs/lib/string.min.js',
          'bower/amplify/lib/amplify.min.js',
          'bower/angular/angular.min.js',
          // CHANGE YOUR LOCALITY HERE...
		  'bower/angular-i18n/angular-locale_en-gb.js',
          'bower/angular-animate/angular-animate.min.js',
          'bower/angular-cookies/angular-cookies.min.js',
          'bower/angular-resource/angular-resource.min.js',
          'bower/angular-ui-utils/ui-utils.min.js',
          'bower/angular-ui-router/release/angular-ui-router.min.js',
          'bower/angular-bootstrap/ui-bootstrap-tpls.min.js'
        ],
        dest : 'public/js/vendor-body.js'
      }
```
### Grunt

From the command-line, run 

```
grunt
```

Grunt uses _grunt-contrib-watch_, so, pretty much everything you do should get picked up.  By default, livereload runs anytime grunt restarts, so remember to install that plugin in your browser.

### Nodemon

From the command line

```
NODE_ENV=development nodemon --debug server.js
```





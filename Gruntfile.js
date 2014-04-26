module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options : {
        separator : ';',
        stripBanners: true
      },
      app : {
        files : {
          'public/js/app.concat.js' : ['public/app/*.js', 'public/app/**/*.js', 'public/app/**/**/*.js', 'public/app/**/**/**/*.js']
        }
      }
    },

    uglify : {
      vendor_header : {
        src : ['bower/modernizr/modernizr.js'],
        dest : 'public/js/vendor-header.js'
      },
      vendor_body : {
        src : [
          'bower/jquery/dist/jquery.min.js',
          'bower/lodash/dist/lodash.min.js',
          'bower/momentjs/min/moment.min.js',
          'bower/stringjs/lib/string.min.js',
          'bower/amplify/lib/amplify.min.js',
          'bower/toastr/toastr.min.js',
          'bower/angular/angular.min.js',
          'bower/angular-i18n/angular-locale_en-gb.js',
          'bower/angular-animate/angular-animate.min.js',
          'bower/angular-cookies/angular-cookies.min.js',
          'bower/angular-resource/angular-resource.min.js',
          'bower/angular-ui-utils/ui-utils.min.js',
          'bower/angular-ui-router/release/angular-ui-router.min.js',
          'bower/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'bower/greensock/src/minified/TweenMax.min.js',
          'bower/ng-Fx/dist/ng-Fx.min.js'
        ],
        dest : 'public/js/vendor-body.js'
      }
    },
    copy : {
      main : {
        files : [
          {
            src : 'bower/toastr/toastr.min.css',
            dest : 'public/styles/toastr.min.css'
          }, {
            src : 'bower/animate.css/animate.min.css',
            dest : 'public/styles/animate.min.css'
          },
          {
            src : 'bower/animate.css/animate.min.css',
            dest : 'public/styles/animate.min.css'
          },
          {
            src : 'bower/toastr/toastr.min.css',
            dest : 'public/styles/toastr.min.css'
          },
          {
            expand : true,
            cwd : 'bower/font-awesome/fonts/',
            src : ['**'],
            dest : 'public/fonts/',
            flatten : true,
            filter : 'isFile'
          }
        ]
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'public/app/*.js', 'public/app/**/*.js', 'public/app/**/**/*.js', 'public/app/**/**/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    less : {
      app : {
        options : {
          paths : ['bower/bootstrap/less', 'less']
        },
        files : {
          "public/styles/bootstrap.css" : "bower/bootstrap/less/bootstrap.less",
          "public/styles/font-awesome.css" : "bower/font-awesome/less/font-awesome.less",
          "public/styles/style.css" : "less/style.less"
        }
      }
    },
    watch: {
      app : {
        files : '<%= jshint.files %>',
        tasks: ['jshint', 'concat:app'],
        options: {
          interrupt: true,
          livereload : true
        }
      },
      html : {
        files : [
          'views/index.ejs', 'public/app/*.html', 'public/app/**/*.html', 'public/app/**/**/*.html', 'public/app/**/**/**/*.html'
        ],
        options: {
          interrupt: true,
          livereload : true
        }
      },
      vendor_header : {
        files : '<%= uglify.vendor_header.src %>',
        tasks: ['uglify:vendor_header'],
        options: {
          interrupt: true,
          livereload : true
        }
      },
      vendor_body : {
        files : '<%= uglify.vendor_body.src %>',
        tasks: ['uglify:vendor_body'],
        options: {
          interrupt: true,
          livereload : true
        }
      },
      less : {
        files : ['public/bower/bootstrap/less/*.less', 'less/*.less'],
        tasks: ['less:app'],
        options: {
          interrupt: true,
          livereload : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'concat:app', 'uglify', 'less:app', 'copy', 'watch']);
};
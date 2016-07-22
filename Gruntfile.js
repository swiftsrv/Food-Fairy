module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015', 'react']
      },
      dist: {
        files: {
          'client/compiled/index.js': 'client/src/index.js',
          'client/compiled/components/app.js': 'client/src/components/app.jsx',
          'client/compiled/components/header.js': 'client/src/components/header.jsx',
          'client/compiled/components/homePage.js': 'client/src/components/homePage.jsx',
          'client/compiled/components/logo.js': 'client/src/components/logo.jsx',
          'client/compiled/components/nav.js': 'client/src/components/nav.jsx',
          'client/compiled/components/navitem.js': 'client/src/components/navitem.jsx',
          'client/compiled/components/searchPage.js': 'client/src/components/searchPage.jsx',
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['client/compiled/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/style.min.css' : ['client/**/*.css']
        }
      }
    },

    eslint: {
      all: [
        'client/compiled/src/**/*.js'
      ]
    },

    nodemon: {
      dev: {
        script: 'index.js'
      }
    },

    shell: {
      prodServer: {
        command: 'git push heroku master'
      },
      options: {
          //fail on errors and display pass or err on terminal
        failOnError: true,
        stdout: true,
        stderr: true,
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('gruntify-eslint');


  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    // grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', ['concat', 'cssmin', 'uglify']);
  grunt.registerTask('test', ['eslint']);


  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
      grunt.task.run([ 'shell:prodServer' ]);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', ['test', 'build', 'upload']);

};

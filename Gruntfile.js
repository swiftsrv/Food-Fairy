module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['!client/compiled/index.js',
              'client/compiled/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    nodemon: {
      dev: {
        script: 'index.js'
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
    },

    jshint: {
      files: [
        'client/compiled/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        ignores: [
          'node_modules/**/*.js',
          'dist/**/*.js'
        ]
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/style.min.css' : ['client/**/*.css']
        }
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
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    // var nodemon = grunt.util.spawn({
    //      cmd: 'grunt',
    //      grunt: true,
    //      args: 'nodemon'
    // });
    // nodemon.stdout.pipe(process.stdout);
    // nodemon.stderr.pipe(process.stderr);

    // grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    // 'jshint'
    // 'mochaTest'
  ]);

  grunt.registerTask('build', [
    // 'cssmin',
    // 'concat',
    // 'uglify'
  ]);

  grunt.registerTask('upload', function(n) {
    // if(grunt.option('prod')) {
    //   // add your production server task here
    //   grunt.task.run([ 'shell:prodServer' ]);
    // } else {
    //   grunt.task.run([ 'server-dev' ]);
    // }
  });

  grunt.registerTask('deploy', [
    // 'test',
    // 'build',
    // 'upload'
  ]);


};

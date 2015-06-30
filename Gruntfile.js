(function() {
  module.exports = function(grunt) {
    var coffeeify, stringify;
    stringify = require('stringify');
    coffeeify = require('coffeeify');
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                }
            }
        },
        clean: {
            dist: ['dist']
        },
        browserify: {
            components: {
                options: {
                    preBundleCB: function(b) {
                        b.transform(coffeeify);
                        return b.transform(stringify({
                            extensions: ['.hbs', '.html', '.tpl', '.txt']
                        }));
                    }
                },
                expand: true,
                flatten: true,
                files: {
                    'dist/js/main.js': ['src/main.js']
                }
            }
        },
        watch: {
            compile: {
                files: ['src/**/*.less', 'src/**/*.js'],
                tasks: ['browserify', 'less']
            }
        },
        less: {
            components: {
                files: {
                    'dist/css/layout.css': ['src/templates/components/**/*.less', 'src/common/**/*.less']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/main.js': ['dist/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', function() {
      grunt.task.run(['clean', 'less','browserify', 'connect', 'watch']);
    });
    grunt.registerTask('build', function() {
      grunt.task.run(['clean', 'less','browserify', 'uglify', 'cssmin']);
    });
  };
}).call(this);

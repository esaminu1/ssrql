'use strict'

module.exports = function (grunt) {
  var files = [
    './main.js',
    './gruntfile.js',
    './lambda.js',
    './data-sources/**/*.js',
    './middleware/**/*.js',
    './lambda/*/*.js',
    './graphql/**/*.js',
    './tests/**/*.js',
    './entities/**/*.js',
    './misc/**/*.js',
    './utils/**/*.js',
  ]
  grunt.initConfig({
    jshint: {
      options: {
        unused: true,
        undef: true,
        expr: true,
        asi: true,
        strict: true,
        funcscope: true,
        esversion: 6,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        node: true,
        globals: {

          INPUTFIELDS: true,
          FIELDS: true,
          OPTIONS: true,
          ISTEST: true,

          module: true,
          env: true,
          devLog: true,
          describe: true,
          beforeEach: true,
          before: true,
          after: true,
          it: true
        },
      },
      files: files
    },
    jsbeautifier: {
      files: files,
      options: {
        js: {
          braceStyle: 'collapse',
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: ' ',
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: true,
          keepArrayIndentation: true,
          keepFunctionIndentation: true,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: false
        }
      }
    },
    watch: {
      scripts: {
        files: files,
        tasks: ['jsbeautifier', 'jshint', /* 'documentation'*/ ],
        options: {
          spawn: false,
        },
      },
    },
    // documentation: {
    //   default: {
    //     files: [{
    //       expand: true,
    //       cwd: './',
    //       src: files
    //       }],
    //     options: {
    //       format: 'html',
    //       destination: 'docs'
    //     }
    //   },
    // }
  })
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-jsbeautifier')
  grunt.loadNpmTasks('grunt-documentation');

  grunt.registerTask('default', ['jsbeautifier', 'jshint', /*'documentation',*/ 'watch'])
}
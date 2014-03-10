'use strict';

module.exports = function (grunt) {
  grunt.initConfig(
    { flipcss:
      { bootstrap:
        { files:  [ { expand: true
                    , cwd: 'bootstrap/'
                    , src: '*.css'
                    , dest: 'css/'
                    }
                  ]
        }
      }
    }
  )

  grunt.loadNpmTasks('grunt-flipcss')
}

module.exports = function( grunt ) {

    //----------------------------------------------
    // LOAD GRUNT DEPENDENCIES
    //----------------------------------------------
    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    //----------------------------------------------
    // CONFIGURATION SETTINGS
    //----------------------------------------------

    var config = {
        pkg: grunt.file.readJSON( 'package.json' ) || {},
        dirs: {
            lib: 'lib',
            vendor: 'firephp',
            dist: 'dist/firephp'
        },
        bower: grunt.file.readJSON( '.bowerrc' ) || {}
    };

    //----------------------------------------------
    // GRUNT DEPLOY TASK SETTINGS
    //----------------------------------------------

    // Project Configuration
    grunt.initConfig({

        //----------------------------------------------
        // CONFIGURATION SETTINGS AND DOCUMENTATION FOR TEMPLATING
        //----------------------------------------------

        pkg: config.pkg,
        root: config.root,
        dirs: config.dirs,
        manager: config.bower,  // package manager ie. bower

        //----------------------------------------------
        // DIRECTORY STRUCTURE
        // Setup CodeIgniter package directory
        //----------------------------------------------

        mkdir: {
            setup: {
                options: {
                    create: [
                        '<%= dirs.dist %>/helpers',
                        '<%= dirs.dist %>/libraries',
                    ]
                }
            }
        },

        //----------------------------------------------
        // VENDOR DEPENDENCIES
        // Copy bower dependencies to appropriate directories
        //----------------------------------------------

        bowercopy: {
            options: {
                srcPrefix: '<%= manager.directory %>',
                destPrefix: '<%= dirs.dist %>',
                runBower: false,
                report: false,
                clean: false
            },
            firephp: {
                files: {
                    'libraries/fb.php': 'firephp/lib/FirePHPCore/fb.php', // destination: source
                    'libraries/FirePHP.class.php': 'firephp/lib/FirePHPCore/FirePHP.class.php'
                }
            }
        },

        copy: {
            lib: {
                src: 'lib/helpers/fb_helper.php',
                dest: '<%= dirs.dist %>/helpers/fb_helper.php'
            }
        }
    });

    //----------------------------------------------
    // REGISTER GRUNT TASKS
    //----------------------------------------------

    //-------------------------------------------
    // DISPLAY GRUNT DEPLOY USAGE INFORMATION
    // Indicates usage of Grunt Deploy from where to find help to what tasks are available
    //----------------------------------------------

    grunt.registerTask('default', 'Create Ignite FirePHP Distribution', function() {
        var title = 'Ignite FirePHP'
        var separator = new Array(title.length+1).join('-');
        grunt.log.writeln('');
        grunt.log.writeln( title );
        grunt.log.writeln( separator );
        grunt.log.writeln('');
        grunt.log.writeln('Create FirePHP CodeIgniter Distribution');
        grunt.log.writeln('* run \'grunt dist\'');
        grunt.log.writeln('');
    });

    //----------------------------------------------
    // DEPLOY DEVELOPMENT AND PRODUCTION FILES
    // Performs development- and production-level tasks
    //----------------------------------------------

    grunt.registerTask('dist', [ 'bowercopy', 'copy']);
};
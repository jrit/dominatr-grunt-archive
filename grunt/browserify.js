"use strict";

module.exports = function ( grunt )
{
    var files = [
        "source/modules/index.js"
    ];

     if( grunt.option( "mocks" ) )
     {
         files.push( "source/modules/mocks/index.js" );
     }

    var transform = [];

    if( grunt.option( "tests" ) )
    {
        transform.push( [ "browserify-istanbul", {
            ignore: [
                "**/node_modules/**",
                "**/test/**",
                "**/tests/**",
                "**/templates.js",
                "**/*mock-*.js",
                "**/source/modules/mocks/**" ]
        } ] );
    }

    transform.push( [ "babelify", {
       loose: "all"
    } ] );

    return {
        dist:
        {
            options: {
                transform: transform,
                browserifyOptions: {
                    debug: !!grunt.option( "tests" ),
                    noParse: [
                        "jquery",
                        "angular",
                        "angular-route",
                        "angular-touch",
                        "angular-sanitize" ]
                }
            },
            files: {
                "build/dist.js": files
            }
        }
    };

};

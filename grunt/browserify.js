"use strict";

module.exports = function ( grunt )
{
    var files = [
        "source/modules/index.js"
    ];

    var transform = [
        [ "babelify", {
           loose: "all"
       } ] ];

    if( grunt.option( "mocks" ) )
    {
        files.push( "source/modules/mocks/index.js" );
    }

    if( grunt.option( "tests" ) )
    {
        transform.push( [ "browserify-istanbul", {
            ignore: [
                "**/node_modules/**",
                "**/test/**",
                "**/tests/**",
                "**/templates.js",
                "**/*mock-*.js",
                "source/modules/mocks/**" ]
        } ] );
    }

    return {
        dist:
        {
            options: {
                transform: transform,
                browserifyOptions: {
                    debug: !!grunt.option( "mocks" ),
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

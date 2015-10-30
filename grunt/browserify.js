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

    return {
        dist:
        {
            options: {
                transform: [
                    [ "babelify", {
                       loose: "all"
                    } ]
                ],
                browserifyOptions: {
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

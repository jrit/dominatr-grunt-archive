module.exports = function ( grunt )
{
    "use strict";

    var files = [
        "source/modules/index.js"
    ];

    if( grunt.option( "mocks" ) )
    {
        files.push( "source/modules/mocks.js" );
    }

    return {
        dist:
        {
            options: {
                transform: [
                    [ "babelify", {
                       loose: "all"
                    } ]
                ]
            },
            files: {
                "build/dist.js": files
            }
        }
    };

};

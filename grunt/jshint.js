"use strict";

module.exports = function ()
{
    var src = [
        "source/modules/*/*.js",
        "source/modules/*/*/*.js",
        "!source/modules/*/tests/**/*.*",
        "grunt/*.js",
        "tests/*.js"
    ];

    return {
        dev:
        {
            options: {
                force: true,
                jshintrc: ".jshintrc"
            },
            src: src
        },
        deploy:
        {
            options: {
                force: false,
                jshintrc: ".jshintrc"
            },
            src: src
        }
    };

};

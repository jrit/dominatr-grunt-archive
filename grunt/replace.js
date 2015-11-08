"use strict";

var path = require( "path" );

var replacements = [
    {
        from: "{{ APIROOT }}",
        to: "<%= APIRoot %>"
    }
];

module.exports = {
    build: {
        src: [
            "build/*.css",
            "build/*.js",
            "build/**/*.html"
        ],
        overwrite: true,
        replacements: replacements
    },
    coverage: {
        src: [ "coverage/**/lcov.info" ],
        overwrite: true,
        replacements: [ {
            from: path.resolve( "." ) + path.delimiter,
            to: ""
        } ]
    }
};

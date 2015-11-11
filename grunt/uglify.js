"use strict";

module.exports = {
    dist:
    {
        options:
        {
            mangle: false,
            compress: {},
            sourceMap: false
        },
        files:
        {
            "build/dist.js": "build/dist.js"
        }
    }
};

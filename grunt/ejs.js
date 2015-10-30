"use strict";

module.exports = {
    build: {
        options: {
            useSource: "<%= useSource %>",
            useDist: "<%= useDist %>"
        },
        src: "source/modules/_app/templates/index.html",
        dest: "build/index.html"
    }
};

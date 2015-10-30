"use strict";

module.exports = function ( grunt )
{
    return {
        fonts: {
            expand: true,
            cwd: "source/fonts/",
            src: [
                "**/*.*"
            ],
            dest: "build/fonts/"
        },
        images: {
            expand: true,
            cwd: "source/images/",
            src: [
                "**/*.*"
            ],
            dest: "build/images/"
        },
        favicon: {
            expand: true,
            cwd: "source/favicon/",
            src: [
                "**/*.*"
            ],
            dest: "build/favicon/"
        },
        manifest:
        {
            expand: true,
            cwd: "source/",
            src: [
                "manifest.json"
            ],
            dest: "build/"
        },
        sitemap:
        {
            expand: true,
            cwd: "source/",
            src: [
                "**/sitemap.txt"
            ],
            dest: "build/"
        },
        sounds:
        {
            expand: true,
            cwd: "source/audio/",
            src: [
                "**/*.*"
            ],
            dest: "build/audio/"
        }
    };
};

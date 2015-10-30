module.exports = {
    options:
    {
        atBegin: true,
        livereload: true,
        event: [ "changed", "added", "deleted" ]
    },
    scripts:
    {
        files: "source/modules/**/*.js",
        tasks: [ "envLocal", "newer:jshint:dev", "browserify", "replace" ]
    },
    templates:
    {
        options: { cwd: "<%= ngtemplates.build.cwd %>" },
        files: "<%= ngtemplates.build.src %>",
        tasks: [ "envLocal", "ngtemplates", "browserify", "replace" ]
    },
    styles:
    {
        files: "source/modules/*/styles/*.*",
        tasks: [ "less", "replace", "postcss" ]
    },
    index:
    {
        files: "source/modules/_app/templates/index.html",
        tasks: [ "envLocal", "includeSource", "ejs", "replace" ]
    },
    fonts:
    {
        files: [
            "source/fonts/**/*.*"
        ],
        tasks: [ "copy:fonts" ]
    },
    images:
    {
        files: [
            "source/images/**/*.*"
        ],
        tasks: [ "copy:images" ]
    },
    favicon:
    {
        files: [
            "source/favicon/**/*.*"
        ],
        tasks: [ "copy:favicon" ]
    }
};

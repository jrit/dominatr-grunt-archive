module.exports = {
    options:
    {
        atBegin: true,
        livereload: true,
        event: [ "changed", "added", "deleted" ]
    },
    templates:
    {
        options: { cwd: "<%= ngtemplates.build.cwd %>" },
        files: "<%= ngtemplates.build.src %>",
        tasks: [ "envLocal", "copy:index", "ngtemplates", "browserify", "replace:build" ]
    },
    scripts:
    {
        files: "source/modules/**/*.js",
        tasks: [ "envLocal", "newer:jshint:dev", "browserify", "replace:build" ]
    },
    styles:
    {
        files: "source/modules/*/styles/*.*",
        tasks: [ "less", "replace:build", "postcss" ]
    },
    index:
    {
        files: "source/modules/_app/templates/index.html",
        tasks: [ "copy:index" ]
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

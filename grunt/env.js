"use strict";

module.exports = function ( grunt )
{
    grunt.registerTask( "envUseSource", "Run from original source files", function ()
    {
        grunt.config( "useSource", true );
    } );

    grunt.registerTask( "envDontUseSource", "Run from concatenated files", function ()
    {
        grunt.config( "useSource", false );
    } );

    grunt.registerTask( "envUseDist", "Trigger distribution formatting, concat and minification", function ()
    {
        grunt.config( "useDist", true );
    } );
};

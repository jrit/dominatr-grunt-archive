"use strict";

module.exports = function ( grunt )
{
    grunt.registerTask( "envUseDist", "Trigger distribution formatting, concat and minification", function ()
    {
        grunt.config( "useDist", true );
    } );
};

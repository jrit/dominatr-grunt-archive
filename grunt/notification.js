"use strict";

var AWS = require( "aws-sdk" );

module.exports = function ( grunt )
{
    grunt.registerTask( "sendBuildEmail", "Notify a list the build is going out", function ()
    {
        var done = this.async();

        var pkg = grunt.file.readJSON( "package.json" );
        var pkgVersion = pkg.version || "";

        if( !grunt.config( "notification.buildEmailTo" )
            || !grunt.config( "notification.buildEmailFrom" )
            || !grunt.config( "Host" ) )
        {
            return;
        }

        var config = new AWS.Config( {
            accessKeyId: grunt.config( "aws.accessKeyId" ),
            secretAccessKey: grunt.config( "aws.secretAccessKey" ),
            region: grunt.config( "aws.region" ) || "us-east-1"
        } );

        var ses = new AWS.SES( config );

        var options = {
            Destination: {
                ToAddresses: grunt.config( "notification.buildEmailTo" )
            },
            Message: {
                Body: {
                    Html: {
                        Data: "<h1>Version " + pkgVersion + " @" + grunt.config( "version" ) + "</h1>"
                        + '<p>A new build for <a href="' + grunt.config( "Host" ) + '">'
                        + grunt.config( "Host" ) + "</a> should be available in about 10 minutes.</p>"
                    }
                },
                Subject: {
                    Data: "New build for " + grunt.config( "Host" ) + " @" + grunt.config( "version" )
                }
            },
            Source: grunt.config( "notification.buildEmailFrom" )
        };

        ses.sendEmail( options, function ( err, data )
        {
            if( err )
            {
                grunt.fail.warn( err, err.stack );
            }
            else
            {
                grunt.log.ok( "Email Sent" );
                grunt.log.write( JSON.stringify( data ) );
            }
            done();
        } );

    } );
};

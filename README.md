# dominatr-grunt

Build all the things!

## Use

dominatr-grunt contains the standard build process configuration for Vokal web project that use [load-grunt-config](https://github.com/firstandthird/load-grunt-config).

The configuration of this project should stay in sync with dominatr's generation schemes and to prevent any confusion, the major and minor release versions of dominatr and dominatr-grunt should stay in sync.

dominatr should contain these prerequisites to use dominatr-grunt

`Gruntfile.js` should specify a `configPath` that points at dominatr-grunt, and provide an `overridePath` that points at a user editable directory.

```js
require( "load-grunt-config" )( grunt, {
    configPath: path.join( process.cwd(), "node_modules", "dominatr-grunt", "grunt" ),
    overridePath: path.join( process.cwd(), "grunt" )
} );
```

`package.json` should include a dependency on `dominatr-grunt` with a locked minor version, like 1.3.x. This version should not allow the major or minor to automatically upgrade.


## Changelog

#### 5.0.0 [Breaking Changes] robots.txt and sitemap handling; add 4th environment.

The reference to sitemap.txt that is in the robots.txt file requires the hostname, which should be added to the `envProd` task in `grunt/env.js` like this:

```js
grunt.config( "Host", "<http(s)://www.domain.com>" );
```

Also in `grunt/env.js`, the `envDev` task should be renamed `envLocal`.

If a development deployment is required, an `envDev` task should be added to `grunt/env.js`:

```js
grunt.registerTask( "envDev", "Set environment variables for dev deployment", function ()
{
    grunt.config( "aws.s3Bucket", "<s3-bucket-name>" );
    grunt.config( "aws.cloudfrontDistributionId", "<cloudfront-dist-id>" );

    grunt.config( "APIRoot", "<dev-api-path>" );
} );
```

And the above is then used from `.drone.yml` by replacing `deploystaging` with `deploydev`.

#### 4.0.3 Always clean before building

Resets the build folder after running tests.

#### 4.0.2 Add livereload to `grunt watch`

Nothing is needed to upgrade, but to use LiveReload you will need a browser extension. Install one for your browser from [here](http://livereload.com/extensions/), and click the extension while `grunt watch` is running.

#### 4.0.1 [Breaking Changes] Cache and versioning changes

To upgrade:

- remove all `?v={{ VERSION }}` strings from your project
- `npm install grunt-filerev --save`
- `npm install grunt-filerev-replace --save`


#### 3.0.0 [Breaking Changes] Run jshint with tests, fail drone builds

To upgrade, make sure the jshint report you get when running local tests comes back clean.  Projects that may have previously passed on drone will now fail if they have jshint errors.

Additionally, jshint will no longer fail tasks during `grunt watch`.


#### 2.4.2 More minification, deferred JS loading, optimize workflow

To upgrade, replace all `script` tag logic at the bottom of your `index.html` file with the following:
```html
<% if( useDist ) { %>
<script src="/build/dist.js?v={{ VERSION }}" defer></script>
<% } else { %>
<script src="/build/angular.js?v={{ VERSION }}"></script>
<script src="/build/components.js?v={{ VERSION }}"></script>
<% if( useSource ) { %>
<!-- include: "type": "js", "files": "build/modules/*/*.js" -->
<!-- include: "type": "js", "files": "build/modules/*/*/*.js" -->
<% } else { %>
<script src="/build/project.js?v={{ VERSION }}"></script>
<% } %>
<script src="/build/templates.js?v={{ VERSION }}"></script>
<% } %>
```

#### 2.3.0 Add [Grunt-newer](https://github.com/tschaub/grunt-newer) and updates to jshint

To upgrade:
```
npm install grunt-newer --save
```

#### 2.2.0 Add [PostCSS](https://github.com/nDmitry/grunt-postcss) and [Autoprefixer](https://github.com/postcss/autoprefixer)

To upgrade:
```
npm install grunt-postcss autoprefixer-core --save
```

#### 2.1.0 Use EJS for conditional source file inclusion

To upgrade:
```
npm install grunt-ejs --save
npm uninstall grunt-usemin --save
```

In `index.html` replace script tag

```html
<script src="/build/project.js?v={{ VERSION }}"></script>
```

with

```html
<% if (useSource) { %>
<!-- include: "type": "js", "files": "build/modules/*/*.js" -->
<!-- include: "type": "js", "files": "build/modules/*/*/*.js" -->
<% } else { %>
<script src="/build/project.js?v={{ VERSION }}"></script>
<% } %>
```

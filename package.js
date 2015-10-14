Package.describe({
  name: '416serg:simple-text-rotator',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Add a super simple rotating text to your website with little to no markup',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/416serg/simple-text-rotator',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['ecmascript', 'jquery']);
  api.addFiles(['simple-text-rotator.js', 'simple-text-rotator.css'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('416serg:simple-text-rotator');
  api.addFiles('simple-text-rotator-tests.js');
});

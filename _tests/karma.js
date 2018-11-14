require('babel-polyfill');
require.context(".", true, /.js$/);
require('../webpack/src/interceptor')

var testsContext = require.context(".", false, /.spec.js$/);
testsContext.keys().forEach(testsContext);

testsContext = require.context("./plugins/", false, /.spec.js$/);
testsContext.keys().forEach(testsContext);

testsContext = require.context("./defaultConfig/", false, /.spec.js$/);
testsContext.keys().forEach(testsContext);
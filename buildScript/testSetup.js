//not transpiled, must use commonJs and ES5
//Register babel to transpile before our tests run
require('babel-register')();

//disable webpack that mocha doesnt understand
require.extensions['.css'] = function() {};

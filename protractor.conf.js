'use strict';

//File not currently used as this is not setup yet
// Protractor configuration
var config = {
  specs: ['modules/*/tests/e2e/*.js']
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;

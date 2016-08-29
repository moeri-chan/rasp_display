'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend device's controller
 */
module.exports = _.extend(
  require('./device/device.profile.server.controller')
);

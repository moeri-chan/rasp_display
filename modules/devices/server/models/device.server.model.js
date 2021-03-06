'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  validator = require('validator');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function (property) {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

var DeviceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: '',
    validate: [validateLocalStrategyProperty, 'Please fill in the Device name.']
  },
  model: {
    type: String,
    trim: true,
    default: ''
  },
  providerData: {},
  additionalProvidersData: {},
  created: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('Device', DeviceSchema);

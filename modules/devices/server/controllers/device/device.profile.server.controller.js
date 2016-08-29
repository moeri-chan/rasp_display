'use strict';

var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  mongoose = require('mongoose'),
  config = require(path.resolve('./config/config')),
  Device = mongoose.model('Device');

exports.create = (function (req, res) {
  var device = new Device(req.body);
  var message = null;
  device.save(function (saveError) {
    if (saveError) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(saveError)
      });
    } else {
      res.json(device);
    }
  });
});

exports.read = function (req, res) {
  Device.find({}, function(err, device) {
    res.json(device);
  }); 
};

exports.update = (function (req, res) {
  var device = req.body;
  var message = null;
  var device_id = device._id;
  delete device._id;
  Device.findByIdAndUpdate(mongoose.Types.ObjectId(device_id),device, function (saveError) {
    if (saveError) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(saveError)
      });
    } else {
      res.json(device);
    }
  });
});

exports.delete = (function (req, res) {
  var device = new Device(req.body);
  var message = null;
  Device.findByIdAndRemove(mongoose.Types.ObjectId(device._id), function (saveError) {
    if (saveError) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(saveError)
      });
    } else {
      res.json(device);
    }
  });
});

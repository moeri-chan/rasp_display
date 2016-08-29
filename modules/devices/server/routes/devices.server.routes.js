'use strict';

module.exports = function (app) {
  // User Routes
  var device = require('../controllers/device.server.controller');

  // Setting up the users profile api
  app.route('/api/device').get(device.read);
  app.route('/api/device').put(device.update);
  app.route('/api/device').delete(device.delete);
  app.route('/api/device').post(device.create);
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adminModel = require('../models/adminModel');

var Admin = {
  editStatus: function editStatus(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid intervention id' });
    }
    var result = _adminModel.newAdminObject.setStatus(req.params.id, req.body.type, req.body.status);
    if (result === false) {
      var response = { status: 400, error: 'No record found with the supplied id' };
      return res.status(400).send(response);
    } else {
      var _response = { status: 200, data: [result] };
      return res.status(200).send(_response);
    }
  }
};
exports.default = Admin;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require('../models/userModel');

// import jwt from 'jsonwebtoken';

var User = {
  create: function create(req, res) {
    var user = _userModel.newUserObject.create(req.body);
    var response = {
      status: 201,
      data: [user]
    };
    return res.status(201).send(response);
  },
  getUser: function getUser(req, res) {
    var result = _userModel.newUserObject.findUser(req.body.username, req.body.password);
    if (result === false) {
      var response = {
        status: 400,
        error: 'Invalid login credentials. Check and try again.'
      };
      return res.status(400).send(response);
    } else {
      var _response = {
        status: 200,
        data: [result]
      };
      return res.status(200).send(_response);
    }
  }
};
exports.default = User;
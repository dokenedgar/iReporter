'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserModel = require('../models/UserModel');

// import jwt from 'jsonwebtoken';

var User = {
  create: function create(req, res) {
    if (!req.body.firstname || req.body.firstname.length < 2 || req.body.firstname.length > 20 || /\s/.test(req.body.firstname)) {
      return res.status(400).send({ message: 'Error saving data. First name should have a length of 2 - 20 characters' });
    }
    if (!req.body.lastname || req.body.lastname.length < 2 || req.body.lastname.length > 20 || /\s/.test(req.body.lastname)) {
      return res.status(400).send({ message: 'Error saving data. Surname should have a length of 2 - 20 characters' });
    }
    if (!req.body.phoneNumber || req.body.phoneNumber.length < 11 || req.body.phoneNumber.length > 14 || /\s/.test(req.body.phoneNumber) || /\D/.test(req.body.phoneNumber)) {
      return res.status(400).send({ message: 'Error saving phone data. Phone number should have length of 11, containing only digits' });
    }
    if (!req.body.username || req.body.username.length < 5 || req.body.username.length > 20 || /\s/.test(req.body.username)) {
      return res.status(400).send({ message: 'Error saving data. Please choose a good username with at least 5' });
    }
    if (!req.body.password || req.body.password.length < 5 || req.body.password.length > 20 || /\s/.test(req.body.password)) {
      return res.status(400).send({ message: 'Error saving data. Please choose a strong password of atleast 5 characters' });
    }
    var user = _UserModel.newUserObject.create(req.body);

    var response = { status: 201, data: [user] };
    return res.status(201).send(response);
  }
};
exports.default = User;
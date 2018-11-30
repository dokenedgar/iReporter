'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interventionModel = require('../models/interventionModel');

// import jwt from 'jsonwebtoken';

var Intervention = {
  create: function create(req, res) {
    if (!req.body.type || req.body.type.length < 2 || req.body.type.length > 12 || /\s/.test(req.body.type) || req.body.type !== 'intervention') {
      return res.status(400).send({ message: 'Error saving data. First name should have a length of 2 - 20 characters' });
    }
    if (!req.body.userid || req.body.userid.length < 6 || req.body.userid.length > 10 || /\s/.test(req.body.userid) || typeof req.body.userid === 'string') {
      return res.status(400).send({ message: 'Error saving data. Surname should have a length of 2 - 20 characters' });
    }

    if (!req.body.latitude || req.body.latitude.length < 2 || req.body.latitude.length > 30 || req.body.latitude > 90 || req.body.latitude < -90 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ message: 'LATITUDE. Phone number should have length of 11, containing only digits' });
    }
    if (!req.body.longitude || req.body.longitude.length < 2 || req.body.longitude.length > 30 || req.body.longitude > 180 || req.body.longitude < -180 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ message: 'LONGITUDE. Phone number should have length of 11, containing only digits' });
    }
    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    var intervention = _interventionModel.newInterventionObject.create(req.body);

    var response = { status: 201, data: [intervention] };
    return res.status(201).send(response);
  },

  // other methods here

  getAllInterventions: function getAllInterventions(req, res) {
    var intervention = _interventionModel.newInterventionObject.getAllinterventionRecords();
    var response = { status: 200, data: intervention };
    return res.status(200).send(response);
  },
  fetchSpecificIntervention: function fetchSpecificIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 charcters' });
    }
    var result = _interventionModel.newInterventionObject.getSpecificIntervention(req.params.id);
    if (result === false) {
      var response = { status: 400, error: 'Invalid login credentials' };
      return res.status(400).send(response);
    } else {
      var _response = { status: 200, data: [result] };
      return res.status(200).send(_response);
    }
  },
  editLocationIntervention: function editLocationIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 charcters' });
    }
    if (!req.body.latitude || req.body.latitude.length < 2 || req.body.latitude.length > 30 || req.body.latitude > 90 || req.body.latitude < -90 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ message: 'LATITUDE. Phone number should have length of 11, containing only digits' });
    }
    if (!req.body.longitude || req.body.longitude.length < 2 || req.body.longitude.length > 30 || req.body.longitude > 180 || req.body.longitude < -180 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ message: 'LONGITUDE. Phone number should have length of 11, containing only digits' });
    }
    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    var result = _interventionModel.newInterventionObject.editInterventionLocation(req.params.id, req.body.latitude, req.body.longitude);

    if (result === false) {
      var response = { status: 400, error: 'Invalid login credentials' };
      return res.status(400).send(response);
    } else {
      var _response2 = { status: 200, data: [result] };
      return res.status(200).send(_response2);
    }
  },
  editCommentIntervention: function editCommentIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 charcters' });
    }

    if (!req.body.comment || req.body.comment.length < 2 || req.body.comment.length > 1000 || typeof req.body.comment !== 'string') {
      return res.status(400).send({ message: 'LONGITUDE. Phone number should have length of 11, containing only digits' });
    }

    var result = _interventionModel.newInterventionObject.editInterventionComment(req.params.id, req.body.comment);

    if (result === false) {
      var response = { status: 400, error: 'Invalid login credentials' };
      return res.status(400).send(response);
    } else {
      var _response3 = { status: 200, data: [result] };
      return res.status(200).send(_response3);
    }
  },
  deleteIntervention: function deleteIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 charcters' });
    }

    var result = _interventionModel.newInterventionObject.deleteIntervention(req.params.id);

    if (result === false) {
      var response = { status: 400, error: 'Invalid login credentials' };
      return res.status(400).send(response);
    } else {
      var _response4 = { status: 200, data: [result] };
      return res.status(200).send(_response4);
    }
  }
};
exports.default = Intervention;
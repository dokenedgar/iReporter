'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interventionModel = require('../models/interventionModel');

// import jwt from 'jsonwebtoken';

var Intervention = {
  create: function create(req, res) {
    /*if (!req.body.type || (req.body.type.length < 2 ) || (req.body.type.length > 12 ) || (/\s/.test(req.body.type)) || (req.body.type !== 'intervention') ) {
      return res.status(400).send({ message: 'Error saving data. First name should have a length of 2 - 20 characters' });
    }
    */
    if (!req.body.userid || req.body.userid.length < 6 || req.body.userid.length > 10 || /\s/.test(req.body.userid) || typeof req.body.userid === 'string') {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }

    if (!req.body.latitude || req.body.latitude.length < 2 || req.body.latitude.length > 30 || req.body.latitude > 90 || req.body.latitude < -90 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a valid latitude coordinate' });
    }
    if (!req.body.longitude || req.body.longitude.length < 2 || req.body.longitude.length > 30 || req.body.longitude > 180 || req.body.longitude < -180 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a valid longitude coordinate' });
    }
    if (!req.body.comment || req.body.comment.length < 2 || req.body.comment.length > 1000 || typeof req.body.comment !== 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a comment describing what you are reporting. Comment should be between more than 1 and less than 1000 characters' });
    }

    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    var intervention = _interventionModel.newInterventionObject.create(req.body);
    if (intervention === false) {
      return res.status(400).send({ status: 400, error: 'No user found with the supplied user-id, please check the id and try again.' });
    }

    var response = { status: 201, data: [intervention] };
    return res.status(201).send(response);
  },

  // other methods here

  getAllInterventions: function getAllInterventions(req, res) {
    var intervention = _interventionModel.newInterventionObject.getAllinterventionRecords();
    if (intervention.length === 0) {
      return res.status(200).send({ status: 200, data: [{ message: 'No intervention records received yet' }] });
    }
    var response = { status: 200, data: intervention };
    return res.status(200).send(response);
  },
  fetchSpecificIntervention: function fetchSpecificIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid intervention id' });
    }
    var result = _interventionModel.newInterventionObject.getSpecificIntervention(req.params.id);
    if (result === false) {
      var response = { status: 400, error: 'No intervention record found with the supplied id' };
      return res.status(400).send(response);
    } else {
      var _response = { status: 200, data: [result] };
      return res.status(200).send(_response);
    }
  },
  editLocationIntervention: function editLocationIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ status: 400, error: 'Please supply a valid id for the intervention record you want to edit' });
    }
    if (!req.body.userid || req.body.userid.length < 6 || req.body.userid.length > 10 || /\s/.test(req.body.userid) || typeof req.body.userid === 'string') {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
    if (!req.body.latitude || req.body.latitude.length < 2 || req.body.latitude.length > 30 || req.body.latitude > 90 || req.body.latitude < -90 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a valid latitude coordinate' });
    }
    if (!req.body.longitude || req.body.longitude.length < 2 || req.body.longitude.length > 30 || req.body.longitude > 180 || req.body.longitude < -180 || typeof req.body.latitude === 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a valid longitude coordinate' });
    }
    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    var result = _interventionModel.newInterventionObject.editInterventionLocation(req.params.id, req.body.userid, req.body.latitude, req.body.longitude);

    if (result === false) {
      var response = { status: 400, error: 'No intervention record found with the supplied id' };
      return res.status(400).send(response);
    } else if (result === true) {
      var _response2 = { status: 400, error: 'Sorry, you do not have permission to edit this record.' };
      return res.status(400).send(_response2);
    } else {
      var _response3 = { status: 200, data: [result] };
      return res.status(200).send(_response3);
    }
  },
  editCommentIntervention: function editCommentIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ status: 400, error: 'Please supply a valid id for the intervention record you want to edit' });
    }
    if (!req.body.userid || req.body.userid.length < 6 || req.body.userid.length > 10 || /\s/.test(req.body.userid) || typeof req.body.userid === 'string') {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
    if (!req.body.comment || req.body.comment.length < 2 || req.body.comment.length > 1000 || typeof req.body.comment !== 'string') {
      return res.status(400).send({ status: 400, error: 'Please enter a comment describing what you are reporting. Comment should be between more than 1 and less than 1000 characters' });
    }

    var result = _interventionModel.newInterventionObject.editInterventionComment(req.params.id, req.body.userid, req.body.comment);

    if (result === false) {
      var response = { status: 400, error: 'No intervention record found with the supplied id' };
      return res.status(400).send(response);
    } else if (result === true) {
      var _response4 = { status: 400, error: 'Sorry, you do not have permission to edit this record.' };
      return res.status(400).send(_response4);
    } else {
      var _response5 = { status: 200, data: [result] };
      return res.status(200).send(_response5);
    }
  },
  deleteIntervention: function deleteIntervention(req, res) {
    if (!req.params.id || req.params.id.length < 5 || req.params.id.length > 20 || /\s/.test(req.params.id)) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 characters' });
    }
    if (!req.body.userid || req.body.userid.length < 6 || req.body.userid.length > 10 || /\s/.test(req.body.userid) || typeof req.body.userid === 'string') {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
    var result = _interventionModel.newInterventionObject.deleteIntervention(req.params.id, req.body.userid);

    if (result === false) {
      var response = { status: 400, error: 'No intervention record found with the supplied id' };
      return res.status(400).send(response);
    } else if (result === true) {
      var _response6 = { status: 400, error: 'Sorry, you do not have permission to delete this record.' };
      return res.status(400).send(_response6);
    } else {
      var _response7 = { status: 200, data: [result] };
      return res.status(200).send(_response7);
    }
  }
};
exports.default = Intervention;
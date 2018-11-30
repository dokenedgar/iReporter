'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _userController = require('./src/controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _redflagController = require('./src/controllers/redflagController');

var _redflagController2 = _interopRequireDefault(_redflagController);

var _interventionController = require('./src/controllers/interventionController');

var _interventionController2 = _interopRequireDefault(_interventionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.json());

//app.set('port', 3030);
app.set('port', process.env.PORT || 3030);

// []
// sign-up API
app.post('/api/v1/auth/signup', _userController2.default.create);

// Sign-In
app.post('/api/v1/auth/login', _userController2.default.getUser);

// ****************RED-FLAGS****************\\
// create red-flag record/incident
app.post('/api/v1/red-flags', _redflagController2.default.create);

// Get All Red-Flags
app.get('/api/v1/red-flags', _redflagController2.default.getAllRedFlags);

// Get A Specific Red-Flag Record
app.get('/api/v1/red-flags/:id', _redflagController2.default.fetchSpecificRedFlag);

// Edit Red-Flag Location
app.patch('/api/v1/red-flags/:id/location', _redflagController2.default.editLocationRedFlag);

// Edit Red-Flag Comment
app.patch('/api/v1/red-flags/:id/comment', _redflagController2.default.editCommentRedFlag);

// Delete A Red-Flag
app.delete('/api/v1/red-flags/:id', _redflagController2.default.deleteRedFlag);

// INTERVENTION ROUTES
app.post('/api/v1/interventions', _interventionController2.default.create);
app.get('/api/v1/interventions', _interventionController2.default.getAllInterventions);
app.get('/api/v1/interventions/:id', _interventionController2.default.fetchSpecificIntervention);
app.patch('/api/v1/interventions/:id/location', _interventionController2.default.editLocationIntervention);
app.patch('/api/v1/interventions/:id/comment', _interventionController2.default.editCommentIntervention);
app.delete('/api/v1/interventions/:id', _interventionController2.default.deleteIntervention);

//app.listen(3030, () => console.log('Listening on Port 3030...'));
app.listen(app.get('port'));
exports.default = app;
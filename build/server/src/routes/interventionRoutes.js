'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _interventionController = require('../controllers/interventionController');

var _interventionController2 = _interopRequireDefault(_interventionController);

var _interventionValidations = require('../validations/interventionValidations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interventionRoutes = _express2.default.Router();

interventionRoutes.use('/:id/location', _interventionValidations.interventionValidation.editLocation);
interventionRoutes.use('/:id/comment', _interventionValidations.interventionValidation.editComment);

interventionRoutes.post('/', _interventionValidations.interventionValidation.create, _interventionController2.default.create);
interventionRoutes.get('/', _interventionController2.default.getAllInterventions);
interventionRoutes.get('/:id', _interventionValidations.interventionValidation.fetchSpecificRecord, _interventionController2.default.fetchSpecificIntervention);
interventionRoutes.patch('/:id/location', _interventionController2.default.editLocationIntervention);
interventionRoutes.patch('/:id/comment', _interventionController2.default.editCommentIntervention);
interventionRoutes.delete('/:id', _interventionValidations.interventionValidation.deleteRecord, _interventionController2.default.deleteIntervention);

module.exports = interventionRoutes;
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _redflagController = require('../controllers/redflagController');

var _redflagController2 = _interopRequireDefault(_redflagController);

var _redFlagValidations = require('../validations/redFlagValidations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redflagRoutes = _express2.default.Router();

redflagRoutes.use('/:id/location', _redFlagValidations.redFlagValidation.editLocation);
redflagRoutes.use('/:id/comment', _redFlagValidations.redFlagValidation.editComment);

redflagRoutes.post('/', _redFlagValidations.redFlagValidation.create, _redflagController2.default.create);
redflagRoutes.get('/', _redflagController2.default.getAllRedFlags);
redflagRoutes.get('/:id', _redFlagValidations.redFlagValidation.fetchSpecificRedFlag, _redflagController2.default.fetchSpecificRedFlag);
redflagRoutes.patch('/:id/location', _redflagController2.default.editLocationRedFlag);
redflagRoutes.patch('/:id/comment', _redflagController2.default.editCommentRedFlag);
redflagRoutes.delete('/:id', _redFlagValidations.redFlagValidation.deleteRecord, _redflagController2.default.deleteRedFlag);

module.exports = redflagRoutes;
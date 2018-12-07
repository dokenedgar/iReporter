'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _userValidations = require('../validations/userValidations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRoutes = _express2.default.Router();

userRoutes.use('/signup', _userValidations.newUserValidationObject.create);
userRoutes.use('/login', _userValidations.newUserValidationObject.getUser);

userRoutes.post('/signup', _userController2.default.create);
userRoutes.post('/login', _userController2.default.getUser);

module.exports = userRoutes;
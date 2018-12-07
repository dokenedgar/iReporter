'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userValidation = function () {
    function userValidation() {
        _classCallCheck(this, userValidation);
    }

    _createClass(userValidation, [{
        key: 'create',

        // eslint-disable-next-line class-methods-use-this
        value: function create(req, res, next) {

            req.check('firstname').isLength({
                min: 2
            }).withMessage('Please provide a firstname with at atleast 2 characters').isLength({
                max: 20
            }).withMessage('Please provide a firstname with at most 20 characters').isAlpha().withMessage('Please provide a non-numeric firstname');

            req.check('lastname').isLength({
                min: 2
            }).withMessage('Please provide a lastname with at atleast 2 characters').isLength({
                max: 20
            }).withMessage('Please provide a lastname with at most 20 characters').isAlpha().withMessage('Please provide a non-numeric lastname');

            req.check('email', 'Please provide a valid email address').isEmail();

            req.check('phoneNumber').isLength({
                min: 11
            }).withMessage('Please provide a phone number with at atleast 11 numbers').isLength({
                max: 14
            }).withMessage('Please provide a phone number with at most 14 numbers').isNumeric().withMessage('You entered a non-numeric phone number');

            req.check('username').isLength({
                min: 5
            }).withMessage('Please provide a username with at atleast 5 characters').isLength({
                max: 20
            }).withMessage('Please provide a username with at most 15 characters');

            req.check('password').isLength({
                min: 5
            }).withMessage('Please provide a password with at atleast 5 characters').isLength({
                max: 20
            }).withMessage('Please provide a password with at most 15 characters');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }, {
        key: 'getUser',
        value: function getUser(req, res, next) {
            req.check('username').isLength({
                min: 5
            }).withMessage('Please provide a username with at atleast 5 characters').isLength({
                max: 20
            }).withMessage('Please provide a username with at most 15 characters');

            req.check('password').isLength({
                min: 5
            }).withMessage('Please provide a password with at atleast 5 characters').isLength({
                max: 20
            }).withMessage('Please provide a password with at most 15 characters');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }]);

    return userValidation;
}();

var newUserValidationObject = exports.newUserValidationObject = new userValidation();
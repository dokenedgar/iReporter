'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var redFlagVal = function () {
    function redFlagVal() {
        _classCallCheck(this, redFlagVal);
    }

    _createClass(redFlagVal, [{
        key: 'create',
        value: function create(req, res, next) {

            req.check('userid').isLength({
                min: 6
            }).withMessage('Please provide a userid with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a userid with at most 10 characters').isNumeric().withMessage('You entered a non-integer in the userid field');

            req.check('latitude').isLength({
                min: 2
            }).withMessage('Please enter a latitude with minimum of 2 characters').isLength({
                max: 30
            }).withMessage('Please enter a latitude with maximum of 30 characters').isNumeric().withMessage('Please enter a latitude with numeric values');

            req.check('longitude').isLength({
                min: 2
            }).withMessage('Please enter a longitude with minimum of 2 characters').isLength({
                max: 30
            }).withMessage('Please enter a longitude with maximum of 30 characters').isNumeric().withMessage('Please enter a longitude with numeric values');

            req.check('comment').isLength({
                min: 2
            }).withMessage('Please enter a comment with minimum of 2 characters').isLength({
                max: 1000
            }).withMessage('Please enter a comment with maximum of 1000 characters');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }, {
        key: 'fetchSpecificRedFlag',
        value: function fetchSpecificRedFlag(req, res, next) {
            req.check('id').isLength({
                min: 6
            }).withMessage('Please provide a red-flag id with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a red-flag id with at most 10 characters').isNumeric().withMessage('You provided a non-integer in the red-flag id field');
            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }, {
        key: 'editLocation',
        value: function editLocation(req, res, next) {
            req.check('id').isLength({
                min: 6
            }).withMessage('Please provide a red-flag id with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a red-flag id with at most 10 characters').isNumeric().withMessage('You provided a non-integer in the red-flag id field');
            req.check('userid').isLength({
                min: 6
            }).withMessage('Please provide a userid with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a userid with at most 10 characters').isNumeric().withMessage('You entered a non-integer in the userid field');

            req.check('latitude').isLength({
                min: 2
            }).withMessage('Please enter a latitude with minimum of 2 characters').isLength({
                max: 30
            }).withMessage('Please enter a latitude with maximum of 30 characters').isNumeric().withMessage('Please enter a latitude with numeric values');

            req.check('longitude').isLength({
                min: 2
            }).withMessage('Please enter a longitude with minimum of 2 characters').isLength({
                max: 30
            }).withMessage('Please enter a longitude with maximum of 30 characters').isNumeric().withMessage('Please enter a longitude with numeric values');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }, {
        key: 'editComment',
        value: function editComment(req, res, next) {
            req.check('id').isLength({
                min: 6
            }).withMessage('Please provide a red-flag id with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a red-flag id with at most 10 characters').isNumeric().withMessage('You provided a non-integer in the red-flag id field');
            req.check('userid').isLength({
                min: 6
            }).withMessage('Please provide a userid with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a userid with at most 10 characters').isNumeric().withMessage('You entered a non-integer in the userid field');
            req.check('comment').isLength({
                min: 2
            }).withMessage('Please enter a comment with minimum of 2 characters').isLength({
                max: 1000
            }).withMessage('Please enter a comment with maximum of 1000 characters');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }, {
        key: 'deleteRecord',
        value: function deleteRecord(req, res, next) {
            req.check('id').isLength({
                min: 6
            }).withMessage('Please provide a red-flag id with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a red-flag id with at most 10 characters').isNumeric().withMessage('You provided a non-integer in the red-flag id field');
            req.check('userid').isLength({
                min: 6
            }).withMessage('Please provide a userid with at atleast 6 characters').isLength({
                max: 10
            }).withMessage('Please provide a userid with at most 10 characters').isNumeric().withMessage('You entered a non-integer in the userid field');

            if (req.validationErrors()) {
                return res.status(400).json({
                    status: 400,
                    error: req.validationErrors()
                });
            }
            next();
        }
    }]);

    return redFlagVal;
}();

var redFlagValidation = exports.redFlagValidation = new redFlagVal();
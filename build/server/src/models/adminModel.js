'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.newAdminObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redflagModel = require('../models/redflagModel');

var _interventionModel = require('../models/interventionModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminClass = function () {
    function AdminClass() {
        _classCallCheck(this, AdminClass);
    }

    _createClass(AdminClass, [{
        key: 'setStatus',
        value: function setStatus(id, type, status) {
            var recordFound = false;
            if (type === 'intervention') {
                _interventionModel.interventions.forEach(function (element) {
                    if (element.id === id) {
                        element.status = status;
                        recordFound = {
                            id: id,
                            message: "Updated Intervention record’s status"
                        };
                        return recordFound;
                    }
                });
            } else if (type === 'red-flag') {
                _redflagModel.redFlags.forEach(function (element) {
                    if (element.id === id) {
                        element.status = status;
                        recordFound = {
                            id: id,
                            message: "Updated red flag record’s status"
                        };
                        return recordFound;
                    }
                });
            }

            return recordFound;
        }
    }]);

    return AdminClass;
}();

var newAdminObject = exports.newAdminObject = new AdminClass();
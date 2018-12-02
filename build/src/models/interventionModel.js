'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newInterventionObject = exports.interventions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userModel = require('../models/userModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var interventions = exports.interventions = [];

var InterventionClass = function () {
  function InterventionClass() {
    _classCallCheck(this, InterventionClass);
  }

  _createClass(InterventionClass, [{
    key: 'create',


    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        arr.push(r);
      }

      var newIntervention = {
        id: arr.join(''),
        createdOn: new Date().toDateString(),
        createdBy: data.userid,
        type: 'Intervention',
        location: data.latitude + ', ' + data.longitude,
        status: 'Draft',
        Images: 'Images here..', //Videos
        comment: data.comment
      };

      var checkid = _userModel.newUserObject.checkID(data.userid);
      if (checkid) {
        interventions.push(newIntervention);
        var id = newIntervention.id;

        var response = {
          id: id,
          message: "Created Intervention record"
        };
        //return newRedFlag;
        return response;
      } else {
        return false;
      }
    }
  }, {
    key: 'getSpecificIntervention',
    value: function getSpecificIntervention(id) {
      var interventionFound = false;
      interventions.forEach(function (element) {
        if (element.id === id) {
          interventionFound = element;
          return interventionFound;
        }
      });
      return interventionFound;
    }
  }, {
    key: 'getAllinterventionRecords',
    value: function getAllinterventionRecords() {
      return interventions;
    }
  }, {
    key: 'editInterventionLocation',
    value: function editInterventionLocation(id, userid, latitude, longitude) {
      var recordFound = false;
      interventions.forEach(function (element) {
        if (element.id === id && element.createdBy === userid) {
          element.location = latitude + ', ' + longitude;
          recordFound = {
            id: id,
            message: "Updated Intervention record’s location"
          };
          return recordFound;
        } else if (element.id === id) {
          recordFound = true;
          return recordFound;
        }
      });
      return recordFound;
    }
  }, {
    key: 'editInterventionComment',
    value: function editInterventionComment(id, userid, comment) {
      var recordFound = false;
      interventions.forEach(function (element) {
        if (element.id === id && element.createdBy === userid) {
          element.comment = comment;
          recordFound = {
            id: id,
            message: "Updated intervention record’s comment"
          };
          return recordFound;
        } else if (element.id === id) {
          recordFound = true;
          return recordFound;
        }
      });
      return recordFound;
    }
  }, {
    key: 'deleteIntervention',
    value: function deleteIntervention(id, userid) {
      var recordFound = false;
      interventions.forEach(function (element, index) {
        if (element.id === id && element.createdBy === userid) {
          interventions.splice(index, 1);
          recordFound = {
            id: id,
            message: "Intervention record has been deleted"
          };
          return recordFound;
        } else if (element.id === id) {
          recordFound = true;
          return recordFound;
        }
      });
      return recordFound;
    }
  }]);

  return InterventionClass;
}();

var newInterventionObject = exports.newInterventionObject = new InterventionClass();
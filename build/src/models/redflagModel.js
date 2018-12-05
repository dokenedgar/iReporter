'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newRedFlagObject = exports.redFlags = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import db from '../../pgdb/dbconfig';


var _userModel = require('../models/userModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var redFlags = exports.redFlags = [];

var RedFlagClass = function () {
  function RedFlagClass() {
    _classCallCheck(this, RedFlagClass);
  }

  _createClass(RedFlagClass, [{
    key: 'create',


    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        arr.push(r);
      }

      //type: data.type,
      var newRedFlag = {
        id: arr.join(''),
        createdOn: new Date().toDateString(),
        createdBy: data.userid,
        type: 'red-flag',
        location: data.latitude + ', ' + data.longitude,
        status: 'Draft',
        Images: 'Images here..', //Videos
        comment: data.comment
      };

      var checkid = _userModel.newUserObject.checkID(data.userid);
      if (checkid) {
        redFlags.push(newRedFlag);
        // console.log(users);
        var id = newRedFlag.id;

        var response = {
          id: id,
          message: "Created red-flag record"
        };
        //return newRedFlag;
        return response;
      } else {
        return false;
      }
    }
  }, {
    key: 'getSpecificRedFlag',
    value: function getSpecificRedFlag(id) {
      var redFlagFound = false;
      redFlags.forEach(function (element) {
        if (element.id === id) {
          redFlagFound = element;
          return redFlagFound;
        }
      });
      return redFlagFound;
    }
  }, {
    key: 'getAllRedFlagsRecord',
    value: function getAllRedFlagsRecord() {
      return redFlags;
    }
  }, {
    key: 'editRedFlagLocation',
    value: function editRedFlagLocation(id, userid, latitude, longitude) {
      var recordFound = false;
      redFlags.forEach(function (element) {
        if (element.id === id && element.createdBy === userid) {
          element.location = latitude + ', ' + longitude;
          recordFound = {
            id: id,
            message: "Updated red-flag record’s location"
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
    key: 'editRedFlagComment',
    value: function editRedFlagComment(id, userid, comment) {
      var recordFound = false;
      redFlags.forEach(function (element) {
        if (element.id === id && element.createdBy === userid) {
          element.comment = comment;
          recordFound = {
            id: id,
            message: "Updated red-flag record’s comment"
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
    key: 'deleteRedFlag',
    value: function deleteRedFlag(id, userid) {
      var recordFound = false;
      redFlags.forEach(function (element, index) {
        if (element.id === id && element.createdBy === userid) {
          redFlags.splice(index, 1);
          recordFound = {
            id: id,
            message: "red-flag record has been deleted"
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

  return RedFlagClass;
}();

var newRedFlagObject = exports.newRedFlagObject = new RedFlagClass();
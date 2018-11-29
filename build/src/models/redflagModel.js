'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import db from '../../pgdb/dbconfig';
// import uuidv4 from 'uuid/v4';

var redFlags = exports.redFlags = [];

var RedFlagClass = function () {
  function RedFlagClass() {
    _classCallCheck(this, RedFlagClass);
  }

  _createClass(RedFlagClass, [{
    key: 'create',

    // constructor() {}

    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      // const userid = uuidv4();
      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        arr.push(r);
      }

      var newRedFlag = {
        id: arr.join(''),
        createdOn: new Date().toDateString(),
        createdBy: data.userid,
        type: data.type,
        location: data.latitude + ', ' + data.longitude,
        status: 'Draft',
        Images: 'Images here..', //Videos
        comment: data.comment
      };

      redFlags.push(newRedFlag);
      // console.log(users);
      var id = newRedFlag.id;

      var response = {
        id: id,
        message: "Created red-flag record"
      };
      //return newRedFlag;
      return response;
    }
  }, {
    key: 'getSpecificRedFlag',
    value: function getSpecificRedFlag(id) {
      var userFound = false;
      redFlags.forEach(function (element) {
        if (element.id === id) {
          userFound = element;
          return userFound;
        }
      });
      return userFound;
    }
  }, {
    key: 'getAllRedFlagsRecord',
    value: function getAllRedFlagsRecord() {
      return redFlags;
    }
  }, {
    key: 'editRedFlagLocation',
    value: function editRedFlagLocation(id, latitude, longitude) {
      var recordFound = false;
      redFlags.forEach(function (element) {
        if (element.id === id) {
          element.location = latitude + ', ' + longitude;
          recordFound = {
            id: id,
            message: "Updated red-flag record’s location"
          };
          return recordFound;
        }
      });
      return recordFound;
    }
  }]);

  return RedFlagClass;
}();

var newRedFlagObject = exports.newRedFlagObject = new RedFlagClass();
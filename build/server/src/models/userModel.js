'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = [];

var UserClass = function () {
  function UserClass() {
    _classCallCheck(this, UserClass);
  }

  _createClass(UserClass, [{
    key: 'create',


    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        arr.push(r);
      }

      var newUser = {
        id: arr.join(''),
        firstname: data.firstname,
        lastname: data.lastname,
        othernames: data.othernames,
        email: data.email,
        phoneNumber: data.phoneNumber,
        username: data.username,
        password: data.password,
        registered: new Date().toDateString(),
        isAdmin: 'false'
      };

      users.push(newUser);
      return newUser;
    }
  }, {
    key: 'findUser',
    value: function findUser(username, password) {
      var userFound = false;
      users.forEach(function (element) {
        if (element.username === username && element.password === password) {
          userFound = element;
          return userFound;
        }
      });
      return userFound;
    }
  }, {
    key: 'checkID',
    value: function checkID(userid) {
      var userFound = false;
      //console.log(users);
      users.forEach(function (element) {
        if (Number(element.id) === userid) {
          userFound = true;
          return userFound;
        }
      });
      return userFound;
    }
  }]);

  return UserClass;
}();

var newUserObject = exports.newUserObject = new UserClass();
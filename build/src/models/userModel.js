'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import db from '../../pgdb/dbconfig';
// import uuidv4 from 'uuid/v4';

var users = exports.users = [];

var UserClass = function () {
  function UserClass() {
    _classCallCheck(this, UserClass);
  }

  _createClass(UserClass, [{
    key: 'create',

    // constructor() {}

    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      // const userid = uuidv4();
      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        // if(arr.indexOf(r) === -1) arr.push(r);
        arr.push(r);
      }
      //document.write(arr.toString);

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
        // userid
      };

      users.push(newUser);
      console.log(users);
      /*
           db.query('INSERT INTO users (firstname, surname, phone, username, password, userid) values($1, $2, $3, $4, $5, $6)',
          [data.firstname, data.surname, data.phone, data.username, data.password, userid], (err)=>{
            if (err) {
              console.log(err);
            }
          });
          */
      return newUser;
    }
    /*
      findUser(username, password, callback) {
        db.query('SELECT userid FROM users where username=($1) AND password=($2)',
        [username, password], (err, res)=>{
          if (err) {
            console.log(err);
          }
          callback(err, res)
        
        });
      }
      */

  }]);

  return UserClass;
}();

var newUserObject = exports.newUserObject = new UserClass();
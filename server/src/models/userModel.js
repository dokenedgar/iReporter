import db from '../../../pgdb/dbconfig';
import bcrypt from 'bcrypt';
const users = [];

class UserClass {

  // eslint-disable-next-line class-methods-use-this
  create(data, callback) {

    let arr = []
    while (arr.length < 8) {
      var r = Math.floor(Math.random() * 10); // + 1;
      arr.push(r);
    }
bcrypt.hash(data.password, 10, (err, hashed)=>{
  const newUser = {
    userid: arr.join(''),
    firstname: data.firstname,
    lastname: data.lastname,
    othernames: data.othernames,
    email: data.email,
    phoneNumber: data.phoneNumber,
    username: data.username,
    password: hashed,
    registered: new Date().toDateString(),
    isAdmin: false
  }
  if (data.secretKey) { // = process.env.someSecrets
    newUser.isAdmin = true;
  }
  db.query('INSERT INTO users (userid, firstname, lastname, email, phoneNumber, username, password, registered, isAdmin) values($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [newUser.userid, data.firstname, data.lastname, data.email, data.phoneNumber, data.username, data.password, newUser.registered, newUser.isAdmin], (err, res) => {
      if (err) {
        console.log(err);
      }
      callback(err, res, newUser);
    });
});



  }

  findUser(email, password, callback) {
    db.query('SELECT * FROM users where email=($1) AND password=($2)',
      [email, password], (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
  }

  checkID(userid, callback) {
    db.query('SELECT * FROM users where userid=($1)',
    [userid], (err, res) => {
      if (err) {
        console.log(err);
      }
      callback(err, res)
    });
  }

  checkEmail(email, callback) {
    db.query('SELECT * FROM users where email=($1)',
    [email], (err, res) => {
      if (err) {
        console.log(err);
      }
      callback(err, res)
    });
  }

}

export const newUserObject = new UserClass();
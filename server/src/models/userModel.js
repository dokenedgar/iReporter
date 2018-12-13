import db from '../../../pgdb/dbconfig';
const users = [];

class UserClass {

  // eslint-disable-next-line class-methods-use-this
  create(data) {

    let arr = []
    while (arr.length < 8) {
      var r = Math.floor(Math.random() * 10); // + 1;
      arr.push(r);
    }

    const newUser = {
      userid: arr.join(''),
      firstname: data.firstname,
      lastname: data.lastname,
      othernames: data.othernames,
      email: data.email,
      phoneNumber: data.phoneNumber,
      username: data.username,
      password: data.password,
      registered: new Date().toDateString(),
      isAdmin: false
    }
    if (data.secretKey) { // = process.env.someSecrets
      newUser.isAdmin = true;
    }
    db.query('INSERT INTO users (userid, firstname, lastname, phoneNumber, username, password, registered, isAdmin) values($1, $2, $3, $4, $5, $6, $7, $8)',
      [newUser.userid, data.firstname, data.lastname, data.phoneNumber, data.username, data.password, newUser.registered, newUser.isAdmin], (err) => {
        if (err) {
          console.log(err);
        }
      });

    users.push(newUser);
    return newUser;
  }

  findUser(username, password, callback) {
    db.query('SELECT * FROM users where username=($1) AND password=($2)',
      [username, password], (err, res) => {
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
/*
    let userFound = false;

    users.forEach((element) => {
      if (element.userid === userid) {
        userFound = true;
        return userFound;
      }
    });
    return userFound;
    */
  }
}

export const newUserObject = new UserClass();
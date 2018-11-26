// import db from '../../pgdb/dbconfig';
// import uuidv4 from 'uuid/v4';

export const users = [];

class UserClass {
  // constructor() {}

  // eslint-disable-next-line class-methods-use-this
  create(data) {
    
    // const userid = uuidv4();
    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      // if(arr.indexOf(r) === -1) arr.push(r);
      arr.push(r);
    }
    //document.write(arr.toString);

    const newUser = {
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
    }

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
}

export const newUserObject = new UserClass();
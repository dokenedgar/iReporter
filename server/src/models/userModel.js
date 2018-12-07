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
    }

    users.push(newUser);
    return newUser;
  }

  findUser(username, password) {
    let userFound = false;
    users.forEach((element) => {
      if ((element.username === username) && (element.password === password)) {
        userFound = element;
        return userFound;
      }
    });
    return userFound;
  }

  checkID(userid) {
    let userFound = false;
    //console.log(users);
    users.forEach((element) => {
      if ((Number(element.id) === userid)) {
        userFound = true;
        return userFound;
      }
    });
    return userFound;
  }
}

export const newUserObject = new UserClass();
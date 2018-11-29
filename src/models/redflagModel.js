// import db from '../../pgdb/dbconfig';
// import uuidv4 from 'uuid/v4';

export const redFlags = [];

class RedFlagClass {
  // constructor() {}

  // eslint-disable-next-line class-methods-use-this
  create(data) {
    
    // const userid = uuidv4();
    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      arr.push(r);
    }

    const newRedFlag = {
      id: arr.join(''),
      createdOn: new Date().toDateString(),
      createdBy: data.userid,
      type: data.type,
      location: `${data.latitude},${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    redFlags.push(newRedFlag);
    // console.log(users);
    let {id} = newRedFlag;
    let response = {
        id,
        message: "Created red-flag record"
    };
    //return newRedFlag;
    return response;
  }
/*
  findUser(username, password) {
    let userFound = false;
    users.forEach((element) =>{
      if((element.username === username) && (element.password === password)){
        userFound = element;
        return userFound;
      }
    });
    return userFound;
  }
  */
 getAllRedFlagsRecord() {
     return redFlags;
 }
}

export const newRedFlagObject = new RedFlagClass();
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
      location: `${data.latitude}, ${data.longitude}`,
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

  getSpecificRedFlag(id) {
    let userFound = false;
    redFlags.forEach((element) =>{
      if((element.id === id)){
        userFound = element;
        return userFound;
      }
    });
    return userFound;
  }
  
 getAllRedFlagsRecord() {
     return redFlags;
 }

 editRedFlagLocation(id, latitude, longitude){
    let recordFound = false;
    redFlags.forEach((element) =>{
      if((element.id === id)){
        element.location =  `${latitude}, ${longitude}`;
        recordFound = {
            id,
            message: "Updated red-flag record’s location"
        };
        return recordFound;
      }
    });
    return recordFound;

 }


}

export const newRedFlagObject = new RedFlagClass();
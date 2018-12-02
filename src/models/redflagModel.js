// import db from '../../pgdb/dbconfig';
import {  newUserObject } from '../models/userModel';
export const redFlags = [];

class RedFlagClass {
  
  // eslint-disable-next-line class-methods-use-this
  create(data) {
    
    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      arr.push(r);
    }

    //type: data.type,
    const newRedFlag = {
      id: arr.join(''),
      createdOn: new Date().toDateString(),
      createdBy: data.userid,
      type: 'red-flag',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    let checkid = newUserObject.checkID(data.userid);
    if(checkid){
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
    else{
      return false;
    }
  }

  getSpecificRedFlag(id) {
    let redFlagFound = false;
    redFlags.forEach((element) =>{
      if((element.id === id)){
        redFlagFound = element;
        return redFlagFound;
      }
    });
    return redFlagFound;
  }
  
 getAllRedFlagsRecord() {
     return redFlags;
 }

 editRedFlagLocation(id, userid, latitude, longitude){
    let recordFound = false;
    redFlags.forEach((element) =>{
      if((element.id === id) && (element.createdBy === userid)){
        element.location =  `${latitude}, ${longitude}`;
        recordFound = {
            id,
            message: "Updated red-flag record’s location"
        };
        return recordFound;
      }
      else if(element.id === id){
        recordFound = true;
        return recordFound;
      }
    });
    return recordFound;
 }

editRedFlagComment(id, userid, comment){
    let recordFound = false;
    redFlags.forEach((element) =>{
      if((element.id === id)&& (element.createdBy === userid)){
        element.comment =  comment;
        recordFound = {
            id,
            message: "Updated red-flag record’s comment"
        };
        return recordFound;
      }
      else if(element.id === id){
        recordFound = true;
        return recordFound;
      }
    });
    return recordFound;
 }

 deleteRedFlag(id, userid){
    let recordFound = false;
    redFlags.forEach((element, index) =>{
      if((element.id === id)&& (element.createdBy === userid)){
        redFlags.splice(index, 1);
        recordFound = {
            id,
            message: "red-flag record has been deleted"
        };
        return recordFound;
      }
      else if(element.id === id){
        recordFound = true;
        return recordFound;
      }
    });
    return recordFound;
 }

}

export const newRedFlagObject = new RedFlagClass();
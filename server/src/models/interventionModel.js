import {  newUserObject } from '../models/userModel';
export const interventions = [];

class InterventionClass {

  // eslint-disable-next-line class-methods-use-this
  create(data) {

    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      arr.push(r);
    }

    const newIntervention = {
      id: arr.join(''),
      createdOn: new Date().toDateString(),
      createdBy: data.userid,
      type: 'Intervention',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    let checkid = newUserObject.checkID(data.userid);
    if(checkid){
      interventions.push(newIntervention);
      let {id} = newIntervention;
      let response = {
          id,
          message: "Created Intervention record"
      };
      //return newRedFlag;
      return response;
    }
    else{
      return false;
    }

  }

  getSpecificIntervention(id) {
    let interventionFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)){
        interventionFound = element;
        return interventionFound;
      }
    });
    return interventionFound;
  }

  
 getAllinterventionRecords() {
     return interventions;
 }


 editInterventionLocation(id, userid, latitude, longitude){
    let recordFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)&& (element.createdBy === userid)){
        element.location =  `${latitude}, ${longitude}`;
        recordFound = {
            id,
            message: "Updated Intervention record’s location"
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

editInterventionComment(id, userid, comment){
    let recordFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)&& (element.createdBy === userid)){
        element.comment =  comment;
        recordFound = {
            id,
            message: "Updated intervention record’s comment"
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


 deleteIntervention(id, userid){
    let recordFound = false;
    interventions.forEach((element, index) =>{
      if((element.id === id)&& (element.createdBy === userid)){
        interventions.splice(index, 1);
        recordFound = {
            id,
            message: "Intervention record has been deleted"
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

export const newInterventionObject = new InterventionClass();
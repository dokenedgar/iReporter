import db from '../../../pgdb/dbconfig'
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
      createdBy: data.userId,
      type: 'Intervention',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    let checkid = newUserObject.checkID(data.userId);
    if(checkid){
      interventions.push(newIntervention);
      let {id} = newIntervention;
      let response = {
          id,
          message: "Created Intervention record"
      };
              //Insert into db here
              db.query('INSERT INTO interventions (id, createdon, createdby, type, location, status, comment) values($1, $2, $3, $4, $5, $6, $7)',
              [newIntervention.id, newIntervention.createdOn, newIntervention.createdBy, newIntervention.type, newIntervention.location, newIntervention.status, newIntervention.comment ], (err)=>{
                if (err) {
                  console.log(err);
                }
              });
      
      //return newRedFlag;
      return response;
    }
    else{
      return false;
    }

  }

  getSpecificIntervention(id, callback) {
    db.query('SELECT * FROM interventions where id=($1)',
    [id], (err, res)=>{
      if (err) {
        console.log(err);
      }
      callback(err, res)
    });
    //return redFlagFound;
    /*
    let interventionFound = false;
    interventions.forEach((element) =>{
      if((element.id === id)){
        interventionFound = element;
        return interventionFound;
      }
    });
    return interventionFound;
    */
  }

  
 getAllinterventionRecords() {
     return interventions;
 }


 editInterventionLocation(id, userid, latitude, longitude, callback){
  db.query('UPDATE interventions SET location=($1) WHERE id=($2) AND createdby=($3)',
  [`${latitude}, ${longitude}`, id, userid],
  (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });
/*
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
    return recordFound; */
 }

editInterventionComment(id, userid, comment, callback){
  db.query('UPDATE interventions SET comment=($1) WHERE id=($2) AND createdby=($3)',
  [comment, id, userid],
  (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });
/*
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
    */
 }


 deleteIntervention(id, userid, callback){
  db.query('DELETE FROM interventions WHERE id=($1) AND createdby=($2)',
  [id, userid], (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });
  /*
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
    */
 }

}

export const newInterventionObject = new InterventionClass();
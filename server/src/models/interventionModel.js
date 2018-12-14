import db from '../../../pgdb/dbconfig'
import {  newUserObject } from '../models/userModel';
export const interventions = [];

class InterventionClass {

  // eslint-disable-next-line class-methods-use-this
  create(data, callback) {

    let arr = []
    while(arr.length < 8){
      var r = Math.floor(Math.random()*10);// + 1;
      arr.push(r);
    }

    const newIntervention = {
      id: arr.join(''),
      title: data.title,
      createdOn: new Date().toDateString(),
      createdBy: data.userId,
      type: 'Intervention',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    //let checkid = newUserObject.checkID(data.userId);
    //if(checkid){
      interventions.push(newIntervention);
      let {id} = newIntervention;
      let response = {
          id,
          message: "Created Intervention record"
      };
              //Insert into db here
              db.query('INSERT INTO interventions (id, title, createdon, createdby, type, location, status, comment) values($1, $2, $3, $4, $5, $6, $7, $8)',
              [newIntervention.id, newIntervention.title, newIntervention.createdOn, newIntervention.createdBy, newIntervention.type, newIntervention.location, newIntervention.status, newIntervention.comment ], (err)=>{
                if (err) {
                  console.log(err);
                  response = false;
                }
                callback(response);
              });
  }

  getSpecificIntervention(id, callback) {
    db.query('SELECT * FROM interventions where id=($1)',
    [id], (err, res)=>{
      if (err) {
        console.log(err);
      }
      callback(err, res)
    });

  }

  
 getAllinterventionRecords(callback) {
  db.query('SELECT * FROM interventions',
  [], (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });

 }


 editInterventionLocation(id, userid, latitude, longitude, callback){
  db.query('UPDATE interventions SET location=($1) WHERE id=($2) AND createdby=($3) AND status=($4)',
  [`${latitude}, ${longitude}`, id, userid, 'Draft'],
  (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });
 }

editInterventionComment(id, userid, comment, callback){
  db.query('UPDATE interventions SET comment=($1) WHERE id=($2) AND createdby=($3) AND status=($4)',
  [comment, id, userid, 'Draft'],
  (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });

 }


 deleteIntervention(id, userid, callback){
  db.query('DELETE FROM interventions WHERE id=($1) AND createdby=($2)',
  [id, userid], (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  });
 }

 setStatus(id, status, callback){
  db.query('UPDATE interventions SET status=($1) WHERE id=($2)',
  [status, id], (err, res)=>{
    if (err) {
      console.log(err);
    }
    callback(err, res)
  
  });
}

}

export const newInterventionObject = new InterventionClass();
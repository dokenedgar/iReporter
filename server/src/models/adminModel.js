import {  redFlags } from '../models/redflagModel';
import {  interventions } from '../models/interventionModel';

class AdminClass {

 setStatus(id, type, status, callback){
    let recordFound = false;
    if(type === 'intervention'){
        db.query('UPDATE interventions SET status=($1) WHERE id=($4)',
        [status, id], (err, res)=>{
          if (err) {
            console.log(err);
          }
          callback(err, res)
        
        });
/*
        interventions.forEach((element) =>{
            if(element.id === id){
              element.status =  status;
              recordFound = {
                  id,
                  message: "Updated Intervention record’s status"
              };
              return recordFound;
            }
          });
          */
    }
    else if(type === 'red-flag'){
        redFlags.forEach((element) =>{
            if(element.id === id){
              element.status =  status;
              recordFound = {
                  id,
                  message: "Updated red flag record’s status"
              };
              return recordFound;
            }
          });
    }

    return recordFound;
 }


}

export const newAdminObject = new AdminClass();
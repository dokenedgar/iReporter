import db from '../../../pgdb/dbconfig'
import {
  newUserObject
} from '../models/userModel';
export const redFlags = [];

class RedFlagClass {

  // eslint-disable-next-line class-methods-use-this
  create(data, callback) {

    let arr = []
    while (arr.length < 8) {
      var r = Math.floor(Math.random() * 10); // + 1;
      arr.push(r);
    }
    const newRedFlag = {
      id: arr.join(''),
      title: data.title,
      createdOn: new Date().toDateString(),
      createdBy: data.userId,
      type: 'red-flag',
      location: `${data.latitude}, ${data.longitude}`,
      status: 'Draft',
      Images: 'Images here..', //Videos
      comment: data.comment
    }

    //let checkid = newUserObject.checkID(data.userId);
    //if(checkid){
    redFlags.push(newRedFlag);
    let {
      id
    } = newRedFlag;
    let response = {
      id,
      message: "Created red-flag record"
    };
    //Insert into db here
    db.query('INSERT INTO redflags (id, title, createdon, createdby, type, location, status, comment) values($1, $2, $3, $4, $5, $6, $7, $8)',
      [newRedFlag.id, newRedFlag.title, newRedFlag.createdOn, newRedFlag.createdBy, newRedFlag.type, newRedFlag.location, newRedFlag.status, newRedFlag.comment], (err) => {
        if (err) {
          console.log('Err ', err);
          response = false;
        }
        callback(response);
      });
  }

  getSpecificRedFlag(id, callback) {
    db.query('SELECT * FROM redflags where id=($1)',
      [id], (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
    //return redFlagFound;
  }

  getAllRedFlagsRecord(callback) {
    //return redFlags;
    db.query('SELECT * FROM redflags',
      [], (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
  }

  editRedFlagLocation(id, userid, latitude, longitude, callback) {
    db.query('UPDATE redflags SET location=($1) WHERE id=($2) AND createdby=($3) AND status=($4)',
      [`${latitude}, ${longitude}`, id, userid, 'Draft'],
      (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
  }

  editRedFlagComment(id, userid, comment, callback) {
    db.query('UPDATE redflags SET comment=($1) WHERE id=($2) AND createdby=($3) AND status=($4)',
      [comment, id, userid, 'Draft'],
      (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
  }

  deleteRedFlag(id, userid, callback) {

    db.query('DELETE FROM redflags WHERE id=($1) AND createdby=($2)',
      [id, userid], (err, res) => {
        if (err) {
          console.log(err);
        }
        callback(err, res)
      });
  }

  setStatus(id, status, callback){
        db.query('UPDATE redflags SET status=($1) WHERE id=($2)',
        [status, id], (err, res)=>{
          if (err) {
            console.log(err);
          }
          callback(err, res)
        
        });
    }

}

export const newRedFlagObject = new RedFlagClass();
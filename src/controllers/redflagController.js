import { users, newRedFlagObject } from '../models/redflagModel';
// import jwt from 'jsonwebtoken';

const RedFlag = {
  create(req, res) {
/* User shouldn't be the one setting the type
    if (!req.body.type || (req.body.type.length < 2 ) || (req.body.type.length > 10 ) || (/\s/.test(req.body.type)) || (req.body.type !== 'red-flag') ) {
      return res.status(400).send({ status: 400, error: 'Error saving data. First name should have a length of 2 - 20 characters' });
    }   */
    if (!req.body.userid || (req.body.userid.length < 6 ) || (req.body.userid.length > 10 ) || (/\s/.test(req.body.userid)) || ((typeof req.body.userid) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }

    if (!req.body.latitude || (req.body.latitude.length < 2 ) || (req.body.latitude.length > 30 ) || (req.body.latitude > 90 ) || (req.body.latitude < -90 ) || ((typeof req.body.latitude) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid latitude coordinate' });
    }
    if (!req.body.longitude || (req.body.longitude.length < 2 ) || (req.body.longitude.length > 30 ) || (req.body.longitude > 180 ) || (req.body.longitude < -180 ) || ((typeof req.body.latitude) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid longitude coordinate' });
      }
    if (!req.body.comment || (req.body.comment.length < 2 ) || (req.body.comment.length > 1000 )  || ((typeof req.body.comment) !== 'string' ) ) {
        return res.status(400).send({ status: 400, error: 'Please enter a comment describing what you are reporting. Comment should be between more than 1 and less than 1000 characters' });
     }
    req.body.latitude = Math.round( req.body.latitude * 1e16 ) / 1e16;
    req.body.longitude = Math.round( req.body.longitude * 1e16 ) / 1e16;
    
    const redflag = newRedFlagObject.create(req.body);

    if(redflag === false){
      return res.status(400).send({ status: 400, error: 'No user found with the supplied user-id, please check the id and try again.' });
    }

    const response = { status: 201, data: [redflag] };
    return res.status(201).send(response);
  },
  // other methods here

  getAllRedFlags(req, res){
    const redFlags = newRedFlagObject.getAllRedFlagsRecord();
    if(redFlags.length === 0){
      return res.status(200).send({ status: 200, data: [{message: 'No red-flags received yet'}] });
    }
    const response = { status: 200, data: redFlags };
    return res.status(200).send(response);
},
  
  fetchSpecificRedFlag(req, res) {
    if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid red-flag id' });
    }
    const result = newRedFlagObject.getSpecificRedFlag(req.params.id);
    if(result === false ){
      const response = { status: 400, error: 'No red-flag record found with the supplied id' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },

  editLocationRedFlag(req, res) {
    if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
      return res.status(400).send({ status: 400, error: 'Please supply a valid id for the red-flag record you want to edit' });
    }
    if (!req.body.userid || (req.body.userid.length < 6 ) || (req.body.userid.length > 10 ) || (/\s/.test(req.body.userid)) || ((typeof req.body.userid) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
    if (!req.body.latitude || (req.body.latitude.length < 2 ) || (req.body.latitude.length > 30 ) || (req.body.latitude > 90 ) || (req.body.latitude < -90 ) || ((typeof req.body.latitude) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid latitude coordinate' });
    }
    if (!req.body.longitude || (req.body.longitude.length < 2 ) || (req.body.longitude.length > 30 ) || (req.body.longitude > 180 ) || (req.body.longitude < -180 ) || ((typeof req.body.latitude) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a valid longitude coordinate' });
      }
      req.body.latitude = Math.round( req.body.latitude * 1e16 ) / 1e16;
      req.body.longitude = Math.round( req.body.longitude * 1e16 ) / 1e16;
  
    const result = newRedFlagObject.editRedFlagLocation(req.params.id, req.body.userid, req.body.latitude, req.body.longitude);

    if(result === false ){
      const response = { status: 400, error: 'No red-flag record found with the supplied id' };
      return res.status(400).send(response);
    }
    else if(result === true ){
      const response = { status: 400, error: 'Sorry, you do not have permission to edit this record.' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },

  editCommentRedFlag(req, res) {
    if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
      return res.status(400).send({ status: 400, error: 'Please supply a valid id for the red-flag record you want to edit' });
    }
    if (!req.body.userid || (req.body.userid.length < 6 ) || (req.body.userid.length > 10 ) || (/\s/.test(req.body.userid)) || ((typeof req.body.userid) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
    if (!req.body.comment || (req.body.comment.length < 2 ) || (req.body.comment.length > 1000 )  || ((typeof req.body.comment) !== 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'Please enter a comment describing what you are reporting. Comment should be between more than 1 and less than 1000 characters' });
    }
  
    const result = newRedFlagObject.editRedFlagComment(req.params.id, req.body.userid, req.body.comment);

    if(result === false ){
      const response = { status: 400, error: 'No red-flag record found with the supplied id' };
      return res.status(400).send(response);
    }
    else if(result === true ){
      const response = { status: 400, error: 'Sorry, you do not have permission to edit this record.' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },

  deleteRedFlag(req, res) {
    if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 characters' });
    }
    if (!req.body.userid || (req.body.userid.length < 6 ) || (req.body.userid.length > 10 ) || (/\s/.test(req.body.userid)) || ((typeof req.body.userid) === 'string' ) ) {
      return res.status(400).send({ status: 400, error: 'A valid user-id of type Integer is required' });
    }
  
    const result = newRedFlagObject.deleteRedFlag(req.params.id, req.body.userid);

    if(result === false ){
      const response = { status: 400, error: 'No red-flag record found with the supplied id' };
      return res.status(400).send(response);
    }
    else if(result === true ){
      const response = { status: 400, error: 'Sorry, you do not have permission to delete this record.' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },


}
export default RedFlag;
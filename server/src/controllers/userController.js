import {  newUserObject } from '../models/userModel';
// import jwt from 'jsonwebtoken';

const User = {
  create(req, res) {
    if (!req.body.firstname || (req.body.firstname.length < 2 ) || (req.body.firstname.length > 20 ) || (/\s/.test(req.body.firstname)) ) {
      return res.status(400).send({ status: 400, error: 'First name should have a length of 2 - 20 characters, with no space' });
    }
    if (!req.body.lastname || (req.body.lastname.length < 2 ) || (req.body.lastname.length > 20 ) || (/\s/.test(req.body.lastname)) ) {
      return res.status(400).send({ status: 400, error: 'Surname should have a length of 2 - 20 characters, with no space' });
    }
    if (!req.body.email || (req.body.email.length < 5 ) || (req.body.email.length > 30 )  ) {
      return res.status(400).send({ status: 400, error: 'A valid email should is required.' });
    }
    if (!req.body.phoneNumber || (req.body.phoneNumber.length < 11 ) || (req.body.phoneNumber.length > 14 ) || (/\s/.test(req.body.phoneNumber)) || (/\D/.test(req.body.phoneNumber)) ) {
      return res.status(400).send({ status: 400, error: 'Phone number should have length of 11, containing only digits' });
    }
    if (!req.body.username || (req.body.username.length < 5 ) || (req.body.username.length > 20 ) || (/\s/.test(req.body.username)) ) {
      return res.status(400).send({ status: 400, error: 'Please choose a good username with at least 5 characters' });
    }
    if (!req.body.password || (req.body.password.length < 5 ) || (req.body.password.length > 20 ) || (/\s/.test(req.body.password)) ) {
      return res.status(400).send({ status: 400, error: 'Please choose a strong password with atleast 5 characters' });
    }
    const user = newUserObject.create(req.body);
    
    const response = { status: 201, data: [user] };
    return res.status(201).send(response);
  },
  // other methods here
  
  getUser(req, res) {
    if (!req.body.username || (req.body.username.length < 5 ) || (req.body.username.length > 20 ) || (/\s/.test(req.body.username)) ) {
      return res.status(400).send({ status: 400, eror: 'Error processing request. Please enter username with at least 5 charcters' });
    }
    if (!req.body.password || (req.body.password.length < 5 ) || (req.body.password.length > 20 ) || (/\s/.test(req.body.password)) ) {
      return res.status(400).send({ status: 400, error: 'Error processing request. Please enter password with atleast 5 characters' });
    }

    const result = newUserObject.findUser(req.body.username, req.body.password);
    if(result === false ){
      const response = { status: 400, error: 'Invalid login credentials. Check and try again.' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },

}
export default User;
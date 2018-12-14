import {
  newUserObject
} from '../models/userModel';
import jwtObject from './jwtMethods';
import bcrypt from 'bcrypt';

const User = {
  create(req, res) {
    newUserObject.create(req.body, (err, result, userobj)=>{
      if (err) {
        const response = {
          status: 400,
          error: 'Email already in use'
        };
        return res.status(400).send(response);
      }
      let user = userobj;
      
      jwtObject.createToken(user, function (token) {
        const response = {
          status: 201,
          data: [ {token, user}]
        };
        return res.status(201).send(response);
      });
        
    });

  },

  getUser(req, res) {
    newUserObject.findUser(req.body.email, req.body.password, (err, result) => {
      if (result === undefined) {
        const response = {
          status: 400,
          error: 'Invalid login credentials. Check and try again.'
        };
        return res.status(400).send(response);
      }
      if (result.rowCount === 0) {
        const response = {
          status: 400,
          error: 'Invalid login credentials. Check and try again.'
        };
        return res.status(400).send(response);
      }
      bcrypt.compare(req.body.password, result.rows[0].password, (err, same)=>{
        if(err){
          console.log('fail');
        }
        else{
          console.log('pass');
        }
      });
      let user = result.rows[0];
      jwtObject.createToken(user, function (token) {
        const response = {
          status: 200,
          data: [ { token, user } ]
        };
        return res.status(200).send(response);
      });
    });
  },

}
export default User;
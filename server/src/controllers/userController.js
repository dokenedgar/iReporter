import { newUserObject } from '../models/userModel';
import jwtObject from './jwtMethods';

const User = {
  create(req, res) {
    const user = newUserObject.create(req.body);
    jwtObject.createToken(user, function(token){
      const response = {
        status: 201,
        token,
        data: [user]
      };
      
      return res.status(201).send(response);
    });

  },

  getUser(req, res) {
    const result = newUserObject.findUser(req.body.username, req.body.password);
    if (result === false) {
      const response = {
        status: 400,
        error: 'Invalid login credentials. Check and try again.'
      };
      return res.status(400).send(response);
    } else {
      const response = {
        status: 200,
        data: [result]
      };
      return res.status(200).send(response);
    }
  },

}
export default User;
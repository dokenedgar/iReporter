import { newUserObject } from '../models/userModel';
// import jwt from 'jsonwebtoken';

const User = {
  create(req, res) {
    const user = newUserObject.create(req.body);
    const response = {
      status: 201,
      data: [user]
    };
    return res.status(201).send(response);
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
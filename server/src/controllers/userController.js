import {
  newUserObject
} from '../models/userModel';
import jwtObject from './jwtMethods';

const User = {
  create(req, res) {
    const user = newUserObject.create(req.body);
    // let user = {
    //  userid: aUser.userid,
    //   isAdmin: aUser.isAdmin
    // };
    jwtObject.createToken(user, function (token) {
      const response = {
        status: 201,
        data: [ {token, user}]
      };
      return res.status(201).send(response);
    });

  },

  getUser(req, res) {
    newUserObject.findUser(req.body.username, req.body.password, (err, result) => {
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
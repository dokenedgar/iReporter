import { newUserObject } from '../models/userModel';
import jwtObject from './jwtMethods';

const User = {
  create(req, res) {
    const user = newUserObject.create(req.body);
   // let user = {
    //  userid: aUser.userid,
   //   isAdmin: aUser.isAdmin
   // };
   // jwtObject.createToken(aUser, function(token){
      const response = {
        status: 201,
        //token,
        data: [user]
      };
      return res.status(201).send(response);
   // });

  },

  getUser(req, res) {
    newUserObject.findUser(req.body.username, req.body.password, (err, result) =>{
      if (result===undefined) {
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
      //return res.status(400).send({ message: 'user not found' });
    }
    
    let user = {
      userid: result.rows[0].userid,
      isAdmin: result.rows[0].isAdmin
    };
    jwtObject.createToken( user, function(token){
      const response = {
        status: 200,
        token,
        data: [result.rows]
      };
      return res.status(200).send(response);
    });
    });

  },

}
export default User;

/*    if (result === false) {
      const response = {
        status: 400,
        error: 'Invalid login credentials. Check and try again.'
      };
      return res.status(400).send(response);
    } else {
      jwtObject.createToken(result, function(token){
        const response = {
          status: 200,
          token,
          data: [result]
        };
        return res.status(200).send(response);
      });
    } */
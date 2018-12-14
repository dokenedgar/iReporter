import jwt from 'jsonwebtoken';

const jwtObject = {
    createToken(user, fn){
        let aToken;
        jwt.sign({ user }, 'app-key-here', { expiresIn:'24h' }, (err, token) => {
            fn(token);
          });          
    },

    verifyToken (req, res, next) {
        const bearerToken = req.headers['authorization'];
        if (typeof bearerToken !== 'undefined') {
          //const bearer = bearerHeader.split(' ');
          //const bearerToken = bearer[1];
          req.token = bearerToken;
          jwt.verify(req.token, 'app-key-here', (err, authData) => {
            if (err) {
                const response = {
                    status: 403,
                    error: 'Token not valid for this session'
                  };
              res.status(403).json({ response });
            }   
            else {
             // console.log(authData.user);
             //  console.log(authData.user.isAdmin);
              req.body.userId = authData.user.userid;
              req.body.userType = authData.user.isadmin;
            //  console.log(req.body.userType);

                next();
              }
            });
          
        }
        else {
            const response = {
                status: 403,
                error: 'Token not found in request.'
              };
          res.status(403).json({ response });
        }
      }
  
  }
  export default jwtObject;
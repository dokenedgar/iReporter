import jwt from 'jsonwebtoken';

const jwtObject = {
    createToken(user, fn){
        let aToken;
        jwt.sign({ user }, 'app-key-here', { expiresIn:'24h' }, (err, token) => {
            fn(token);
          });          
    },

    verifyToken (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
          const bearer = bearerHeader.split(' ');
          const bearerToken = bearer[1];
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
               //console.log(authData.user.id);
              req.body.userId = authData.user.id;
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
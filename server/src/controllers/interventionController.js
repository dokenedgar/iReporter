import { newInterventionObject } from '../models/interventionModel';
// import jwt from 'jsonwebtoken';

const Intervention = {
  create(req, res) {

    if ((req.body.latitude > 90) || (req.body.latitude < -90)) {
      return res.status(400).send({
        status: 400,
        error: 'Please enter a valid latitude coordinate, between 90 and -90'
      });
    }
    if ((req.body.longitude > 180) || (req.body.longitude < -180)) {
      return res.status(400).send({
        status: 400,
        error: 'Please enter a valid longitude coordinate, between 180 and -180'
      });
    }
    if((typeof req.body.latitude === 'string') || (typeof req.body.longitude === 'string')){
      return res.status(400).send({
        status: 400,
        error: 'Please enter a non-string coordinates, between 180 and -180'
      });
    }
    if(typeof req.body.comment !== 'string'){
      return res.status(400).send({
        status: 400,
        error: 'Please enter a string as the comment for your intervention record'
      });
    }
    req.body.latitude = Math.round( req.body.latitude * 1e16 ) / 1e16;
    req.body.longitude = Math.round( req.body.longitude * 1e16 ) / 1e16;
    
    newInterventionObject.create(req.body, (result) => {
      if (result === false) {
        return res.status(400).send({
          status: 400,
          error: 'No user found with the supplied user-id, please check the id and try again.'
        });
      }
  
      const response = {
        status: 201,
        data: [result]
      };
      return res.status(201).send(response);
    });
  },
  // other methods here

  getAllInterventions(req, res){
    const intervention = newInterventionObject.getAllinterventionRecords((err, result) => {
      if (result === undefined) {
        return res.status(400).send({ message: 'Error processing request. Check order id' });
      } else {
            if (result.rowCount === 0) {
              const response = {
                status: 200,
                error: 'No red-intervention record received yet'
              };
              return res.status(400).send(response);
          }
          const response = {
            status: 200,
            data: [result.rows]
          };
          return res.status(200).send(response);
      }  
});
},

  fetchSpecificIntervention(req, res) {
    newInterventionObject.getSpecificIntervention (req.params.id, (err, result) => {
      if (result === undefined) {
        return res.status(400).send({ message: 'Error processing request. Check order id' });
      } else {
            if (result.rowCount === 0) {
              const response = {
                status: 400,
                error: 'No red-flag record found with the supplied id'
              };
              return res.status(400).send(response);
          }
          const response = {
            status: 200,
            data: [result.rows[0]]
          };
          return res.status(200).send(response);
      }               
   });
  },
 
  editLocationIntervention(req, res) {
    if ((req.body.latitude > 90) || (req.body.latitude < -90)) {
      return res.status(400).send({
        status: 400,
        error: 'Please enter a valid latitude coordinate, between 90 and -90'
      });
    }
    if ((req.body.longitude > 180) || (req.body.longitude < -180)) {
      return res.status(400).send({
        status: 400,
        error: 'Please enter a valid longitude coordinate, between 180 and -180'
      });
    }
    if((typeof req.body.latitude === 'string') || (typeof req.body.longitude === 'string')){
      return res.status(400).send({
        status: 400,
        error: 'Please enter a non-string coordinates, between 180 and -180'
      });
    }
      req.body.latitude = Math.round( req.body.latitude * 1e16 ) / 1e16;
      req.body.longitude = Math.round( req.body.longitude * 1e16 ) / 1e16;
  
    newInterventionObject.editInterventionLocation(req.params.id, req.body.userId, req.body.latitude, req.body.longitude, (err, result)=>{
      if (result===undefined) {
        const response = {
          status: 403,
          error: 'You do not have permission to edit this record'
        };
        return res.status(403).send(response);
      }
    if (result.rowCount === 0) {
      const response = {
        status: 400,
        error: 'Check whether intervention record exists, and if it were created by this user'
      };
      return res.status(400).send(response);
    }
   let onSuccess = {
      id: req.params.id,
      message: "Updated intervention record’s location"
  };
    const response = {
      status: 200,
      data: [onSuccess]
    };
    return res.status(200).send(response);
    });

  },

  editCommentIntervention(req, res) {
    if(typeof req.body.comment !== 'string'){
      return res.status(400).send({
        status: 400,
        error: 'Please enter a string as the comment for your intervention record'
      });
    }
  
    newInterventionObject.editInterventionComment(req.params.id, req.body.userId, req.body.comment, (err, result) =>{
      if (result===undefined) {
        const response = {
          status: 403,
          error: 'You do not have permission to edit this record'
        };
        return res.status(403).send(response);
      }
    if (result.rowCount === 0) {
      const response = {
        status: 400,
        error: 'Check whether intervention record exists, and if it were created by this user'
      };
      return res.status(400).send(response);
    }
   let onSuccess = {
      id: req.params.id,
      message: "Updated intervention record’s comment"
  };
    const response = {
      status: 200,
      data: [onSuccess]
    };
    return res.status(200).send(response);
    });

  },

  deleteIntervention(req, res) {

    newInterventionObject.deleteIntervention(req.params.id, req.body.userId, (err, result) => {
      if (result===undefined) {
        const response = {
          status: 403,
          error: 'You do not have permission to edit this record'
        };
        return res.status(403).send(response);
      }
    if (result.rowCount === 0) {
      const response = {
        status: 400,
        error: 'Check whether red-flag exists, and if it were created by this user'
      };
      return res.status(400).send(response);
    }
   let onSuccess = {
      id: req.params.id,
      message: "red-flag record has been deleted"
  };
    const response = {
      status: 200,
      data: [onSuccess]
    };
    return res.status(200).send(response);
    });

  },


}
export default Intervention;
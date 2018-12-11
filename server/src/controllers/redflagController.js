import {
  users,
  newRedFlagObject
} from '../models/redflagModel';
// import jwt from 'jsonwebtoken';

const RedFlag = {
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

    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    const redflag = newRedFlagObject.create(req.body);

    if (redflag === false) {
      return res.status(400).send({
        status: 400,
        error: 'No user found with the supplied user-id, please check the id and try again.'
      });
    }

    const response = {
      status: 201,
      data: [redflag]
    };
    return res.status(201).send(response);
  },
  // other methods here

  getAllRedFlags(req, res) {
    const redFlags = newRedFlagObject.getAllRedFlagsRecord();
   //console.log('FromredF: ', req.authData);
    if (redFlags.length === 0) {
      return res.status(200).send({
        status: 200,
        data: [{
          message: 'No red-flags received yet'
        }]
      });
    }
    const response = {
      status: 200,
      data: redFlags
    };
    return res.status(200).send(response);
  },

  fetchSpecificRedFlag(req, res) {

    const result = newRedFlagObject.getSpecificRedFlag(req.params.id);
    if (result === false) {
      const response = {
        status: 400,
        error: 'No red-flag record found with the supplied id'
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

  editLocationRedFlag(req, res) {

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
    req.body.latitude = Math.round(req.body.latitude * 1e16) / 1e16;
    req.body.longitude = Math.round(req.body.longitude * 1e16) / 1e16;

    const result = newRedFlagObject.editRedFlagLocation(req.params.id, req.body.userId, req.body.latitude, req.body.longitude);

    if (result === false) {
      const response = {
        status: 400,
        error: 'No red-flag record found with the supplied id'
      };
      return res.status(400).send(response);
    } else if (result === true) {
      const response = {
        status: 400,
        error: 'Sorry, you do not have permission to edit this record.'
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

  editCommentRedFlag(req, res) {

    const result = newRedFlagObject.editRedFlagComment(req.params.id, req.body.userId, req.body.comment);

    if (result === false) {
      const response = {
        status: 400,
        error: 'No red-flag record found with the supplied id'
      };
      return res.status(400).send(response);
    } else if (result === true) {
      const response = {
        status: 400,
        error: 'Sorry, you do not have permission to edit this record.'
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

  deleteRedFlag(req, res) {

    const result = newRedFlagObject.deleteRedFlag(req.params.id, req.body.userId);

    if (result === false) {
      const response = {
        status: 400,
        error: 'No red-flag record found with the supplied id'
      };
      return res.status(400).send(response);
    } else if (result === true) {
      const response = {
        status: 400,
        error: 'Sorry, you do not have permission to delete this record.'
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
export default RedFlag;
import { users, newRedFlagObject } from '../models/redflagModel';
// import jwt from 'jsonwebtoken';

const RedFlag = {
  create(req, res) {
    if (!req.body.type || (req.body.type.length < 2 ) || (req.body.type.length > 10 ) || (/\s/.test(req.body.type)) || (req.body.type !== 'red-flag') ) {
      return res.status(400).send({ message: 'Error saving data. First name should have a length of 2 - 20 characters' });
    }   
    if (!req.body.userid || (req.body.userid.length < 6 ) || (req.body.userid.length > 10 ) || (/\s/.test(req.body.userid)) ||((typeof req.body.userid) === 'string' ) ) {
      return res.status(400).send({ message: 'Error saving data. Surname should have a length of 2 - 20 characters' });
    }

    if (!req.body.latitude || (req.body.latitude.length < 2 ) || (req.body.latitude.length > 30 ) || (req.body.latitude > 90 ) || (req.body.latitude < -90 ) || ((typeof req.body.latitude) === 'string' ) ) {
      return res.status(400).send({ message: 'LATITUDE. Phone number should have length of 11, containing only digits' });
    }
    if (!req.body.longitude || (req.body.longitude.length < 2 ) || (req.body.longitude.length > 30 ) || (req.body.longitude > 180 ) || (req.body.longitude < -180 ) || ((typeof req.body.latitude) === 'string' ) ) {
        return res.status(400).send({ message: 'LONGITUDE. Phone number should have length of 11, containing only digits' });
      }
    req.body.latitude = Math.round( req.body.latitude * 1e16 ) / 1e16;
    req.body.longitude = Math.round( req.body.longitude * 1e16 ) / 1e16;
    
    const redflag = newRedFlagObject.create(req.body);
    
    const response = { status: 201, data: [redflag] };
    return res.status(201).send(response);
  },
  // other methods here

  getAllRedFlags(req, res){
    const redFlags = newRedFlagObject.getAllRedFlagsRecord();
    const response = { status: 200, data: redFlags };
    return res.status(200).send(response);
},
  
  fetchSpecificRedFlag(req, res) {
    if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
      return res.status(400).send({ message: 'Error processing request. Please enter username with at least 5 charcters' });
    }

    const result = newRedFlagObject.getSpecificRedFlag(req.params.id);
    if(result === false ){
      const response = { status: 400, error: 'Invalid login credentials' };
      return res.status(400).send(response);
    }
    else {
      const response = { status: 200, data: [result] };
      return res.status(200).send(response);
    }

  },


}
export default RedFlag;
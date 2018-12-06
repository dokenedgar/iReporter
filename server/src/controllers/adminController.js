import { newAdminObject } from '../models/adminModel';

const Admin = {

    editStatus(req, res) {
        if (!req.params.id || (req.params.id.length < 5 ) || (req.params.id.length > 20 ) || (/\s/.test(req.params.id)) ) {
          return res.status(400).send({ status: 400, error: 'Please enter a valid intervention id' });
        }
        const result = newAdminObject.setStatus(req.params.id, req.body.type, req.body.status);
        if(result === false ){
          const response = { status: 400, error: 'No record found with the supplied id' };
          return res.status(400).send(response);
        }
        else {
          const response = { status: 200, data: [result] };
          return res.status(200).send(response);
        }
    
      },

}
export default Admin;
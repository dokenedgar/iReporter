import { newAdminObject } from '../models/adminModel';

const Admin = {

    editStatus(req, res) {
        if ((req.body.type !== 'red-flag') && (req.body.type !== 'intervention') ) {
          return res.status(400).send({ status: 400, error: 'Please enter only red-flag or intervention as the type' });
        }
        if ((req.body.status !== 'under investigation') && (req.body.status !== 'rejected')&& (req.body.status !== 'resolved') ) {
          return res.status(400).send({ status: 400, error: 'Please enter only under investigation, rejected or resolved as the status' });
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
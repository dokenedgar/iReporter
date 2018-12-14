import { newAdminObject } from '../models/adminModel';

const Admin = {

    editStatus(req, res) {

        newAdminObject.setStatus(req.params.id, req.body.type, req.body.status, (err, result)=>{
          if (result===undefined) {
           return res.status(400).send({ message: 'Error processing request. Incorrect / invalid id' });
         }
       if (result.rowCount === 0) {
        const response = { status: 400, error: 'No record found with the supplied id' };
        return res.status(400).send(response);
       }

       const response = { status: 200, data: [result] };
          return res.status(200).send(response);
       });
      },

}
export default Admin;
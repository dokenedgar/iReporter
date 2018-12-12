import express from 'express';
import expressValidator from 'express-validator';
import path from 'path';
/*import User from './server/src/controllers/userController';*/
import RedFlag from './server/src/controllers/redflagController';
import Intervention from './server/src/controllers/interventionController';
import Admin from './server/src/controllers/adminController';

import jwtObject from './server/src/controllers/jwtMethods';
import  userRoutes  from './server/src/routes/userRoutes';
import redflagRoutes from './server/src/routes/redFlagRoutes';
import interventionRoutes from './server/src/routes/interventionRoutes';
import adminRoutes from './server/src/routes/adminRoutes';

const app = express();
app.use(express.json());
app.use(expressValidator());
app.set('port', process.env.PORT || 3030);

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/red-flags', jwtObject.verifyToken, redflagRoutes);
app.use('/api/v1/interventions', jwtObject.verifyToken, interventionRoutes);
app.use('/api/v1/admin', adminRoutes);

//app.patch('/api/v1/admin/:id', Admin.editStatus);
//app.listen(3030, () => console.log('Listening on Port 3030...'));
app.listen(app.get('port'));
export default app;
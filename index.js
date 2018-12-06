import express from 'express';
import path from 'path';
import  User  from './server/src/controllers/userController';
import RedFlag from './server/src/controllers/redflagController';
import Intervention from './server/src/controllers/interventionController';
import Admin from './server/src/controllers/adminController';

// import  userroutes  from './server/src/routes/userRoutes';
const app = express();
app.use(express.json());

app.set('port', 3030);

// app.use('/api/v1/auth', userroutes);
app.set('port', process.env.PORT || 3030);

// Sign-in & Sign-up
app.post('/api/v1/auth/signup', User.create);
app.post('/api/v1/auth/login', User.getUser);

// RED-FLAGS
app.post('/api/v1/red-flags', RedFlag.create);
app.get('/api/v1/red-flags', RedFlag.getAllRedFlags);
app.get('/api/v1/red-flags/:id', RedFlag.fetchSpecificRedFlag);
app.patch('/api/v1/red-flags/:id/location', RedFlag.editLocationRedFlag);
app.patch('/api/v1/red-flags/:id/comment', RedFlag.editCommentRedFlag);
app.delete('/api/v1/red-flags/:id', RedFlag.deleteRedFlag);

// INTERVENTION ROUTES
app.post('/api/v1/interventions', Intervention.create);
app.get('/api/v1/interventions', Intervention.getAllInterventions);
app.get('/api/v1/interventions/:id', Intervention.fetchSpecificIntervention);
app.patch('/api/v1/interventions/:id/location', Intervention.editLocationIntervention);
app.patch('/api/v1/interventions/:id/comment', Intervention.editCommentIntervention);
app.delete('/api/v1/interventions/:id', Intervention.deleteIntervention);

app.patch('/api/v1/admin/:id', Admin.editStatus);
//app.listen(3030, () => console.log('Listening on Port 3030...'));

app.listen(app.get('port'));
export default app;
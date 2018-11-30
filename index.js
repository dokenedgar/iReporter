import express from 'express';
import path from 'path';
import User from './src/controllers/userController';
import RedFlag from './src/controllers/redflagController';

const app = express();
app.use(express.json());

app.set('port', 3030);

// []
// sign-up API
app.post('/api/v1/auth/signup', User.create);

//Sign-In
app.post('/api/v1/auth/login', User.getUser);

//create red-flag record/incident
app.post('/api/v1/red-flags', RedFlag.create);

//Get All Red-Flags
app.get('/api/v1/red-flags', RedFlag.getAllRedFlags);

//Get A Specific Red-Flag Record
app.get('/api/v1/red-flags/:id', RedFlag.fetchSpecificRedFlag);

//Edit Red-Flag Location
app.patch('/api/v1/red-flags/:id/location', RedFlag.editLocationRedFlag);

//Edit Red-Flag Comment
app.patch('/api/v1/red-flags/:id/comment', RedFlag.editCommentRedFlag);

//Delete A Red-Flag
app.delete('/api/v1/red-flags/:id', RedFlag.deleteRedFlag);

//app.listen(3030, () => console.log('Listening on Port 3030...'));
app.listen(app.get('port'));
export default app;
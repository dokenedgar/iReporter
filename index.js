import express from 'express';
import path from 'path';
import User from './src/controllers/userController';

const app = express();
app.use(express.json());

app.set('port', 3030);

// []
// sign-up API
app.post('/api/v1/auth/signup', User.create);

//Sign-In
app.post('/api/v1/auth/login', User.getUser);


//app.listen(3030, () => console.log('Listening on Port 3030...'));
app.listen(app.get('port'));
export default app;
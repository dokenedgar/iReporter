import express from 'express';
import User from '../controllers/userController';
import {  newUserValidationObject }  from '../validations/userValidations';

const userRoutes = express.Router();

userRoutes.use('/signup', newUserValidationObject.create);
userRoutes.use('/login', newUserValidationObject.getUser);

userRoutes.post('/signup', User.create);
userRoutes.post('/login', User.getUser);

 module.exports = userRoutes;
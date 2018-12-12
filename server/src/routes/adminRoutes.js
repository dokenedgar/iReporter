import express from 'express';
import Admin from '../controllers/adminController';
import {  newAdminValidationObject }  from '../validations/adminValidations';
import jwtObject from '../controllers/jwtMethods'

const adminRoutes = express.Router();
//app.patch('/api/v1/admin/:id', Admin.editStatus);
adminRoutes.use('/:id', jwtObject.verifyToken, newAdminValidationObject.editStatus);

adminRoutes.patch('/:id', Admin.editStatus);

 module.exports = adminRoutes;
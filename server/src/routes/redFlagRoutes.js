import express from 'express';
import RedFlag from '../controllers/redflagController';
import {  redFlagValidation }  from '../validations/redFlagValidations';

const redflagRoutes = express.Router();

redflagRoutes.use('/:id/location', redFlagValidation.editLocation);
redflagRoutes.use('/:id/comment', redFlagValidation.editComment);

redflagRoutes.post('/', redFlagValidation.create, RedFlag.create);
redflagRoutes.get('/', RedFlag.getAllRedFlags);
redflagRoutes.get('/:id', redFlagValidation.fetchSpecificRedFlag, RedFlag.fetchSpecificRedFlag);
redflagRoutes.patch('/:id/location', RedFlag.editLocationRedFlag);
redflagRoutes.patch('/:id/comment', RedFlag.editCommentRedFlag);
redflagRoutes.delete('/:id', redFlagValidation.deleteRecord, RedFlag.deleteRedFlag);

module.exports = redflagRoutes;
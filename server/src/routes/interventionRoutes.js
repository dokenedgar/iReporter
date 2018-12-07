import express from 'express';
import Intervention from '../controllers/interventionController';
import {  interventionValidation }  from '../validations/interventionValidations';

const interventionRoutes = express.Router();

interventionRoutes.use('/:id/location', interventionValidation.editLocation);
interventionRoutes.use('/:id/comment', interventionValidation.editComment);

interventionRoutes.post('/', interventionValidation.create, Intervention.create);
interventionRoutes.get('/', Intervention.getAllInterventions);
interventionRoutes.get('/:id', interventionValidation.fetchSpecificRecord, Intervention.fetchSpecificIntervention);
interventionRoutes.patch('/:id/location', Intervention.editLocationIntervention);
interventionRoutes.patch('/:id/comment', Intervention.editCommentIntervention);
interventionRoutes.delete('/:id', interventionValidation.deleteRecord, Intervention.deleteIntervention);

module.exports = interventionRoutes;
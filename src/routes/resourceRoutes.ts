
import express from 'express';
import * as resourcesController from '../controllers/resourceController'

import { validateResources } from '../middleware/validate'


const router = express.Router();

router.get('/', resourcesController.getAllResources);
// I have to correct the middleware
// router.post('/', validateResources, resourcesController.addResources);
router.post('/', resourcesController.addResources);

export default router;

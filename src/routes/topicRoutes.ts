
import express from 'express'
import * as topicController from '../controllers/topicController'
import { validateTopics } from '../middleware/validate'


const router = express.Router();

router.get('/', topicController.getAllTopics);
// router.post('/', validateTopics, topicController.addTopics);
router.post('/', topicController.addTopics);

export default router;

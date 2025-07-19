
import express from 'express'
import * as userController from '../controllers/userController'
import { validateUsers } from '../middleware/validate'


const router = express.Router();

router.get('/', userController.getAllUsers);
// router.post('/', validateUsers, userController.addUsers);
router.post('/', userController.addUsers);

export default router;

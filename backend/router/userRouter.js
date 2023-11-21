import { Router } from 'express';
import {test,registerUser} from '../controller/userController.js';
const router = Router();

router.route('/auth').get(test);
router.route('/register').post(registerUser);

export default router;
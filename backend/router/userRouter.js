import { Router } from 'express';
import {registerUser,loginUser,profile} from '../controller/userController.js';
import cors from "cors";
const router = Router();

router.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'

    }
))

// router.route('/auth').get(test);
router.route('/register').post(registerUser);
router.route('/').post(loginUser);
router.route('/profile').get(profile);


export default router;
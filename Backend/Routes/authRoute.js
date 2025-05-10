import express from "express"
import{ login, register, test} from '../Controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";




//router object
const router =express.Router()


router.post('/register',register);
router.post('/login',login);

// test route 
router.get('/test',requireSignIn,isAdmin,test);



export default router;
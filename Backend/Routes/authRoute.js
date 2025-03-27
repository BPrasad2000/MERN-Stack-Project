import express from "express"
import{ register} from '../Controllers/authController.js'




//router object
const router =express.Router()


router.post('/register',register);




export default router;
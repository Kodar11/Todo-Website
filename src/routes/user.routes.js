import Router from "express"
import {registerUser} from "../controllers/user.controllers.js"
import { upload } from "../middlewares/multer.middlewares.js"

const router = Router()

// router.route("/register").post(
//     upload.fields([
//         {
//             name : "avatar",
//             maxCount:1
//         }
//     ]),
    
//    await registerUser)

router.post('/register', upload.single('avatar'), registerUser);

// router.post('/register', registerUser);
export default router
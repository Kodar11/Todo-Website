import Router from "express"
import { registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails } from "../controllers/user.controllers.js"
import { verifyJWT } from '../middlewares/auth.middlewares.js';


const router = Router()

// router.route("/register").post(
//     upload.fields([
//         {
//             name : "avatar",
//             maxCount:1
//         }
//     ]),
    
//    await registerUser)
// router.post('/register', upload.single('avatar'), registerUser);
// router.post('/register', registerUser);

//secured routes
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)


export default router
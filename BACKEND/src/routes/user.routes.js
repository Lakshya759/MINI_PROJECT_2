import {Router} from "express"
import {registerUser,loginUser,getUser} from "../controller/user.controller.js"

import {verifyJWT} from "../middlewares/auth.middleware.js"
const router = Router();

router.route("/register").post(
    registerUser
)

router.route("/login").post(loginUser)
router.route("/user").get(verifyJWT,getUser)
export default router


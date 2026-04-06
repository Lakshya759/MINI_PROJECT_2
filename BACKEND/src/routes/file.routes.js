import {Router} from "express"
import { fileUpload,downloadFile,getAll,getSingle,myUpload,searchFile ,deleteFile,favouriteFile,getFavourites} from "../controller/files.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"
const router=Router()

router.route("/upload").post(
    verifyJWT,upload.single("file"),
    fileUpload
)
// router.route("/upload").post(
//     upload.single("file"),
//     fileUpload
// )
router.route("/download/:id").get(
    verifyJWT,downloadFile
)
router.route("/").get(
    getAll
)

router.route("/search").get(
    verifyJWT,searchFile
)
router.route("/delete/:id").delete(
    verifyJWT,deleteFile
)


router.route("/my/upload").get(
    verifyJWT,myUpload
)

router.route("/favourite").post(
    verifyJWT,favouriteFile
)

router.route("/getFavourite").get(
    verifyJWT,getFavourites
)
router.route("/:id").get(
    verifyJWT,getSingle
)










export default router
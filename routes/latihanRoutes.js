import {
    getData,getDataById,createDataById,updateDataById,deleteDataById
} from "../controller/latihanController.js"
import express from "express"

const router = express.Router()

router.get("/data",getData)
router.get("/data/:id",getDataById)
router.post("/data",createDataById)
router.patch("/data/:id",updateDataById)
router.delete("/data/:id",deleteDataById)

export default router;
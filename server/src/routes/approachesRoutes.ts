import express from "express";
import approachesController from "../controllers/approachesController.js";
import userApproachesController from "../controllers/userApproachesController.js";
import { verifyTokenToAuthorizeUser } from "../middlewares/userValidate.js";

const router = express.Router()

router.get("/", approachesController.findAllApproaches)
router.put("/updateStatus", verifyTokenToAuthorizeUser, userApproachesController.updateStatusForUserApproach)

export default router
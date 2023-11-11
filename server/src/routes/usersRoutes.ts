import express from 'express'

import UserAchievementsController from '../controllers/UserAchievementsController.js'
import UserApproachesController from '../controllers/userApproachesController.js'
import { verifyTokenToAuthorizeUser } from '../middlewares/userValidate.js'

const router = express.Router()

router.get(
  '/achievements',
  verifyTokenToAuthorizeUser,
  UserAchievementsController.findAllUserAchievements
)
router.post(
  '/approach',
  verifyTokenToAuthorizeUser,
  UserApproachesController.createUserApproach
)

export default router

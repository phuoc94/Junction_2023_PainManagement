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

router.get(
  '/approaches',
  verifyTokenToAuthorizeUser,
  UserApproachesController.findAllUserApproaches
)

router.post(
  '/approaches',
  verifyTokenToAuthorizeUser,
  UserApproachesController.createUserApproach
)

export default router

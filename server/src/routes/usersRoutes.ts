import express from 'express'

import UserAchievementsController from '../controllers/UserAchievementsController.js'
import UserApproachesController from '../controllers/userApproachesController.js'
import UsersController from '../controllers/usersController.js'
import {
  validateUpdateUser,
  verifyTokenToAuthorizeUser,
} from '../middlewares/userValidate.js'

const router = express.Router()

router.get(
  '/achievements',
  verifyTokenToAuthorizeUser,
  UserAchievementsController.findAllUserAchievements
)
router.post('/approach', UserApproachesController.createUserApproach)

router.get('/:userId', UsersController.findOneUser)

router.delete('/:userId', UsersController.deleteUser)
router.put('/:userId', validateUpdateUser, UsersController.updateUser)

export default router

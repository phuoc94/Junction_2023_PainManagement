import express from 'express'

import UserAchievementsController from '../controllers/UserAchievementsController.js'
import UserApproachesController from '../controllers/userApproachesController.js'
import UsersController from '../controllers/usersController.js'
import { validateUpdateUser } from '../middlewares/userValidate.js'

const router = express.Router()

router.get('/:userId', UsersController.findOneUser)

router.delete('/:userId', UsersController.deleteUser)
router.put('/:userId', validateUpdateUser, UsersController.updateUser)

router.post('/approach', UserApproachesController.createUserApproach)
router.get(
  '/:userId/achievements',
  UserAchievementsController.findAllUserAchievements
)

export default router

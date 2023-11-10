import express from 'express'
import UsersController from '../controllers/usersController.js'
import { validateUpdateUser } from '../middlewares/userValidate.js'

const router = express.Router()

router.get('/:userId', UsersController.findOneUser)

router.delete('/:userId', UsersController.deleteUser)
router.put('/:userId', validateUpdateUser, UsersController.updateUser)

export default router

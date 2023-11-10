import express from 'express'
import authController from '../controllers/authController.js'
import {
  validateEmailAndPasswordExists,
  validateEmailOrRequestNotEmptyInRegister
} from '../middlewares/userValidate.js'

const router = express.Router()

router.post('/registerUser', validateEmailOrRequestNotEmptyInRegister, authController.registerUser)
router.post('/login', validateEmailAndPasswordExists, authController.logIn)

export default router

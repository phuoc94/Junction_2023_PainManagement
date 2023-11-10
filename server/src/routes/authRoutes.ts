import express from 'express'
import authController from '../controllers/authController.js'
import {
  validateEmail,
  validateEmailAndPasswordExists,
} from '../middlewares/userValidate.js'

const router = express.Router()

router.post('/registerUser', validateEmail, authController.registerUser)
router.post('/login', validateEmailAndPasswordExists, authController.logIn)

export default router

import type { NextFunction, Request, Response } from 'express'
import authServices from '../services/authServices.js'
import { ApiError } from '../utils/ApiError.js'

async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authRequestBody = req.body

  const user = await authServices.registerUser(authRequestBody)

  if (user === null) {
    next(ApiError.badRequest('Email existed already, please insert another one'))
    return
  }
  res.status(201).json(user)
}

async function logIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authRequestForLogIn = req.body

  const userDataForLogIn = await authServices.logIn(authRequestForLogIn)

  if (userDataForLogIn === null) {
    next(ApiError.badRequest('Wrong credentials!'))
    return;
  }

  res.status(200).json(userDataForLogIn)
}
export default {
  registerUser,
  logIn
}

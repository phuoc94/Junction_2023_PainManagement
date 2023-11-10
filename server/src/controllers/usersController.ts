import type { NextFunction, Request, Response } from 'express'

import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function findOneUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userId = req.params.userId
  const user = await UsersServices.findOne(userId)

  if (user === null) {
    next(ApiError.notFound('User not found'))
    return
  } else if (user instanceof Error) {
    console.log(user.message)
    next(ApiError.badRequest('Bad request.', user.message))
    return
  }
  res.json(user)
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const deletedUserId = req.params.userId
  const user = await UsersServices.deleteUser(deletedUserId)

  if (user === null) {
    next(ApiError.notFound('User does not exist'))
    return
  } else if (user instanceof Error) {
    console.log(user.message)
    next(ApiError.badRequest('Bad request.', user.message))
    return
  }
  res.status(204).json(user)
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userId = req.params.userId
  const body = req.body
  const user = await UsersServices.updateUser(userId, body)
  if (user === null) {
    next(ApiError.notFound('User not found'))
    return
  } else if (user instanceof Error) {
    next(ApiError.badRequest('Bad request.', user.message))
    return
  }

  res.json(user)
}

export default {
  findOneUser,
  deleteUser,
  updateUser,
}

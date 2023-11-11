import type { NextFunction, Request, Response } from 'express'

import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function createUserApproach(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.params

  const { approachId } = req.body

  try {
    if (approachId === undefined) {
      next(ApiError.badRequest('approachId is missing'))
    }
    const newUserApproach = await UsersServices.createUserApproach(
      userId,
      approachId
    )
    res.json(newUserApproach)
  } catch (error) {
    next(ApiError.internal('something wrong happed'))
  }
}

export default {
  createUserApproach,
}

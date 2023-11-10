import type { NextFunction, Request, Response } from 'express'

import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function createUserApproach(req: Request, res: Response): Promise<void> {
  const userId = "654e649ab48b7a8f398cfc5e"
  const { approachId } = req.body
  const newUserApproach = await UsersServices.createUserApproach(userId, approachId)

  res.json(newUserApproach)
}

export default {
  createUserApproach
}
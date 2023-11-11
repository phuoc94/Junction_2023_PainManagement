import type { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

import userApproachModel from '../models/userApproachModel.js'
import approachesServices from '../services/approachesServices.js'
import painsServices from '../services/painsServices.js'
import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function createUserApproach(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.params
  const { approachId } = req.body

  if (approachId === undefined) {
    next(ApiError.badRequest('approachId is missing'))
    return
  }

  const approach = await approachesServices.findById(approachId)

  if (approach === null) {
    next(
      ApiError.notFound('This approach with this approach id does not exist!')
    )
    return
  }

  const newUserApproach = await UsersServices.createUserApproach(
    userId,
    approachId
  )

  if (newUserApproach === null) {
    next(ApiError.badRequest('This approach cannot be saved!'))
    return
  }
  res.status(201).json(newUserApproach)
}

export async function findAllUserApproaches(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.params

  try {
    const userApproaches = await UsersServices.findAllUserApproaches(userId)
    res.json(userApproaches)
  } catch (error) {
    next(ApiError.internal('something wrong happed'))
  }
}

export async function updateStatusForUserApproach(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.params
  const { approachId, painId } = req.body

  if (
    userId === null ||
    approachId === null ||
    painId === null ||
    approachId?.length === 0 ||
    painId?.length === 0 ||
    userId?.length === 0
  ) {
    next(ApiError.badRequest('Missing user id, approach id, or pain id'))
    return
  }
  const pain = await painsServices.findById(painId)

  if (pain === null) {
    next(ApiError.notFound('Cannot find this pain with this pain id'))
    return
  }

  const approaches = pain?.approaches

  if (!approaches?.includes(new mongoose.Types.ObjectId(approachId))) {
    next(ApiError.notFound(`This approach does not belong to this pain!`))
    return
  }

  let singleUserApproach = await userApproachModel.findOne({
    userId: userId,
    approachId: approachId,
  })

  if (singleUserApproach === null) {
    next(
      ApiError.notFound(
        'There is no user approach with this user id and approach id'
      )
    )
    return
  }

  switch (singleUserApproach?.status) {
    case 'not_started':
      singleUserApproach = await userApproachModel.findOneAndUpdate(
        { userId, approachId },
        { status: 'in_process' }
      )
      break
    case 'in_process':
      singleUserApproach = await userApproachModel.findOneAndUpdate(
        { userId, approachId },
        { status: 'completed' }
      )
      break
    case 'completed':
      break
    default:
      break
  }
  res.status(200).json(singleUserApproach)
}

export default {
  createUserApproach,
  findAllUserApproaches,
  updateStatusForUserApproach,
}

import type { NextFunction, Request, Response } from 'express'
import { type ObjectId } from 'mongoose'

import approachesServices from '../services/approachesServices.js'
import userApproachesService from '../services/userApproachesService.js'
import usersAchievementsServices from '../services/usersAchievementsServices.js'
import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function createUserApproach(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.params
  const { approachId } = req.body

  if (approachId === undefined || approachId.length === 0) {
    next(ApiError.badRequest('approachId is missing'))
    return
  }

  try {
    await approachesServices.findById(approachId)

    const newUserApproach = await UsersServices.createUserApproach(
      userId,
      approachId
    )

    if (newUserApproach === null) {
      next(ApiError.badRequest('This approach cannot be saved!'))
      return
    }
    res.status(201).json(newUserApproach)
  } catch (err) {
    next(
      ApiError.notFound('This approach with this approach id does not exist!')
    )
  }
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
  const { userApproachId } = req.body

  if (userApproachId.length === 0) {
    next(ApiError.notFound('There is no user approach id given'))
    return
  }

  try {
    let userApproach = await userApproachesService.findById(userApproachId)

    if (userApproach?.status === 'not_started') {
      userApproach =
        await userApproachesService.findByIdAndUpdateForStatusInProcess(
          userApproachId
        )

      res.status(200).json(userApproach)
    } else if (userApproach?.status === 'in_process') {
      userApproach =
        await userApproachesService.findByIdAndUpdateForStatusInCompleted(
          userApproachId
        )

      try {
        const approach = await approachesServices.findById(
          userApproach?.approachId as unknown as ObjectId
        )

        try {
          await usersAchievementsServices.createAchievementByUser(
            userApproach?.userId as unknown as ObjectId,
            approach?.achievement?._id as unknown as Uint8Array
          )

          res.status(200).json(userApproach)
        } catch (err) {
          next(ApiError.notFound('Cannot save this user achievement!'))
        }
      } catch (err) {
        next(
          ApiError.notFound('Cannot find this approach with this approach id')
        )
      }
    } else if (userApproach?.status === 'completed') {
      res.status(200).json(userApproach)
    }
  } catch (err) {
    next(ApiError.notFound('Cannot find this user approach id'))
  }
}

export default {
  createUserApproach,
  findAllUserApproaches,
  updateStatusForUserApproach,
}

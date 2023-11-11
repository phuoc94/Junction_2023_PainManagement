import type { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

import userApproachModel from '../models/userApproachModel.js'
import UsersServices from '../services/usersServices.js'
import { ApiError } from '../utils/ApiError.js'
import approachesServices from '../services/approachesServices.js'
import userAchievementModel from '../models/userAchievementModel.js'
import approachModel from '../models/approachModel.js'

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
    const approach = await approachModel.findById(approachId);

    const newUserApproach = await UsersServices.createUserApproach(
      userId,
      approachId
    )
  
    if (newUserApproach === null) {
      next(ApiError.badRequest('This approach cannot be saved!'))
      return
    }
    res.status(201).json(newUserApproach);
  } catch (err) {
    next(ApiError.notFound('This approach with this approach id does not exist!'));
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
  const { userApproachId } = req.body;

  if (userApproachId.length === 0) {
    next(ApiError.notFound("There is no user approach id given"));
    return;
  }
  
  try {
    let userApproach = await userApproachModel.findById(userApproachId);

    if (userApproach?.status === "not_started") {
      userApproach = await userApproachModel.findByIdAndUpdate(userApproachId, { status: "in_process"}, { new: true });

      res.status(200).json(userApproach);
      return;
    } else if (userApproach?.status === "in_process") {
      userApproach = await userApproachModel.findByIdAndUpdate(userApproachId, { status: "completed"}, { new: true });

      try {

        let approach = await approachModel.findById(userApproach?.approachId);

        try {

        const userAchievement = new userAchievementModel({
          userId: userApproach?.userId,
          achievementId: approach?.achievement?._id
        })

        await userAchievement.save()


        res.status(200).json(userApproach);

        } catch (err) {
          next(ApiError.notFound("Cannot save this user achievement!"));
        }

      } catch (err) {
        next(ApiError.notFound("Cannot find this approach with this approach id"));
      }
    } else if (userApproach?.status === "completed") {
      res.status(200).json(userApproach)
      return;
    }

  } catch (err) {
    next(ApiError.notFound("Cannot find this user approach id"));
  }
}

export default {
  createUserApproach,
  findAllUserApproaches,
  updateStatusForUserApproach,
}

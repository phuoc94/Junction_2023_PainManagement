import type { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import UsersServices from '../services/usersServices.js'
import painsServices from '../services/painsServices.js'
import userApproachModel from '../models/userApproachModel.js'
import { ApiError } from '../utils/ApiError.js'
import userModel from '../models/userModel.js'
import painModel from '../models/painModel.js'

export async function createUserApproach(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { userId } = req.params;
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

export async function updateStatusForUserApproach(req: Request, res: Response, next: NextFunction): Promise<void> {
  
    const { userId } = req.params;
    const { approachId, painId } = req.body; 

    if (userId === null || approachId === null || painId === null || approachId.length === 0 || painId.length === 0 || userId.length === 0 ) {
      next(ApiError.badRequest('Missing user id, approach id, or pain id'));
      return;
    }
    const pain = await painsServices.findById(painId);

    if (pain === null) {
      next(ApiError.notFound("Cannot find this pain with this pain id"))
      return;
    }

    const approaches = pain?.approachs;

    if (!approaches?.includes(new mongoose.Types.ObjectId(approachId))) {
      next(ApiError.notFound(`This approach does not belong to this pain!`));
      return;
    }

    let singleUserApproach = await userApproachModel.findOne({ userId: userId, approachId: approachId });

    if (singleUserApproach === null) {
      next(ApiError.notFound("There is no user approach with this user id and approach id"));
      return;
    }

    switch (singleUserApproach?.status) {
        case "not_started":
          singleUserApproach =  await userApproachModel.findOneAndUpdate({ userId, approachId}, { status: "in_process" });
        case "in_process": 
          singleUserApproach = await userApproachModel.findOneAndUpdate({ userId, approachId}, { status: "completed" });
        case "completed":
          singleUserApproach = singleUserApproach
        default:
          break;
    }
    res.status(200).json(singleUserApproach);
}

export default {
  createUserApproach,
  findAllUserApproaches,
  updateStatusForUserApproach
}

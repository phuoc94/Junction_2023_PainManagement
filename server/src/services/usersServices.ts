import mongoose from 'mongoose'

import UserApproachRepo from '../models/userApproachModel.js'
import UserRepo from '../models/userModel.js'
import { type User, type UserUpdate } from '../types/User.js'

async function findOne(userId: string): Promise<User | Error | null> {
  try {
    const id = new mongoose.Types.ObjectId(userId)
    const user = await UserRepo.findById(id)

    return user as User | null
  } catch (e) {
    const error = e as Error
    return error
  }
}

async function deleteUser(userId: string): Promise<User | Error | null> {
  try {
    const id = new mongoose.Types.ObjectId(userId)
    const result = await UserRepo.findByIdAndDelete(id).exec()
    return result as User | null
  } catch (e) {
    const error = e as Error
    return error
  }
}

async function updateUser(
  userId: string,
  payload: UserUpdate
): Promise<User | Error | null> {
  try {
    const id = new mongoose.Types.ObjectId(userId)
    const updatedUser = await UserRepo.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    }).exec()

    return updatedUser as User | null
  } catch (e) {
    const error = e as Error
    return error
  }
}

async function createUserApproach(user: string, approach: string) {
  try {
    const userId = new mongoose.Types.ObjectId(user)
    const approachId = new mongoose.Types.ObjectId(approach)
    const newUserApproach = new UserApproachRepo({
      userId,
      approachId,
      status: 'in_process',
    })
    await newUserApproach.save()
    return newUserApproach
  } catch (e) {
    const error = e as Error
    return error
  }
}

export default {
  findOne,
  deleteUser,
  updateUser,
  createUserApproach,
}

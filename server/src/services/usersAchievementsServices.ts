import { ObjectId } from 'mongoose';
import userAchievementModel from '../models/userAchievementModel.js'
import userModel from '../models/userModel.js';
import { type Achievement } from '../types/Achievement.js'

async function findAllAchievementsByUser(
  userId: string
): Promise<Achievement[]> {
  const achievements = await userAchievementModel
    .find({ userId })
    .populate({
      path: 'achievementId',
      select: '-__v',
    })
    .select('-_id')

  const transformedAchievements = achievements.map((a) => a.achievementId)
  return transformedAchievements as unknown as Achievement[]
}

async function createAchievementByUser (userId: ObjectId, achievementId : Uint8Array) {
  const userAchievement = new userAchievementModel({
    userId: userId,
    achievementId: achievementId
  })
  await userAchievement.save()
}

export default {
  findAllAchievementsByUser,
  createAchievementByUser
}

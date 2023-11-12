import { type ObjectId } from 'mongoose'

import UserAchievementModel from '../models/userAchievementModel.js'
import { type Achievement } from '../types/Achievement.js'

async function findAllAchievementsByUser(
  userId: string
): Promise<Achievement[]> {
  const achievements = await UserAchievementModel.find({ userId })
    .populate({
      path: 'achievementId',
      select: '-__v',
    })
    .select('-_id')

  const transformedAchievements = achievements.map((a) => a.achievementId)
  return transformedAchievements as unknown as Achievement[]
}

async function createAchievementByUser(
  userId: ObjectId,
  achievementId: Uint8Array
) {
  const userAchievement = new UserAchievementModel({
    userId,
    achievementId,
  })
  await userAchievement.save()
}

export default {
  findAllAchievementsByUser,
  createAchievementByUser,
}

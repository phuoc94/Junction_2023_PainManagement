import userAchievementModel from '../models/userAchievementModel.js'
import { type Achievement } from '../types/Achievement.js'

async function findAllAchievementsByUser(
  userId: string
): Promise<Achievement[]> {
  const achievements = await userAchievementModel
    .find({
      userId,
    })
    .populate('userId')
    .populate('achievementId')
  return achievements as unknown as Achievement[]
}

export default {
  findAllAchievementsByUser,
}

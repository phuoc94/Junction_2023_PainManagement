import userAchievementModel from '../models/userAchievementModel.js'
import userModel from '../models/userModel.js';
import { type Achievement } from '../types/Achievement.js'

async function findAllAchievementsByUser(
  userId: string
): Promise<Achievement[]> {
  const achievements = await userAchievementModel
    .find({
      userId,
    })
    .populate({
      path: 'userId',
      model: 'User',
      select: 'name email',
    })
    .populate('achievementId')
  return achievements as unknown as Achievement[]
}

export default {
  findAllAchievementsByUser,
}

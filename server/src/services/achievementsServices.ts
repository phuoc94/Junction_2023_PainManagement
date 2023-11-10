import AchievementRepo from '../models/achievementModel.js'
import { type Achievement } from '../types/Achievement.js'

async function findAll(): Promise<Achievement[]> {
  const achievements = await AchievementRepo.find().exec()
  return achievements as unknown as Achievement[]
}

export default {
  findAll,
}

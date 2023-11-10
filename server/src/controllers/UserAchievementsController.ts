import type { Request, Response } from 'express'

import usersAchievementsServices from '../services/usersAchievementsServices.js'

export async function findAllUserAchievements(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.params
  const achievements =
    await usersAchievementsServices.findAllAchievementsByUser(userId)
  res.json(achievements)
}

export default {
  findAllUserAchievements,
}

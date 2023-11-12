import type { Request, Response } from 'express'

import achievementsServices from '../services/achievementsServices.js'

export async function findAllAchievements(
  _: Request,
  res: Response
): Promise<void> {
  const achievements = await achievementsServices.findAll()
  res.json(achievements)
}

export default {
  findAllAchievements,
}

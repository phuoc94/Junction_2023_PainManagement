import type { Request, Response } from 'express'

import PainscategoriesServices from '../services/painsCategoriesServices.js'

export async function findAllPainsCategories(
  _: Request,
  res: Response
): Promise<void> {
  const pains = await PainscategoriesServices.findAll()

  res.json(pains)
}

export default {
  findAllPainsCategories,
}

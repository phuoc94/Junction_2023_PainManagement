import type { Request, Response } from 'express'

import PainsServices from '../services/painsServices.js'

export async function findAllPains(_: Request, res: Response): Promise<void> {
  const pains = await PainsServices.findAll()

  res.json(pains)
}

export async function findPainsByCategory(
  req: Request,
  res: Response
): Promise<void> {
  const pains = await PainsServices.findByCategory(req.params.id)

  res.json(pains)
}

export default {
  findAllPains,
  findPainsByCategory,
}

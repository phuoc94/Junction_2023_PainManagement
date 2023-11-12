import type { Request, Response } from 'express'

import approachesServices from '../services/approachesServices.js'

export async function findAllApproaches(
  _: Request,
  res: Response
): Promise<void> {
  const approaches = await approachesServices.findAll()

  res.json(approaches)
}

export default {
  findAllApproaches,
}

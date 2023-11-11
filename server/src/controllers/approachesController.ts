import type { NextFunction, Request, Response } from 'express'

import approachesServices from '../services/approachesServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function findAllApproaches(_: Request, res: Response): Promise<void> {
  const approaches = await approachesServices.findAll()

  res.json(approaches)
}

export default {
  findAllApproaches
}
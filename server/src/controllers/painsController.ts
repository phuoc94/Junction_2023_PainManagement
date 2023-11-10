import type { NextFunction, Request, Response } from 'express'

import PainsServices from '../services/painsServices.js'
import { ApiError } from '../utils/ApiError.js'

export async function findAllPains(_: Request, res: Response): Promise<void> {
  const pains = await PainsServices.findAll()

  res.json(pains)
}

export default {
  findAllPains
}
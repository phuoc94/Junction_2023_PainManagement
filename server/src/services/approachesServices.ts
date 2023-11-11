import mongoose from 'mongoose'

import ApproachRepo from '../models/approachModel.js'
import { ApiError } from '../utils/ApiError.js'

async function findAll() {
  const approaches = await ApproachRepo.find().exec()
  return approaches
}

export default {
  findAll,
}

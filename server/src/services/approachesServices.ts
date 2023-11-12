import mongoose, { ObjectId } from 'mongoose'

import ApproachRepo from '../models/approachModel.js'
import { ApiError } from '../utils/ApiError.js'

async function findAll() {
  const approaches = await ApproachRepo.find().exec()
  return approaches
}

async function findById (id : ObjectId) {

  const approach = await ApproachRepo.findById(id);

  return approach
}

export default {
  findAll,
  findById
}

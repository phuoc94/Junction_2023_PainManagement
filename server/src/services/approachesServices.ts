import mongoose from 'mongoose'

import ApproachRepo from '../models/approachModel.js'

async function findAll() {
  const approaches = await ApproachRepo.find().exec()
  return approaches
}

async function findById(id: string) {
  const newid = new mongoose.Types.ObjectId(id)
  try {
    const approach = await ApproachRepo.findById(newid)

    return approach
  } catch (e) {
    return null
  }
}

export default {
  findAll,
  findById,
}

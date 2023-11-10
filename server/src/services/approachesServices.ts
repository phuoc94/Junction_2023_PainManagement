import mongoose from 'mongoose'

import ApproachRepo from '../models/approachModel.js'

async function findAll() {
  const approaches = await ApproachRepo.find().exec()
  return approaches 
}

export default {
  findAll
}
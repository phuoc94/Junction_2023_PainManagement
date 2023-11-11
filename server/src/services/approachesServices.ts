import mongoose from 'mongoose'

import ApproachRepo from '../models/approachModel.js'

async function findAll() {
  const approaches = await ApproachRepo.find().exec()
  return approaches 
}

async function findById (id : string) {

  try {

    const approach = await ApproachRepo.findById(id);

    return approach;

  } catch (e) {
    return null;
  }
}

export default {
  findAll,
  findById
}
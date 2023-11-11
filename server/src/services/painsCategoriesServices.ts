import mongoose from 'mongoose'

import PainCategoryRepo from '../models/painCategoryModel.js'

async function findAll() {
  const painsCategories = await PainCategoryRepo.find().populate('pains').exec()
  return painsCategories
}

async function findById(categoryId: string) {
  const id = new mongoose.Types.ObjectId(categoryId)

  const category = await PainCategoryRepo.findById(id)
    .populate({
      path: 'pains',
      populate: {
        path: 'approachs',
        model: 'Approach',
      },
    })
    .exec()
  return category
}

export default {
  findAll,
  findById,
}

import mongoose from 'mongoose'

import PainCategoryRepo from '../models/painCategoryModel.js'

async function findAll() {
  const painsCategories = await PainCategoryRepo.find().populate('pains').exec()
  return painsCategories
}

async function findById(categoryId: string) {
  console.log(
    '🚀 ~ file: painsCategoriesServices.ts:11 ~ findById ~ categoryId:',
    categoryId
  )
  const id = new mongoose.Types.ObjectId(categoryId)
  console.log(
    '🚀 ~ file: painsCategoriesServices.ts:12 ~ findById ~ categoryId:',
    categoryId
  )
  const category = await PainCategoryRepo.findById(id).exec()
  return category
}

export default {
  findAll,
  findById,
}

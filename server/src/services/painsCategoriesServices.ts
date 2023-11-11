import PainCategoryRepo from '../models/painCategoryModel.js'

async function findAll() {
  const pains = await PainCategoryRepo.find().exec()
  return pains
}

export default {
  findAll,
}

import PainRepo from '../models/painModel.js'

async function findAll() {
  const pains = await PainRepo.find().exec()

  return pains
}

async function findByCategory(categoryId: string) {
  const pains = await PainRepo.find({ categoryId }).exec()

  return pains
}

export default {
  findAll,
  findByCategory,
}

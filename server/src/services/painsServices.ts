import PainRepo from '../models/painModel.js'

async function findAll() {
  const pains = await PainRepo.find().populate('approaches').exec()

  return pains
}

async function findByCategory(categoryId: string) {
  const pains = await PainRepo.find({ categoryId }).exec()

  return pains
}

async function findById(id: string) {
  try {
    const singlePain = await PainRepo.findById(id).exec()
    return singlePain
  } catch (err) {
    return null
  }
}

export default {
  findAll,
  findByCategory,
  findById,
}

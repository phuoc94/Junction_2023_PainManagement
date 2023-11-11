import PainRepo from '../models/painModel.js'

async function findAll() {
  const pains = await PainRepo.find().exec()
  return pains
}

export default {
  findAll,
}

import userApproachModel from '../models/userApproachModel.js'

async function findById(id: string) {
  return await userApproachModel.findById(id).exec()
}

async function findByIdAndUpdateForStatusInProcess(id: string) {
  return await userApproachModel
    .findByIdAndUpdate(id, { status: 'in_process' }, { new: true })
    .exec()
}

async function findByIdAndUpdateForStatusInCompleted(id: string) {
  return await userApproachModel
    .findByIdAndUpdate(id, { status: 'completed' }, { new: true })
    .exec()
}

export default {
  findById,
  findByIdAndUpdateForStatusInProcess,
  findByIdAndUpdateForStatusInCompleted,
}

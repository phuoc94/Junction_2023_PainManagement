import mongoose from 'mongoose'

const { Schema } = mongoose

const userApproachSchema = new Schema({
  userId: Schema.Types.ObjectId,
  approachId: Schema.Types.ObjectId,
  status: {
    type: String,
    enum : ['not_started', 'in_process','completed'],
    default: 'not_started'
}
},
{
  versionKey: false
})

export default mongoose.model('UserApproach', userApproachSchema)

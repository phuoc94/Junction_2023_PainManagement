import mongoose from 'mongoose'

const { Schema } = mongoose

const userApproachSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    approachId: { type: Schema.Types.ObjectId, ref: 'Approach' },
    status: {
      type: String,
      enum: ['not_started', 'in_process', 'completed'],
      default: 'not_started',
    },
  },
  {
    versionKey: false,
  }
)

export default mongoose.model('UserApproach', userApproachSchema)

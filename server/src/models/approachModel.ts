import mongoose from 'mongoose'

const { Schema } = mongoose

const approachSchema = new Schema({
  name: String,
  description: String,
  instructions: String,
  painId: mongoose.Types.ObjectId,
  details: [
    {
      name: String,
      description: String,
    },
  ],
  achievement: { type: Schema.Types.ObjectId, ref: 'Achievement' },
})

export default mongoose.model('Approach', approachSchema)

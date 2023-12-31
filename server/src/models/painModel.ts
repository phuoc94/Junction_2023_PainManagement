import mongoose from 'mongoose'

const { Schema } = mongoose

const painSchema = new Schema({
  name: String,
  description: String,
  approaches: [{ type: Schema.Types.ObjectId, ref: 'Approach' }],
})

export default mongoose.model('Pain', painSchema)

import mongoose from 'mongoose'

const { Schema } = mongoose

const painSchema = new Schema({
  name: String,
  description: String,
  categoryId: { type: Schema.Types.ObjectId, ref: 'PainCategory' },
})

export default mongoose.model('Pain', painSchema)

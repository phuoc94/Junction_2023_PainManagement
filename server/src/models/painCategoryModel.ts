import mongoose from 'mongoose'

const { Schema } = mongoose

const painCategorySchema = new Schema({
  name: String,
  description: String,
  img_url: String,
  pains: [{ type: Schema.Types.ObjectId, ref: 'Pain' }],
})

export default mongoose.model('PainCategory', painCategorySchema)

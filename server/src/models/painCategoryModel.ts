import mongoose from 'mongoose'

const { Schema } = mongoose

const painCategorySchema = new Schema({
  name: String,
  description: String,
  img_url: String,
})

export default mongoose.model('PainCategory', painCategorySchema)

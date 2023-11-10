import mongoose from 'mongoose'

const { Schema } = mongoose

const painSchema = new Schema({
  name: String,
  description: String
})

export default mongoose.model('Pain', painSchema)

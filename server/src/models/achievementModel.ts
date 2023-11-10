import mongoose from 'mongoose'

const { Schema } = mongoose

const achievementSchema = new Schema({
  name: String,
  description: String,
})

export default mongoose.model('Achievement', achievementSchema)

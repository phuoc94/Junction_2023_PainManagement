import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
})

export default mongoose.model('User', userSchema)

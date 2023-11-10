import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phoneNumber: String,
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
})

export default mongoose.model('User', userSchema)

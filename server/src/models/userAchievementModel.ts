import mongoose from 'mongoose'

const { Schema } = mongoose

const achievementSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  achievementId: { type: Schema.Types.ObjectId, ref: 'Achievement' },
})

export default mongoose.model('UserAchievement', achievementSchema)

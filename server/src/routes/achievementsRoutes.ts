import express from 'express'

import achievementsController from '../controllers/achievementsController.js'

const router = express.Router()

router.get('/', achievementsController.findAllAchievements)

export default router

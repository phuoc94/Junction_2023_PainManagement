import express from 'express'

import approachesController from '../controllers/approachesController.js'

const router = express.Router()

router.get('/', approachesController.findAllApproaches)

export default router

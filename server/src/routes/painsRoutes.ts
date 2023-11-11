import express from 'express'

import painsController from '../controllers/painsController.js'

const router = express.Router()

router.get('/', painsController.findAllPains)

export default router

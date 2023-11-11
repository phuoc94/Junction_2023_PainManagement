import express from 'express'

import painsController from '../controllers/painsCategoriesController.js'

const router = express.Router()

router.get('/', painsController.findAllPainsCategories)

export default router

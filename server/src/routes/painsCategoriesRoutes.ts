import express from 'express'

import painsCategoriesController from '../controllers/painsCategoriesController.js'
import painsController from '../controllers/painsController.js'

const router = express.Router()

router.get('/', painsCategoriesController.findAllPainsCategories)
router.get('/:categoryId', painsCategoriesController.findPainById)

router.get('/:categoryId/pain', painsController.findPainsByCategory)

export default router

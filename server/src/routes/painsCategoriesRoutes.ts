import express from 'express'

import painsCategoriesController from '../controllers/painsCategoriesController.js'

const router = express.Router()

router.get('/', painsCategoriesController.findAllPainsCategories)

export default router

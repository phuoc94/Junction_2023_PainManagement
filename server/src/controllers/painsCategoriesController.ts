import type { Request, Response } from 'express'

import PainscategoriesServices from '../services/painsCategoriesServices.js'

export async function findAllPainsCategories(
  _: Request,
  res: Response
): Promise<void> {
  const pains = await PainscategoriesServices.findAll()

  res.json(pains)
}

export async function findPainById(req: Request, res: Response): Promise<void> {
  try {
    const { categoryId } = req.params
    const pains = await PainscategoriesServices.findById(categoryId)
    if (pains == null) throw new Error('Pain not found')
    res.status(200).send({ data: pains })
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({ error: error.message })
    } else {
      res.status(500).send('somthing wrong happed')
    }
  }
}

export default {
  findAllPainsCategories,
  findPainById,
}

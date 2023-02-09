import { Request, Response } from 'express'
import { Category } from '../../models/Category'

export async function listCategories(req: Request, res: Response) {

  try {
    const categories = await Category.find().sort({ createdAt: -1 })//.select('-__v -_id')
    res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Internal error',
    })
  }
}
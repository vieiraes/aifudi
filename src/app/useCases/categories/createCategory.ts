import { Request, Response } from 'express'
import { Category } from '../../models/Category'

export async function createCategory(req: Request, res: Response) {

  try {

    const { name, icon } = req.body

    if (!name || !icon) {
      return res.status(400).json({
        message: 'Not all fields have been entered.'
      })
    }

    const object = {
      name: name,
      icon: icon,
      date: Date.now()
    }

    const category = await Category.create(object)
    res.status(201).json({
      message: 'object created',
      category
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Internal error'
    })
  }
}
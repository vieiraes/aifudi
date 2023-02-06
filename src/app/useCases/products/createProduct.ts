import { Request, Response } from 'express'
import { Product } from '../../models/Product'

const errorMessages = {
  name: 'O campo name é obrigatório.',
  description: 'O campo description é obrigatório.',
  price: `O campo price é obrigatório e deve ser do typo 'number'.`,
  categoryId: 'O campo categoryId é obrigatório.',
}


export async function createProduct(req: Request, res: Response) {
  const { name, description, price, categoryId } = req.body
  try {
    if (!name) return res.status(400).json({ message: errorMessages.name })
    if (!description) return res.status(400).json({ message: errorMessages.description })
    if (!price || typeof (price) !== 'number') return res.status(400).json({ message: errorMessages.price })
    if (!categoryId) return res.status(400).json({ message: errorMessages.categoryId })


    const object = {
      name,
      description,
      price,
      categoryId,
      createdAt: Date.now()
    }
    const product = await Product.create(object)
    res.status(201).json({product})

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'error'
    })
  }
}
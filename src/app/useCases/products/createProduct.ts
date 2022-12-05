import { Request, Response } from 'express'
import { Product } from '../../models/Product'


export async function createProduct(req: Request, res: Response) {

  try {

    const { name, description, image, price, ingredients, categoryId } = req.body

    // if (!name || !description || !image || !price || !ingredients || !categoryId) {
    //   return res.status(400).json({
    //     message: 'Not all fields have been entered.'
    //   })
    // }

    const object = {
      name,
      description,
      image,
      price,
      ingredients,
      categoryId,
      createdAt: Date.now()
    }

    Product.create(object)



  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'error'
    })
  }

}
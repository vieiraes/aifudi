import { Request, Response } from "express"
import { Product } from "../../models/Product"


export async function createProduct(req: Request, res: Response) {

  try {

    const { name, descriptiom, imagePath, price, ingredients, category } = req.body

    const object = { name, descriptiom, imagePath, price, ingredients, category }
    Product.create(object)


  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "error"
    })
  }

}
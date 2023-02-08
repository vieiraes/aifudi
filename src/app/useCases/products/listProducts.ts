import { Request, Response } from "express"

import { Product } from "../../models/Product"

export async function listProducts(req: Request, res: Response) {

  try {
    const products = await Product.find().sort({createdAt: -1})

    const object = {
      products
    }

    res.status(200).json(object)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}
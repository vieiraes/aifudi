import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, productId, quantity } = req.body
    const object = {
      createdAt: Date.now(),
      table: table,
      products: {
        productId: productId,
        quantity: quantity
      },
    }
    const order = await Order.create(object)
    res.status(201).json({ order })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'error'
    })
  }
}
import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function createOrder(req: Request, res: Response) {


  try {
    const { table, type, quantity } = req.body

    const object = {
      createdAt: Date.now(),
      table: table,
      products: {
        type: type,
        quantity: quantity
      },
    }

    const order = await Order.create(object)

    res.status(201).json({
      order: order
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'error'

    })

  }

}
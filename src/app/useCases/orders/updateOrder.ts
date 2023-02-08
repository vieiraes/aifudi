import { Request, Response } from "express";
import { Order } from '../../models/Order'

export async function updateOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params
    const { status } = req.body
    if (!status || !orderId) {
      res.status(401).json({ message: 'Status or OrderId missing' })
    }
    const data = await Order.findByIdAndUpdate(orderId, { status: status })
    const object = {
      data
    }
    res.status(200).json({
      message: 'order udpated',
      object
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error updateing order status' })
  }

}//final
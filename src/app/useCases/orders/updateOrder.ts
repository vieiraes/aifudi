import { Request, Response } from "express"
import { Order } from '../../models/Order'
import { OrderStatusENUM } from '../../../enums/orderValues.enum'


export async function updateOrder(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!status || status == "") {
      return res.status(401).json({ message: 'status missing' })
    }
    if (!id || id == "") {
      return res.status(401).json({ message: 'orderId missing' })
    }

    const isValidStatus = Object.values(OrderStatusENUM).includes(status)
    if (!isValidStatus) {
      return res.status(401).json({ message: 'status not valid' })
    }

    const data = await Order.findByIdAndUpdate(id, {
      status: status,
      updatedAt: Date.now()
    })

    if (!data) {
      res.status(404).json({ message: 'order not found' })
    }
    const dataUpdated = await Order.findByIdAndUpdate(id, { status: status })

    const object = { dataUpdated }
    res.status(200).json({
      message: 'order udpated',
      object
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error updating order status' })
  }

}//final
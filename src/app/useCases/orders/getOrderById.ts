import { Request, Response } from "express"
import { Order } from "../../models/Order"

export async function getOrderById(req: Request, res: Response) {
  try {
    const { id } = req.params
    const order = await Order.findById(id)

    const object = {
      order
    }
    res.status(200).json(object)

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "error"
    })

  }


}
import { Request, Response } from "express"

import { Order } from "../../models/Order"

export async function getOrder(req: Request, res: Response) {

  try {

    const orders = Order.find()

    if ((await orders).length == 0) {
      return res.status(404).json({
        message: "no orders found!"
      })
    }

    res.status(200).json({
      orders
    })


  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "error"
    })

  }



}
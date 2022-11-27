import { Request, Response } from "express"

import { Category } from "../../models/Category"

export async function createCategory(req: Request, res: Response) {



  try {

    const { name, icon } = req.body

    if (!name) {
      return res.status(400).json({
        message: "Name is required"
      })
    }

    const category = await Category.create({ icon, name })

    const object = {
      message: "object created",
      category
    }

    res.status(201).json(object)

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "Internal error"
    })
  }
}
import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function requestCategoryById(req: Request, res: Response) {

  try {
    const { id } = req.params
    if (!id) {
      return res.status(401).json({ message: 'error id' })
    }
    const objectReturn = await Category.findById(id)

    if (!objectReturn || null) {
      return res.status(401).json({ message: 'object not found' })
    }
    const object = {
      objectReturn
    }
    res.status(200).json({
      messgae: 'id found',
      objectReturn
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Error' })
  }

}//final
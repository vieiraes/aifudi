import { Request, Response } from "express";
import { Category } from '../../models/Category'

export async function deleteCategory(req: Request, res: Response) {

  try {
    const { id } = req.params
    if (id == null || id == '') {
      return res.status(400).json({ message: 'Required id param' })
    }
    if (!id) {
      return res.status(404).json({ message: 'Not found' })
    }

    const data = await Category.findByIdAndRemove(id)
    if (!data) {
      return res.status(404).json({ message: `categoryId not found` })
    }
    res.status(200).json({ message: `${id} deleted.` })

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Internal Error' })
  }
}//final

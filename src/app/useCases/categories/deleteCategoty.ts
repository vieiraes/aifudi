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
    res.status(200).json({ message: `${data} deleted.` })

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Internal Error' })
  }




}//final

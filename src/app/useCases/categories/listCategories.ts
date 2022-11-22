import { Request, Response } from "express"

import { Category } from "../../models/Category"

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find()

  res.status(200).json(categories)
}


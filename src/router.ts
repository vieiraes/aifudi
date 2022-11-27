import { Request, Response, Router } from "express"
import { listCategories } from "./app/useCases/categories/listCategories"
import { createCategory } from "./app/useCases/categories/createCategory"
import { listProducts } from "./app/useCases/products/listProducts"
import { createProduct } from "./app/useCases/products/createProduct"
import { getOrder } from "./app/useCases/orders/getOrder"
import { createOrder } from "./app/useCases/orders/createOrder"

export const router = Router()

router.get("/categories", listCategories)
router.post("/categories", createCategory)
router.get("/products", listProducts)
router.post("/products", createProduct)
router.get("/orders", getOrder)
router.post("/orders", createOrder)

router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK")
})


router.delete("/orders/:id", (req: Request, res: Response) => {
  res.send("OK")
})

router.patch("/orders/:orderId", (req, res) => {
  res.send("OK")
})

router.get("/products/:id", (req, res) => {
  res.send("OK")
})
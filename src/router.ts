import { Request, Response, Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'
import { listProducts } from './app/useCases/products/listProducts'
import { createProduct } from './app/useCases/products/createProduct'
import { getOrder } from './app/useCases/orders/getOrder'
import { createOrder } from './app/useCases/orders/createOrder'
import { uploadMiddelware } from './app/middelwares'

export const router = Router()



// const upload = multer({

//   storage: multer.diskStorage({
//     destination(req: Request, file, callback) {
//       callback(null, path.resolve(__dirname, '..', 'uploads'))
//     }
//   })
// })

router.get('/categories', listCategories)
router.post('/categories', createCategory)
router.get('/products', listProducts)
router.post('/products', uploadMiddelware, createProduct)
router.get('/orders', getOrder)
router.post('/orders', createOrder)

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})


router.delete('/orders/:id', (req: Request, res: Response) => {
  res.send('OK')
})

router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

router.get('/products/:id', (req, res) => {
  res.send('OK')
})
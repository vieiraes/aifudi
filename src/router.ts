import { Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'
import { listProducts } from './app/useCases/products/listProducts'
import { createProduct } from './app/useCases/products/createProduct'
import { listOrders } from './app/useCases/orders/getOrder'
import { createOrder } from './app/useCases/orders/createOrder'
import { deleteCategory } from './app/useCases/categories/deleteCategoty'
import { updateOrder } from './app/useCases/orders/updateOrder'

// import { uploadMiddelware } from './app/middelwares'

export const router = Router()

// const upload = multer({

//   storage: multer.diskStorage({
//     destination(req: Request, file, callback) {
//       callback(null, path.resolve(__dirname, '..', 'uploads'))
//     }
//   })
// })


//V1 routes
router.get('/v1/categories', listCategories)
router.post('/v1/categories', createCategory)
router.delete('/v1/categories/:id', deleteCategory)

router.get('/v1/products', listProducts)
router.post('/v1/products', createProduct)

router.get('/v1/orders', listOrders)
router.post('/v1/orders', createOrder)
router.patch('/v1/orders/:id/status', updateOrder)
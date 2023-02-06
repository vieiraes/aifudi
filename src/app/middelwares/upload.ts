import path, { extname } from 'node:path'
import multer from 'multer'


export async function uploadMiddelware() {

  const multerUpload = multer({
    storage: multer.diskStorage({
      destination: path.resolve(__dirname, '..', 'uploads'),
      filename: (req, file, cb) => {

        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        const fileExtension = extname(file.originalname)
        const filename = file.originalname.split(fileExtension)[0]

        cb(null, `${filename}-${uniqueSuffix}.${fileExtension}`)
      },

    }),
    fileFilter: {},
    limits: {}
  })

  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, path.resolve(__dirname, '..', 'uploads'))
  //   },
  //   filename: (req, file, cb) => {
  //     cb(null, file.fieldname + uniqueSuffix)

  //   }
  // })

  return multer({ storage: storage }).single('image')
}

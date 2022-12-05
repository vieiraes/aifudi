import path from 'node:path'
import multer from 'multer'

export async function uploadMiddelware() {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + uniqueSuffix)

    }
  })

  return multer({ storage: storage }).single('image')
}

import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'

try {
  mongoose.set('strictQuery', false)
  mongoose.connect('mongodb://localhost:27017/db_aifudi', { serverSelectionTimeoutMS: 5000 })
    .then(() => {
      const app = express()
      const port = 3333

      app.use(express.json()) //tem que usar sempre antes do router
      app.use(router)
      app.listen(3333, () => {
        console.log(`Server started on port ${port}!`)
      })
      console.log('Connected to DB')
    })
} catch (error) {
  console.log('erro ao conectar', error)
}

// function mongoValidations() {
//   mongoose.connection.on('error', (err) => {
//     console.log('Erro ao conectar DB', err)
//   }
//   )
//   mongoose.connection.on('connected', () => {
//     console.log('Connected to DB')
//   }
//   )
//   mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected from DB')
//   }
//   )
//   mongoose.connection.on('reconnected', () => {
//     console.log('Reconnected to DB')
//   }
//   )
//   mongoose.connection.on('timeout', () => {
//     console.log('Timeout to DB')
//   }
//   )
//   mongoose.connection.on('close', () => {
//     console.log('Close to DB')
//   }
//   )
//   mongoose.connection.on('open', () => {
//     console.log('Open to DB')
//   }
//   )
// }
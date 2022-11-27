import express from "express"
import mongoose from "mongoose"
import { router } from "./router"


mongoose.connect("mongodb://172.17.0.3:27017")
  .then(() => {

    const app = express()
    const port = 3333

    app.use(express.json())
    app.use(router)
    app.listen(3333, () => {
      console.log(`Server started on port ${port}!`)
    })

    console.log("Connected to DB")
  })
  .catch((err) => {
    console.log("erro ao conectar", err)
  }
  )
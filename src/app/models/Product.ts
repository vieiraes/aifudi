import { model, Schema } from "mongoose"

export const Product = model("Product", new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  imagePath: String,
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [{
      name: String,
    }, {
      icon: String
    }],
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  }
}))
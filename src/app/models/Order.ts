import { model, Schema } from "mongoose"

export const Order = model("Order", new Schema({
  table: {
    type: Schema.Types.String,
    required: true
  },
  status: {
    type: Schema.Types.String,
    enum: ["WAITING", "IN_PRODUCTION", "DONE"],
    default: "WAITING"
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
    required: false
  },
  updatedAt: {
    type: Schema.Types.Date,
    default: null,
  },
  products: {
    minlength: 1,
    required: true,
    type: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Schema.Types.Number,
        default: 1,
      }
    }]
  }
}))
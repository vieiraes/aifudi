import { model, Schema } from "mongoose"

export const Order = model("Order", new Schema({
  table: {
    type: String,
  },
  status: {
    type: String,
    enum: ["WAITING", "IN_PRODUCTION", "DONE"],
    default: "WAITING"
  },
  createdAT: {
    type: Date,
    default: Date.now
  },
  produtcs: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1
      }
    }]
  }

}))
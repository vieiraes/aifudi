import { model, Schema } from "mongoose"

export const Order = model("Order", new Schema({
  table: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.String,
    enum: ["WAITING", "IN_PRODUCTION", "DONE"],
    default: "WAITING"
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now, //executa qunado o MONGOOSE executar e não quando o código for executado
    required: false
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
        type: Schema.Types.Number,
        default: 1
      }
    }]
  }

}))
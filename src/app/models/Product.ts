import { model, Schema } from 'mongoose'

export const Product = model('Product', new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: false
  },
  price: {
    type: Schema.Types.Number,
    required: true
  },
  // ingredients: {
  //   required: true,
  //   type: [{
  //     name: {
  //       type: Schema.Types.String,
  //       required: true
  //     }
  //   }, {
  //     icon: {
  //       type: Schema.Types.String,
  //       required: true
  //     }
  //   }]
  // },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now, //executa quando o MONGOOSE executar, e não quando o código for executado
    required: false
  }
}))
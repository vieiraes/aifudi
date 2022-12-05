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
  image: {
    type: Schema.Types.String,
    required: false
  },
  price: {
    type: Schema.Types.String,
    required: true
  },
  ingredients: {
    required: true,
    type: [{
      name: {
        type: Schema.Types.String,
        required: true
      }
    }, {
      icon: {
        type: Schema.Types.String,
        required: true
      }
    }]
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now, //executa qunado o MONGOOSE executar e não quando o código for executado
    required: false
  }
}))
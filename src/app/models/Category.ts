import { model, Schema } from 'mongoose'

export const Category = model('Category', new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  icon: {
    type: Schema.Types.String,
    required: true
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now, //executa qunado o MONGOOSE executar e não quando o código for executado
    required: false
  }
}))
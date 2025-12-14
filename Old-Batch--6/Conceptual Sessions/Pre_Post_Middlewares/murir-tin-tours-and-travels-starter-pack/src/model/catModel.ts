import { model, Schema } from 'mongoose'
import {
  ICat,
  ICatMethods,
  ICatModelStatic,
} from '../interface/Cat.interface'
import bcrypt from 'bcrypt'

const catSchema = new Schema<ICat, ICatModelStatic, ICatMethods>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
  age: {
    type: Number,
  },
  color: {
    type: String,
  },
  secret: {
    type: String,
  },
})

/* ======================
   STATIC METHODS
====================== */
catSchema.statics.generateIdStatic = async function () {
  const lastCat = await this.findOne().sort({ id: -1 }).exec()

  if (!lastCat) {
    return 1
  }

  return lastCat.id + 1
}

/* ======================
   INSTANCE METHODS
====================== */
catSchema.methods.generateId = async function () {
  console.log('Generate ID instance method')
}

/* ======================
   PRE MIDDLEWARE
====================== */
catSchema.pre('save', async function () {

  if (this.secret) {
    this.secret = await bcrypt.hash(this.secret, 12)
  }
})

/* ======================
   POST MIDDLEWARE
====================== */
catSchema.post('save', function (doc) {
  console.log('Saved Cat:', doc)
})

export const Cat = model<ICat, ICatModelStatic>('Cat', catSchema)

import { model, Schema } from 'mongoose'
// import { CatModel, ICat } from '../interface/Cat.interface'
import { ICat, ICatModelStatic } from '../interface/Cat.interface'
import bcrypt from 'bcrypt'
// import config from '../config'
// const catSchema = new Schema<ICat, CatModel, ICatMethods>({
//   id: {
//     type: Number,
//     // required: true,
//     // unique: true,
//   },

//   name: {
//     type: String,
//     // required: true,
//   },
//   age: {
//     type: Number,
//   },
//   color: {
//     type: String,
//   },
//   secret: { type: String },
// })

//instance methods

// catSchema.methods.generateId = async function () {
//   try {
//     const lastCat = await Cat.find().sort({ _id: 1 }).exec()

//     if (!lastCat) {
//       return 1
//     }
//     return lastCat.id + 1
//   } catch (error) {
//     console.log('Error Found')
//   }
// }

// export const Cat = model<ICat, CatModel>('Cat', catSchema)
//static methods

const catSchema = new Schema<ICat, ICatModelStatic>({
  id: {
    type: Number,
    required: true,

  },

  name: {
    type: String,
    unique: true,
    // required: true,
  },
  age: {
    type: Number,
  },
  color: {
    type: String,
  },
  secret: { type: String },
})
catSchema.statics.generateIdStatic = async function () {
  try {
    const lastCat = await Cat.findOne().sort({ _id: -1 }).exec()

    if (!lastCat) {
      return 1
    }
    return lastCat.id + 1
  } catch (error) {
    console.log('Error Found')
  }
}
//pre middle ware
catSchema.pre('save', async function () {
  try {
    this.secret = await bcrypt.hash(this.secret as string, 12)
  } catch (error) {
    console.log(error)
  }
})
catSchema.post('save', async function () {
  console.log(this)
})
export const Cat = model<ICat, ICatModelStatic>('Cat', catSchema)

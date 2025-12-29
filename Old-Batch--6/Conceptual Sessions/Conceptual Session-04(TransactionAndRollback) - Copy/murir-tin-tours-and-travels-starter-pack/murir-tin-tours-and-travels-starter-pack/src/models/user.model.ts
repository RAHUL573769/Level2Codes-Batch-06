import { Document, model, Query, Schema } from 'mongoose'
import { IUser } from '../interface/user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please Enter User Name'],
    unique: true,
  },

  age: { type: Number },

  email: { type: String, unique: true, lowercase: true },
  photo: {
    type: String,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  userStatus: {
    type: String,
    enum: ['active', 'in-active'],
  },
})
//Pre hook for query middleware
// userSchema.pre('find', function (next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ role: { $eq: 'user' } })
  next()
})

const User = model<IUser>('User', userSchema)
export default User

/* eslint-disable @typescript-eslint/ban-types */
import { Model } from 'mongoose'

export type ICat = {
  id: number
  name: string
  age: number

  color?: string
  secret?: string
}

//instance methods
export type ICatMethods = {
  generateId(): Promise<void>
}
export type CatModel = Model<ICat, {}, ICatMethods>

//static methods
// export type CatModel = Model<ICat, {}, ICatMethods>
export interface ICatModelStatic extends Model<ICat> {
  generateIdStatic(): Promise<void>
}

// export type CatModel = Model<ICat, {}, ICatMethods>

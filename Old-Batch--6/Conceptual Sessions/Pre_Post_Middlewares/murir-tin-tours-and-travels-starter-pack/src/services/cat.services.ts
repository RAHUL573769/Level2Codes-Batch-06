/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICat } from '../interface/Cat.interface'
import { Cat } from '../model/catModel'

// const addCat = async function (catData: ICat): Promise<ICat> {
//   // const result = await Cat.create(catData)
//   const result = new Cat(catData)

//   const id = await result.generateId()

//   console.log('Id', id)
//   return result
// }
const addCat = async (catData: ICat): Promise<ICat> => {
  const id = await Cat.generateIdStatic()
  const result = await Cat.create(catData)

  // const cat = new Cat({ ...catData, id })
  // const savedCat = await cat.save()

  // // convert to plain object
  const catObject = result.toObject()

  // // remove sensitive field
  delete catObject.secret

  return result
}


const getCat = async (): Promise<ICat[]> => {
  const data = await Cat.find()
  return data
}

export const CatServices = { addCat, getCat }

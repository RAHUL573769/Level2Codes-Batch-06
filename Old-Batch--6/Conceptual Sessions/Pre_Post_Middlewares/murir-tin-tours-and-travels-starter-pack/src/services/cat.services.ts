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
const addCat = async function (catData: ICat): Promise<ICat> {
  // const result = await Cat.create(catData)
  // const id = await result.generateId()
  //custom statics method
  // const catId = await Cat.generateIdStatic()

  // const data = { ...catData, id: catId }

  const result = await Cat.create(catData)
  console.log('Result', result)
  return result
}

const getCat = async (): Promise<ICat[]> => {
  const data = await Cat.find()
  return data
}

export const CatServices = { addCat, getCat }

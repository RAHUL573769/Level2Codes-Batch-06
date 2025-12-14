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
  // generate id using static method
  const id = await Cat.generateIdStatic()

  // attach id
  const cat = new Cat({ ...catData, id })
// const data = cat.ge

  // save to DB
  const result = await cat.save()
  console.log(await Cat.generateIdStatic())
  console.log('Id:', id)
  // console.log('Result:', result)

  return result
}

const getCat = async (): Promise<ICat[]> => {
  const data = await Cat.find()
  return data
}

export const CatServices = { addCat, getCat }

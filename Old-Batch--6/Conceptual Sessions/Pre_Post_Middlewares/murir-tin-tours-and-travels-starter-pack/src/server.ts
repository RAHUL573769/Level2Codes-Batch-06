import mongoose from 'mongoose'
import app from './app'
import config from './config'

const port = config.PORT
async function server() {
  try {
    // await mongoose.connect(config.DATABASE_URL as string)
    await mongoose.connect(config.DATABASE_LOCAL as string)

    // console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Connected to port ${config.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()

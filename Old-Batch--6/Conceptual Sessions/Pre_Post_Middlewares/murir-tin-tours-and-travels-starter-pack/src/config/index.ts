import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_LOCAL: process.env.DATABASE_LOCAL,

  BCRYPT: process.env.BCRYPT_SALT_ROUNDS,
}

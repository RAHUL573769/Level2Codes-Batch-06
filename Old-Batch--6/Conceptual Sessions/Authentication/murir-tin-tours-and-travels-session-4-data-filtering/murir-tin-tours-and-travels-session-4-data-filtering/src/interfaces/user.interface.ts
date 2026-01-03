interface IUser {
  name: string
  age: number
  email: string
  password: string
  passwordChamgedAt: Date
  photo: string
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}

export { IUser }

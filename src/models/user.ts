export interface IUser {
    id: number
    img:string
    name: string
    email: string
    attending: number[]
    meetupOwner: number[]
  }
  
  export interface IUserPassword extends IUser {
    password: string
  }
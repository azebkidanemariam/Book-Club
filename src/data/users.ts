import { IUser, IUserPassword } from '../models/user'

const users: IUserPassword[] = [
  {
    id: 1,
    img:'https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png',
    name: 'Azeb',
    email: 'azeb@email.com',
    password: 'Azeb',
    attending: [3, 4, 5],
    meetupOwner: [1, 2],
  },
  {
    id: 2,
    img:'https://image.freepik.com/free-photo/emotion-joy-face-mixed-race-girl-white_8119-2447.jpg',
    name: 'Rut',
    email: 'rut@email.com',
    password: 'Rut',
    attending: [1,3,4,5],
    meetupOwner: [3, 4, 5],
  },
  {
    id: 3,
    img:'https://img.mensxp.com/media/content/2020/Jun/img-mobile-04_5ef09b43521a7.jpeg',
    name: 'Dimby',
    email: 'dimby@email.com',
    password: 'Dimby',
    attending: [1, 4, 3,5],
    meetupOwner: [6],
  },
  { id: 4, 
    img:'https://www.face.eu/wp-content/uploads/2018/09/Torbjorn-Larsson.jpg',
    name: 'Ezra', 
    email: 'ezra@email.com',
     password: 'Ezra', 
     attending: [3,4,5], meetupOwner: [] },
  { id: 5,
     img:'https://studycli.org/wp-content/uploads/2019/12/chinese-beauty-standards-001.jpeg',
     name: 'Hosanna',
      email: 'hosanna@email.com', 
      password: 'Hosanna', 
      attending: [5,6,3,4], 
      meetupOwner: [] },
]

export const validateUser = (email: string, password: string): IUser | undefined => {
  const user = users.find(user => user.email === email)

  return user && user.password === password
    ? { id: user.id, img: user.img,name: user.name, email: user.email, attending: user.attending, meetupOwner: user.meetupOwner }
    : undefined
}
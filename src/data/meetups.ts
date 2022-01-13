import { IComment } from '../models/Comment'
import { IMeetup } from '../models/meetup'

const meetups: IMeetup[] = [
  {
  id: 1,
  img: "https://i1.wp.com/thelowkeymedic.com/wp-content/uploads/2020/06/educated-tara-westover-book.jpg?fit=1500%2C1000&ssl=1",
  title: 'Educated',
  startDate: new Date('2022-12-17T13:00:00'),
  endDate: new Date('2022-12-17T15:00:00'),
  hostName: 'Rut',
  hostImage:'https://image.freepik.com/free-photo/emotion-joy-face-mixed-race-girl-white_8119-2447.jpg',
  description:
   'Educated is primarily retrospective, consisting of Tara Westovers memories about her past. She tells the story of the events of her life from a vantage point in her late twenties, occasionally interjecting to comment on the process of trying to arrive at an accurate version of the past.',
  location: '10 Main Street, London',
  attendees: ['Chris', 'Joe'],
  attendeeLimit: 20,
  comments: [],
  rating: [],
},
  {
    id: 2,
    img: " https://images.penguinrandomhouse.com/cover/700jpg/9780307879387",
    title: 'I Know why the caged bird Sings',
    startDate: new Date('2022-12-27T13:00:00'),
    endDate: new Date('2022-12-27T15:00:00'),
    hostName: 'Azeb',
    hostImage:'https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png',
    description:
      'In I Know Why the Caged Bird Sings, Maya Angelou describes her coming of age as a precocious but insecure black girl in the American South during the 1930s and subsequently in California during the 1940s.',
    location: '10 Main Street, London',
    attendees: [],
    attendeeLimit: 50,
    comments: [],
    rating: [],
  },
  
   
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wkkgXtrYSKNtsqWjDpUlrq-d7yT9sSWTfw&usqp=CAU',
    title: 'Thinking Fast and Slow ',
    startDate: new Date('2021-12-07T19:00:00'),
    endDate: new Date('2021-12-07T19:30:00'),
    hostName: 'Dimby',
    hostImage:'https://img.mensxp.com/media/content/2020/Jun/img-mobile-04_5ef09b43521a7.jpeg',
    description:
      'Thinking, Fast and Slow is a masterful book on psychology and behavioral economics by Nobel laureate Daniel Kahneman. Learn your two systems of thinking, how you make decisions, and your greatest vulnerabilities to bad decisions.',
    price: 125,
    location: 'Vasagatan 15, Stockholm',
    attendees: ['Azeb'],
    attendeeLimit: 15,
    comments: [
      { name: 'Azeb', date: new Date('2021-12-06T11:21:03'), content: "what a good day" },
      { name: 'Dimby', date: new Date('2021-12-06T11:00:00'), content: 'look frorward for the next book club meeting' },
    ],
    rating: [4, 5],
  },
  {
    id: 4,
    img: " https://media.gatesnotes.com/-/media/Images/Books/Homo-Deus/summer-books_2017_homo-deus_800px_v1.ashx",
    title: 'Homo Deus',
    startDate: new Date('2023-01-07T19:30:00'),
    endDate: new Date('2023-01-07T20:30:00'),
    hostName: 'Ezra',
    hostImage:'https://www.face.eu/wp-content/uploads/2018/09/Torbjorn-Larsson.jpg',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: 'Stureplan 1, Stockholm',
    attendees: ['Azeb', 'Hossana'],
    attendeeLimit: 2,
    comments: [],
    rating: [],
  },
  {
    id: 5,
    img: 'https://media.karousell.com/media/photos/products/2021/5/17/david_and_goliath_by_malcolm_g_1621266187_7c5c73dc',
    title: 'David And Golitah',
    startDate: new Date('2021-12-08T19:30:00'),
    endDate: new Date('2021-12-08T20:30:00'),
    hostName: 'Hossana',
    hostImage:'https://studycli.org/wp-content/uploads/2019/12/chinese-beauty-standards-001.jpeg',
    description:
      'In a collection of essays, Malcolm Gladwell explores the relationship between power and prestige on the one hand and weakness and struggle on the other. Two theses run through the essays in David and Goliath: Underdogs, Misfits, and the Art of Battling Giants. The first thesis is that in a contest where one side is obviously superior to the other by conventional standards, the weaker side often has one or more underappreciated advantages. The second thesis is that too much strength can be a bad thing—a phenomenon represented graphically by an inverted-U curve: as strength increases along the horizontal axis, the benefit, on the vertical axis, at first rises but eventually begins to fall.',
    location: 'Stureplan 1, Stockholm',
    attendees: ['Azeb'],
    comments: [],
    rating: [],
  },
  // {
  //   id: 6,
  //   img: 'https://media.karousell.com/media/photos/products/2021/5/17/david_and_goliath_by_malcolm_g_1621266187_7c5c73dc',
  //   title: 'David And Golitah',
  //   startDate: new Date('2021-11-08T19:30:00'),
  //   endDate: new Date('2021-11-08T20:30:00'),
  //   hostName: 'Azeb',
  //   hostImage:'https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   location: 'Stureplan 1, Stockholm',
  //   attendees: ['Azeb','Rut','Dimby'],
  //   comments: [],
  //   rating: [],
  // },
]

export const getAllMeetups = () => {
  return meetups
}

export const getMeetupById = (id: number) => {
  const meetup = meetups.find(meetup => meetup.id === id)

  return meetup
}

export const getAllCurrentMeetups = (currentDate: Date) => {
  let now = currentDate.getTime()

  const comingMeetups = meetups.filter(meetup => meetup.startDate.getTime() > now)
  return comingMeetups
}

export const getAllPastMeetups = (currentDate: Date) => {
  let now = currentDate.getTime()

  const pastMeetups = meetups.filter(meetup => meetup.startDate.getTime() < now)
  return pastMeetups
}

export const updateMeetupAttendeeList = (id: number, attendeeName: string) => {
  let meetupIndex = meetups.findIndex(meetup => meetup.id === id)
  let meetup = meetups.find(meetup => meetup.id === id)

  if (meetup) {
    let newMeetup = { ...meetup }
    newMeetup.attendees = [...newMeetup.attendees, attendeeName]
    meetups[meetupIndex] = newMeetup
    return newMeetup
  } else {
    return undefined
  }
}

export const updateCommentsList = (id: number, comment: IComment) => {
  let meetupIndex = meetups.findIndex(meetup => meetup.id === id)
  let meetup = meetups.find(meetup => meetup.id === id)

  if (meetup) {
    let newMeetup = { ...meetup }
    newMeetup.comments = [...newMeetup.comments, comment]
    meetups[meetupIndex] = newMeetup
    return newMeetup
  } else {
    return undefined
  }
}
import { IComment } from './comment'

export interface IMeetup {
  id: number
  title: string
  startDate: Date
  endDate: Date
  hostName: string
  hostImage:string
  description: string
  img:string
  price?: number
  location: string
  attendees: string[]
  attendeeLimit?: number
  comments: IComment[]
  rating: number[]
}
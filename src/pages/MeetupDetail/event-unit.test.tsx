import { screen } from '@testing-library/react'
import { renderWithPath } from '../../testing-utils'
import MeetupDetail from './MeetupDetail'



describe('Event detail unit tests', () => {
  it('renders the event detail component (smoke test)', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
  })
 
  it('render the opening date', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const startDate = screen.getByText('Sat Dec 17 2022 13:00', { exact: false })
    expect(startDate).toBeInTheDocument()
  })
  it('render the final date', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const endDate = screen.getByText('Sat Dec 17 2022 15:00', { exact: false })
    expect(endDate).toBeInTheDocument()
  })
  it('render location', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const location = screen.getByText('10 Main Street, London', { exact: false })
    expect(location).toBeInTheDocument()
  })
 
  it('render description', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const description = screen.getByText('Description', { exact: false })
    expect(description).toBeInTheDocument()
  })
  it('render price', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const price = screen.getByText('Price', { exact: false })
    expect(price).toBeInTheDocument()
  })
  it('render attendees', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const attendeesList = screen.getAllByTestId('userCard')
    expect(attendeesList).toHaveLength(2)
  })
  it('do not dsplay a text area input for comments for unauthorized user', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const commentInput = screen.queryByLabelText('Add a comment')
    expect(commentInput).not.toBeInTheDocument()
  })
  it('do not display add comment button for unauthorized user', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const addCommentButton = screen.queryByRole('button', { name: 'Add' })
    expect(addCommentButton).not.toBeInTheDocument()
  })
  it('renders no comments initially for meetup with id 1', () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const commentsList = screen.queryAllByTestId('commentListItem')
    expect(commentsList).toHaveLength(0)
  })
  it('renders  2 comments initially for meetup with id 3', () => {
    renderWithPath('/meetups/3', <MeetupDetail />, '/meetups/:id')
    const commentsList = screen.queryAllByTestId('commentListItem')
    expect(commentsList).toHaveLength(2)
  })
  it("does not render a rating for coming events", () => {
    renderWithPath('/meetups/1', <MeetupDetail />, '/meetups/:id')
    const ratingContainer = screen.queryByTestId("rating")
    expect(ratingContainer).not.toBeInTheDocument()
  })
  it("renders a rating for previous events", () => {
    renderWithPath('/meetups/3', <MeetupDetail />, '/meetups/:id')
    const ratingContainer = screen.queryByTestId("rating")
    expect(ratingContainer).toBeInTheDocument()
  })
  it("renders a rating of 4.5 for  event with id 3", () => {
    renderWithPath('/meetups/3', <MeetupDetail />, '/meetups/:id')
    const rating = screen.getByText("4.5 / 5")
    expect(rating).toBeInTheDocument()
  })
  it("renders a no ratings yet message for  event with id 5", () => {
    renderWithPath('/meetups/5', <MeetupDetail />, '/meetups/:id')
    const ratingMessage = screen.getByText("No ratings yet")
    expect(ratingMessage).toBeInTheDocument()
  })
  
})
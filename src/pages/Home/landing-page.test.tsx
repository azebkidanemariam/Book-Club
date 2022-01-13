import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../testing-utils'
import Home from './Home'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import {mount} from "enzyme"
import {Routes, Route} from "react-router"
import { MemoryRouter } from 'react-router-dom'


beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <Home />
    </Provider>
  )
})

describe('Home unit tests - meetup lists', () => {
  it('renders Home component correctly (smoketest)', () => {})
  it('renders a list of 3 upcoming events', async () => {
    const meetups = await screen.findAllByTestId('currentListItem')
    expect(meetups).toHaveLength(3)
  })
  it('renders a list of events in chronological order', async () => {
    const meetups = await screen.findAllByTestId('currentListItem')
    expect(meetups[0]).toContainHTML('<p><strong>Start: </strong>Sat Dec 17 2022 13:00</p>')
    expect(meetups[1]).toContainHTML('<p><strong>Start: </strong>Tue Dec 27 2022 13:00</p>')
    expect(meetups[2]).toContainHTML('<p><strong>Start: </strong>Sat Jan 07 2023 19:30</p>')
  })
  it('renders all previous events', async () => {
    const meetups = await screen.findAllByTestId('pastListItem')
    expect(meetups).toHaveLength(2)
  })
  it('renders all previous events in reverse chronological order', async () => {
    const meetups = await screen.findAllByTestId('pastListItem')
    expect(meetups[0]).toContainHTML('<p><strong>Start: </strong>Wed Dec 08 2021 19:30</p>')
    expect(meetups[1]).toContainHTML('<p><strong>Start: </strong>Tue Dec 07 2021 19:00</p>')
  })
  
  it('renders the text PAST on previous event cards', () => {
    const pastText = screen.getAllByText('- PAST')

    expect(pastText).toHaveLength(2)
  })
})

describe('Home unit tests - search', () => {
  it('display one previous event when searching for David and goliath', () => {
    const searchBox = screen.getByRole('searchbox')
    const filteredMeetups = screen.getAllByTestId('pastListItem')

    expect(filteredMeetups).toHaveLength(2)

    userEvent.type(searchBox, 'David And Golitah')

    const newFilteredMeetups = screen.getAllByTestId('pastListItem')

    expect(newFilteredMeetups).toHaveLength(1)
  })
  it('display no previous event found message when searching for wellness', () => {
    const searchBox = screen.getByRole('searchbox')
    const filteredMeetups = screen.getAllByTestId('pastListItem')

    expect(filteredMeetups).toHaveLength(2)

    userEvent.type(searchBox, 'wellness')

    const newFilteredMeetups = screen.queryAllByTestId('pastListItem')
    const message = screen.getByText(/no past meetups found/i)

    expect(newFilteredMeetups).toHaveLength(0)
    expect(message).toBeInTheDocument()
  })
  it('renders a search input field', () => {
    const searchBox = screen.getByLabelText(/search/i)
    expect(searchBox).toBeInTheDocument()
  })
  it('display  empty search input field ', () => {
    const searchBox = screen.getByRole('searchbox')
    expect(searchBox.textContent).toBe('')
  })
  it('renders one event when searching for I know why', () => {
    const searchBox = screen.getByRole('searchbox')
    const filteredMeetups = screen.getAllByTestId('currentListItem')

    expect(filteredMeetups).toHaveLength(3)

    userEvent.type(searchBox, 'I Know why the caged bird Sings')

    const newFilteredMeetups = screen.getAllByTestId('currentListItem')

    expect(newFilteredMeetups).toHaveLength(1)
  })
  it('search filter is case insensitive', () => {
    const searchBox = screen.getByRole('searchbox')
    const filteredProducts = screen.getAllByTestId('currentListItem')

    expect(filteredProducts).toHaveLength(3)

    userEvent.type(searchBox, 'i know')

    const newFilteredProducts = screen.getAllByTestId('currentListItem')

    expect(newFilteredProducts).toHaveLength(1)
  })
  it('display matches not found text if search doesnt have any matches', () => {
    const searchBox = screen.getByRole('searchbox')
    const filteredMeetups = screen.getAllByTestId('currentListItem')

    expect(filteredMeetups).toHaveLength(3)

    userEvent.type(searchBox, 'xyz')

    const newFilteredMeetups = screen.queryAllByTestId('currentListItem')
    const message = screen.getByText(/no current meetups found/i)

    expect(newFilteredMeetups).toHaveLength(0)
    expect(message).toBeInTheDocument()
  })
  it('display current search text as a reccomendation when the text input is not empty', () => {
    const searchBox = screen.getByRole('searchbox')

    const invisibleSearchString = screen.queryByRole('button', { name: '' })

    expect(invisibleSearchString).not.toBeInTheDocument()

    userEvent.type(searchBox, 'I Know why the caged bird Sings')

    const searchString = screen.getByRole('button', { name: /I Know why the caged bird Sings/i })

    expect(searchString).toBeInTheDocument()
  })
  it('clears the search when the search string button is pressed', () => {
    const searchBox = screen.getByRole('searchbox')

    userEvent.type(searchBox, 'Educated')
    const filteredMeetups = screen.getAllByTestId('currentListItem')

    expect(filteredMeetups).toHaveLength(1)

    const searchString = screen.getByRole('button', { name: /educated/i })

    userEvent.click(searchString)

    const newFilteredMeetups = screen.getAllByTestId('currentListItem')

    expect(newFilteredMeetups).toHaveLength(3)
  })
})

describe('Home unit tests - date picker', () => {
  it('display date on the screen', () => {
    const dateInput = screen.getByLabelText(/date/i)

    expect(dateInput).toBeInTheDocument()
  })
  it('shows the current date filter if a date is chosen', () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2021-12-07')

    const dateString = screen.getByRole('button', { name: /2021-12-07/ })

    expect(dateString).toBeInTheDocument()
  })
  it('display Educated event for a date filter 2022-12-17', async () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2022-12-17')

    const currentMeetups = await screen.findAllByTestId('currentListItem')
    expect(currentMeetups).toHaveLength(1)
  })
  it('display no previous event for date filter 2022-12-17', async () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2022-12-17')

    const message = await screen.findByText(/no past meetups found/i)

    expect(message).toBeInTheDocument()
  })
  it('diplay thinking fast and slow as previous event for a date filter 2021-12-07', async () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2021-12-07')

    const pastMeetups = await screen.findAllByTestId('pastListItem')
    expect(pastMeetups).toHaveLength(1)
  })
  it('display no current event for date filter 2021-12-07', async () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2021-12-07')

    const message = screen.getByText(/no current meetups found/i)

    expect(message).toBeInTheDocument()
  })
  it('clear the date after date button filter clicked', async () => {
    const dateInput = screen.getByLabelText(/date/i)

    userEvent.type(dateInput, '2022-12-17')

    const currentMeetups = await screen.findAllByTestId('currentListItem')
    expect(currentMeetups).toHaveLength(1)

    const dateString = screen.getByRole('button', { name: /2022-12-17/ })

    userEvent.click(dateString)

    const unfilteredCurrentMeetups = await screen.findAllByTestId('currentListItem')
    expect(unfilteredCurrentMeetups).toHaveLength(3)
  })
  it('clear search and date filters by clicking remove all button', () => {
    const dateInput = screen.getByLabelText(/date/i)
    const searchBox = screen.getByRole('searchbox')

    userEvent.type(dateInput, '2022-12-17')
    userEvent.type(searchBox, 'Educated')

    const removeButton = screen.getByRole('button', { name: /remove/i })

    userEvent.click(removeButton)

    const currentMeetups = screen.getAllByTestId('currentListItem')
    const pastMeetups = screen.getAllByTestId('pastListItem')
    expect(currentMeetups).toHaveLength(3)
    expect(pastMeetups).toHaveLength(2)
  })
})

describe('Home integration with card', () => {
  it('event card render  title', () => {
    const meetupCards = screen.getAllByTestId('currentListItem')
    const meetup1 = meetupCards[0]
    expect(meetup1).toHaveTextContent('Educated')
  })
  it('event card render start', () => {
    const meetupCards = screen.getAllByTestId('currentListItem')
    const meetup1 = meetupCards[0]
    expect(meetup1).toHaveTextContent('Start: Sat Dec 17 2022 13:00')
  })
  it('event card render end', () => {
    const meetupCards = screen.getAllByTestId('currentListItem')
    const meetup1 = meetupCards[0]
    expect(meetup1).toHaveTextContent('End: Sat Dec 17 2022 15:00')
  })
  it('event card render location', () => {
    const meetupCards = screen.getAllByTestId('currentListItem')
    const meetup1 = meetupCards[0]
    expect(meetup1).toHaveTextContent('Location: 10 Main Street, London')
  })
})
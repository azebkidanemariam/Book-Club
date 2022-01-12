import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderWithRouter } from '../../testing-utils'
import App from '../../App'
import { store } from '../../store/store'
import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'
import { reset as resetUsers } from '../../store/usersSlice'
import { reset as resetMeetUps } from '../../store/meetupsSlice'

beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>
  )
})



describe('App integration tests - registering for events', () => {
  it('doesnt render an attend button when user is logged out', () => {
    // Navigate to detail page
    const cards = screen.getAllByTestId('currentListItem')
    const card1 = cards[0]
    userEvent.click(card1)

    const attendBtn = screen.queryByRole('button', { name: 'Attend' })
    expect(attendBtn).not.toBeInTheDocument()
  })
  it('renders an attend button on meetup detail page when user is logged in if event is not full', () => {
    // Login
    const loginBtn = screen.getByRole('button', { name: /login/i })

    userEvent.click(loginBtn)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'azeb@email.com')
    userEvent.type(passwordInput, 'Azeb')
    userEvent.click(submitBtn)

    // Navigate to detail page
    const cards = screen.getAllByTestId('currentListItem')
    const card1 = cards[0]
    userEvent.click(card1)

    const attendBtn = screen.queryByRole('button', { name: 'Attend' })
    expect(attendBtn).toBeInTheDocument()

    const logoutBtn = screen.getByRole('button', { name: /log out/i })
    userEvent.click(logoutBtn)
  })
  it("doesn't render an attend button if the event has already past", () => {
    // Login
    const loginBtn = screen.getByRole('button', { name: /login/i })

    userEvent.click(loginBtn)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'rut@email.com')
    userEvent.type(passwordInput, 'Rut')
    userEvent.click(submitBtn)

    // Navigate to detail page
    const cards = screen.getAllByTestId('pastListItem')
    const card1 = cards[0]
    userEvent.click(card1)

    const attendBtn = screen.queryByRole('button', { name: 'Attend' })
    expect(attendBtn).not.toBeInTheDocument()

    const logoutBtn = screen.getByRole('button', { name: /log out/i })
    userEvent.click(logoutBtn)
  })
  
 })
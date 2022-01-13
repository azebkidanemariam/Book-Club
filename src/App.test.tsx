import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderWithRouter } from './testing-utils'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'

beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>
  )
})

test('renders App component (smoke test)', () => {})

describe('App integration tests - navigating', () => {
  it('renders home page', () => {
    const currentMeetupsTitle = screen.getByText(/Current Meetups/i)
    expect(currentMeetupsTitle).toBeInTheDocument()
  })
  it('display event detail page when card is clicked', async () => {
    const cards = await screen.findAllByTestId('currentListItem')
    const card1 = cards[0]
    userEvent.click(card1)

    const meetupPage = await screen.findByTestId('meetup-detail-page')
    expect(meetupPage).toBeInTheDocument()
  })
})

describe('App integration test - login and logout flows', () => {
  it('navigate to log in page when login button clicked', async () => {
    const loginBtn = screen.getByRole('button', { name: /login/i })
    userEvent.click(loginBtn)
    const loginPage = await screen.findByRole('heading', { name: 'Log in' })
    expect(loginPage).toBeInTheDocument()
  })
  it("doesn't render login button in header when route is /login", () => {
    const loginBtn = screen.getByRole('button', { name: /login/i })
    userEvent.click(loginBtn)

    const sameLoginButton = screen.queryByRole('button', { name: /login/i })
    expect(sameLoginButton).not.toBeInTheDocument()
  })
  it('redirects to previous page when a client have succesful login', () => {
    const loginBtn = screen.getByRole('button', { name: /login/i })

    userEvent.click(loginBtn)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'azeb@email.com')
    userEvent.type(passwordInput, 'Azeb')
    userEvent.click(submitBtn)

    const title = screen.getByRole('heading', { name: 'Current meetups' })
    expect(title).toBeInTheDocument()

    const logoutBtn = screen.getByRole('button', { name: /log out/i })
    userEvent.click(logoutBtn)
  })
  it("display client image and name when logged in", () => {
    const loginBtn = screen.getByRole('button', { name: /login/i })

    userEvent.click(loginBtn)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'azeb@email.com')
    userEvent.type(passwordInput, 'Azeb')
    userEvent.click(submitBtn)

    const username = screen.getByText('Azeb')
    expect(username).toBeInTheDocument()

    const logoutBtn = screen.getByRole('button', { name: /log out/i })
    userEvent.click(logoutBtn)
  })
  
})

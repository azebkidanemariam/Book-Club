import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../testing-utils'
import Login from './Login'
import { store } from '../../store/store'
import { Provider } from 'react-redux'

beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <Login />
    </Provider>
  )
})

describe('Login unit tests', () => {
  it('renders login component correctly (smoke test', () => {})
  it('renders an empty email input field initially', () => {
    const emailInput = screen.getByLabelText(/email/i)
    expect(emailInput).toBeInTheDocument()
    expect(emailInput.textContent).toBe('')
  })
  it('renders an empty password input field initially', () => {
    const passwordInput = screen.getByLabelText(/password/i)
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput.textContent).toBe('')
  })
  it('renders a log in button', () => {
    const loginBtn = screen.getByTestId('login-btn')
    expect(loginBtn).toBeInTheDocument()
  })
  it('updates values in email input when typing', () => {
    const emailInput = screen.getByLabelText(/email/i)

    userEvent.type(emailInput, 'azeb@email.com')

    expect(screen.getByRole('form')).toHaveFormValues({
      email: 'azeb@email.com',
      password: '',
    })
  })
  it('updates values in password input when typing', () => {
    const passwordInput = screen.getByLabelText(/password/i)

    userEvent.type(passwordInput, 'Azeb')

    expect(screen.getByRole('form')).toHaveFormValues({
      email: '',
      password: 'Azeb',
    })
  })
  it('displays an error if user email is wrong', () => {
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'aze@email.com')
    userEvent.type(passwordInput, 'Azeb')
    userEvent.click(submitBtn)

    const error = screen.getByText('Invalid user credentials')
    expect(error).toBeInTheDocument()
  })
  it('displays an error if user password is wrong', () => {
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByTestId('login-btn')

    userEvent.type(emailInput, 'azeb@email.com')
    userEvent.type(passwordInput, 'Azebaw')
    userEvent.click(submitBtn)

    const error = screen.getByText('Invalid user credentials')
    expect(error).toBeInTheDocument()
  })
})
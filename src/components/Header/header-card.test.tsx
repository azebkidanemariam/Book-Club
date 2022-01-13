import { render, screen } from '@testing-library/react'
import Header from './Header'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { renderWithRouter } from '../../testing-utils'

beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <Header />
    </Provider>
  )
})

describe('Header', () => {
  it('display Header properly (smoketest)', () => {})
  it('WitrenderWithRouters text The-Book-club in the header', () => {
    const title = screen.getByText(/The-Book-Club/i)

    expect(title).toBeInTheDocument()
  })
  it('display a login button to show user needs to login', () => {
    const loginBtn = screen.getByRole('button', { name: /login/i })
    expect(loginBtn).toBeInTheDocument()
  })
})
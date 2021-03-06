import React from 'react'
import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useMatch, Link } from 'react-router-dom'
import { logout } from '../../store/usersSlice'

import classes from './Header.module.css'

const Header = () => {
  const user = useSelector((state: RootState) => state.user.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch('login')

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        
        <h1>The-Book-Club</h1>
      </Link>
      {!user && !match && <button onClick={() => navigate('/login')}>Login</button>}
      {user && (
      <nav className={classes.userSection} data-test="app-header-navigation">

        
          <p className='welcome-text'> {user.name}</p>
            <img src={user.img} />
          <button onClick={handleLogout}>Log out</button>
        
      </nav>
      )}
      </header>
  )
}

export default Header
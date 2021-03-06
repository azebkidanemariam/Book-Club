import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import './App.css'
import Home from './pages/Home/Home'
import MeetupDetail from './pages/MeetupDetail/MeetupDetail'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetups/:id" element={<MeetupDetail />} />
      </Routes>
    </>
  )
}

export default App


import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){

  const { logout } = props
  
  return (
    <nav className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/play">Play</Link>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </nav>
  )
}
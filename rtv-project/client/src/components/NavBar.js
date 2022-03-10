import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){

  const { logout } = props
  
  return (
    <nav className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">All Issues</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}
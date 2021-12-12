import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'  
import NavBar from './components/NavBar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import {UserContext} from "./context/UserProvider.js"
//NOTE:  v. 6 of react-router-dom--"Switch" no longer avail. -- now use "Routes"
//NOTE:  v. 6 of react-router-dom -- "Redirect" is replaced with "Navigate"
//Also, the <Route/> tag syntax changed as well; see below for new verions

export default function App(){

  const { token, logout } = useContext(UserContext)

  return (
    <div className="app">
      <NavBar 
        logout={logout}
      />
      <Routes>

        <Route exact path="/" element={token ? <Navigate to="/profile"/> : <Auth/>}/>
     
        <Route path="/profile" element={<Profile/>}/>
        
        <Route path="/public" element={<Public/>}/>
     
      </Routes>
    </div>
  )
}

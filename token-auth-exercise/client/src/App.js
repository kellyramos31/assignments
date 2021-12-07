import React from 'react'
import { Route, Routes } from 'react-router-dom'  
import NavBar from './components/NavBar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
//NOTE:  v. 6 of react-router-dom--"Switch" no longer avail. -- now use "Routes"
//Also, the <Route/> tag syntax changed as well; see below for new verions

export default function App(){
  return (
    <div className="app">
      <NavBar />
      <Routes>

        <Route exact path="/" element={<Auth/>}/>
     
        <Route path="/profile" element={<Profile/>}/>
        
        <Route path="/public" element={<Public/>}/>
     
      </Routes>
    </div>
  )
}

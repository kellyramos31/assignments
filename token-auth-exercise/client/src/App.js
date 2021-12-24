//NOTE:  v. 6 of react-router-dom--"Switch" no longer avail. -- now use "Routes"
//NOTE:  v. 6 of react-router-dom -- "Redirect" is replaced with "Navigate"
//Also, the <Route/> tag syntax changed as well; see below for new verions

//++++++++++++++++++++++++++++++++++++++
//CURRENT ERROR-- 
//Error: [ProtectedRoute] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
//++++++++++++++++++++++++++++++++++++++

//Now closer -- BUT...nothing showing up on dom when sign in -- NavBar shows up, but not the other info...rest is blank

import React, { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"  
import NavBar from "./components/NavBar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import {UserContext} from "./context/UserProvider.js"

//need useNavigate hook or useParams hook for protected routes instead???


export default function App(){

  const { token, logout } = useContext(UserContext)

  console.log("token from App.js", token)

  return (
    <div className="app">

      { token && <NavBar logout={logout} /> }

      <Routes>

        <Route exact path="/" element={token ? <Navigate to="/profile"/> : <Auth/>}/> 

        {/* <Route path="/profile" element={<Profile/>}/>
        
        <Route path="/public" element={<Public/>}/> */}
     

        <Route element={<ProtectedRoute token={token}/>}>
            <Route
                path="/profile" 
                element={<Profile/>} 
                navigateTo="/"
            />
          
            <Route
                path="/public" 
                element={<Public/>} 
                navigateTo="/"
            />
       </Route>
   
   
      </Routes>
    </div>
  )
}



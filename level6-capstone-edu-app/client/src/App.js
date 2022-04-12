
//NEED TO EDIT BELOW TO ADAPT TO THIS PROJECT

import React, { useContext} from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Forum from "./components/Forum.js"
import Learn from "./components/Learn.js"
import Game from "./components/Game.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"
// import { IssueCommentContext } from "./context/IssueCommentProvider.js"


export default function App() {

  const { token, logout} = useContext(UserContext)

  // const { userIssues } = useContext(IssueCommentContext)

 

  console.log("token from App.js", token)

  // console.log("issues from App.js", issues)



  return (
    <div className="app">

      { token && <NavBar logout={logout} /> }

      <Routes>

        <Route exact path="/" element={token ? <Navigate to="/profile/"/> : <Auth/>}/>

        <Route element={<ProtectedRoute token={token}/>}>
              <Route
                path="/profile"
                element={<Profile />}
                //element={<Profile userIssues={userIssues}/>}
                // element={<Profile issues={issues} getUserIssues={getUserIssues}/>}
                navigateTo="/"
              />

              <Route
                path="/forum"
                element={<Forum/>}
                navigateTo="/"
              />

                <Route
                path="/learn"
                element={<Learn/>}
                navigateTo="/"
              />

                <Route
                path="/play"
                element={<Game/>}
                navigateTo="/"
              />

        </Route>

      </Routes>

    </div>
  )
}


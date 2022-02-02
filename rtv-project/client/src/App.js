import React, { useContext} from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"
import { IssueCommentContext } from "./context/IssueCommentProvider.js"


export default function App() {

  // const { issues } = useContext(IssueCommentContext) -- need to add issues context in here somewhere?

  const { token, logout } = useContext(UserContext)

  const { issues } = useContext(IssueCommentContext)

 

  console.log("token from App.js", token)

  console.log("issues from App.js", issues)


  return (
    <div className="app">

      { token && <NavBar logout={logout} /> }

      <Routes>

        <Route exact path="/" element={token ? <Navigate to="/profile/"/> : <Auth/>}/>

        <Route element={<ProtectedRoute token={token}/>}>
              <Route
                path="/profile"
                element={<Profile issues={issues}/>}
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

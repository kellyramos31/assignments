import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import UserProvider from "./context/UserProvider.js"
import LearnGameProvider from "./context/LearnGameProvider.js"
import PostCommentProvider from "./context/PostCommentProvider"
import "./css/styles.css"


//NEED TO EDIT CODE ABOVE & BELOW FOR THIS PROJECT

ReactDOM.render(
  <BrowserRouter>
      <PostCommentProvider>
          <LearnGameProvider>
              <UserProvider>
                  <App />
              </UserProvider>
          </LearnGameProvider>
      </PostCommentProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

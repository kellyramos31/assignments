import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import UserProvider from "./context/UserProvider.js"
import IssueCommentProvider from "./context/IssueCommentProvider.js"
import "./css/styles.css"


//NEED TO EDIT CODE ABOVE & BELOW FOR THIS PROJECT

ReactDOM.render(
  <BrowserRouter>
      
        <IssueCommentProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </IssueCommentProvider>
      
  </BrowserRouter>,
  document.getElementById('root')
)

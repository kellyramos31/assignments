import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import { UglyThingsContextProvider } from "./UglyThingsContext"


ReactDOM.render(

  <UglyThingsContextProvider>
    <App />
  </UglyThingsContextProvider>
  ,
  document.getElementById('root')
)
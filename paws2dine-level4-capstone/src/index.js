import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PawsContextProvider } from "./PawsContext"



ReactDOM.render(
  <PawsContextProvider>
    <App />
  </PawsContextProvider>,
  document.getElementById('root')
)







import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
export const addFavorite = (companyName) => ({
    type: "ADD_FAVORITE",
    payload: companyName,
  });
  
  export const removeFavorite = (companyName) => ({
    type: "REMOVE_FAVORITE",
    payload: companyName,
  });
  
root.render(<App />)

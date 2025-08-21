import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import ScrollToTop from './utils/ScrollToTop'
import ActionButtons from './utils/ActionButtons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <ActionButtons/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
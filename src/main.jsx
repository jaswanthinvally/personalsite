import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/Header.jsx'
import Testimonial from './components/Footer/Testimonial.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
   <Header/>
  <Testimonial/>
  <App/>
  </div>
)

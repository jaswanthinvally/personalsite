import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../footer/footer.css'

const Footer = () => {
  return (
    <div className='d-flex flex-column footer'>
        <h1 className='h4 d-flex justify-content-center'>subscribe to my news letter</h1>
        <div className='d-flex justify-content-center'>
        <input className='ip m-2'/>
        <button className='s-btn btn btn-dark m-2'>subscribe now</button>
        </div>
    </div>
  )
}

export default Footer
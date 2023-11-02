import React from 'react'
import './head.css'

export const Head = () => {
  return (
    <nav className='navbar main-nav d-flex justify-content-between align-items-center bg-primary'>
      <div className='brand nav-links'>
        JASH
      </div>
      <ul className='nav-ul d-flex flex-row gap-3'>
      <li className='nav-item list-unstyled '><a className='nav-links text-dark'>about</a></li>
      <li className='nav-item list-unstyled '><a className='nav-links text-dark'>services</a></li>
      <li className='nav-item list-unstyled '><a className='nav-links text-dark'>projects</a></li>
      </ul>
    </nav>
  )
}

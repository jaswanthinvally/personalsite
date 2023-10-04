import React from 'react'
import './head.css'

export const Head = () => {
  return (
    <nav className='main-nav'>
      <div className='brand'>
        JASH
      </div>
      <div className='nav-li'>
      <ul className='nav-ul'>
        <li className='nav-li-1'>about</li>
        <li className='nav-li-2'>projects</li>
        <li className='nav-li-3'>contact</li>
      </ul>
      </div>
    </nav>
  )
}

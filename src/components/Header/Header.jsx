import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'

const Header = () => {
  return (
    <div className='m-3'>
    <nav className='main-nav'>
    <div className='nav-right'>
            <h1 className='font-bold text-xl'>Develop<span className='span'>er</span></h1>
        </div>
        <div className='nav-left'>
            <Link to='about' smooth={true} duration={500}>
            <h4 className='about text-lg'>
                about
            </h4>
            </Link>
            <Link to='skills' smooth={true} duration={500}>
            <h4 className='skills text-lg'>
                skills
            </h4>
            </Link>
            <Link to='projects' smooth={true} duration={500}>
            <h4 className='projects text-lg'>
                projects
            </h4>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
            <h4 className='contact text-lg'>
                contact
            </h4>
            </Link>
        </div>
        <button className='bg-red-500 hover:bg-blue-600 p-1 rounded text-white hover:text-black '>hire me</button>
    </nav>
    </div>
  )
}

export default Header
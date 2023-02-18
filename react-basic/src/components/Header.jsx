import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container header'>
        <div className='row nav py-4 text-center justify-content-center'>
            <div className='col-2'>
              <Link to="/">Home</Link>
            </div>
            <div className='col-2'>
              <Link to="/profile">Profile</Link>
            </div>
            <div className='col-2'>
              <Link to="/About">About</Link>
            </div>
            <div className='col-2'>
              <Link to="/Skills">Skills</Link>
            </div>
            <div className='col-2'>
              <Link to="/Contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header
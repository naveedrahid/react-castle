import React from 'react'
import { Link } from 'react-router-dom'
import { AuthenticatedRoutesConstant } from '../../../libs/menuConstant'
import './Header.css'

function SideMenu() {
  return (
    <div className='menuSide'>
        <ul>
            <li><Link to={AuthenticatedRoutesConstant.HOME}>Home</Link></li>
            <li><Link to={AuthenticatedRoutesConstant.ABOUT}>About Us</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
            <li><Link>Home</Link></li>
        </ul>
    </div>
  )
}

export default SideMenu
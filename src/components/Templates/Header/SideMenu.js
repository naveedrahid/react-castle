import React from 'react'
import { Link } from 'react-router-dom'
import { AuthenticatedRoutesConstant } from '../../../libs/menuConstant'
import './Header.css'

function SideMenu() {
  return (
    <div className='menuSide'>
      <ul className='ginger cursor-scale small'>
        <li
          className=''
        >
          <Link
            to={AuthenticatedRoutesConstant.HOME}>
            Home
          </Link>
        </li>
        <li
          className=''
        >
          <Link
            to={AuthenticatedRoutesConstant.ABOUT}>
            About Us
          </Link>
        </li>
        <li
          className=''
        >
          <Link
            to={AuthenticatedRoutesConstant.MUSIC_CAT}
          >
            Category
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
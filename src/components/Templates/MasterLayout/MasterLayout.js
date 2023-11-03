import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function MasterLayout() {
  return (
    <div className='mainpageWrapper'>
      <Header />
      <Outlet />
    </div>
  )
}

export default MasterLayout
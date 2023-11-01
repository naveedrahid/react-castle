import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MasterLayout from '../components/Templates/MasterLayout/MasterLayout'
import { AuthenticatedRoutesConstant } from '../libs/menuConstant'
import Home from '../components/Pages/Home/Home'
import About from '../components/Pages/About/About'
import MusicCat from '../components/Pages/MusicCat/MusicCat'

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route
          path={AuthenticatedRoutesConstant.HOME}
          element={<Home />}
        />
        <Route
          path={AuthenticatedRoutesConstant.ABOUT}
          element={<About />}
        />
        <Route
          path={AuthenticatedRoutesConstant.MUSIC_CAT}
          element={<MusicCat />}
        />
      </Route>
    </Routes>
  )
}

export default AuthenticatedRoutes
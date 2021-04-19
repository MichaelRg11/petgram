import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { Home } from './../pages/Home'
import { Detail } from './../pages/Detail'
import { PrivateRoute } from './Private.Routes'
import { UserContext } from './../Context'

export const Route = () => {
  const { isAuth } = useContext(UserContext)

  return (
    <React.Fragment>
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <PrivateRoute isAuth={isAuth} />
    </React.Fragment>
  )
}

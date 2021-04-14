import React from 'react'
import { Router } from '@reach/router'
import { Favs } from './../pages/Favs'
import { User } from './../pages/User'
import { NotRegisteredUser } from './../pages/NotRegisteredUser'

export const PrivateRoute = ({ isAuth }) => {
  return (
    <Router>
      {
        isAuth ? (
          <React.Fragment>
            <Favs path='/favs' />
            <User path='/user' />
          </React.Fragment>
        ) : (
            <React.Fragment>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </React.Fragment>
          )
      }
    </Router>
  )
}

import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyle'
import { Route } from './routes/Routes'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />

      <Logo />

      <Route />

      <NavBar />

    </React.Fragment>
  )
}

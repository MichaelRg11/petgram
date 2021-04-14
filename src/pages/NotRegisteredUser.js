import React, { useContext } from 'react'
import { UserContext } from './../Context'
import { UserForm } from './../components/UserForm'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(UserContext)
  return (
    <React.Fragment>
      <UserForm onSubmit={activateAuth} title={'Registro'} />
      <UserForm onSubmit={activateAuth} title={'Iniciar sesion'} />
    </React.Fragment>
  )
}

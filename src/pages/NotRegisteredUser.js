import React, { useContext, useState } from 'react'
import { UserContext } from './../Context'
import { UserForm } from './../components/UserForm'
import { useRegisterMutation } from './../hooks/useRegisterMutacion'
import { useLoginMutation } from './../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, mutationLoading, mutationError } = useRegisterMutation()
  const { loginMutation, mutationLoading: loading, mutationError: error } = useLoginMutation()
  const { activateAuth } = useContext(UserContext)
  const [login, setLogin] = useState(true)

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  return (
    <React.Fragment>

      <UserForm
        onSubmit={onSubmitRegister}
        error={mutationError && 'El usuario ya existe o hay algún problema.'}
        disabled={mutationLoading}
        title={'Registro'} login={login}
        onClick={() => setLogin(true)}
        message={'Si tienes una cuenta, Inicia seseion'} />

      <UserForm
        onSubmit={onSubmitLogin}
        error={error && 'El usuario no existe o la contraseña es incorrecta.'}
        disabled={loading}
        title={'Iniciar sesion'}
        login={!login}
        onClick={() => setLogin(false)}
        message={'Si no tienes una cuenta, Registrate'} />

    </React.Fragment>
  )
}

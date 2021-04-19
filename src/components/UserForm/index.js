import React from 'react'
import { useInputValue } from './../../hooks/useInputValue'
import { Content, Form, Input, Button, Title, Label, Logo, Text, Error } from './style'
import { LogoLogin } from './../Logo'

export const UserForm = ({ onSubmit, error, disabled, title, login, onClick, message }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleChange = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <React.Fragment>
      <Content login={login}>

        <Form onSubmit={handleChange} disabled={disabled}>
          <Logo>
            <LogoLogin />
          </Logo>
          <Title>{title}</Title>
          <Label>Email</Label>
          <Input placeholder='Email' {...email} disabled={disabled} />
          <Label>Contraseña</Label>
          <Input placeholder='Password' type='password' {...password} disabled={disabled} />
          <Button disabled={disabled}>{title}</Button>
          <Text onClick={onClick}>{message}</Text>
        </Form>
        {error && <Error>{error}</Error>}
      </Content>
    </React.Fragment>
  )
}

import React from 'react'
import { useInputValue } from './../../hooks/useInputValue'
import { Form, Input, Button, Title, Label, Svg } from './style'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <React.Fragment>
      <Svg />
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Label>Email</Label>
        <Input placeholder='Email' {...email} />
        <Label>Contraseña</Label>
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </React.Fragment>
  )
}


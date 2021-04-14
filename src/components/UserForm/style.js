import styled from 'styled-components'
import { LogoLogin } from './../Logo'

export const Svg = styled(LogoLogin)`
  width: 200px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  margin: 0 auto;
  text-align: center;
`

export const Form = styled.form`
  padding: 16px;
  max-width: 350px;
  margin: 8px auto;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 300;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 3px auto 8px auto;
  padding: 8px 4px;
  display: block;
  max-width: 350px;
  width: 100%;
`

export const Button = styled.button`
  background: linear-gradient(to right, #9c20aa, #fb3570, #fb3570);
  border-radius: 4px;
  color: #ffff;
  height: 32px;
  display: block;
  margin: 8px auto;
  max-width: 350px;
  width: 100%;
  text-align: center;
`

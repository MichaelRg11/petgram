import styled from 'styled-components'
import { fadeIn } from './../../styles/animation'

export const Content = styled.div`
  transition: 1s;
  display: ${props => props.login ? 'none' : 'block'};
  ${fadeIn({ time: '2s' })}
`

export const Logo = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: flex;
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
  cursor: pointer;
  
  &[disabled] {
    opacity: .3;
  }
`

export const Text = styled.p`
  margin-top: 30px;
  text-align: center;
  color: #fb3570;
  cursor: pointer;
`

export const Error = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgb(251,53,112,0.5);
    margin: 0 auto;
    width: 350px;
    min-height: 40px;
    padding: 5px 10px;
    border-radius: 10px;
`

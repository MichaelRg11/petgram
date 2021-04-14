import styled, { css } from 'styled-components'
import { fadeIn } from './../../styles/animation'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
  ${props => props.liked && css`
    ${fadeIn()}
    color: #9c20aa
  `
  }
`

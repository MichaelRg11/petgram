import styled, { css } from 'styled-components'
import { bounceDown } from './../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  ${props => props.fixed && css`
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 600px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0px;
    transform: scale(.6);
    z-index: 1;
    ${bounceDown()}
  `}
`

export const Item = styled.li`
  padding: 0 8px; 
  text-decoration: none;
`

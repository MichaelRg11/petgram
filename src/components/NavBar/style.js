import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from './../../styles/animation'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0; 
  right: 0;
  left: 0;
  height: 50px;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 100;
`
export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })}
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`

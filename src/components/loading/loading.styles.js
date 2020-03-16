import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: grey;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 102;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } 
`

export const SpinningCircle = styled.div`
  border: 1em solid #ccc;
  border-left-color: #fff;
  border-radius: 50%;
  height: 4em;
  width: 4em;
  animation: ${spin} 1s linear infinite;
`

export const Pp = styled.p`
font-size: 30px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 20%;
background-color: grey;
color: white;
`

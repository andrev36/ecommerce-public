import { device } from '../components/global'
import styled from 'styled-components'

export const StyledContainerMainPageText = styled.header`
 position: absolute;
 left: 70%;
 top: 30%;
 font-size: 2rem;
 transform: translate(-50%, -50%);
 p {
  font-size: 1em;
  font-weight: bold;
  color: white;
  text-align: center;
  @media ${device.LAPTOP} {
   font-size: 0.8em;
  }
 }
 @media ${device.LAPTOP} {
  left: 70%;
  top: 40%;
  font-size: 5rem;
 }
`

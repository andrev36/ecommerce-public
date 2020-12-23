import styled from 'styled-components'
import { device, globalTheme } from '../components/global'

export const StyledContainerAboutPageText = styled.header`
 position: absolute;
 left: 50%;
 top: 30%;
 font-size: 1em;
 transform: translate(-50%, -50%);
 width: 65vw;
 height: 20vh;
 @media ${device.LAPTOP} {
  font-size: 3em;
 }
`

export const StyledAboutPageMainText = styled.p`
 font-weight: bold;
 color: white;
 text-align: center;
 font-size: 1.8em;
 @media ${device.LAPTOP} {
  font-size: 2em;
 }
 background-color: ${globalTheme.FIFTH_COLOR};
 border-radius: 10px;
`

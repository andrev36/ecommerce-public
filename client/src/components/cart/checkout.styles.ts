import styled from 'styled-components'
import { device, globalTheme, StyledContainerGrid } from '../global'

export const StyledCheckoutProductsContainer = styled(StyledContainerGrid)`
 grid-template-columns: repeat(3, 25vw);
 margin: 3rem auto;
 span {
  border-right: 1px solid black;
  font-size: 1.4rem;
 }
`

export const StyledCheckoutProductsRow = styled.span`
 padding: 0.6rem 0.3rem;
`

export const StyledFormCheckout = styled.div`
 width: 18.875rem;
 height: 16rem;
 padding: 1.875rem;
 background: ${globalTheme.SECOND_COLOR};
 border-radius: 10px;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 @media ${device.MOBILE_S} {
  height: 12rem;
 }
`

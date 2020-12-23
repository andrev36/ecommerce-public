import styled from 'styled-components'
import { StyledButton } from './button.styles'
import { device } from './mediaQueries.styles'

export const StyledCounterContainer = styled.div`
 align-items: center;
 padding: 0.1rem 0.1rem;
 display: block;
 @media ${device.LAPTOP} {
  padding: 0.625rem 0.9375rem;
  display: inline-block;
 }
`

export const StyledCounterButton = styled(StyledButton)`
 border: none;
 padding: 0.1rem 0.1rem;
 @media ${device.LAPTOP} {
  padding: 0.625rem 0.9375rem;
 }
`

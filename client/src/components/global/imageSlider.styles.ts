import styled from 'styled-components'
import { StyledImage } from './assets.styles'
import { StyledContainerImage } from './containers.styles'
import { device } from './mediaQueries.styles'

export const StyledImageSliderWrapper = styled(StyledContainerImage)`
 .slick-prev:before,
 .slick-next:before {
  color: black !important;
 }
 margin: 0 auto 3rem auto;
 max-width: 16rem;
 max-height: 17rem;
 @media ${device.LAPTOP} {
  margin: auto;
  max-width: 28rem;
  max-height: 30rem;
 }
`

export const StyledSliderImage = styled(StyledImage)`
 display: block;
 margin: auto;
 width: 17rem;
 height: 20rem;
 @media ${device.LAPTOP} {
  width: 28rem;
  height: 30rem;
 }
`

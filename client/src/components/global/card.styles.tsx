import React from 'react'
import styled from 'styled-components'
import { FadeInContainer } from '.'
import { StyledContainerImageAnimated } from './animations/StyledContainerImageAnimated'
import { StyledImage } from './assets.styles'
import { StyledContainerFlex, StyledItemFlex } from './containers.styles'
import { globalTheme } from './globalTheme.styles'
import { StyledIconInstagram } from './icons.styles'
import { device } from './mediaQueries.styles'

// * NOTE: Square Cards on main page
const StyledCardSquareNotAnimated = styled(StyledItemFlex)`
 flex: auto;
 height: 10rem;
 margin: 1.25rem;
 max-height: 10rem;
 max-width: 15rem;
 min-height: 10rem;
 min-width: 15rem;
 width: 15rem;
`

export const StyledCardSquare = ({
 children,
 side,
}: {
 children: React.ReactNode
 side?: string
}) => {
 return (
  <FadeInContainer side={side}>
   <StyledContainerImageAnimated>
    <StyledCardSquareNotAnimated>{children}</StyledCardSquareNotAnimated>
   </StyledContainerImageAnimated>
  </FadeInContainer>
 )
}

export const StyledCardSquareImage = styled(StyledImage)`
 height: 100%;
 width: 100%;
`

// * NOTE Best sellers text
export const StyledBestSellersText = styled.header`
 margin: 2rem auto 1rem;
 display: block;
 z-index: 1;
 width: 20em;
 padding: 0.4em 1em;
 background-color: rgba(320, 320, 320, 0.7);
 border-radius: 10px;
 text-align: center;
`

export const StyledCardIconInstagram = styled(StyledIconInstagram)`
 display: none;
 left: 70px;
 position: relative;
 top: -40px;
 transition: display 1s ease-in;
 z-index: 10;
 ${StyledCardSquareNotAnimated}:hover & {
  display: block;
 }
`

export const StyledCardWrapper = styled(StyledItemFlex)`
 align-self: center;
 box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
 height: 40rem;
 margin: 1.25rem;
 vertical-align: middle;
 border-radius: 15px;
 max-width: 27rem;
 z-index: 1;
 background-color: ${globalTheme.SECOND_COLOR};
 @media ${device.MOBILE_M} {
  height: 32rem;
  max-width: 27rem;
 }
`

export const StyledCard = ({
 children,
 side,
}: {
 children: React.ReactNode
 side?: string
}) => {
 return <FadeInContainer side={side}>{children}</FadeInContainer>
}

// * NOTE: Category Cards on main page
export const StyledCardCategoryImage = styled(StyledImage)`
 display: block;
 height: 21rem;
 margin: auto;
 scale: 1;
 transition: transform 0.2s ease-in;
 width: 17rem;
 &:hover {
  transform: scale(1.1);
 }
 @media ${device.MOBILE_M} {
  height: 25rem;
 }
`

export const StyledCardCategoryWrapper = styled(StyledContainerFlex)`
 align-self: middle;
 flex: 1;
 justify-content: space-evenly;
 margin: 20px auto 0;
 padding: auto;
`

export const StyledContainerCategoryCardText = styled(StyledContainerFlex)`
 color: white;
 font-size: 2rem;
 left: 85%;
 position: relative;
 top: -8rem;
 transform: translate(-60%, -50%);
 @media ${device.MOBILE_M} {
  transform: translate(-60%, -50%);
 }
`

const StyledCardCategoryNotAnimated = styled(StyledItemFlex)`
 align-self: center;
 flex: auto;
 margin: 1rem 0.625rem;
 overflow: hidden;
 height: 22rem;
 width: 18rem;
 @media ${device.MOBILE_M} {
  height: 25rem;
  width: 20rem;
 }
`

export const StyledCardCategory = ({
 children,
 side,
}: {
 children: React.ReactNode
 side?: string
}) => {
 return (
  <FadeInContainer side={side}>
   <StyledCardCategoryNotAnimated>{children}</StyledCardCategoryNotAnimated>
  </FadeInContainer>
 )
}

// * NOTE: Card Text
export const StyledCardTextArea = styled.div`
 margin: 2em 3em;
 color: black;
`

// * NOTE: Info cards (checkout, cart items)
export const StyledCardCartItemRow = styled.main`
 background-color: ${globalTheme.SECOND_COLOR};
 width: 90vw;
 padding: 30px;
 border-radius: 10px;
 margin: 3.75rem auto;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 text-align: center;
`

export const StyledCardInfoTitle = styled.h2`
 text-transform: uppercase;
 text-align: center;
 padding: 10px;
 margin: 40px auto 10px;
 border-bottom: 1px solid black;
`

// * NOTE: Dashboard card
export const StyledCardInfoPanel = styled.main`
 -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 background-color: ${globalTheme.SECOND_COLOR};
 border-radius: 10px;
 box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
 max-width: 900px;
 padding: 50px;
 margin: 100px auto;
 border-radius: 10px;
 margin: 8.125rem auto;
 width: 90vw;
 text-align: center;
`

// * NOTE ProductDetail info
export const StyledProductDetailInfoCard = styled.section`
 flex: auto;
 align-self: center;
 background-color: ${globalTheme.SECOND_COLOR};
 width: 28rem;
 max-width: 28rem;
 height: 100%;
 margin: auto;
 vertical-align: middle;
 border-radius: 10px;
 z-index: 1;
 box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
 @media ${device.MOBILE_M} {
  height: 25.125rem;
 }
`

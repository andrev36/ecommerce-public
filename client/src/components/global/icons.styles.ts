import styled, { css } from 'styled-components'
import {
 Facebook,
 Instagram,
 Linkedin,
 Twitter,
} from 'styled-icons/boxicons-logos'
import { Minus, Plus, Search } from 'styled-icons/boxicons-regular'
import { SearchDollar } from 'styled-icons/fa-solid'
import ContactNavIcon from '../../assets/images/icons/Contact.svg'
import InformationNavIcon from '../../assets/images/icons/Information.svg'
import LoginNavIcon from '../../assets/images/icons/Login.svg'
import LogoutNavIcon from '../../assets/images/icons/Logout.svg'
import ProductsNavIcon from '../../assets/images/icons/Product.svg'
import RegisterNavIcon from '../../assets/images/icons/Register.svg'
import ShoppingCartNavIcon from '../../assets/images/icons/Shopping Cart.svg'
import UserProfileNavIcon from '../../assets/images/icons/User profile.svg'
import UserSettingsNavIcon from '../../assets/images/icons/User settings.svg'
import { globalTheme } from './globalTheme.styles'
import { device } from './mediaQueries.styles'

interface DimProps {
 dim: string
}

export const StyledIconPlus = styled(Plus)`
 height: 1.3rem;
 width: 1.3rem;
 cursor: pointer;
 @media ${device.LAPTOP} {
  height: 2.5rem;
  width: 2.5rem;
 }
`

export const StyledIconMinus = styled(Minus)`
 height: 1.3rem;
 width: 1.3rem;
 cursor: pointer;
 @media ${device.LAPTOP} {
  height: 2.5rem;
  width: 2.5rem;
 }
`

export const StyledIconFacebook = styled(Facebook)`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
 color: ${globalTheme.FOURTH_COLOR}
`

export const StyledIconTwitter = styled(Twitter)`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
 color: ${globalTheme.FOURTH_COLOR}
`

export const StyledIconLinkedin = styled(Linkedin)`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
 color: ${globalTheme.FOURTH_COLOR}
`

export const StyledIconInstagram = styled(Instagram)`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
 position: absolute;
 left: 0;
 right: 0;
 margin: 0 auto;
 text-align: center;
 top: 45%;
 font-size: 30px;
 z-index: 2;
 color: white;
 display: none;
 transition: 0.5s;
`

export const StyledIconSearchDollar = styled(SearchDollar)`
 height: 5rem;
 width: 5rem;
 cursor: pointer;
`

export const StyledIconSearch = styled(Search)`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledContactNavIcon = styled.img.attrs((props) => ({
 src: `${ContactNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledProductsNavIcon = styled.img.attrs((props) => ({
 src: `${ProductsNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledCartNavIcon = styled.img.attrs((props) => ({
 src: `${ShoppingCartNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledAboutNavIcon = styled.img.attrs((props) => ({
 src: `${InformationNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledProfileNavIcon = styled.img.attrs((props) => ({
 src: `${UserProfileNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledProfileSettingsNavIcon = styled.img.attrs((props) => ({
 src: `${UserSettingsNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledLoginNavIcon = styled.img.attrs((props) => ({
 src: `${LoginNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledRegisterNavIcon = styled.img.attrs((props) => ({
 src: `${RegisterNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

export const StyledLogoutNavIcon = styled.img.attrs((props) => ({
 src: `${LogoutNavIcon}`,
 alt: 'contact icon',
}))`
 ${(props: DimProps) => css`
  height: ${props.dim};
  width: ${props.dim};
  cursor: pointer;
 `}
`

import styled from 'styled-components'
import MainPicture from '../../assets/images/mainPage/main_page.jpg'

interface StyledImageProps {
 zMin?: boolean
 noPointer?: boolean
 alt?: string
 src?: string
 style?: React.CSSProperties
 noBorderRadius?: boolean
}

export const StyledImage = styled.img`
 z-index: ${(props: StyledImageProps) => (props.zMin ? '-1' : 'auto')};
 cursor: ${(props: StyledImageProps) => (props.noPointer ? 'auto' : 'pointer')};
 border-radius: ${(props: StyledImageProps) =>
  props.noBorderRadius ? '0' : '15px'};
`

export const StyledImageMain = styled.div`
 background-color: transparent;
 background-image: url(${MainPicture});
 background-size: 100%;
 background-position: top;
 background-repeat: no-repeat;
 position: relative;
 top: 0px;
 height: 40rem;
 padding: 20px;
 text-align: center;
 float: none;
 object-fit: inherit;
`

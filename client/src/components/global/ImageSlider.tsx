import React from 'react'
import Slider from 'react-slick'
import { StyledContainerImage } from '..'
import {
 StyledImageSliderWrapper,
 StyledSliderImage,
} from './imageSlider.styles'

interface SliderSettingsProps {
 dots?: boolean
 infinite?: boolean
 speed?: number
 slidesToShow?: number
 slidesToScroll?: number
 variableWidth?: boolean
 adaptiveHeight?: boolean
}

interface ImageSliderProps {
 image1: string
 image2: string
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ image1, image2 }) => {
 const sliderSettings: SliderSettingsProps = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: false,
 }
 return (
  <>
   <StyledImageSliderWrapper>
    <Slider {...sliderSettings}>
     <StyledContainerImage>
      <StyledSliderImage src={image1} alt='t-shirt' />
     </StyledContainerImage>
     <StyledContainerImage>
      <StyledSliderImage src={image2} alt='t-shirt2' />
     </StyledContainerImage>
    </Slider>
   </StyledImageSliderWrapper>
  </>
 )
}

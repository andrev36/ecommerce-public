import React, { useState } from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import { StyledWaveAnimationContainer } from '../..'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const WaveAnimationComponent: React.FC<{ isVisible: boolean }> = ({
 isVisible,
}) => {
 return (
  <Spring
   delay={100}
   to={{
    scale: isVisible ? 1 : 150,
    opacity: isVisible ? 1 : 0,
    freq: isVisible ? '0.0080, 0.0' : '0.0, 0.0',
   }}
   config={{ duration: 3000 }}
  >
   {({ freq, scale, opacity }) => (
    <StyledWaveAnimationContainer>
     <animated.svg
      style={{ opacity }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
     >
      <defs>
       <filter id='water'>
        <AnimFeTurbulence
         type='fractalNoise'
         baseFrequency={freq}
         numOctaves='1'
         result='TURB'
         seed='4'
        />
        <AnimFeDisplacementMap
         xChannelSelector='R'
         yChannelSelector='G'
         in='SourceGraphic'
         in2='TURB'
         result='DISP'
         scale={scale}
        />
       </filter>
      </defs>
      <g filter='url(#water)'>
       <animated.path
        fill='#73B5CC'
        fillOpacity='1'
        d='M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,170.7C672,181,768,139,864,144C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
       />
      </g>
     </animated.svg>
    </StyledWaveAnimationContainer>
   )}
  </Spring>
 )
}

export const WaveAnimation = () => {
 const [isVisible, setVisibility] = useState<boolean>(false)
 const onChange = (visibility: boolean) => {
  visibility && setVisibility(visibility)
 }
 return (
  <VisibilitySensor onChange={onChange}>
   <WaveAnimationComponent isVisible={isVisible} />
  </VisibilitySensor>
 )
}

import React from 'react';
import AboutMainPic from '../assets/images/about/about_main.jpg';
import {
 CardsSquare,
 CardsText,
 Footer,
 StyledContainerImage,
 StyledImage
} from '../components';
import { AboutText } from './aboutPage.utils/AboutText';

export const AboutPage: React.FC = () => {
 return (
  <>
   <article style={{ position: 'relative' }}>
    <main>
     <StyledContainerImage
      style={{
       width: '100%'
      }}
     >
      <StyledImage
       src={AboutMainPic}
       alt='about picture'
       style={{
        maxHeight: '95vh',
        width: '100%'
       }}
       zMin
       noPointer
       noBorderRadius
      />
      <AboutText />
     </StyledContainerImage>
    </main>
    <CardsText />
    <CardsSquare />
   </article>
   <Footer />
  </>
 );
};

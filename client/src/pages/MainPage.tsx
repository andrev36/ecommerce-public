import React from 'react';
import MainPicture from '../assets/images/mainPage/main_page.jpg';
import {
 CardsCategory,
 CardsSquare,
 Footer,
 StyledContainerImage,
 StyledImage
} from '../components';
import { MainText } from './mainPage.utils/MainText';

export const MainPage = () => {
 return (
  <>
   <article style={{ position: 'relative' }}>
    <main>
     <StyledContainerImage
      style={{
       width: '100%',
       maxWidth: '100vw'
      }}
     >
      <StyledImage
       src={MainPicture}
       alt='main picture'
       style={{
        maxHeight: '95vh',
        width: '100%'
       }}
       zMin
       noPointer
       noBorderRadius
      />
      <MainText />
     </StyledContainerImage>
    </main>
    <CardsCategory />
    <CardsSquare />
   </article>
   <Footer />
  </>
 );
};

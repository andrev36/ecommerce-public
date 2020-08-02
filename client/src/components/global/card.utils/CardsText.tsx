import React from 'react';
import { StyledCardWrapper, StyledContainerFlex } from '../..';
import TextCardFirstPic from '../../../assets/images/about/balloon-2130491-0.svg';
import TextCardSecondPic from '../../../assets/images/about/mobile-testing-and-group-discussion-2080957-0.svg';
import { CardText } from './CardText';

export const CardsText = () => {
 return (
  <>
   <section
    style={{
     margin: 'auto'
    }}
   >
    <StyledContainerFlex
     style={{
      justifyContent: 'space-around'
     }}
    >
     <StyledCardWrapper>
      <div style={{ textAlign: 'center', margin: '2rem auto' }}>
       <img
        src={TextCardFirstPic}
        alt='register'
        style={{ width: '15rem', height: '15rem' }}
       />
      </div>
      <CardText />
     </StyledCardWrapper>
     <StyledCardWrapper>
      <div style={{ textAlign: 'center', margin: '2rem auto' }}>
       <img
        src={TextCardSecondPic}
        alt='register'
        style={{ width: '15rem', height: '15rem' }}
       />
      </div>
      <CardText />
     </StyledCardWrapper>
    </StyledContainerFlex>
   </section>
  </>
 );
};

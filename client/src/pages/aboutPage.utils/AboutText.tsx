import React from 'react';
import { NavLink } from 'react-router-dom';
import {
 FadeInContainer,
 StyledButtonAboutPage,
 StyledContainerFlex,
 StyledItemFlex
} from '../../components';
import {
 StyledAboutPageMainText,
 StyledContainerAboutPageText
} from '../aboutPage.styles';

export const AboutText = () => {
 return (
  <StyledContainerAboutPageText>
   <FadeInContainer side='topSide'>
    <StyledAboutPageMainText>PASSION FOR BOOTS</StyledAboutPageMainText>
   </FadeInContainer>
   <StyledContainerFlex
    style={{
     position: 'absolute',
     width: '65vw',
     justifyContent: 'space-evenly'
    }}
   >
    <StyledItemFlex>
     <NavLink to='/products' style={{ textDecoration: 'none' }}>
      <StyledButtonAboutPage side='leftSide'>
       <span>Shop</span>
      </StyledButtonAboutPage>
     </NavLink>
    </StyledItemFlex>
    <StyledItemFlex>
     <NavLink to='/contact' style={{ textDecoration: 'none' }}>
      <StyledButtonAboutPage side='rightSide' style={{ fontSize: '1.3em' }}>
       <span>Contact</span>
      </StyledButtonAboutPage>
     </NavLink>
    </StyledItemFlex>
   </StyledContainerFlex>
  </StyledContainerAboutPageText>
 );
};

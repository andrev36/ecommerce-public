import React from 'react';
import { NavLink } from 'react-router-dom';
import { FadeInContainer, StyledButtonMainPage } from '../../components';
import { StyledContainerMainPageText } from '../mainPage.styles';

export const MainText = () => {
 return (
  <StyledContainerMainPageText>
   <FadeInContainer topSide>
    <p>SHOP NOW</p>
   </FadeInContainer>
   <div style={{ position: 'absolute' }}>
    <NavLink to='/products' style={{ textDecoration: 'none' }}>
     <StyledButtonMainPage style={{ display: 'block' }}>
      <span>Shop</span>
     </StyledButtonMainPage>
    </NavLink>
   </div>
  </StyledContainerMainPageText>
 );
};

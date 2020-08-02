import React from 'react';
import { NavLink } from 'react-router-dom';
import {
 StyledButton,
 StyledCardCategory,
 StyledCardCategoryImage,
 StyledCardCategoryWrapper,
 StyledContainerCategoryCardText
} from '../..';
import { getStaticPath } from '../../../util/getStaticPath.utils';

export const CardsCategory: React.FC = () => {
 const baseURL = getStaticPath();
 return (
  <>
   <section>
    <StyledCardCategoryWrapper>
     <StyledCardCategory side='leftSide'>
      <StyledCardCategoryImage
       src={`http://${baseURL}/static/products/product2/1.jpg`}
      />
      <StyledContainerCategoryCardText>
       <NavLink to='/products'>
        <StyledButton style={{ fontSize: '17px' }}>Shop for male</StyledButton>
       </NavLink>
      </StyledContainerCategoryCardText>
     </StyledCardCategory>
     <StyledCardCategory>
      <StyledCardCategoryImage
       src={`http://${baseURL}/static/products/product1/1.jpg`}
      />
      <StyledContainerCategoryCardText>
       <NavLink to='/products'>
        <StyledButton style={{ fontSize: '17px' }}>
         Shop for female
        </StyledButton>
       </NavLink>
      </StyledContainerCategoryCardText>
     </StyledCardCategory>
    </StyledCardCategoryWrapper>
   </section>
  </>
 );
};

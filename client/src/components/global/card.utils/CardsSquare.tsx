import { Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
 StyledBestSellersText,
 StyledCardIconInstagram,
 StyledCardSquare,
 StyledCardSquareImage,
 StyledContainerFlex
} from '../..';
import { getStaticPath } from '../../../util/getStaticPath.utils';

export const CardsSquare: React.FC = () => {
 // * NOTE Get base URL depending on environment
 const baseURL = getStaticPath();
 return (
  <>
   <section style={{ margin: '50px 0' }}>
    <StyledBestSellersText>
     <Typography variant='h3'>Best sellers</Typography>
    </StyledBestSellersText>
    <StyledContainerFlex
     style={{
      padding: '5px',
      margin: '30px',
      justifyContent: 'space-evenly',
      flex: '1'
     }}
    >
     <StyledCardSquare side='topSide'>
      <NavLink to='/products/3'>
       <StyledCardSquareImage
        alt='picture'
        src={`http://${baseURL}/static/products/product4/1.jpg`}
       />
       <StyledCardIconInstagram dim='2.5rem' />
      </NavLink>
     </StyledCardSquare>
     <StyledCardSquare side='topSide'>
      <NavLink to='/products/4'>
       <StyledCardSquareImage
        src={`http://${baseURL}/static/products/product5/1.jpg`}
       />
       <StyledCardIconInstagram dim='2.5rem' />
      </NavLink>
     </StyledCardSquare>
     <StyledCardSquare side='topSide'>
      <NavLink to='/products/5'>
       <StyledCardSquareImage
        src={`http://${baseURL}/static/products/product6/1.jpg`}
       />
       <StyledCardIconInstagram dim='2.5rem' />
      </NavLink>
     </StyledCardSquare>
     <StyledCardSquare side='topSide'>
      <NavLink to='/products/6'>
       <StyledCardSquareImage
        src={`http://${baseURL}/static/products/product7/1.jpg`}
       />
       <StyledCardIconInstagram dim='2.5rem' />
      </NavLink>
     </StyledCardSquare>
    </StyledContainerFlex>
   </section>
  </>
 );
};

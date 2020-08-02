import { Typography } from '@material-ui/core';
import React from 'react';
import {
 CheckoutSubmitCard,
 Footer,
 StyledContainerFlex,
 StyledFormCheckout,
 StyledItemFlex,
 StyledTable,
 StyledTableBody,
 StyledTableCell,
 StyledTableHead,
 StyledTableRow
} from '../..';
import CartImage from '../../../assets/images/cart/logistics-2080958-0.svg';

interface CartLayoutProps {
 addedItemsToCart?: any;
}
export const CartLayout: React.FC<CartLayoutProps> = ({ addedItemsToCart }) => {
 return (
  <>
   <article style={{ padding: '20px' }}>
    <header style={{ height: '5em', textAlign: 'center', margin: '2rem auto' }}>
     <Typography variant='h3'>You have ordered:</Typography>
    </header>
    <main>
     <StyledTable>
      <StyledTableHead>
       <StyledTableRow>
        <StyledTableCell>Product</StyledTableCell>
        <StyledTableCell>Price</StyledTableCell>
        <StyledTableCell>Quantity</StyledTableCell>
       </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>{addedItemsToCart}</StyledTableBody>
     </StyledTable>
     <StyledContainerFlex style={{ margin: '2rem auto' }}>
      <StyledItemFlex style={{ margin: 'auto 2rem' }}>
       <img
        src={CartImage}
        alt='cart'
        style={{ width: '15rem', height: '15rem' }}
       />
      </StyledItemFlex>
      <StyledItemFlex style={{ margin: 'auto 2rem' }}>
       <StyledFormCheckout>
        <CheckoutSubmitCard />
       </StyledFormCheckout>
      </StyledItemFlex>
     </StyledContainerFlex>
    </main>
   </article>
   <Footer />
  </>
 );
};

import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyledCheckoutProductsContainer, StyledCheckoutProductsRow } from '..';
import { Items, StyledCardCartItemRow } from '../global';

interface Props {
 items: Items;
 total: number;
}

const CheckoutProductsTableComponent: React.FC<Props> = ({ items, total }) => {
 const addedItems = items.length ? (
  items.map((item: Items) => {
   return (
    <React.Fragment key={item.id}>
     <StyledCheckoutProductsRow>
      <NavLink to={`/products/${item.id}`}>{item.title}</NavLink>
     </StyledCheckoutProductsRow>
     <StyledCheckoutProductsRow>{item.quantity}</StyledCheckoutProductsRow>
     <StyledCheckoutProductsRow>
      {item.cost * item.quantity}$
     </StyledCheckoutProductsRow>
    </React.Fragment>
   );
  })
 ) : (
  <Typography variant='h5'>Nothing on checkout</Typography>
 );
 return (
  <>
   <StyledCardCartItemRow>
    <Typography variant='h3'>Your order</Typography>
    <StyledCheckoutProductsContainer>
     <Typography variant='h5'>Product</Typography>
     <Typography variant='h5'>Quantity</Typography>
     <Typography variant='h5'>Cost</Typography>
     {addedItems}
    </StyledCheckoutProductsContainer>
    <header>
     <Typography variant='h4'>Total: {total}$</Typography>
    </header>
   </StyledCardCartItemRow>
  </>
 );
};

const mapStateToProps = (state: any) => {
 return {
  items: state.cartReducer.addedItems,
  total: state.cartReducer.total
 };
};

export const CheckoutProductsTable = connect(
 mapStateToProps,
 {}
)(CheckoutProductsTableComponent);

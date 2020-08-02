import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
 addQuantity,
 checkIfCartEmpty,
 deleteFromCart,
 fetchAddedItems,
 subQuantity
} from '../../actions/cart.actions';
import { Items } from '../global';
import { AddedItemsToCart, CartLayout } from './cart.utils';

interface Props {
 id?: number;
 items?: Items[];
 addedItemsToCart?: any;
 deleteFromCart: (id: number) => void;
 addQuantity: (id: number) => void;
 subQuantity: (id: number) => void;
 checkIfCartEmpty: (cartItems?: Items[]) => void;
 fetchAddedItems: (cartAddedItems?: Items[]) => void;
}

const CartComponent: React.FC<Props> = ({
 items,
 deleteFromCart,
 addQuantity,
 checkIfCartEmpty,
 fetchAddedItems,
 subQuantity
}) => {
 const handleRemove = async (id: number, product: Items, userId: number) => {
  deleteFromCart(id);
  await axios.post(`/api/cart/remove/${id}`, {
   product,
   userId
  });
 };
 const handleAddQuantity = (id: number) => {
  addQuantity(id);
 };
 const handleSubQuantity = (id: number) => {
  subQuantity(id);
 };
 useEffect(() => {
  checkIfCartEmpty(items);
  fetchAddedItems(items);
  // eslint-disable-next-line
 }, [items]);
 const AddedItemsToCartComponent = (
  <AddedItemsToCart
   items={items}
   handleAddQuantity={handleAddQuantity}
   handleSubQuantity={handleSubQuantity}
   handleRemove={handleRemove}
  />
 );
 return (
  <>
   <CartLayout addedItemsToCart={AddedItemsToCartComponent} />
  </>
 );
};

const mapStateToProps = (state: any) => {
 return {
  items: state.cartReducer.addedItems,
  userId: state.session.userId
 };
};

const mapDispatchToProps = (dispatch: any) => {
 return {
  deleteFromCart: (id: number) => {
   dispatch(deleteFromCart(id));
  },
  addQuantity: (id: number) => {
   dispatch(addQuantity(id));
  },
  subQuantity: (id: number) => {
   dispatch(subQuantity(id));
  },
  checkIfCartEmpty: (cartItems?: Items[]) => {
   dispatch(checkIfCartEmpty(cartItems));
  },
  fetchAddedItems: (cartAddedItems?: Items[]) => {
   dispatch(fetchAddedItems(cartAddedItems));
  }
 };
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent);

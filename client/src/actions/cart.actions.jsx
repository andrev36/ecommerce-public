import * as CartTypes from './cart.types';

export const addToCart = (id, itemAddedToCart, userId) => {
 return {
  type: CartTypes.ADD_TO_CART,
  id,
  itemAddedToCart,
  userId
 };
};

export const deleteFromCart = (id, itemRemovedFromCart, userId) => {
 return {
  type: CartTypes.DELETE_FROM_CART,
  id,
  itemRemovedFromCart,
  userId
 };
};

export const addQuantity = (id) => {
 return {
  type: CartTypes.ADD_QUANTITY,
  id
 };
};

export const subQuantity = (id) => {
 return {
  type: CartTypes.SUB_QUANTITY,
  id
 };
};

export const fetchItemsRedux = (request) => {
 return {
  type: CartTypes.FETCH_ITEMS,
  request
 };
};

export const fetchAddedItems = (cartAddedItems) => {
 return {
  type: CartTypes.FETCH_ADDED_ITEMS,
  cartAddedItems
 };
};

export const checkIfCartEmpty = (cartItems) => {
 return {
  type: CartTypes.CHECK_IF_CART_EMPTY,
  cartItems
 };
};

import { Items } from '../components'
import * as CartTypes from './cart.types'

export const addToCart = (id: number): CartTypes.AppActions => {
 return {
  type: CartTypes.ADD_TO_CART,
  id,
 }
}

export const deleteFromCart = (id: number): CartTypes.AppActions => {
 return {
  type: CartTypes.DELETE_FROM_CART,
  id,
 }
}

export const addQuantity = (id: number): CartTypes.AppActions => {
 return {
  type: CartTypes.ADD_QUANTITY,
  id,
 }
}

export const subQuantity = (id: number): CartTypes.AppActions => {
 return {
  type: CartTypes.SUB_QUANTITY,
  id,
 }
}

export const fetchItemsRedux = (request: Items[]): CartTypes.AppActions => {
 return {
  type: CartTypes.FETCH_ITEMS,
  request,
 }
}

export const fetchAddedItems = (
 cartAddedItems: Items[],
): CartTypes.AppActions => {
 return {
  type: CartTypes.FETCH_ADDED_ITEMS,
  cartAddedItems,
 }
}

export const checkIfCartEmpty = (cartItems: Items[]): CartTypes.AppActions => {
 return {
  type: CartTypes.CHECK_IF_CART_EMPTY,
  cartItems,
 }
}

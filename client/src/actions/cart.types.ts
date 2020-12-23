import { Items } from '../components'

export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUB_QUANTITY = 'SUB_QUANTITY'
export const ADD_SHIPPING = 'ADD_SHIPPING'
export const SUB_SHIPPING = 'SUB_SHIPPING'
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const FETCH_ADDED_ITEMS = 'FETCH_ADDED_ITEMS'
export const CHECK_IF_CART_EMPTY = 'CHECK_IF_CART_EMPTY'

export interface AddToCartAction {
 type: typeof ADD_TO_CART
 id: number
}

export interface DeleteFromCartAction {
 type: typeof DELETE_FROM_CART
 id: number
}

export interface AddQuantityAction {
 type: typeof ADD_QUANTITY
 id: number
}

export interface SubQuantityAction {
 type: typeof SUB_QUANTITY
 id: number
}

export interface AddShippingAction {
 type: typeof ADD_SHIPPING
}

export interface SubShippingAction {
 type: typeof SUB_SHIPPING
}

export interface FetchItemsAction {
 type: typeof FETCH_ITEMS
 request: Items[]
}

export interface FetchAddedItemsAction {
 type: typeof FETCH_ADDED_ITEMS
 cartAddedItems: Items[]
}

export interface CheckIfCartEmptyAction {
 type: typeof CHECK_IF_CART_EMPTY
 cartItems: Items[]
}

export type CartActionTypes =
 | AddToCartAction
 | DeleteFromCartAction
 | AddQuantityAction
 | SubQuantityAction
 | AddShippingAction
 | SubShippingAction
 | FetchItemsAction
 | FetchAddedItemsAction
 | CheckIfCartEmptyAction

export type AppActions = CartActionTypes

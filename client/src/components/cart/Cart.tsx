import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import {
 addQuantity,
 checkIfCartEmpty,
 deleteFromCart,
 fetchAddedItems,
 subQuantity,
} from '../../actions/cart.actions'
import { AppActions } from '../../actions/cart.types'
import { Items } from '../global'
import { AddedItemsToCart, CartLayout } from './cart.utils'

interface Props {
 id?: number
 items: Items[]
 addedItemsToCart?: Items[]
 deleteFromCart: (id: number) => void
 addQuantity: (id: number) => void
 subQuantity: (id: number) => void
 checkIfCartEmpty: (cartItems: Items[]) => void
 fetchAddedItems: (cartAddedItems: Items[]) => void
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Cart with items from Redux store, with add, subtract,
* remove item from cart actions and also checking if cart
* is empty
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const CartComponent: React.FC<Props> = ({
 items,
 deleteFromCart,
 addQuantity,
 checkIfCartEmpty,
 fetchAddedItems,
 subQuantity,
}) => {
 const handleRemove = async (id: number) => {
  deleteFromCart(id)
 }
 const handleAddQuantity = (id: number) => {
  addQuantity(id)
 }
 const handleSubQuantity = (id: number) => {
  subQuantity(id)
 }
 useEffect(() => {
  checkIfCartEmpty(items)
  fetchAddedItems(items)
  // eslint-disable-next-line
 }, [items])
 return (
  <>
   <CartLayout
    addedItemsToCart={
     <AddedItemsToCart
      items={items}
      handleAddQuantity={handleAddQuantity}
      handleSubQuantity={handleSubQuantity}
      handleRemove={handleRemove}
     />
    }
   />
  </>
 )
}

interface LinkStateToProps {
 cartReducer: {
  addedItems: Items[]
 }
}

const mapStateToProps = (state: LinkStateToProps) => {
 return {
  items: state.cartReducer.addedItems,
 }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
 return {
  deleteFromCart: (id: number) => {
   dispatch(deleteFromCart(id))
  },
  addQuantity: (id: number) => {
   dispatch(addQuantity(id))
  },
  subQuantity: (id: number) => {
   dispatch(subQuantity(id))
  },
  checkIfCartEmpty: (cartItems: Items[]) => {
   dispatch(checkIfCartEmpty(cartItems))
  },
  fetchAddedItems: (cartAddedItems: Items[]) => {
   dispatch(fetchAddedItems(cartAddedItems))
  },
 }
}

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent)

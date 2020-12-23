import * as CartTypes from '../actions/cart.types'
import { Items } from '../components'

export const cartReducerDefaultState: {
 items: Items[]
 addedItems: Items[]
 total: number
} = {
 items: [],
 addedItems: [],
 total: 0,
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Reducer with a cart functionality and logic
* Adding, removing item to/from a cart.
* Adding, subtracting item quantity in a cart
* Checking on render if a cart is empty.
* Getting information about a cart state with FETCH_ADDED_ITEMS
* Cost added or removed for a shipping service
* Calculating total cost for all items/services in cart
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const cartReducer = (
 state = cartReducerDefaultState,
 action: CartTypes.CartActionTypes,
): {
 items: Items[]
 addedItems: Items[]
 total: number
} => {
 switch (action.type) {
  case CartTypes.FETCH_ITEMS: {
   return { ...state, items: action.request }
  }
  case CartTypes.FETCH_ADDED_ITEMS: {
   return { ...state, items: action.cartAddedItems }
  }
  case CartTypes.ADD_TO_CART: {
   const addedItem = state?.items?.find((item) => item.id === action.id)
   const existedItem = state?.addedItems?.find((item) => action.id === item.id)
   if (existedItem) {
    if (addedItem) {
     addedItem.quantity += 1
     return {
      ...state,
      total: state.total + addedItem.cost,
     }
    }
   } else {
    if (addedItem) {
     addedItem.quantity = 1
     const newTotal = state.total + addedItem.cost
     return {
      ...state,
      addedItems: [...state?.addedItems, addedItem],
      total: newTotal,
     }
    }
   }
  }
  case CartTypes.DELETE_FROM_CART: {
   const itemToRemove = state.addedItems.find((item) => action.id === item.id)
   const newItems = state.addedItems.filter((item) => action.id !== item.id)
   if (itemToRemove) {
    const newTotal = state.total - itemToRemove.cost * itemToRemove.quantity
    itemToRemove.quantity = 0
    return {
     ...state,
     addedItems: newItems,
     total: newTotal,
    }
   }
  }
  case CartTypes.ADD_QUANTITY: {
   const addedItem = state?.items.find((item) => item.id === action.id)
   if (addedItem) {
    addedItem.quantity += 1
    const newTotal = state.total + addedItem.cost
    return {
     ...state,
     total: newTotal,
    }
   }
  }
  case CartTypes.SUB_QUANTITY: {
   const addedItem = state.items.find((item) => item.id === action.id)
   if (addedItem) {
    if (addedItem.quantity === 1) {
     const newItems = state.addedItems.filter((item) => item.id !== action.id)
     const newTotal = state.total - addedItem.cost
     addedItem.quantity = 0
     return {
      ...state,
      addedItems: newItems,
      total: newTotal,
     }
    } else {
     addedItem.quantity -= 1
     const newTotal = state.total - addedItem.cost
     return {
      ...state,
      total: newTotal,
     }
    }
   }
  }
  case CartTypes.ADD_SHIPPING: {
   return {
    ...state,
    total: state.total + 6,
   }
  }
  case CartTypes.SUB_SHIPPING: {
   return {
    ...state,
    total: state.total - 6,
   }
  }
  case CartTypes.CHECK_IF_CART_EMPTY: {
   if (action.cartItems.length === 0) {
    return {
     ...state,
     total: 0,
    }
   } else {
    return {
     ...state,
     addedItems: state.addedItems,
     total: state.total,
    }
   }
  }
  default:
   return state
 }
}

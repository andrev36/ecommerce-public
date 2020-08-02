import * as CartTypes from '../actions/cart.types';

export const cartReducerDefaultState = {
 items: [],
 addedItems: [],
 total: 0
};

export const cartReducer = (state = cartReducerDefaultState, action) => {
 switch (action.type) {
  case CartTypes.FETCH_ITEMS: {
   return { ...state, items: action.request };
  }
  case CartTypes.FETCH_ADDED_ITEMS: {
   return { ...state, items: action.cartAddedItems };
  }
  case CartTypes.ADD_TO_CART: {
   let addedItem = state.items.find((item) => item.id === action.id);
   let existed_item = state.addedItems.find((item) => action.id === item.id);
   if (existed_item) {
    addedItem.quantity += 1;
    return {
     ...state,
     total: state.total + addedItem.cost
    };
   } else {
    addedItem.quantity = 1;
    let newTotal = state.total + addedItem.cost;
    return {
     ...state,
     addedItems: [...state.addedItems, addedItem],
     total: newTotal
    };
   }
  }
  case CartTypes.DELETE_FROM_CART: {
   let itemToRemove = state.addedItems.find((item) => action.id === item.id);
   let new_items = state.addedItems.filter((item) => action.id !== item.id);
   let newTotal = state.total - itemToRemove.cost * itemToRemove.quantity;
   itemToRemove.quantity = 0;
   return {
    ...state,
    addedItems: new_items,
    total: newTotal
   };
  }
  case CartTypes.ADD_QUANTITY: {
   let addedItem = state.items.find((item) => item.id === action.id);
   addedItem.quantity += 1;
   let newTotal = state.total + addedItem.cost;
   return {
    ...state,
    total: newTotal
   };
  }
  case CartTypes.SUB_QUANTITY: {
   let addedItem = state.items.find((item) => item.id === action.id);
   if (addedItem.quantity === 1) {
    let new_items = state.addedItems.filter((item) => item.id !== action.id);
    let newTotal = state.total - addedItem.cost;
    addedItem.quantity = 0;
    return {
     ...state,
     addedItems: new_items,
     total: newTotal
    };
   } else {
    addedItem.quantity -= 1;
    let newTotal = state.total - addedItem.cost;
    return {
     ...state,
     total: newTotal
    };
   }
  }
  case CartTypes.ADD_SHIPPING: {
   return {
    ...state,
    total: state.total + 6
   };
  }
  case CartTypes.SUB_SHIPPING: {
   return {
    ...state,
    total: state.total - 6
   };
  }
  case CartTypes.CHECK_IF_CART_EMPTY: {
   if (action.cartItems.length === 0) {
    return {
     ...state,
     total: 0
    };
   } else {
    return {
     ...state,
     addedItems: state.addedItems,
     total: state.total
    };
   }
  }
  default:
   return state;
 }
};

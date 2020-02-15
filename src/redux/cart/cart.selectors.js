import { createSelector } from 'reselect';

//input selector  = doesn't use create selector | |  it gets the whole state and provides
// a part of it
const selectCart = state => state.cart;

//export selector

// It provides the memoized data
// takes 2 arguements, 1 is the input selector which is selectCart from the above code

// 2nd is the function which provides the value which we want from the selector

// provides the output in the order in which it was written
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

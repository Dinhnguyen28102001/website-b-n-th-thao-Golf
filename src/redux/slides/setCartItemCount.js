// actions/cartActions.js
export const resetCartItemCount = () => {
    return {
      type: 'RESET_CART_ITEM_COUNT',
    };
  };
  
  // reducers/cartReducer.js
  const initialState = {
    itemCount: 0,
    // ... other cart-related state
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CART_ITEM_COUNT':
        return {
          ...state,
          itemCount: action.payload,
        };
      case 'RESET_CART_ITEM_COUNT':
        return {
          ...state,
          itemCount: 0,
          // ... reset other cart-related state
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
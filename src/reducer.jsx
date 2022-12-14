import { product_1_thumb } from './assets';

function reducer(state, action) {
  if (action.type === 'INCREASE_AMOUNT') {
    return { ...state, amount: state.amount + 1 };
  }

  if (action.type === 'DECREASE_AMOUNT') {
    if (state.amount === 0) {
      return { ...state, amount: 0 };
    }
    return { ...state, amount: state.amount - 1 };
  }

  if (action.type === 'ADD_TO_CART') {
    const {
      product: { name, price },
      total,
    } = state;
    const newProduct = [
      {
        name,
        thumb: product_1_thumb,
        price,
        quantity: state.quantity + state.amount,
        total,
      },
    ];

    if (state.amount > 0) {
      return {
        ...state,
        quantity: state.quantity + state.amount,
        cart: newProduct,
      };
    }
  }

  if (action.type === 'DELETE_ITEM') {
    return { ...state, quantity: 0, cart: [] };
  }
  return state;
}

export default reducer;

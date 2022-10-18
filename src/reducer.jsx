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
      quantity,
      total,
    } = state;
    const product = [
      {
        name,
        thumb: product_1_thumb,
        price,
        quantity,
        total,
      },
    ];
    return {
      ...state,
      quantity: state.quantity + state.amount,
      amount: 0,
      cart: product,
    };
  }

  if (action.type === 'DELETE_ITEM') {
    return { ...state, quantity: 0, cart: [] };
  }
  return state;
}

export default reducer;

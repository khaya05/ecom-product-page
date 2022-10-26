import { useReducer } from 'react';
import { createContext, useContext, useState } from 'react';
import { images } from './data';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  product: {
    name: 'fall limited edition sneakers',
    desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 50,
  },
  cart: [],
  total: 0,
  quantity: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [showAside, setShowAside] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [index, setIndex] = useState(0);
  const [main, setMain] = useState(images[index]);
  const [location, setLocation] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({ type: 'INCREASE_AMOUNT' });
  };

  const decrease = () => {
    dispatch({ type: 'DECREASE_AMOUNT' });
  };

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART' });
  };

  const deleteItem = () => {
    dispatch({ type: 'DELETE_ITEM' });
  };

  return (
    <AppContext.Provider
      value={{
        index,
        main,
        showAside,
        showCart,
        showBackdrop,
        location,
        setLocation,
        setShowBackdrop,
        setShowCart,
        setShowAside,
        setIndex,
        setMain,
        ...state,
        increase,
        decrease,
        addToCart,
        deleteItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

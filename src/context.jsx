import { useReducer } from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const reducer = (action, type) => {};

const initialState = {
  originalPrice: '___',
  discountOffer: '___',
  currentPrice: 'parseFloat(originalPrice * discountOffer)',
  quantity: '___',
};

const AppProvider = ({ children }) => {
  const [showAside, setShowAside] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [cartItems, setCartItems] = useState(['']);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        showAside,
        cartItems,
        showCart,
        showBackdrop,
        setShowBackdrop,
        setShowCart,
        setShowAside,
        setCartItems,
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

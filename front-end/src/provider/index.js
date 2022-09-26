import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const context = useMemo(() => ({
    products,
    setProducts,
    total,
    setTotal,
    cartItems,
    setCartItems,
  }), [cartItems, products, total]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
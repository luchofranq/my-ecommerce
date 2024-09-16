import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  return { cartItems, addToCart, removeFromCart };
};

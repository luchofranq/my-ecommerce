import React from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from 'semantic-ui-react';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;

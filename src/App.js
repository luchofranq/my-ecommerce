import React from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; // Ajusta la ruta si es necesario
import { CartProvider, useCart } from './contexts/CartContext'; // Ajusta la ruta si es necesario
import ProductCard from './components/ProductCard';
import './styles/App.scss'; // Asegúrate de que este archivo exista o ajusta la ruta si es necesario

function App() {
  const [products] = React.useState([
    { name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { name: 'Product 2', price: 49.99, image: 'product2.jpg' },
    { name: 'Product 3', price: 19.99, image: 'product3.jpg' },
  ]);

  const { theme, toggleTheme } = useTheme();
  const { cart, addToCart } = useCart();

  return (
    <Container className={`app ${theme}`}>
      <Header as="h1">My E-commerce App</Header>
      <Button onClick={toggleTheme} className="theme-toggle-button">
        Toggle Theme
      </Button>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="cart">
        <Header as="h2">Shopping Cart</Header>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

const WrappedApp = () => (
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);

export default WrappedApp;

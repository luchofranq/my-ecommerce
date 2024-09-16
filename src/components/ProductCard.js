import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './ProductCard.scss'; // Asegúrate de que este archivo exista o ajusta la ruta

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, image } = product;

  return (
    <Card className="product-card">
      <Image src={image} alt={name} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>${price.toFixed(2)}</Card.Description>
        <Button onClick={onAddToCart}>Add to Cart</Button>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;

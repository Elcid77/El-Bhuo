import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { cartContext } from '../context/cartContext';

function ItemCount({ detail }) {
  const [count, setCount] = useState(1); 
  const { addToCart } = useContext(cartContext);

  const handleAdd = () => setCount((prev) => prev + 1);
  const handleSub = () => setCount((prev) => (prev > 1 ? prev - 1 : prev)); 
  const handleAddToCart = () => addToCart({ ...detail, qty: count });

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="d-flex justify-content-between align-items-center border rounded p-2"
        style={{ width: 150 }}
      >
        <Button
          variant="warning"
          onClick={handleSub}
          className="rounded-circle"
          style={{ width: 40, height: 40 }}
        >
          -
        </Button>
        <span className="fs-4 text-primary">{count}</span>
        <Button
          variant="warning"
          onClick={handleAdd}
          className="rounded-circle"
          style={{ width: 40, height: 40 }}
        >
          +
        </Button>
      </div>
      <Button
        variant="success"
        className="mt-3 px-4"
        onClick={handleAddToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;

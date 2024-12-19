import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useCart } from "../context/useCart";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";

function Cart() {
  const { cart, getTotal, removeFromCart } = useCart(); // Añadido removeFromCart

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const nombre = e.target[1].value;
    const telefono = e.target[2].value;

    const order = {
      buyer: { nombre, email, telefono },
      total: getTotal(),
      items: cart,
      date: serverTimestamp(),
    };

    createOrder(order);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-warning">Tu carrito está vacío</h2>
        <p className="text-muted">Agrega productos para comenzar tu compra</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* Lista de productos en el carrito */}
      <div className="w-100 w-lg-50 p-4 bg-light shadow-sm rounded">
        <h3 className="text-warning text-center mb-4">Carrito de Compras</h3>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Image
                  src={prod.imagen}
                  alt={prod.nombre}
                  rounded
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  className="me-3"
                />
                <div>
                  <div>{prod.nombre}</div>
                  <small className="text-muted">Cantidad: {prod.qty}</small>
                </div>
              </div>
              <div>
                <span className="text-primary me-3">${(prod.qty * prod.precio).toFixed(2)}</span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(prod.id)} // Botón para eliminar
                >
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-between mt-3">
          <h4 className="text-primary">Total: ${getTotal().toFixed(2)}</h4>
        </div>
      </div>

      {/* Formulario de compra */}
      <div className="w-100 w-lg-50 p-4 mt-4 mt-lg-0">
        <h3 className="text-warning text-center mb-4">Detalles de Compra</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu email" />
            <Form.Text className="text-muted">
              No compartiremos tu email con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Introduce tu teléfono" />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Confirmar Compra
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Cart

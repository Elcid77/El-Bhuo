import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4"> 
      <Card className="shadow-sm">
        <Card.Img variant="top" src={item.imagen} alt={item.nombre} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.autor}</Card.Text>
          <Card.Text>{item.genero}</Card.Text>
          <Card.Text>{item.precio}</Card.Text>
          <Button as={Link} to={`/item/${item.id}`} variant="primary" className="w-100">
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;

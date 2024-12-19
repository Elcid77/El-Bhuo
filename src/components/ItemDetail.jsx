import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemCount from './ItemCount';

function ItemDetail({ detail }) {
  return (
    <Container className="mt-4">
      <Card className="shadow-lg border-0">
        <Row>
          <div className="col-md-6">
            <Card.Img
              variant="top"
              src={detail?.imagen}
              alt={detail?.name}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title className="text-center text-warning">{detail?.name}</Card.Title>
              <Card.Text className="text-muted">{detail?.descripcion}</Card.Text>
              <ItemCount detail={detail} />
            </Card.Body>
          </div>
        </Row>
      </Card>
    </Container>
  );
}

export default ItemDetail;

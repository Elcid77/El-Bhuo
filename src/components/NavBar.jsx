import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>EL BHUO</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/genero/Ficción">Ficción</Nav.Link>
          <Nav.Link as={Link} to="/genero/Historia">Historia</Nav.Link>
          <Nav.Link as={Link} to="/genero/Romance">Romance</Nav.Link>
          <Nav.Link as={Link} to="/genero/Fantasía">Fantasía</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;

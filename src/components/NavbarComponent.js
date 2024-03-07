import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Rehash Routes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Nanami</Nav.Link>
            <Nav.Link as={Link} to={'/second'}>Geto</Nav.Link>
            <Nav.Link as={Link} to={'/third'}>Ichigo</Nav.Link>
            <Nav.Link as={Link} to={'/fourth'}>Gojo</Nav.Link>
            <Nav.Link as={Link} to={'/fifth'}>End Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
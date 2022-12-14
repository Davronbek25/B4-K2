import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function NavBar({ changeCategory }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to ="/" className='text-decoration-none text-dark'>
            Book Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to='/' className='text-decoration-none text-secondary'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/latestRelease' className='text-decoration-none text-secondary'>
                Latest
              </Link>
            </Nav.Link>
            <Form.Select aria-label="Default select example" onChange={(event) => changeCategory(event)}>
              <option value="0">Fantasy</option>
              <option value="1">History</option>
              <option value="2">Horror</option>
              <option value="3">Romance</option>
              <option value="4">Scifi</option>
            </Form.Select>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
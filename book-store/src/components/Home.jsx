import { Container, Row } from "react-bootstrap"
import CardCol from "./CardCol"
import Spinner from 'react-bootstrap/Spinner';

const Home = ({ books, selectValue }) => {
  return (
    <Container className="mt-5">
      <h1>Welcome to Book Store</h1>
      <Row>
        {books.length > 0 ? (
          books.map((b) => 
          <CardCol key={b.asin} book={b} />)
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner
                as="span"
                variant="primary"
                animation="border"
                size="lg"
                role="status"
                aria-hidden="true"
              />
              <span className="primary fs-4">Loading...</span>
            </div>
          )}
      </Row>
    </Container>
  )
}

export default Home
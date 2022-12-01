import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function CardCol({ book }) {
  // console.log(book, "book")
  return (
    <Col className='my-3'>
        <Card style={{ width: '16rem', padding: "0" }}>
        <Card.Img variant="top" style={{ objectFit: "cover", width: "16rem", height: "28rem" }} src={book.img} />
        <Card.Body>
            <Card.Title>{book.category.toUpperCase()}</Card.Title>
            <Card.Text className='text-truncate'>
            {book.title}
            </Card.Text>
            <Button variant="primary">${book.price}</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CardCol;
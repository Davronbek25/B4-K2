import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

const LatestRelease = ({ book }) => {
    let random = book[Math.floor(Math.random() * 50)]
  return (
    <Row className='d-flex justify-content-center my-3'>
        <Col xs={3} className='my-3'>
            <Card style={{ width: '16rem', padding: "0" }}>
            <Card.Img variant="top" style={{ objectFit: "cover", width: "16rem", height: "28rem" }} src={random.img} />
            <Card.Body>
                <Card.Title>{random.category.toUpperCase()}</Card.Title>
                <Card.Text className='text-truncate'>
                {random.title}
                </Card.Text>
                <Button variant="primary">${random.price}</Button>
            </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default LatestRelease
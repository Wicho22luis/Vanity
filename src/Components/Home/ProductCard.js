import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Prod1 from './Images/Prod1.png'
import './ProductCard.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Share, Heart } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function ProductCards() {
  return (
    <> <Container fluid>
      <Row>
        <Col md={4} xs={6} lg={3} className='productCardContainer'>
          <Card className='productContainer'>
            <div className='ImageContainer'>
              <Card.Img variant="top" src={Prod1} />
              <Share className='share' color='gray' size={25}></Share>
              <Heart className='fav' color='gray' size={25}></Heart>
            </div>
            <Card.Body>
              <Card.Title >Anillo de Plata</Card.Title>
              <Card.Text className='productDescription'>Anillo de plata 925 con incrustaciones en zirconia</Card.Text>
              <Card.Text className='textPetrona productPrice'>$450.00 mxn</Card.Text>
              <Button variant="dark" className='textPetrona'>Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6} lg={3} className='productCardContainer'>
          <Card className='productContainer'>
            <div className='ImageContainer'>
              <Card.Img variant="top" src={Prod1} />
              <Share className='share' color='gray' size={25}></Share>
              <Heart className='fav' color='gray' size={25}></Heart>
            </div>
            <Card.Body>
              <Card.Title >Anillo de Plata</Card.Title>
              <Card.Text className='productDescription'>Anillo de plata 925 con incrustaciones en zirconia</Card.Text>
              <Card.Text className='textPetrona productPrice'>$450.00 mxn</Card.Text>
              <Button variant="dark" className='textPetrona'>Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6} lg={3} className='productCardContainer'>
          <Card className='productContainer'>
            <div className='ImageContainer'>
              <Card.Img variant="top" src={Prod1} />
              <Share className='share' color='gray' size={25}></Share>
              <Heart className='fav' color='gray' size={25}></Heart>
            </div>
            <Card.Body>
              <Card.Title >Anillo de Plata</Card.Title>
              <Card.Text className='productDescription'>Anillo de plata 925 con incrustaciones en zirconia</Card.Text>
              <Card.Text className='textPetrona productPrice'>$450.00 mxn</Card.Text>
              <Button variant="dark" className='textPetrona'>Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6} lg={3} className='productCardContainer'>
          <Card className='productContainer'>
            <div className='ImageContainer'>
              <Card.Img variant="top" src={Prod1} />
              <Share className='share' color='gray' size={25}></Share>
              <Heart className='fav' color='gray' size={25}></Heart>
            </div>
            <Card.Body>
              <Card.Title >Anillo de Plata</Card.Title>
              <Card.Text className='productDescription'>Anillo de plata 925 con incrustaciones en zirconia</Card.Text>
              <Card.Text className='textPetrona productPrice'>$450.00 mxn</Card.Text>
              <Button variant="dark" className='textPetrona'>Comprar ahora</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default ProductCards;
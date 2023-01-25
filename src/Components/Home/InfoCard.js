import Card from 'react-bootstrap/Card';
import Image1 from './Images/CardImage1.jpg'
import Image2 from './Images/CardImage2.jpg'
import Image3 from './Images/CardImage3.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './InfoCard.css';
function InfoCard() {
    return (
        <Row className='infocardContainer'>
            <Col className='d-flex justify-content-center'>
                <Row className='justify-content-center cardContainer' >
                    <Card className="bg-dark text-white cardWrapper" >
                        <Card.Img src={Image1} alt="Card image" />
                        <Card.ImgOverlay className='d-flex align-items-end'>
                            <Row className='justify-content-center containerCardText'>
                                <Card.Title>NUEVO EN EL SITIO</Card.Title>
                                <Card.Text>Brazalete de oro con incrustaciones</Card.Text>
                            </Row>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Row className='justify-content-center cardContainer'>
                    <Card className="bg-dark text-white cardWrapper">
                        <Card.Img src={Image2} alt="Card image" />
                        <Card.ImgOverlay className='d-flex align-items-end'>
                            <Row className='justify-content-center containerCardText'>
                                <Card.Title>COMPRA AHORA</Card.Title>
                                <Card.Text>Dijes de oro y plata 925</Card.Text>
                            </Row>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Row className='justify-content-center cardContainer'>
                    <Card className="bg-dark text-white cardWrapper">
                        <Card.Img src={Image3} alt="Card image" />
                        <Card.ImgOverlay className='d-flex align-items-end'>
                            <Row className='justify-content-center containerCardText'>
                                <Card.Title>NO TE LO PIERDAS</Card.Title>
                                <Card.Text>Anillo de oro con incrustaciones</Card.Text>
                            </Row>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Col>
        </Row>
    );
}

export default InfoCard;
import './InfoBanner.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Instagram, Facebook, Whatsapp } from 'react-bootstrap-icons';
import './Footer.css'

//IMPORTS PARA SUSCRIPCION
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Footer() {
    return (
        <><Container fluid className='footerContainer'>
            <Row>
                <Col lg={3} md={6} xs={12} className='footerColContainer'>
                    <h5 className='footerText footerHead'>COMPAÑIA</h5>
                    <hr className='separadorFooter'></hr>
                    <p className='footerText footerParagraph'>Ofrecemos una amplia gama de productos de joyería a precios competitivos y gran calidad, con nosotros podrá encontrar accesorios de plata, oro y acero inoxidable</p>

                </Col>
                <Col lg={3} md={6} xs={12} className='footerColContainer'>

                    <h5 className='footerText footerHead'>SERVICIOS</h5>
                    <hr className='separadorFooter'></hr>
                    <p className='footerText text-center footerParagraph'>Venta de accesorios de Acero Inoxidable</p>
                    <p className='footerText text-center footerParagraph'>Envíos a domicilio (Solo aguascalientes)</p>
                    <p className='footerText text-center footerParagraph'>Venta de accesorios de Plata</p>
                    <p className='footerText text-center footerParagraph'>Venta de accesorios de Oro</p>

                </Col>
                <Col lg={3} md={6} xs={12} className='footerColContainer'>
                    <h5 className='footerText footerHead'>CONTACTANOS</h5>
                    <hr className='separadorFooter'></hr>
                    <p className='footerText text-center footerParagraph'>Siguenos en todas nuestras redes para enterarte de todas las novedades de la tienda!</p>
                    <Row>
                        <Col><Facebook size={36} color={'#5B5B5B'}></Facebook></Col>
                        <Col><Instagram size={36} color={'#5B5B5B'}></Instagram></Col>
                        <Col><Whatsapp size={36} color={'#5B5B5B'}></Whatsapp></Col>
                    </Row>
                </Col>
                <Col lg={3} md={6} xs={12} className='footerColContainer'>
                    <h5 className='footerText footerHead'>SUSCRIBETE</h5>
                    <hr className='separadorFooter'></hr>
                    <p className='footerText text-center footerParagraph'>Suscribete a nuestro sitio para recibir al momento las mejores promociones, cupones y productos exclusivos.</p>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Correo" aria-label="Correo" aria-describedby="Correo"/>
                        <Button variant="dark" id="button-addon2">
                            Enviar
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <hr></hr>
                <p className='footerText text-center footerParagraph copyrightText'>© 2023 Copyright. Todos los derechos reservados JF Development</p>
                </Col>
            </Row>
        </Container>
        </>

    );
}
export default Footer;
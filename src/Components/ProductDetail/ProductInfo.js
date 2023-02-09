import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ProductImage from './Images/ringImage.png';
import './styles/ProductInfo.css'
import { Share, Heart } from 'react-bootstrap-icons';
import DarkHeader from './DarkHeader'
import DropdownSelector from './DropdownSelector'
function ProductInfo() {
    return (
        <><DarkHeader></DarkHeader>
            <Row className='parentContainer justify-content-start'>
                <Col className='noPaddingCol' md={6} xs={12} lg={6}>
                    <Row>
                        <Col className='noPaddingCol' md={9} xs={12} lg={9}>
                            <img src={ProductImage} className='mainImage' />
                        </Col>
                        <Col md={3} xs={12} lg={3}>
                            <Row>
                                <Col md={12} xs={3} lg={12} className='secondaryImageContainer'><img src={ProductImage} className='secondaryImage'></img></Col>
                                <Col md={12} xs={3} lg={12} className='secondaryImageContainer'><img src={ProductImage} className='secondaryImage'></img></Col>
                                <Col md={12} xs={3} lg={12} className='secondaryImageContainer'><img src={ProductImage} className='secondaryImage'></img></Col>
                                <Col md={12} xs={3} lg={12} className='secondaryImageContainer'><img src={ProductImage} className='secondaryImage'></img></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} lg={6} className='dataContainer noPaddingCol'>
                    <h2 className='productTitle'>ANILLO DE PLATA</h2>
                    <p className='text-start productDescription'>Anillo de plata ley 925 con incrustaciones de zirconias, embalaje de caja de regalo azul. Mantenimiento: evite la fricción, evite mojarse, no lo use mientras duerme o hace ejercicio, evite la exposición a productos químicos, guárdelo en una bolsa hermética cuando no lo use</p>
                    <Row className='mt-3'>
                        <Col xs={8}>
                            <h3 className='text-start productPrice'>$450.00 mxn</h3>
                        </Col>
                        <Col xs={4} className='iconContainer'>
                            <Share color='gray' size={30} />
                            <Heart color='gray' size={30} className='ms-3 text-end' />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col className='dropDownContainer'>
                            <DropdownSelector />
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <a href='' className='blackLink text-end'>Guia de tallas</a>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className='justify-content-start mt-3'>
                                <p className='text-start noMarginText'>¿Tienes alguna duda sobre el producto?</p>
                                <a href='' className='text-start noMarginText blackLink'>Contactanos</a>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='buyBtnContainer'><Button variant="dark" className='buyNowBtn'>Comprar Ahora</Button></Row>
                </Col>
            </Row>
        </>

    );
}

export default ProductInfo;
import Carousel from 'react-bootstrap/Carousel';
import Banner from './Images/Banner1.jpg';
import Button from 'react-bootstrap/Button';
import './header.css'

function Slider() {
    return (
        <Carousel className='sliderShadow'>
            <Carousel.Item>
                <img className="d-block w-100 imageSlider1" src={Banner} alt="First slide"/>
                <Carousel.Caption className='captionContainer'>
                    <h1 className='textoSlider'>TE AMO MI NIÑA</h1>
                    <h4 className='textoSlider'>con incrustaciones de diamantes</h4>
                    <Button variant="light" className='textoSlider btnSlider'>Conoce más aquí</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 imageSlider1" src={Banner}alt="Second slide" />

                <Carousel.Caption>
                    <h1 className='textoSlider'>Sortija en ORO</h1>
                    <h4 className='textoSlider'>con incrustaciones de diamantes</h4>
                    <Button variant="light" className='textoSlider'>Conoce más aquí</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 imageSlider1" src={Banner} alt="Third slide"/>
                <Carousel.Caption>
                    <h1 className='textoSlider'>Sortija en ORO</h1>
                    <h4 className='textoSlider'>con incrustaciones de diamantes</h4>
                    <Button variant="light" className='textoSlider'>Conoce más aquí</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
import React from 'react';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Whatsapp } from 'react-bootstrap-icons';

function Header() {
    document.body.onload = function () {
        var nav = document.getElementById('headerContainer');
        var brand = document.querySelector('#BrandText');
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bgFilled', 'shadow');
                brand.style.color = ("black")
            } else {
                nav.classList.remove('bgFilled', 'shadow');
                brand.style.color = ("white")
            }
        })
    }

    return (
        <>
            <div className='fixed-top' id='headerContainer'>
                <Navbar className='bg-dark bg-transparent navBordered navbar-dark' expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home" className='brandText' id='BrandText'>Vanity</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='headerItem'>Home</Nav.Link>
                                <Nav.Link href="#link" className='headerItem'>Link</Nav.Link>
                                <Nav.Link href="#link" className='headerItem'>Link</Nav.Link>
                                <Nav.Link href="#link" className='headerItem'><Whatsapp color='white' size={25}></Whatsapp></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Nav id='categorias' className="justify-content-center navBordered" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className='menuItem'>ANILLOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='menuItem'>CADENAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>ARETES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>PULSERAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>ESCLAVAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>PULSOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>TOBILLERAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItem'>DIJES</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>

    );
}

export default Header;
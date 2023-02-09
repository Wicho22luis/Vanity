import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Whatsapp } from 'react-bootstrap-icons';
import './styles/ProductInfo.css'

function Header() {
    return (
        <>
            <div className=''>
                <Navbar className='bg-light navBorderedDark navbar-light' expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home" className='brandTextDark' id='BrandText'>Vanity</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='headerItemDark'>Home</Nav.Link>
                                <Nav.Link href="#link" className='headerItemDark'>Link</Nav.Link>
                                <Nav.Link href="#link" className='headerItemDark'>Link</Nav.Link>
                                <Nav.Link href="#link" className='headerItemDark'><Whatsapp color='white' size={25}></Whatsapp></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Nav id='categorias' className="justify-content-center navBorderedDark" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className='menuItemDark'>ANILLOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='menuItemDark'>CADENAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>ARETES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>PULSERAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>ESCLAVAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>PULSOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>TOBILLERAS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='menuItemDark'>DIJES</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>

    );
}

export default Header;
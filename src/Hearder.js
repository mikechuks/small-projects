import React from 'react'
import './haeder.css';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Hearder = () => {
  return (
    <div className='ContainerNav'>
      <div className='smallContainerNav'>
        <span><img
      className="myImgLogo"
      src="./image/Lagosmart-Logo.png"
    /></span>
          <div className='mySpans'>
            <span>HOME</span>
            <span>ABOUT US</span>
            <span>SERVICES</span>
            <span>PRODUCTS</span>
            <span>CAREERS</span>
            <span>CONTACT US</span>
          </div>
          <div className='mySpansd'>
          <Navbar collapseOnSelect expand="lg" bg="#050D1A" variant="dark" >
  <Navbar.Brand href="#home">{/*React-Bootstrap*/}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto navStyle">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
      <Nav.Link href="#features">Service</Nav.Link>
      <Nav.Link href="#pricing">Product</Nav.Link>
      <Nav.Link href="#features">Careers</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
      </div>
    </div>
  )
}

export default Hearder
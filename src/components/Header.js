import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Gatsby-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          <strong className="text-dark">Home</strong>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          <strong className="text-dark">About Us</strong>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <strong className="text-dark">Contact Us</strong>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

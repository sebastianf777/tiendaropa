import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Cart from "./CartWidget";

const Nav = () => {
  
  return (
  <ReactBootStrap.Navbar className="mx-3" bg="none" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#">MyM Calzados</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav
      className="mx-1 my-2 my-lg-0"
  
    >
          <ReactBootStrap.Form className="d-flex">
      <ReactBootStrap.FormControl
        type="search"
        placeholder="Search"
        className="me-3"
        aria-label="Search"
      />
      <ReactBootStrap.Button className="me-5" variant="outline-success">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
      <ReactBootStrap.Nav.Link href="#action1">Liquidación</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#action2">Indumentaria</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#action3">Calzados</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Imagen" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action4">Ingresá</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action5">Registrate</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action6">Información de devoluciones</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link href="#">
        <Cart />
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>);
}

export default Nav;

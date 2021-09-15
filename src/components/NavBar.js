import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function NavBar() {
  const NavBar = (
<ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#">MyM Calzados</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
  <ReactBootStrap.Navbar.Collapse id="navbarScroll">
    <ReactBootStrap.Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
          <ReactBootStrap.Form className="d-flex">
      <ReactBootStrap.FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <ReactBootStrap.Button className="me-5" variant="outline-success">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
      <ReactBootStrap.Nav.Link href="#action1">Liquidación</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#action2">Indumentaria</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#action3">Calzados</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Imagen" id="navbarScrollingDropdown">
        <ReactBootStrap.NavDropdown.Item href="#action4">Ingresá</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action5">Registrate</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action6">Información de devoluciones</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link href="#">
        Carrito
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  );
  return <>{NavBar}</>;
}

export default NavBar;

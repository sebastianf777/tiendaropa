import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Cart from "./CartWidget";
import {Link} from "react-router-dom"

const Nav = () => {
  
  return (
    
    <header>
      
        
  <ReactBootStrap.Navbar className="mx-3" bg="none" expand="lg">
  <ReactBootStrap.Navbar.Brand><Link to="/" className="nav-link">MyM Calzados</Link></ReactBootStrap.Navbar.Brand>
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
      <Link to="/action1"  className="nav-link" >Liquidación</Link>
      <Link to="#action2"  className="nav-link" >Indumentaria</Link>
      <Link to="#action3"  className="nav-link" >Calzados</Link>
      <ReactBootStrap.NavDropdown title="Imagen" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item ><Link to="#action4" className="nav-link">Ingresá</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to="#action5" className="nav-link">Registrate</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item ><Link to="#action6" className="nav-link">Información de devoluciones</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link href="#">
        <Cart />
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

</header>



);

}

export default Nav;

import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Cart from "./CartWidget";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <header>
      <ReactBootStrap.Navbar className="mx-3" bg="none" expand="lg">
        <ReactBootStrap.Navbar.Brand>
          <Link to="/" className="nav-link">
            Yohanna Calzados
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mx-1 my-2 my-lg-0">
            <Link to={`/category/1`} className="nav-link">
              Liquidación
            </Link>
            <Link to={`/category/2`} className="nav-link">
              Indumentaria
            </Link>
            <Link to={`/category/3`} className="nav-link">
              Calzados
            </Link>
            <Link to={`/cart`} className="nav-link">
              <Cart />
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </header>
  );
};

export default Nav;

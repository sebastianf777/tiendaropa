import React, {useState} from "react";
import { Icon } from "semantic-ui-react";
import Cart from "./CartWidget";
import { NavLink } from "react-router-dom";
import "../scss/Nav.scss";
import logo from "../assets/img/logoHome.png"
import favorito from "../assets/img/favorito.png"
import logIn from "../assets/img/logIn.png"

const Nav = () => {

    const [navbar, setNavbar] = useState(false);
    const [Menu, setMenu] = useState(false);

    const changeBackgroundNavbar = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    };
    const changeMenu = () => {
      if (window.innerWidth >= 950) {
        setMenu(true)
      } else {
        setMenu(false)
      }
    };
    window.addEventListener('resize', changeMenu);
    
    window.addEventListener('scroll', changeBackgroundNavbar);
  
    const openMenu = () => {
      let open = document.getElementById('menuOpen')
      open.style.display = "none";
      let close = document.getElementById('menuClose')
      close.style.display = "flex";
      let menuMobile = document.getElementById('menuMobile');
      menuMobile.style.display = "flex";
    }
    const closeMenu = () => {
      let close = document.getElementById('menuClose')
      close.style.display = "none";
      let open = document.getElementById('menuOpen')
      open.style.display = "flex";
      let menuMobile = document.getElementById('menuMobile');
      menuMobile.style.display = "none";
    }
  
    return (
      <>
  
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <NavLink to={'/'}>
          <h1 className='logo'><img src={logo} style={{maxWidth:'150px'}} className="logoHome" alt="" />Beauty Queen</h1></NavLink>
  
          <button className={Menu ? 'menuResponsiveBtn active' : 'menuResponsiveBtn '} id='menuOpen' onClick={() => {openMenu()}}><Icon name='bars'/></button>
          <button className='closeResponsiveBtn' id='menuClose' onClick={() => {closeMenu()}}><Icon name='times'/></button>
  
          <ul className='categorias' id='menuMobile'>
          <li>
              <NavLink to={`/category/shop`} activeClassName='categoriaActive' className='categoria'> Shop </NavLink>
            </li>
            <li>
              <NavLink to={`/category/liquidación`} activeClassName='categoriaActive' className='categoria'> Liquidacion </NavLink>
            </li>
            <li>
              <NavLink to={`/category/jeans`} activeClassName='categoriaActive'  className='categoria'> Jeans </NavLink>
            </li>
            <li>
              <NavLink to={`/category/accesorios`} activeClassName='categoriaActive' className='categoria'> Accesorios </NavLink>
            </li>
            <li>
              <NavLink to={`/category/carteras`} activeClassName='categoriaActive' className='categoria'> Carteras </NavLink>
            </li>
            <li>
              <NavLink to={`/category/calzados`} activeClassName='categoriaActive' className='categoria'> Calzados </NavLink>
            </li>
          
          </ul>
  
          <ul className='cartLogin'>
            <li className="cartLi">
              <NavLink to={"/cart"}><Cart/></NavLink>
            </li>
            <span style={{background:'#d8d8d8', width:'0.7px', height:'40px'}} className='dividerSpan'></span>
            <li>
              <img src={favorito} alt="mapIcon" style={{maxWidth:'30px', margin:'5px 10px 0'}} className="mapIcon"/>
            </li>
            <li>
              <img src={logIn} alt="loginIcon" style={{maxWidth:'32px', margin:'5px 0 0'}} className="loginIcon"/>
            </li>
          </ul>
  
        </nav>
      </>
    );
  } 
  







//   return (
//     <header>
//       {/* <ReactBootStrap.Navbar className="mx-3" bg="none" expand="lg">
//         <ReactBootStrap.Navbar.Brand> */}
//           <Link to="/" className="nav-link">
//             Yohanna Calzados
//           </Link>
//         {/* </ReactBootStrap.Navbar.Brand>
//         <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//           <ReactBootStrap.Nav className="mx-1 my-2 my-lg-0"> */}
//             <Link to={`/category/1`} className="nav-link">
//               Liquidación
//             </Link>
//             <Link to={`/category/2`} className="nav-link">
//               Indumentaria
//             </Link>
//             <Link to={`/category/3`} className="nav-link">
//               Calzados
//             </Link>
//             <Link to={`/cart`} className="nav-link">
//               <Cart />
//             </Link>
//           {/* </ReactBootStrap.Nav>
//         </ReactBootStrap.Navbar.Collapse>
//       </ReactBootStrap.Navbar> */}
//     </header>
//   );
// };

export default Nav;

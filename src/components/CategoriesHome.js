import React, { useState } from "react";
import CarouselCategories from "./CarouselCategories";
import { Icon } from "semantic-ui-react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../scss/Categories.scss";
import imgH1 from "../assets/img/home1.jpg";
import imgH2 from "../assets/img/home2.jpg";
import imgH3 from "../assets/img/home3.webp";
import imgH4 from "../assets/img/home4.webp";

const CategoriesHome = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const scrollToTop = () => {
    if (window.scrollY >= 180) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  window.addEventListener("scroll", scrollToTop);

  return (
    <>
      <section className="categoriesLayoutHome" id="categoriesHome">
        <div className="categoryHome">
          <CarouselCategories />
          <div className="iconContainer">
            <Link smooth={true} duration={600} offset={-75} to="imgH4">
              <Icon name="chevron down" className="downIcon" />
            </Link>
          </div>
        </div>

        <div className="allCategories">
          <div className="cateogoriesHome">
            <div className="categoryHome">
              <NavLink to="/category/Jeans">
                <img src={imgH1} alt="" />
                {/* <Link className="link_btn">ACCESORIOS</Link> */}
              </NavLink>
            </div>
            <div className="categoryHome">
              <NavLink to="/category/Accesorios">
                <img src={imgH2} alt="" />
              </NavLink>

              {/* <Link className="link_btn">ACCESORIOS</Link> */}
            </div>
          </div>
          <div className="cateogoriesHome">
            <div className="categoryHome">
            <NavLink to="/category/Carteras">

              <img src={imgH3} alt="" />
              </NavLink>

              {/* <Link className="link_btn">CALZADO</Link> */}
            </div>
            <div className="categoryHome">
              <NavLink to="/category/Calzados">
                <img src={imgH4} alt="" className="imgH4" />
              </NavLink>

              {/* <Link className="link_btn">POLOS</Link> */}
            </div>
          </div>
        </div>
      </section>

      <Link
        className={scrollTop ? "backToTop active" : "backToTop"}
        smooth={true}
        duration={600}
        to="home"
      >
        <Icon name="chevron up" />
      </Link>
    </>
  );
};

export default CategoriesHome;

import React, { useState } from "react";
import CarouselCategories from "./CarouselCategories";
import { Icon } from "semantic-ui-react";
import { Link } from "react-scroll";
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
      <section className="categoriesLayout_home" id="categoriesHome">
        <div className="category_home">
          <CarouselCategories />
          <div className='icon_container'>
                <Link smooth={true} duration={600} offset={-75} to="imgH4">
                    <Icon name='chevron down' className='down_icon'/>
                </Link>
            </div>
        </div>

        <div className="allCategories">
          <div className="cateogries_home">
            <div className="category_home">
              <img src={imgH1} alt="" />
              {/* <Link className="link_btn">ACCESORIOS</Link> */}
            </div>
            <div className="category_home">
              <img src={imgH2} alt="" />
              {/* <Link className="link_btn">ACCESORIOS</Link> */}
            </div>
          </div>
          <div className="cateogries_home">
            <div className="category_home">
              <img src={imgH3} alt="" />
              {/* <Link className="link_btn">CALZADO</Link> */}
            </div>
            <div className="category_home">
              <img src={imgH4} alt="" className="imgH4" />
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

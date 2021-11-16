import React from "react";
import "../scss/Carousel.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import imgC1 from "../assets/img/homeC1.jpg";
import imgC2 from "../assets/img/homeC2.webp";
import imgC3 from "../assets/img/homeC3.jpg";

const HomeCarousel = () => {
  return (
    <div className="carouselContainer">
      <CarouselProvider
        className="carouselPure"
        naturalSlideWidth={2000}
        naturalSlideHeight={2000}
        totalSlides={3}
        isPlaying={true}
        interval={6000}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Link to={`/category/shop`}>
          <Slider className="sliderPure">
            <Slide index={0} className="slide">
              <div className="slidePure">
                <img src={imgC1} alt="imagen1" />
                <div className="descrip"></div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="slidePure">
                <img src={imgC2} alt="imagen2" />
                <div className="descrip"></div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="slidePure">
                <img src={imgC3} alt="imagen3" />
                <div className="descrip"></div>
              </div>
            </Slide>
          </Slider>
        </Link>

        <div className="carouselBtns">
          <ButtonBack className="buttonNextPrev">
            <Icon name="caret square left outline" />
          </ButtonBack>
          <ButtonNext className="buttonNextPrev">
            <Icon name="caret square right outline" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default HomeCarousel;

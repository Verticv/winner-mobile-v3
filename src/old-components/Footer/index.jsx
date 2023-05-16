import React, { useState } from "react";
import '../Footer/_footer.scss';
import Brands from "../../assets/images/footer/brands.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from '../../assets/images/footer/left-arrow.png'
import RightArrow from '../../assets/images/footer/right-arrow.png'
import Plus from '../../assets/images/footer/plus.png'
function Footer() { 
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  const CarouselBackButton = ({ onClick }) => {
    return (
      <ButtonBack
        onClick={onClick}
        role="button"
        aria-label="slide backward"
        className="ButtonBack"
        id="prev"
      >
        <img src={LeftArrow} alt="left" className="ml-7px object-none" />
      </ButtonBack>
    );
  };

  const CarouselNextButton = ({ onClick }) => {
    return (
      <ButtonNext
        onClick={onClick}
        role="button"
        aria-label="slide forward"
        className="ButtonNext"
        id="next"
      >
        <img src={RightArrow} alt="right" className="ml-10px object-none" />
      </ButtonNext>
    );
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="brands">
          <div className="brands-cont">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={20}
            step={1}
            naturalSlideWidth={1182}
            isIntrinsicHeight={true}
            infinite={false}
          >
            <div className="slider__container">
              <CarouselBackButton />
              <div className="slider__content">
                <Slider classNameTrayWrap="carousel_tray_wrapper">

                  {Array(20)
                    .fill(undefined)
                    .map((_, index) => (
                      <Slide key={index} className="card_animation_slide_horizontal" index={index}>

                        <div className="brands-slider">
                          <img
                            src={Brands}
                            alt="Brands"
                          />
                        </div>

                      </Slide>
                    ))}
                </Slider>
              </div>
              <CarouselNextButton />
            </div>
            </CarouselProvider>
          </div>
        </div>
        
        <div>
          
          <div className="toggle-list">
            <button className="toggle active" onClick={toggle}>
              <div className="toggle-header">
                <div className="toggle-title">
                  라이브카지노
                </div>
                <div className="toggle-icon">
                  <img src={Plus} alt="right" className="ml-10px object-none" />
                </div>
              </div>
              {open && (<div className="toggle-body">
                <div> 프레그메틱플레이</div>
                <div> 에볼루션</div>
                <div> 로얄지</div>
                <div> 아시아게이밍</div>
                <div> 드림게이밍</div>
                <div> 섹시게이밍</div>
                <div> 빅게이밍</div>
                <div> 오리엔탈게임</div>
                <div> 이주기</div>
                <div>마이크로게이밍</div>
              </div>)}
            </button>


            <div className="toggle">
              <div className="toggle-header">
                <div className="toggle-title">
                  라이브카지노
                </div>
                <div className="toggle-icon">
                  <img src={Plus} alt="right" className="ml-10px object-none" />
                </div>
              </div>
              <div className="toggle-body"></div>
            </div>
          </div>


        </div>
          <div>section3</div>
        </div>
      {/* <div className="brands">
        <div className="brands-logos">
        <img
          src={Brands}
          alt="Brands"
          />
        </div>
      </div> */}
    </div>
  )
}
export default Footer;
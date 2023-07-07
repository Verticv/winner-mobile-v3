import React from "react";
import jackpot from '../../../assets/images/mainPage/jackpot/jackpot1.png';
import './_jackpot.scss';
import LeftBorder from '../../../assets/images/mainPage/jackpot/left-border.png';
import RightBorder from '../../../assets/images/mainPage/jackpot/right-border.png';
import SlotGameCard from './SlotGameCard';
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Img from '../../../assets/images/mainPage/jackpot/img1.png';
import Img2 from '../../../assets/images/mainPage/jackpot/img2.png'
import Img3 from '../../../assets/images/mainPage/jackpot/img3.png'
function Jackpot() {
  const items = [
    {
      id: 0,
      img: Img,
      title: 'Crown of Valor',
      sub_title: '마이프로틴***',
      num: '₩123,456,789'
    },
    {
      id: 1,
      img: Img2,
      title: 'Titan Thunder Wrath of Hades',
      sub_title: '마이프로틴***',
      num: '₩123,456,789'
    },
    {
      id: 2,
      img: Img3,
      title: 'Sun of Egypt',
      sub_title: '마이프로틴***',
      num: '₩123,456,789'
    },
 
  ]
  return (
    <div className="winner-section">
      <div>
        <img src={jackpot} alt="jackpot" className="jackpot__container" />
        <div className="jackpot__range">
          <p>1,234,567,890</p>
        </div>
      </div>
      <div className="winners-card">
        <div className="winners-card__box">
          <div className="winners-card__title">
            <div>
              <img src={LeftBorder} alt="" className="title-border" />
              <p>슬롯 실시간 우승</p>
              <img src={RightBorder} alt="" className="title-border" />
            </div>
          </div>
          <div className="winners-card__slider">
            <div className="vertical_carousel slot_vertical_carousel flex items-center justify-center w-full h-full p-9px pt-0">
            <CarouselProvider
              visibleSlides={1}
              totalSlides={20}
              step={1}
              interval={5000}
              naturalSlideHeight={210}
              naturalSlideWidth={294}
              isPlaying
              dragEnabled={false}
              touchEnabled={false}
            >
              <Slider classNameTrayWrap="carousel_tray_wrapper_horizontal" className="card_animation">
                {Array(100)
                  .fill(0)
                  .map((item, index) => (
                    <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                      <SlotGameCard
                        item={items[index % 3]} />
                    </Slide>
                  ))}
              </Slider>
              </CarouselProvider>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jackpot;



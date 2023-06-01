import React, { useState } from 'react'
import '../SlotGame/_slotGame.scss';
import SlotGameIcon from '../../../assets/images/mainPage/slot-game-icon.png'
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'
import Img1 from '../../../assets/images/mainPage/Img1.png'
import RedTag from '../../../assets/images/mainPage/red-tag.png'
import TabsComponent from "../../TabsComponent";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function SlotGame() {
  const [selectedTab, setSelectedTab] = useState(0);

  const CarouselBackButton = ({onClick }) => {
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

  const Card = ({ onClick }) => {
    return (
      <div className='s-GCard'>
        <div className='sGCard'>
          <img src={RedTag} alt="RedTag" className='tag' />
          <p className='tag-name'>인기</p>
          <div className='inner-card'>
            <div >
              <img src={Img1} alt="Img1" className='img' />
              <div className='card-des'>
                <p>Titan Thunder Wrath...</p>
                <span>Quickspin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='slot-game-section'>
      <div className='section__header'>
        <div className='section__Title'>
          <img src={SlotGameIcon} alt="SlotGameIcon" />
          <h1>슬롯게임</h1>
        </div>
        <div className='section__actions'>
          <p>더보기 > </p>
        </div>
      </div>
      <div className='section__content'>
        <TabsComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>
      <div className='section__slider'>
        <CarouselProvider
          visibleSlides={2}
          totalSlides={20}
          step={1}
          naturalSlideWidth={576}
          isIntrinsicHeight={true}
          infinite={false}
        >
          <div className="slider__container">
            <CarouselBackButton/>
            <div className="slider__content">
              <Slider classNameTrayWrap="carousel_tray_wrapper">
                {Array(20)
                  .fill(undefined)
                  .map((_, index) => (
                    <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                      <div className='cards-cont'>
                        <Card />
                        <Card />
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
  )

}
export default SlotGame
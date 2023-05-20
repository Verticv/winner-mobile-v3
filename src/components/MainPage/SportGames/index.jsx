import React, { useState } from 'react'
import '../SportGames/_sportGame.scss';
import SportGameIcon from '../../../assets/images/mainPage/sportGames/sport-game-icon.png'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'

import TabsComponent from "../../Shared/TabsComponent";
import SectionHeader from "../../Shared/SectionHeader";
import SportGameCard from './SportGamesCard'

function SportGame() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsList = [
    {
      id: 0,
      title: '조합베팅'
    },
    {
      id: 1,
      title: '스페셜베팅'
    },
    {
      id: 2,
      title: '실시간스포츠'
    },
  ]

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
    <div className='sport-games-section'>
      <SectionHeader
        icon={SportGameIcon}
        title={'스포츠'}
        showAction={true} />
      <div className='section__content'>
        <TabsComponent
          tabsData={tabsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>
      <div className='section__slider1'>
        <CarouselProvider
          visibleSlides={1}
          totalSlides={20}
          step={1}
          naturalSlideWidth={1053}
          isIntrinsicHeight={true}
          infinite={false}
        >
          <div className="slider__container">
            <CarouselBackButton />
            <div className="slider__content">
              <div className='sport-container'>
              <Slider classNameTrayWrap="carousel_tray_wrapper">
                
                {Array(20)
                  .fill(undefined)
                  .map((_, index) => (
                    <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                      
                      <SportGameCard />
                      
                    </Slide>
                  ))}
                </Slider>
                </div>
            </div>
            <CarouselNextButton />
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default SportGame
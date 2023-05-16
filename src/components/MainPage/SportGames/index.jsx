import React, { useState } from 'react'
import '../SportGames/_sportGame.scss';
import SportGameIcon from '../../../assets/images/mainPage/sport-game-icon.png'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'
import SportIcon from '../../../assets/images/mainPage/sport-icon.png'
import GlobalIcon from '../../../assets/images/mainPage/global-icon.png'
import Team1 from '../../../assets/images/mainPage/team1.png'
import Team2 from '../../../assets/images/mainPage/team2.png'

import TabsComponent from "../../Shared/TabsComponent";
import SectionHeader from "../../Shared/SectionHeader";

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

  const Card = ({ onClick }) => {
    return (
      <div className='sport-card'>
        <div className='card__header'>
          <img src={SportIcon} alt="right" className='header__icon' />
          <img src={GlobalIcon} alt="right" className='header__icon' />
          <p>UEFA Champions League</p>
        </div>
        <div className='card__content'>
          <div className='team team1'>
            <img src={Team1} alt="right"  />
            <p>리버플</p>
          </div>
          <div className='vs'>
            <div className='time'>08/25 15:45</div>
            <p>VS</p>
          </div>
          <div className='team team2'>
            <img src={Team2} alt="right"  />
            <p>비야레알</p>
          </div>
        </div>
        <div className='card__footer'>
          <button>
            <div>
              <div className='name'>W1</div>
              <div className='score'>1.93</div>
            </div>
          </button>
          <button>
            <div>
              <div className='name'>X</div>
              <div className='score'>4.83</div>
            </div>
          </button>
          <button>
            <div>
              <div className='name'>W2</div>
              <div className='score'>3.14</div>
            </div>
          </button>
        </div>
      </div>
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
                      
                        <Card />
                      
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
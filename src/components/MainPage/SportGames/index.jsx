import React, { useState } from 'react'
import '../SportGames/_sportGame.scss';
import SportGameIcon from '../../../assets/images/mainPage/sportGames/sport-game-icon.png'

import World from '../../../assets/images/mainPage/sportGames/global-icon.png'
import England from '../../../assets/images/mainPage/sportGames/england-icon.png'
import liverpool from '../../../assets/images/mainPage/sportGames/team1.png'
import villarreal from '../../../assets/images/mainPage/sportGames/team2.png'
import manchester_united from '../../../assets/images/mainPage/sportGames/team3.png'
import tottenham from '../../../assets/images/mainPage/sportGames/team4.png'

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
      title: '조합베팅',
    },
    {
      id: 1,
      title: '스페셜베팅',
    },
    {
      id: 2,
      title: '라이브스포츠'
    },
  ]
  const sampleArray = [
    {
      id: 0,
      icon: World,
      title: "UEFA Champions League",
      team1: { icon: liverpool, name: "리버풀" },
      team2: { icon: villarreal, name: "비야레알" },
    },
    {
      id: 1,
      icon: England,
      title: "Premier League",
      team1: { icon: manchester_united, name: "맨체스터유나이티드" },
      team2: { icon: tottenham, name: "토트넘" },
    },
    {
      id: 2,
      icon: World,
      title: "UEFA Champions League UEFA Champions League UEFA Champions League UEFA Champions League",
      team1: { icon: liverpool, name: "리버풀리버풀리버풀리버풀리버풀" },
      team2: { icon: villarreal, name: "비야레알비야레알비야레알비야레알" },
    },
  ];
  const items = [
    ...sampleArray,
    ...sampleArray,
    ...sampleArray,
    ...sampleArray,
    ...sampleArray,
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
        showAction={true} 
        link='/bet-combination'
        />
      <div className='section__content'>
        <TabsComponent
          tabsData={tabsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>
      <div className='section__slider1'>
        <CarouselProvider
          currentSlide={9}
          visibleSlides={1}
          totalSlides={15}
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
                  {items
                    .map((item, index) => (
                      <Slide index={0} key={index}>
                        <SportGameCard item={item} />
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
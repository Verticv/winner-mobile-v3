

import React, { useState } from 'react'
import OtherGamesIcon from '../../../assets/images/mainPage/other-games.png'
import OtherGame1 from '../../../assets/images/mainPage/other-game1.png'
import '../OtherGames/_otherGames.scss';
import OtherIcon from '../../../assets/images/mainPage/other-Icon.png'
import OtherIcon2 from '../../../assets/images/mainPage/other-Icon2.png'
import TabsComponent from "../../TabsComponent";
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import WarningIcon from '../../../assets/images/mainPage/warning-icon.png'

import TagIcon from '../../../assets/images/mainPage/tag-icon.png'

const OtherGames = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Card = ({ onClick }) => {
    return (
      <div className='other-game-card'>
        <img src={OtherGame1} alt="OtherGame1" className='other-img' />
        <div className='logo-section'>
          <img src={OtherIcon} alt="Logo1" className='other-icon'/>
          <img src={OtherIcon2} alt="Logo1" className='other-icon1' />
        </div>
        <div className='desc'>
          <p>e-스포츠</p>
        </div>
      </div>
    );
  };
  
  const NewCard = ({ onClick }) => {
    return (
      <div className='new-card'>
        <div className='new-card-header'>
          <div className='card-header-title'>
            <img src={WarningIcon} alt="right" className="ml-10px object-none" />
            <p>공지사항</p>
          </div>
          <div className='card-header-actions'>
            <p>더보기 > </p>
          </div>
        </div>
        <div className='new-card-content'>
          <div>
            <img src={TagIcon} alt="right" className="ml-10px object-none" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div>
            <img src={TagIcon} alt="right" className="ml-10px object-none" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div>
            <img src={TagIcon} alt="right" className="ml-10px object-none" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div>
            <img src={TagIcon} alt="right" className="ml-10px object-none" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div>
            <img src={TagIcon} alt="right" className="ml-10px object-none" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
        </div>
      </div>
    );
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
    <>
    <div className='live-casino'>
      <div className='section__header'>
        <div className='section__Title'>
          <img src={OtherGamesIcon} alt="OtherGamesIcon" />
          <h1>기타게임</h1>
        </div>
      </div>
      <div className='section__content'>
        <div className='other-section'>
          <Card />
        </div>
        <div className='other-section'>
          <Card />
        </div>
        <div className='other-section'>
          <Card />
        </div>
        <div className='other-section'>
          <Card />
        </div>
        <div className='other-section'>
          <Card />
        </div>
      </div>
      </div>
      <div className='ani-section'>
        <div className='section__content'>
          <TabsComponent
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab} />
        </div>
        <div className='section__slider1'>
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

                          <NewCard />

                        </Slide>
                      ))}
                  </Slider>
              </div>
              <CarouselNextButton />
            </div>
          </CarouselProvider>
        </div>
      </div>
      </>
      
  )
}

export default OtherGames;
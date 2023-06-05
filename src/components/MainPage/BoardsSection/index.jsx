
import React, { useState, useEffect } from 'react'
import TabsComponent from "../../Shared/TabsComponent";
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'

import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";




import AnnouncementCard from './AnnouncementCard'
import NoticeBoard from './NoticeBoard'
import TOPCurrencyExchange from './TOPCurrencyExchange'

import './_boards.scss'


const BoardsSection = () => {
 


  const [selectedTab, setSelectedTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);


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
  useEffect(() => {
    if (currentSlide !== selectedTab) {
      setCurrentSlide(selectedTab);
    }
  }, [currentSlide,selectedTab]);

 
  function handleNextClick(e) {
    const maxSlide = 3 - 1;
    const nextSlide = 1 + currentSlide;
    let newCurrentSlide = Math.min(
      nextSlide,
      maxSlide,
    );
    setSelectedTab(newCurrentSlide);
  }

  const CarouselNextButton = ({ onClick }) => {
    return (
      <ButtonNext
        onClick={onClick}
        role="button"
        aria-label="slide forward"
        className="ButtonNext"
        id="next"
      >
        <img src={RightArrow} alt="right" />
      </ButtonNext>
    );
  };
  
  function handleBackClick() {
    //const maxSlide = 3 - 1;

    let newCurrentSlide = Math.max(
      currentSlide - 1,
      0,
    );
    setSelectedTab(newCurrentSlide);
  }

  const tabsList = [
    {
      id: 0,
      title: '공지사항'
    },
    {
      id: 1,
      title: '게시판'
    },
    {
      id: 2,
      title: '금주 환전 TOP'
    },
  ]
  return (
    <div className='ani-section'>
      <div className='section__content'>
        <TabsComponent
          tabsData={tabsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>
      <div className='section__slider1'>
        <CarouselProvider
          currentSlide={currentSlide}
          visibleSlides={1}
          totalSlides={3}
          step={1}
          naturalSlideWidth={1182}
          isIntrinsicHeight={true}
          infinite={false}
          dragEnabled={false}
          touchEnabled={false}
        >
          <div className="slider__container">
            <CarouselBackButton onClick={handleBackClick} />
            <div className="slider__content">
              <Slider classNameTrayWrap="carousel_tray_wrapper"
                >
                <Slide key={0} className="card_animation_slide_horizontal" index={0}>
                  <div id='board-1' className='board'>
                    <AnnouncementCard />
                  </div>
                </Slide>
                <Slide key={1} className="card_animation_slide_horizontal" index={1}>
                  <div id='board-2' className='board'>
                    <NoticeBoard />
                  </div>
                </Slide>
                <Slide key={2} className="card_animation_slide_horizontal" index={2}>
                  <div id='board-3' className='board'>
                    <TOPCurrencyExchange />
                  </div>
                </Slide>
              </Slider>
            </div>
            <CarouselNextButton onClick={handleNextClick} />
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default BoardsSection;
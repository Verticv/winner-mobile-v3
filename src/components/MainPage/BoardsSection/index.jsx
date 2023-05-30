
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
  }, [selectedTab, currentSlide]);

 

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

  const onTransitionEnd = () => {
    const visible = document.querySelector('.carousel__slide--visible .carousel__inner-slide .board');
    //const currentBoard = visible.querySelector('.slideInner___2mfX9 carousel__inner-slide .board')

    // console.log(visible);
    // items.forEach(({ id: vId }, i) => {
    //   if (vId === visible) {
    //     console.log(i, 'i', vId);
    //     handleChangeVideo(i);
    //   }

    // });
    console.log('currentBoard', visible.id);

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
        >
          <div className="slider__container">
            <CarouselBackButton />
            <div className="slider__content">
              <Slider classNameTrayWrap="carousel_tray_wrapper"
                trayProps={{
                
                 
                
                
                  
               

                  // // touch events
                
                  // pointer events
                  onChangeCapture: onTransitionEnd,
                  onChange: onTransitionEnd,
                  // // onPointerMove: onTransitionEnd,
                  // onPointerUp: onTransitionEnd,
                  // onPointerCancel: onTransitionEnd,
                  // onGotPointerCapture: onTransitionEnd,
                  // onLostPointerCapture: onTransitionEnd,
                  // onPointerEnter: onTransitionEnd,
                  // onPointerLeave: onTransitionEnd,
                  // onPointerOver: onTransitionEnd,
                  // onPointerOut: onTransitionEnd,
            
            
                 

                  draggable: true,
                }}>
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
            <CarouselNextButton />
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default BoardsSection;
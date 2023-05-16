
import React, { useState, useEffect } from 'react'
import TabsComponent from "../../Shared/TabsComponent";
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import WarningIcon from '../../../assets/images/mainPage/warning-icon.png'
import TagIcon from '../../../assets/images/mainPage/tag-icon.png'
// import CheckIcon from '../../../assets/images/mainPage/check-icon.png'

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
    setCurrentSlide(selectedTab);
  }, [selectedTab]);


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

  const AnnouncementCard = ({ onClick }) => {
    return (
      <div className='announcement-card new-card'>
        <div className='new-card-header'>
          <div className='card-header-title'>
            <img src={WarningIcon} alt="right" />
            <p>공지사항</p>
          </div>
          <div className='card-header-actions'>
            <p>더보기 > </p>
          </div>
        </div>
        <div className='new-card-content'>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>농구[쿼터] / 배구[세트] 스페셜 규정 스페셜 규정 스페셜 ...</p>
          </div>
        </div>
      </div>
    );
  };
  
  const NoticeBoard = ({ onClick }) => {
    return (
      <div className='notice-board new-card'>
        <div className='new-card-header'>
          <div className='card-header-title'>
            <img src={WarningIcon} alt="right" />
            <p>게시판</p>
          </div>
          <div className='card-header-actions'>
            <p>더보기 > </p>
          </div>
        </div>
        <div className='new-card-content'>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>이벤트 신청합니다. asdhasioduhasuidhasuidhaiduhasdhasioduhasuidhasuidhaiduh</p>
            <div className='right-side'>
              <img src={TagIcon} alt="right" />
              <p>신풍사우나</p>
            </div>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>이벤트 신청합니다.</p>
            <div className='right-side'>
              <img src={TagIcon} alt="right" />
              <p>신풍사우나</p>
            </div>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>이벤트 신청합니다.</p>
            <div className='right-side'>
              <img src={TagIcon} alt="right" />
              <p>신풍사우나</p>
            </div>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>이벤트 신청합니다.</p>
            <div className='right-side'>
              <img src={TagIcon} alt="right" />
              <p>신풍사우나</p>
            </div>
          </div>
          <div className='board-item'>
            <img src={TagIcon} alt="right" />
            <p>이벤트 신청합니다.</p>
            <div className='right-side'>
              <img src={TagIcon} alt="right" />
              <p>신풍사우나</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TOPCurrencyExchange = ({ onClick }) => {
    return (
      <div className='new-card'>
        <div className='new-card-header'>
          <div className='card-header-title'>
            <img src={WarningIcon} alt="right" />
            <p>금주의 환전 TOP</p>
          </div>
        </div>
        <div className='new-card-content'>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <img src={TagIcon} alt="right" />
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <span>1</span>
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <span>2</span>
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <span>3</span>
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <span>4</span>
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
          <div className='currency-exchange'>
            <div className='left-side'>
              <div className='count'>
                <span>5</span>
              </div>
              <p>Happy***</p>
            </div>
            <div className='right-side'>
              <p>₩130,456,800</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
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
              <Slider classNameTrayWrap="carousel_tray_wrapper">
                <Slide key={0} className="card_animation_slide_horizontal" index={0}>
                  <AnnouncementCard />
                </Slide>
                <Slide key={1} className="card_animation_slide_horizontal" index={1}>
                  <NoticeBoard />
                </Slide>
                <Slide key={2} className="card_animation_slide_horizontal" index={2}>
                  <TOPCurrencyExchange />
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
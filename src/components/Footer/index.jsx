import React from "react";
import '../Footer/_footer.scss';
import Brands_1 from "../../assets/images/footer/brands_1.png";
import Brands_2 from "../../assets/images/footer/brands_2.png";
import Brands_3 from "../../assets/images/footer/brands_3.png";
import Brands_4 from "../../assets/images/footer/brands_4.png";
import Brands_5 from "../../assets/images/footer/brands_5.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from '../../assets/images/footer/left-arrow.png'
import RightArrow from '../../assets/images/footer/right-arrow.png'
import Logo from '../../assets/images/footer/footer-log.png'
import SupportIcon from '../../assets/images/footer/support-icon.png'
import TelegramIcon from '../../assets/images/footer/telegram-icon.png'
import TalkIcon from '../../assets/images/footer/talk-icon.png'
import PaymentMethods from '../../assets/images/footer/payment-methods.png'

import Collapse from '../Shared/Collapse'

function Footer({ isExpanded, setExpanded }) { 

  const brandsList = [Brands_1, Brands_2, Brands_3, Brands_4, Brands_5]

  const footerList = [
    {
      title: '라이브카지노',
      list: [
        {
          title: '프레그메틱플레이',
        },
        {
          title: '에볼루션',
        },
        {
          title: '로얄지',
        },
        {
          title: '아시아게이밍',
        },
        {
          title: '드림게이밍',
        },
        {
          title: '섹시게이밍',
        },
        {
          title: '빅게이밍',
        },
        {
          title: '오리엔탈게임',
        },
        {
          title: '이주기',
        },
        {
          title: '마이크로게이밍',
        },
        {
          title: '베가스라운지',
        },
        {
          title: '비터라이브',
        },
        {
          title: '타이산',
        },
        {
          title: '모티베이션',
        },
      ]
    },
    {
      title: '스포츠',
      list: [
        {
          title: '조합베팅',
          path: '/bet-combination'
        },
        {
          title: '스페셜베팅',
          path: '/bet-combination'
        },
        {
          title: '라이브스포츠',
        }
      ]
    },
    {
      title: '슬롯게임',
      list: [
        {
          title: '케이플레이슬롯',
        },
      ]
    },
    {
      title: '호텔카지노',
      list: [
        {
          title: '두윈카지노',
        },
        {
          title: '보타카지노',
        },
      ]
    },
    {
      title: '기타게임',
      list: [
        {
          title: 'K-홀덤',
        },
        {
          title: 'e-스포츠',
        },
        {
          title: '미니게임',
        },
        {
          title: '키론가상게임',
        },
        {
          title: '피싱게임',
        },
        {
          title: '티비벳',
        },
      ]
    },
    {
      title: '고객센터',
      list: [
        {
          title: '문의하기',
          path: '/cscenter/all/contact/all'
        },
        {
          title: '공지사항',
          path: '/cscenter/all/announcement'
        },
        {
          title: '자주묻는질문',
          path: '/cscenter/all/faq'
        },
        {
          title: '베팅규정',
          path: '/cscenter/all/policy/sportsgame/soccer'
        },
      ]
    }
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
    <div className="footer-container">
      <div className="footer">
        <div className="brands">
          <div className="brands-cont">
          <CarouselProvider
            visibleSlides={1}
            currentSlide={10}
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
                  {[...brandsList, ...brandsList, ...brandsList, ...brandsList]
                    .map((brand, index) => (
                      <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                        <div className="brands-slider">
                          <img
                            src={brand}
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
        
        <div className="footer-navs">
          <div className="toggle-list">
            {footerList.map((item, index) => (
              <Collapse
                key={index}
                index={index}
                title={item.title}
                list={item.list}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
                />
            ))
            }
          </div>
          


        </div>
        <div className="winner-footer">
          <div className="container">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="contact__list">
              <div className="contact__item support-icon">
                <img src={SupportIcon} alt="Contact" />
                <p>고객센터</p>
              </div>
              <div className="contact__item telegram-icon">
                <img src={TelegramIcon} alt="Contact"/>
                <p>test1234</p>
              </div>
              <div className="contact__item talk-icon">
                <img src={TalkIcon} alt="Contact" />
                <p>test1234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="payment">
          < img src={PaymentMethods} alt="Contact"/>
          
        </div>
        <div className="h-line"></div>
        <p className="copy-write">
          Copyright © WINNER. All rights reserved.
        </p>
      </div>
    </div>
  )
}
export default Footer;
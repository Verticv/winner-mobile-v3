import React, { useState } from 'react'
import './_slotGame.scss';

import SlotGameIcon from '../../../assets/images/mainPage/sectionTitle/icon4.png'
import LeftArrow from '../../../assets/images/mainPage/left-arrow.png'
import RightArrow from '../../../assets/images/mainPage/right-arrow.png'

import slotImg1 from '../../../assets/images/mainPage/slotGames/Img1.png'
import slotImg2 from '../../../assets/images/mainPage/slotGames/slot-game-img7.png'
import slotImg3 from '../../../assets/images/mainPage/slotGames/slot-game-img2.png'
import slotImg4 from '../../../assets/images/mainPage/slotGames/slot-game-img8.png'

import RedTag from '../../../assets/images/mainPage/slotGames/red-tag.png'
import BlueTag from '../../../assets/images/mainPage/slotGames/blue-tag.png'
import greenTag from '../../../assets/images/mainPage/slotGames/green-tag.png'

import TabsComponent from "../../Shared/TabsComponent";
import SectionHeader from "../../Shared/SectionHeader";
import SlotGameCard from './SlotGameCard'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function SlotGame() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabsList = [
    {
      id: 0,
      title: '인기게임'
    },
    {
      id: 1,
      title: '추천게임'
    },
    {
      id: 2,
      title: '신규게임'
    },
  ]

  const slotGames = [
    {
      id: 0,
      cards: [
        {
          id: 0,
          title: 'Titan Thunder Wrath...',
          sub_title: 'Quickspin',
          img: slotImg1,
          tag: RedTag,
          tag_name: '인기'
        },
        {
          id: 1,
          title: 'Black Wolf',
          sub_title: 'Netent',
          img: slotImg2,
          tag: BlueTag,
          tag_name: '신규',
          desc_class: 'bottom-21 left-21'
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id: 2,
          title: 'Space Man',
          sub_title: 'Plagmatic',
          img: slotImg3,
          tag: RedTag,
          tag_name: '인기'
        },
        {
          id: 3,
          title: 'Rio Gems',
          sub_title: 'Yggdrasil',
          img: slotImg4,
          tag: greenTag,
          tag_name: '추천',
          desc_class: 'bottom-21 left-21'
        },
      ]
    },
     {
      id: 2,
      cards: [
        {
          id: 0,
          title: 'Titan Thunder Wrath...',
          sub_title: 'Quickspin',
          img: slotImg1,
          tag: RedTag,
          tag_name: '인기'
        },
        {
          id: 1,
          title: 'Black Wolf',
          sub_title: 'Netent',
          img: slotImg2,
          tag: BlueTag,
          tag_name: '신규'
        },
      ]
    },
    {
      id: 3,
      cards: [
        {
          id: 2,
          title: 'Space Man',
          sub_title: 'Plagmatic',
          img: slotImg3,
          tag: RedTag,
          tag_name: '인기'
        },
        {
          id: 3,
          title: 'Rio Gems',
          sub_title: 'Yggdrasil',
          img: slotImg4,
          tag: greenTag,
          tag_name: '추천'
        },
      ]
    }
    
  ]

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

 
 return (
    <div className='slot-game-section'>
      <SectionHeader
        icon={SlotGameIcon}
        title={'슬롯게임'}
        showAction={true} />
        
      <div className='section__content'>
        <TabsComponent
          tabsData={tabsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>
      <div className='slot-game__slider'>
        <CarouselProvider
          visibleSlides={2}
          totalSlides={4}
          step={1}
          naturalSlideWidth={577}
          isIntrinsicHeight={true}
          infinite={false}
        >
          <div className="slider__container">
            <CarouselBackButton/>
            <div className="slider__content">
              <Slider classNameTrayWrap="carousel_tray_wrapper">
                {slotGames
                  .map((game, index) => (
                    <Slide key={index} className="card_animation_slide_horizontal" index={index}>
                      <div className='cards-container'>
                        {game.cards.map((card, index) => (
                          <SlotGameCard
                            key={card.id}
                            title={card.title}
                            sub_title={card.sub_title}
                            img={card.img}
                            tag={card.tag}
                            tag_name={card.tag_name}
                            desc_class={card.desc_class} />
                            ))
                          }
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
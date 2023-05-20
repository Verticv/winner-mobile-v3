
import React, { useState } from 'react'
import SlotGameIcon from '../../../assets/images/mainPage/slot-game-icon.png'
import slotImg1 from '../../../assets/images/mainPage/slotGames/slot-game-img1.png'
import slotImg2 from '../../../assets/images/mainPage/slotGames/slot-game-img2.png'
import slotImg3 from '../../../assets/images/mainPage/slotGames/slot-game-img3.png'
import slotImg4 from '../../../assets/images/mainPage/slotGames/slot-game-img4.png'
import slotImg5 from '../../../assets/images/mainPage/slotGames/slot-game-img5.png'
import slotImg6 from '../../../assets/images/mainPage/slotGames/slot-game-img6.png'
import slotImg7 from '../../../assets/images/mainPage/slotGames/slot-game-img7.png'
import slotImg8 from '../../../assets/images/mainPage/slotGames/slot-game-img8.png'
import slotImg9 from '../../../assets/images/mainPage/slotGames/slot-game-img9.png'
import slotImg10 from '../../../assets/images/mainPage/slotGames/slot-game-img10.png'

import RedTag from '../../../assets/images/mainPage/slotGames/red-tag.png'
import BlueTag from '../../../assets/images/mainPage/slotGames/blue-tag.png'
import greenTag from '../../../assets/images/mainPage/slotGames/green-tag.png'
import SlotBanner from '../../../assets/images/mainPage/slotGames/slot-banner.png'
import RArrow from '../../../assets/images/mainPage/right-arrow-1.png'

import SectionHeader from "../../Shared/SectionHeader";
import TabsComponent from "../../Shared/TabsComponent";

function SlotGameSection() {
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
      id: 1,
      title: 'Titan Thunder Wrath...',
      sub_title: 'Quickspin',
      img: slotImg1,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 2,
      title: 'Space Man',
      sub_title: 'Plagmatic',
      img: slotImg2,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 3,
      title: 'The Tweety House',
      sub_title: 'Pragmatic',
      img: slotImg3,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 4,
      title: 'Crown of Valor',
      sub_title: 'Quickspin',
      img: slotImg4,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 5,
      title: 'Wild West Gold',
      sub_title: 'Pragmatic',
      img: slotImg5,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 6,
      title: 'Sun of Egypt',
      sub_title: 'Booongo',
      img: slotImg6,
      tag: RedTag,
      tag_name: '인기'
    },
    {
      id: 7,
      title: 'Black Wolf',
      sub_title: 'Netent',
      img: slotImg7,
      tag: BlueTag,
      tag_name: '신규'
    },
    {
      id: 8,
      title: 'Rio Gems',
      sub_title: 'Yggdrasil',
      img: slotImg8,
      tag: greenTag,
      tag_name: '추천'
    },
    {
      id: 9,
      title: 'Elvis Frog True Ways',
      sub_title: 'Skywind',
      img: slotImg9,
      tag: RedTag,
      tag_name: '신규'
    },
    {
      id: 10,
      title: 'Bozo Cats',
      sub_title: 'Playtech',
      img: slotImg10,
      tag: RedTag,
      tag_name: '추천'
    },
       
    

  ]
  const Card = ({ id, title, sub_title, img, tag, tag_name, onClick }) => {
    return (
      <div className='card-container'>
        <div className='slot-game__Card'>
          <img src={tag} alt="RedTag" className='tag' />
          <p className='tag-name'>{tag_name}</p>
          <div className='card__body'>
            <div >
              <img src={img} alt="Img1" className='img' />
              <div className='card__desc'>
                <p>{title}</p>
                <span>{sub_title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='slot-game-section'>
      <SectionHeader
        icon={SlotGameIcon}
        title={'슬롯게임'} />
      <div className='section__content'>
        <div className='slot-games-banner'>
          <img src={SlotBanner} alt="banner" />
          <div className='banner-content'>
            <p>수백여 개의 해외 유명한 인기 슬롯게임을
              <br/>
              <span>케이플레이슬롯</span>  에서 즐겨보세요!</p>
            <button>
              케이플레이슬롯 바로가기
              <img src={RArrow} alt="RArrow" className='img' />
            </button>
          </div>
        </div>
        <TabsComponent
          tabsData={tabsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
        <div className='live-section' style={{ marginTop: '1.875rem'}}>
          {slotGames
            .map((game, index) => (
                <Card
                  key={game.id}
                  title={game.title}
                  sub_title={game.sub_title}
                  img={game.img}
                  tag={game.tag}
                  tag_name={game.tag_name} />
              
            ))}
          </div>
      </div>
    </div>
  )
}

export default SlotGameSection
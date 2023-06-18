import React from 'react'
import LiveCasinoImage1 from '../../../assets/images/mainPage/live-casino/live-casino-img1.png'
import LiveCasinoImage2 from '../../../assets/images/mainPage/live-casino/live-casino-img2.png'
import LiveCasinoImage3 from '../../../assets/images/mainPage/live-casino/live-casino-img3.png'
import LiveCasinoImage4 from '../../../assets/images/mainPage/live-casino/live-casino-img4.png'
import LiveCasinoImage5 from '../../../assets/images/mainPage/live-casino/live-casino-img5.png'
import LiveCasinoImage6 from '../../../assets/images/mainPage/live-casino/live-casino-img6.png'
import LiveCasinoImage7 from '../../../assets/images/mainPage/live-casino/live-casino-img7.png'
import LiveCasinoImage8 from '../../../assets/images/mainPage/live-casino/live-casino-img8.png'
import LiveCasinoImage9 from '../../../assets/images/mainPage/live-casino/live-casino-img9.png'
import LiveCasinoImage10 from '../../../assets/images/mainPage/live-casino/live-casino-img10.png'
import LiveCasinoImage11 from '../../../assets/images/mainPage/live-casino/live-casino-img11.png'
import LiveCasinoImage12 from '../../../assets/images/mainPage/live-casino/live-casino-img12.png'
import LiveCasinoImage13 from '../../../assets/images/mainPage/live-casino/live-casino-img13.png'
import LiveCasinoImage14 from '../../../assets/images/mainPage/live-casino/live-casino-img14.png'
import SectionHeader from "../../Shared/SectionHeader";
import './_liveCasino.scss';
import LiveCasinoIcon from '../../../assets/images/mainPage/sectionTitle/icon11.png'
import LiveCasinoCard from './LiveCasinoCard'

const LiveCasino = () => {
  const LiveCasinoList = [
    {
      id: 0,
      title: '프레그메틱플레이',
      img: LiveCasinoImage1,
      is_best: true,
      path: null
    },
    {
      id: 1,
      title: '에볼루션',
      img: LiveCasinoImage2,
      path: '/esports/multi'
    },
    {
      id: 2,
      title: '로얄지',
      img: LiveCasinoImage3,
      path: '/esports/multi'
    },
    {
      id: 3,
      title: '아시아게이밍',
      img: LiveCasinoImage4,
      path: '/esports/multi'
    },
    {
      id: 4,
      title: '드림게이밍',
      img: LiveCasinoImage5,
      path: '/esports/multi'
    },
    {
      id: 5,
      title: '섹시게이밍',
      img: LiveCasinoImage6,
      path: '/esports/multi'
    },
    {
      id: 6,
      title: '빅게이밍',
      img: LiveCasinoImage7,
      path: '/esports/multi'
    },
    {
      id: 7,
      title: '오리엔탈게임',
      img: LiveCasinoImage8,
      path: '/esports/multi'
    },
    {
      id: 8,
      title: '이주기',
      img: LiveCasinoImage9,
      path: '/esports/multi'
    },
    {
      id: 9,
      title: '마이크로게이밍',
      img: LiveCasinoImage10,
      path: '/esports/multi'
    },
    {
      id: 10,
      title: '베가스라운지',
      img: LiveCasinoImage11,
      path: '/esports/multi'
    },
    {
      id: 11,
      title: '비터라이브',
      img: LiveCasinoImage12,
      path: '/esports/multi'
    },
    {
      id: 12,
      title: '타이산',
      img: LiveCasinoImage13,
      path: '/esports/multi'
    },
    {
      id: 13,
      title: 'Coming Soon',
      img: LiveCasinoImage14,
      is_coming_soon: true,
      path: '/esports/multi'
    },
  ]
  return (
    <div className='live-casino liveC-section'>
      <SectionHeader
        icon={LiveCasinoIcon}
        title={'라이브카지노'} />
      <div className='section__content'>
        <div className='live-section'>
          {LiveCasinoList.map((card, index) => (
            <LiveCasinoCard
              key={card.id}
              id={card.id}
              title={card.title}
              img={card.img}
              is_best={card.is_best}
              is_coming_soon={card.is_coming_soon}
              path={card.path} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default LiveCasino;
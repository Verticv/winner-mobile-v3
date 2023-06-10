import React from 'react'
import HotelCasinoCard1 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-card.png'
import HotelCasinoCard2 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-card2.png'
import HotelCasinoCard3 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-card3.png'
import HotelCasinoIcon from '../../../assets/images/mainPage/sectionTitle/icon5.png'

import HotelCasinoIcon1 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-icon1.png'
import HotelCasinoIcon2 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-icon2.png'
import HotelCasinoIcon3 from '../../../assets/images/mainPage/hotel-casino/hotel-casino-icon3.png'


import SectionHeader from "../../Shared/SectionHeader";
import HotelCasinoCard from './HotelCasinoCard'


import './_hotelCasino.scss';
const HotelCasinoList = [
  {
    id: 0,
    title: '두윈카지노',
    icon: HotelCasinoIcon1,
    img: HotelCasinoCard1,
    class: 'hotel-casino1',
    disable: true
  },
  {
    id: 1,
    title: '보타카지노',
    icon: HotelCasinoIcon2,
    img: HotelCasinoCard2,
    class: 'hotel-casino2',
    disable: false
  },
  {
    id: 2,
    title: '호텔카지노',
    sub_title: '(준비중)',
    icon: HotelCasinoIcon3,
    img: HotelCasinoCard3,
    class: 'hotel-casino3',
    disable: true
  },
]
const HotelCasino = () => {
  return (
    <div className='hotel-casino'>
      <SectionHeader
        icon={HotelCasinoIcon}
        title={'호텔카지노'} />
      <div className='section__content'>
        {HotelCasinoList.map((card, index) => (
          <div className='hotel-section'
            key={card.id}>
            <HotelCasinoCard
              key={card.id}
              title={card.title}
              sub_title={card.sub_title}
              img={card.img}
              icon={card.icon}
              logoClass={card.class}
              disable={card.disable} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelCasino;
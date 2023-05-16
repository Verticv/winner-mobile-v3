import React from 'react'
import HotelCasinoCard1 from '../../../assets/images/mainPage/hotel-casino-card.png'
import HotelCasinoCard2 from '../../../assets/images/mainPage/hotel-casino-card2.png'
import HotelCasinoCard3 from '../../../assets/images/mainPage/hotel-casino-card3.png'
import HotelCasinoIcon from '../../../assets/images/mainPage/hotel_casino.png'
import HotelCasinoIcon1 from '../../../assets/images/mainPage/hotel-casino-icon-1.png'
import HotelCasinoIcon2 from '../../../assets/images/mainPage/hotel-casino-icon-2.png'
import HotelCasinoIcon3 from '../../../assets/images/mainPage/hotel-casino-icon-3.png'
import SectionHeader from "../../Shared/SectionHeader";
import '../HotelCasino/_hotelCasino.scss';
const HotelCasinoList = [
  {
    id: 0,
    title: '두윈카지노',
    icon: HotelCasinoIcon1,
    img: HotelCasinoCard1
  },
  {
    id: 1,
    title: '보타카지노',
    icon: HotelCasinoIcon2,
    img: HotelCasinoCard2
  },
  {
    id: 2,
    title: '호텔카지노',
    sub_title: '(준비중)',
    icon: HotelCasinoIcon3,
    img: HotelCasinoCard3
  },
]
const HotelCasino = () => {
  const Card = ({ id, title, sub_title= null, img, icon, onClick }) => {
    return (
      <div className='hotel-casino-card'>
        <img src={img} alt="HotelCasinoCard" className='casino-img' />
        <div className='logo-section'>
          <img src={icon} alt="Logo1" />
          <p>{title}
            {sub_title && (<span className='sub-title'>{sub_title}</span>)}
          </p>
          
        </div>
      </div>
    );
  };

  return (
    <div className='hotel-casino'>
      <SectionHeader
        icon={HotelCasinoIcon}
        title={'호텔카지노'} />
      <div className='section__content'>
        {HotelCasinoList.map((card, index) => (
          <div className='hotel-section'
            key={card.id}>
            <Card
              key={card.id}
              title={card.title}
              sub_title={card.sub_title}
              img={card.img}
              icon={card.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelCasino;
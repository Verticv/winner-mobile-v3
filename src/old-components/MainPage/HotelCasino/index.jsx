import React from 'react'
import HotelCasinoCard from '../../../assets/images/mainPage/hotel-casino-card.png'
import HotelCasinoIcon from '../../../assets/images/mainPage/hotel_casino.png'
import Logo1 from '../../../assets/images/mainPage/logo1.png'
import '../HotelCasino/_hotelCasino.scss';
const HotelCasino = () => {
  const Card = ({ onClick }) => {
    return (
      <div className='hotel-casino-card'>
        <img src={HotelCasinoCard} alt="HotelCasinoCard" className='casino-img' />
        <div className='logo-section'>
          <img src={Logo1} alt="Logo1" />
          <p>두윈카지노</p>
        </div>
      </div>
    );
  };

  return (
    <div className='live-casino'>
      <div className='section__header'>
        <div className='section__Title'>
          <img src={HotelCasinoIcon} alt="HotelCasinoIcon" />
          <h1>라이브카지노</h1>
        </div>
      </div>
      <div className='section__content'>
        <div className='hotel-section'>
          <Card />
        </div>
        <div className='hotel-section'>
          <Card />
        </div>
        <div className='hotel-section'>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default HotelCasino;
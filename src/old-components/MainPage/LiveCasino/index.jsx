import React from 'react'
import LiveCasinoIcon from '../../../assets/images/mainPage/live_casino.png'
import LiveCasinoImage1 from '../../../assets/images/mainPage/live-casino-img1.png'
import BestIcon from '../../../assets/images/mainPage/best-icon.png'
import '../LiveCasino/_liveCasino.scss';

const LiveCasino = () => {
  const Card = ({ onClick }) => {
    return (
      <div className='live-casino-card'>
        <p>프레그메틱플레이</p>
        <img src={LiveCasinoImage1} alt="LiveCasinoImage1" className='casino-img' />
        <button>게임시작</button>
        <img src={BestIcon} alt="BestIcon" className='best-icon' />
      </div>
    );
  };
  return (
    <div className='live-casino'>
      <div className='section__header'>
        <div className='section__Title'>
          <img src={LiveCasinoIcon} alt="SlotGameIcon" />
          <h1>라이브카지노</h1>
        </div>
      </div>
      <div className='section__content'>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
        <div className='live-section'>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default LiveCasino;
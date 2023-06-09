import React from 'react'
import Img from '../../../assets/images/mainPage/jackpot/bg.png';
function SlotGameCard() {
  return (
    <div className='game-card card-bg'>
      <div className='card__image'>
        <img src={Img} alt="" />
      </div>
      <div className='card__info'>
        <div className='card__title truncate'> Wild West Gold</div>
        <div className='card__cont truncate'>마이프로틴***</div>
        <div className='card__score truncate'>₩123,456,789</div>
      </div>
    </div>
  )
}

export default SlotGameCard

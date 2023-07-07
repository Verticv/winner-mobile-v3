import React from 'react'

function SlotGameCard({ item }) {
  return (
    <div className='game-card card-bg'>
      <div className='card__image'>
        <img src={item.img} alt="" />
      </div>
      <div className='card__info'>
        <div className='card__title truncate'>{item.title}</div>
        <div className='card__cont truncate'>마이프로틴***</div>
        <div className='card__score truncate'>₩123,456,789</div>
      </div>
    </div>
  )
}

export default SlotGameCard

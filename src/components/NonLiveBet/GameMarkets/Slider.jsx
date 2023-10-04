
import React, { useState } from 'react';
import MenuStarIcon from '../../../assets/images/nonLiveBet/gameMarkets/menu-star.png'
const Slider = () => {
  const [isActive, setActive] = useState(1);
  return (
    <div className='game-markets__slider d-flex'>
      <button onClick={() => setActive(0)} className={`${isActive === 0 ? 'active' : ''}`}>
        <img src={MenuStarIcon} alt='' className='star-btn' />
        <div className='btn-badge'>25</div>
      </button>
      <button onClick={() => setActive(1)} className={`${isActive===1 ?'active':''}`}>
        <p>전체</p>
      </button>
      <button onClick={() => setActive(2)} className={`${isActive === 2 ? 'active' : ''}`}>
        <p>매치</p>
      </button>
      <button onClick={() => setActive(3)} className={`${isActive === 3 ? 'active' : ''}`}>
        <p>오버/언더</p>
      </button>
      <button onClick={() => setActive(4)} className={`${isActive === 4 ? 'active' : ''}`}>
        <p>핸디캡</p>
      </button>
      <button onClick={() => setActive(5)} className={`${isActive === 5 ? 'active' : ''}`}>
        <p>조합</p>
      </button>
      <button onClick={() => setActive(6)} className={`${isActive === 6 ? 'active' : ''}`}>
        <p>핸디캡</p>
      </button>
      <button onClick={() => setActive(7)} className={`${isActive === 7 ? 'active' : ''}`}>
        <p>조합</p>
      </button>
    </div>
  )
}
export default Slider;
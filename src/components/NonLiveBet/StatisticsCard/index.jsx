import React, { useState } from 'react';

import start from '../../../assets/images/nonLiveBet/start.png'
import star from '../../../assets/images/nonLiveBet/satr.png'
import './_statisticsCard.scss'
const StatisticsCard = () => {
  const [isActive, setActive] = useState(3);
  return (
    <div className='div-cont'>
      <div className='start'>
        <img src={start} alt="right" />
        <p>다폴더 보너스 추가 배당</p>
      </div>
      <div className='start-btns'>
        <button className={`start-btn ${isActive === 1 ?'active':''}`}
          onClick={() => setActive(1)}>
          <div>
            <div className='start-content'>
              <img src={star} alt="right" />
              <p>3폴더 이상</p>
            </div>
            <span>1.03</span>
            
          </div>
        </button>
        <button className={`start-btn ${isActive === 2 ? 'active' : ''}`}
          onClick={() => setActive(2)}>
          <div>
            <div className='start-content'>
              <img src={star} alt="right" />
              <p>6폴더 이상</p>
            </div>
            <span>1.06</span>
          </div>
        </button>
        <button className={`start-btn ${isActive === 3 ? 'active' : ''}`}
          onClick={() => setActive(3)}>
          <div>
            <div className='start-content'>
              <img src={star} alt="right" />
              <p>9폴더 이상</p>
            </div>
            <span>1.09</span>
          </div>
        </button>
      </div>
    </div>
  )
}
export default StatisticsCard;
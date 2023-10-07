
import React, { useState } from 'react';
import './_style.scss'
import Clock from '../../../assets/images/nonLiveBet/clock.png'
import ClockOn from '../../../assets/images/nonLiveBet/clock-on.png'

import Heart from '../../../assets/images/nonLiveBet/heart.png'
import HeartOn from '../../../assets/images/nonLiveBet/heart-on.png'

import Chart from '../../../assets/images/nonLiveBet/chart.png'
import ChartOn from '../../../assets/images/nonLiveBet/chart-on.png'
import DownArrowIcon from '../../../assets/images/nonLiveBet/down-arrow.png'
import Dropdown from '../../Shared/Dropdown'
const SortCard = () => {
  const [isActive, setActive] = useState(1);
  const selectOptions = [
    "전체",
    "1시간",
    "2시간",
    "3시간",
    "6시간",
    "8시간",
    "12시간",
    "24시간",
    "48시간",
    "72시간",
  ]
  const InboxSearch = (
    <div

      className='left-div-options'
    >
      <div
        className='content dropdown'
      >
        <Dropdown options={selectOptions} isSignup={true}>
          <img style={{ width: '2.25rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
        </Dropdown>
      </div>
    </div>
  )

  return (
    <div className='div-cont sort-card'>
      <div className='sort-list'>
        <button className={`${isActive === 1 ? 'active' : ''}`}
          onClick={() => setActive(1)}>
          {isActive === 1 && (<img src={ClockOn} alt="clockOn" />)}
          {isActive !== 1 && (<img src={Clock} alt="clock" />)}
          <p>시간순</p>
        </button>
        <button className={`${isActive === 2 ? 'active' : ''}`}
          onClick={() => setActive(2)}>
          {isActive === 2 && (<img src={HeartOn} alt="heartOn" style={{ marginLeft:'0.063rem'}}/>)}
          {isActive !== 2 && (<img src={Heart} alt="heart" style={{ marginLeft: '0.063rem' }} />)}
          <p style={{marginLeft:'0.125rem'}}>인기순</p>
        </button>
        <button className={`${isActive === 3 ? 'active' : ''}`}
          onClick={() => setActive(3)}>
          {isActive === 3 && (<img src={ChartOn} alt="chartOn" style={{ marginLeft: '0.125rem' }} />)}
          {isActive !== 3 && (<img src={Chart} alt="chart" style={{ marginLeft: '0.125rem' }} />)}
          <p style={{ marginLeft: '0.25rem' }}>리그순</p>
        </button>
      </div>
      <div className='select-time'>
        {InboxSearch}
      </div>
    </div>
  )
}
export default SortCard;
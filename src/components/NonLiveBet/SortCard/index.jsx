
import React, { useState } from 'react';
import './_style.scss'
import clock from '../../../assets/images/nonLiveBet/clock.png'
import clock1 from '../../../assets/images/nonLiveBet/clock12.png'
import clock2 from '../../../assets/images/nonLiveBet/clock22.png'
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
          <img src={clock} alt="right" style={{ width: '3.938rem' }} />
          <p>시간순</p>
        </button>
        <button className={`${isActive === 2 ? 'active' : ''}`}
          onClick={() => setActive(2)}>
          <img src={clock1} alt="right" style={{ width: '3.938rem' }} />
          <p>인기순</p>
        </button>
        <button className={`${isActive === 3 ? 'active' : ''}`}
          onClick={() => setActive(3)}>
          <img src={clock2} alt="right" style={{ width: '3.938rem' }} />
          <p>리그순</p>
        </button>
      </div>
      <div className='select-time'>
        {InboxSearch}
      </div>
    </div>
  )
}
export default SortCard;
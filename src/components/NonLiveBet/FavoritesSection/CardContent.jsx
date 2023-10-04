
import { useState } from 'react';

import ArrowDown from '../../../assets/images/nonLiveBet/down-arrow.png'
import star from '../../../assets/images/nonLiveBet/gameMarkets/menu-star.png'
import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'

const FavoritesSection = ({ data, index }) => {
  const [isOpened, setOpened] = useState(false)
  return (
    <div className='favorite-card' key={index}>
      <div className='favorite-content'>
        <div className='d-flex justify-content-between' style={{ marginBottom: '0.188rem' }}>
          <div className='team-name'>{data.team1}</div>
          <div className='time'>18:30</div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='team-name'>{data.team2}</div>
        </div>
        <div className={`favorite-footer ${isOpened ? 'favorite-score-opened' : ''}`}
        >
          <div className='d-flex justify-content-between align-items-center '>
            <div className='favorite-date'>2023-05-14 18:30</div>
            <div className='favorite-icons d-flex justify-content-between align-items-center'>
              <img src={star} alt="star" className='star' />
              <img src={ArrowDown} alt="ArrowDown" className='arrow'
                onClick={() => setOpened(!isOpened)} />
            </div>
          </div>
        </div>
      </div>
      {isOpened && (<div className='favorite-score'>
        <div className='d-flex justify-content-between align-items-center w-full'>
          <div>1</div>
          <div className='score' style={{ color: data.showArrows ? '#f04281' : '' }}>
            {data.lock && (
              <img src={lock} alt="lock" style={{ width: '2.313', marginRight: '0.75rem', marginTop: '0.438rem' }} />
            )}
            {data.showArrows && (<img src={Up} alt="right"
              style={{ width: '1.313rem', marginRight: '1.563rem', marginTop: '0.25rem' }} />)}
            {!data.lock && (2.12)}
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center w-full'>
          <div>무</div>
          <div className='score'
            style={{ color: data.showArrows ? '#f04281' : '' }}>
            {data.lock && (
              <img src={lock} alt="lock" style={{ width: '2.313', marginRight: '0.688rem', marginTop: '0.438rem' }} />
            )}
            {data.showArrows && (<img src={Up} alt="right"
              style={{ width: '1.313rem', marginRight: '1.563rem', marginTop: '0.25rem' }} />)}
            {!data.lock && (3.59)}</div>
        </div>
        <div className='d-flex justify-content-between align-items-center w-full'>
          <div>2</div>
          <div className='score'
            style={{ color: data.showArrows ? '#0072bc' : '' }}>
            {data.lock && (
              <img src={lock} alt="lock" style={{ width: '2.313', marginRight: '0.75rem', marginTop: '0.438rem' }} />
            )}
            {data.showArrows && (<img src={Down} alt="right"
              style={{ width: '1.313rem', marginRight: '1.563rem', marginTop: '0.25rem' }} />)}
            {!data.lock && (3.62)}</div>
        </div>
      </div>)
      }
    </div>
  )
}
export default FavoritesSection 
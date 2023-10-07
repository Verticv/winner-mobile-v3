import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBetSlipData, deleteBetSlipDataById } from '../../../counterSlice'
import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'

const ResultCell = ({ data, type }) => {
  const [isActive, setActive] = useState(false)
  const dispatch = useDispatch()
  const betSlipData = useSelector((state) => state.counter.betSlipData)
  const handleCellClick = (data) => {
    if (data.lock) {
      return
    }
    setActive((prev) => !prev)
    data._id = ''
    data._id = type + data.id
    dispatch(
      isActive ?
        deleteBetSlipDataById({
          data: data._id,
        })
        :
        setBetSlipData({
          data: data,
        })
    )
  }

  useEffect(() => {
    /* eslint-disable */
    score._id = type + score.id
    let scoreIndex = betSlipData.findIndex(data => data._id === score._id)
    setActive(scoreIndex > -1)
  }, [betSlipData])

  return (
    <div
      className={`cell  ${isActive ? 'active' : ''}
        d-flex justify-content-between align-items-center`} 
      onClick={() => handleCellClick(data)}>
      {type === 'L' && (
        <>
        <div>{data.team1}</div>
          {data.withArrows && <div className='score d-flex align-items-center justify-content-between' style={{ width: '6.75rem', color:'#f04281' }}>
            <img src={Up} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
            {data.team1_score}
          </div>}
          {data.lock && <img src={lock} alt="right" className='lock' style={{ marginRight: '0.875rem' }} />}
          {!data.withArrows && !data.lock && <div className='score'>{data.team1_score}</div>}
        </>
      )}
      {type === 'M' && (
        <>
          <div>{data.team2}</div>
          {data.withArrows && <div className='score d-flex align-items-center justify-content-between' style={{ width: '6.75rem', color: '#0072bc' }}>
            <img src={Down} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
            2.53</div>}
          {data.lock && <img src={lock} alt="right" className='lock' style={{ marginRight: '0.875rem' }} />}
          {!data.withArrows && !data.lock && <div className='score'>{data.team2_score}</div>}
        </>
      )}
      {type === 'R' && (
        <>
          <div>{data.team3}</div>
          <div className='score'>{data.team3_score}</div>
        </>
      )}
    </div>
  )
}
export default ResultCell;
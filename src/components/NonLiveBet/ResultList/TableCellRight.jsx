import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBetSlipData, deleteBetSlipDataById } from '../../../counterSlice'

import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'


const TableCellRight = ({ score }) => {
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()

  const betSlipData = useSelector((state) => state.counter.betSlipData)
  const handleCellClick = (score) => {
    setActive((prev) => !prev)
    score._id = ''
    score._id = 'R' + score.id
    dispatch(
      isActive ?
        deleteBetSlipDataById({
          data: score._id,
        })
        :
        setBetSlipData({
          data: score,
        })
    )
  }
  useEffect(() => {
    /* eslint-disable */
    score._id = 'R' + score.id
    let scoreIndex = betSlipData.findIndex(data => data._id === score._id)
    setActive(scoreIndex > -1)
  }, [betSlipData])

  return (
    <div className={`cell body3 ${isActive ? 'active' : ''}`}
      onClick={() => handleCellClick(score)}>
      {!score.up && !score.down && !score.lock && (<p className='cell-score'>{score.team2_score}</p>)}
      {score.down &&
        (<span className='d-flex justify-content-between align-items-center ' style={{ color: '#f04281', width: '6.75rem' }}>
          {score.team2_score}
          <img src={Up} alt="right" style={{ width: '1.313rem' }} className='blink-style' />

        </span>)}
      {score.up &&
        (<span className='d-flex justify-content-between align-items-center ' style={{ color: '#0072bc', width: '6.75rem' }}>
          {score.team2_score}
          <img src={Down} alt="right" style={{ width: '1.313rem' }} className='blink-style' />
        </span>)}

      {score.lock &&
        (<span
          className='d-flex content-center align-items-center '
          style={{ width: '3.875rem', marginLeft: '0.063rem' }}>
          <img src={lock} alt="right" className='lock' />
        </span>)}
      <p className='cell-team truncate'>{score.team2}</p>
    </div>
  )
}
export default TableCellRight;
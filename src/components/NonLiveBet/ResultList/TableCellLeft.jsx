import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBetSlipData, deleteBetSlipDataById } from '../../../counterSlice'


import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'

const TableCellLeft = ({ score }) => {
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()
  const betSlipData = useSelector((state) => state.counter.betSlipData)

  const handleCellClick = (score) => {
    setActive((prev) => !prev)
    score._id = ''
    score._id = 'L' + score.id
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
    score._id = 'L' + score.id
    let scoreIndex = betSlipData.findIndex(data => data._id === score._id)
    setActive(scoreIndex > -1)
  }, [betSlipData])
  
  return (
    <div className={`cell body1 ${isActive?'active':''}`}
      onClick={() => handleCellClick(score)}>
      <p className='cell-team truncate'>{score.team1}</p>
      {score.up &&
        (<span className='d-flex justify-content-between align-items-center' style={{ color: '#f04281', width: '6.813rem' }}>
          <img src={Up} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
          {score.team1_score}
        </span>)}
      {score.down &&
        (<span className='d-flex justify-content-between align-items-center' style={{ color: '#0072bc', width: '6.813rem' }}>
          <img src={Down} alt="right" className='blink-style' style={{ width: '1.313rem' }} />
          {score.team1_score}
        </span>)}
      {score.lock &&
        (<span
          className='d-flex content-center align-items-center'
          style={{ width: '3.875rem', marginLeft: '0.063rem' }}>
          <img src={lock} alt="right" className='lock' />
        </span>)}
      {!score.up && !score.down && !score.lock && (<p className='cell-score'>{score.team1_score}</p>)}
    </div>
  )
}
export default TableCellLeft;
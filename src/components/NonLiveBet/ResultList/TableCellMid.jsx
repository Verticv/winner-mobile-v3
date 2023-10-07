import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { setBetSlipData, deleteBetSlipDataById } from '../../../counterSlice'
import Up from '../../../assets/images/nonLiveBet/UpArrow.png'
import Down from '../../../assets/images/nonLiveBet/DnArrow.png'
import lock from '../../../assets/images/nonLiveBet/lock.png'

const TableCellMid = ({ score }) => {
  const [isActive, setActive] = useState(false)

  const dispatch = useDispatch()

  const betSlipData = useSelector((state) => state.counter.betSlipData)
  const handleCellClick = (score) => {
    if (score.lock) {
      return
    }
    setActive((prev) => !prev)
    score._id = ''
    score._id = 'M' + score.id
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
    if (score) {
      score._id = 'M' + score.id
      let scoreIndex = betSlipData.findIndex(data => data._id === score._id)
      setActive(scoreIndex > -1)
    }
  }, [betSlipData])

  return (
    <div className={`cell body2 ${isActive ? 'active' : ''}`}
      onClick={() => handleCellClick(score)}>
      {score.up &&
        (<span className='d-flex content-center align-items-center '
        style={{ color: isActive ? '#fff' : '#f04281', gap: '0.938rem' }}>
          <img src={Up} alt="right" style={{ width: '1.313rem' }} className='arrow-cell blink-style' />
          {score.score}
        </span>)}
      {score.down &&
        (<span className='d-flex content-center align-items-center '
        style={{ color: isActive ? '#fff' : '#0072bc', gap: '0.938rem' }}>
          <img src={Down} alt="right" style={{ width: '1.313rem' }} className='arrow-cell blink-style' />
          {score.score}
        </span>)}
      {score.lock &&
        (<span className='d-flex content-center align-items-center '
          style={{ marginLeft: '0.063rem' }}>
          <img src={lock} alt="right" className='lock' />
        </span>)}
      {!score.up && !score.down && (<p className='cell-score'>{score.score}</p>)}
    </div>
  )
}
export default TableCellMid;
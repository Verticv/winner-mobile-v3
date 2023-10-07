
import React, { useState } from 'react'
import DeleteIcon from '../../../assets/images/nonLiveBet/delete-icon.png'
import Dropdown from '../../Shared/Dropdown'
import DownArrowIcon from '../../../assets/images/nonLiveBet/down-arrow.png'
import RefreshIcon from '../../../assets/images/nonLiveBet/refresh-icon.png'
import CrossIcon from '../../../assets/images/nonLiveBet/cross-icon.png'
import DollarIcon from '../../../assets/images/nonLiveBet/dollar-icon.png'
import CheckIcon from '../../../assets/images/nonLiveBet/check-icon.png'
import CardXIcon from '../../../assets/images/nonLiveBet/card-x.png'
import CardInfo from '../../../assets/images/nonLiveBet/card-info.png'
import CheckPopup from './CheckPopup'
import { deleteBetSlipData, deleteBetSlipDataById } from '../../../counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const BetSlip = () => {

  const betSlipData = useSelector((state) => state.counter.betSlipData)
  const dispatch = useDispatch()
  

  const selectOptions = [
    "싱글", "멀티"
  ]
  const InboxSearch = (
    <div

      className='left-div-options'
    >
      <div
        className='content dropdown'
      >
        <Dropdown options={selectOptions} isSignup={true}>
          <img style={{ width: '2.375rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
        </Dropdown>
      </div>
    </div>
  )

  const [inputValue, setInputValue] = useState("0");
  const [checkCard, setCheckCard] = useState(false);
  const [checkPopup, setCheckPopup] = useState(false);
  const confirmBetCart = () => {
    setCheckCard(true)
    setCheckPopup(false)
    handleDeleteClick()
  }
  const increaseCounterButton = (number) => {
    setInputValue((prev) => {
      const newValue = prev?.replaceAll(",", "");
      const formattedValue = Number(Number(newValue) + number).toLocaleString(undefined, {
        minimumFractionDigits: 0,
      });
      return formattedValue;
    });
  };
  const handleDeleteClick = () => {
    dispatch(
      deleteBetSlipData()
    )
  }
  return (
    <>
      <div className='bet-cart__filter'>
        <div className='select-time'>
          {InboxSearch}
        </div>
        <div className='delete d-flex' onClick={() => handleDeleteClick()}>
          <img src={DeleteIcon} alt="" />
          <p>전체삭제</p>
        </div>
      </div>
      {checkCard && (
        <div className='bet-card2'>
          <img src={CardXIcon} alt="close" className='bet-card2-close'
            onClick={() => setCheckCard(false)}/>
          <div className='flex bet-card2-header'>
            <img src={CheckIcon} alt="close"
              style={{ width: '3.375rem' }}
             />
            <p>베팅이 수락되었습니다.</p>
          </div>
          <div className='flex bet-card2-body'>
            <p>티켓번호
              <span style={{ color: '#ffd98b', marginLeft: '0.625rem' }}>4004791</span>

            </p>

          </div>
        </div> 
      )}
      {betSlipData.length ===  0 && (<div className='bet-cart__empty'>
        <div className=''>
          <p style={{ marginLeft: '0.625rem' }}>선택하신 경기가 없습니다.</p>
          <p style={{ marginTop: '-0.313rem' }}> 원하시는 경기의 배당을 선택주세요. </p>
        </div>
      </div>)}
      
      {betSlipData.map(item => (
        <div className='bet-card' key={item._id}>
          <div className='bet-header'>
            <p>아스널 VS 리버플</p>
            <div className='bet-actions'>
              <img src={CardInfo} alt="" style={{ width: '2.813rem', marginTop: '0.375rem' }} />
              <img src={CardXIcon} alt="" style={{ width: '2.438rem' }}
                onClick={() => {
                  dispatch(
                    deleteBetSlipDataById({
                      data: item._id,
                    })
                  )
              }}/>
            </div>
          </div>
          <div className='bet-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <p>{item.team1}</p>
              <del>
                <p className='text-bold'>{item.team1_score}</p>
              </del>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-bold' style={{ color: '#5e399a' }}>{item.team2}</p>
              <p className='text-bold' style={{ color: '#0072bc' }}>{item.team2_score}</p>
            </div>
          </div>
        </div> 
      ))}
      <div className='bet-cart__amounts'>
        <div className='bet-cart__amount-cell'>
          <p>보유금액</p>
          <p className='amount-held'>3,522,170</p>
        </div>
        <div className='bet-cart__amount-cell'>
          <p>베팅금액</p>
          <div className='input-field'>
            <img src={RefreshIcon} alt="" className='refresh-icon' />
            <input
              type="text"
              placeholder="10,000"
              value={inputValue}
            />
          </div>
        </div>
      </div> 
      <div className='bet-cart__calculator'>
        <div className='bet-cart__numbers'>
          <button className='num-btn'
            onClick={() =>
              increaseCounterButton(1)
            }>1</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(2)
            }>2</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(3)
            }>3</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(4)
            }>4</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(5)
            }>5</button>
          <button className='cross-btn'>
            <img src={CrossIcon} alt="" style={{ width: '5.5rem' }} />
          </button>
        </div>
        <div className='bet-cart__numbers'>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(6)
            }>6</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(7)
            }>7</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(8)
            }>8</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(9)
            }>9</button>
          <button className='num-btn'
           onClick={() =>
              increaseCounterButton(0)
            }>0</button>
          <button className='cross-btn'
          onClick={() => setInputValue(0)}>
            00
          </button>
        </div>
        <div className='plus-btns'>
          <button onClick={() =>
            increaseCounterButton(10000)
          }>
            <div>+10,000</div>
          </button>
          <button onClick={() =>
            increaseCounterButton(50000)
          }>
            <div>+50,000</div>
          </button>
          <button onClick={() =>
            increaseCounterButton(100000)
          }>
            <div>+100,000</div>
          </button>
          <button className='active'
            onClick={() =>
              increaseCounterButton(0)
            }>
            <div>최대</div>
          </button>
        </div>
      </div>
      <div className='bill-info'>
        <div className='bill-info-content'>
          <div className='bill-info-row'>
            <p>총 배당</p>
            <p style={{ color: '#e9441d' }}>1.00</p>
          </div>
          <div className='bill-info-row'>
            <p>총 베팅금액</p>
            <p style={{ color: '#f04281' }}>10,000</p>
          </div>
          <div className='divided-line'></div>
        </div>
        <div className='bill-info-row2'>
          <p>당첨 예상금액</p>
          <p style={{ color: '#33a1e9', marginTop: '-0.125rem' }}>11,000</p>
        </div>

        <div className='bill-info-content2'>
          <div className='bill-info-content-row'>
            <div className='d-flex justify-content-between align-items-center'
              style={{ width: '37.625rem', paddingLeft: '1.75rem', paddingRight: '1.938rem' }}>
              <p>최소 베팅:</p>
              <p style={{ color: '#f04281' }}>5,000</p>
            </div>
            <div className='v-line'></div>
            <div className='d-flex justify-content-between align-items-center'
              style={{ width: '37.563rem', paddingLeft: '1.875rem', paddingRight: '1.75rem' }}>
              <p>최대 베팅:</p>
              <p >5,000,000</p>
            </div>
          </div>
          <div className='bill-info-content-row'>
            <div className='d-flex justify-content-between align-items-center'
              style={{ width: '37.625rem', paddingLeft: '1.75rem', paddingRight: '1.938rem' }}>
              <p>최대 당첨:</p>
              <p>10,000,000</p>
            </div>
            <div className='v-line'></div>
            <div className='d-flex justify-content-between align-items-center'
              style={{ width: '37.563rem', paddingLeft: '1.875rem', paddingRight: '1.75rem' }}>
              <p>최대 배당:</p>
              <p >300</p>
            </div>
          </div>
        </div>
        <div className='submit-btn'>
          <button onClick={() => setCheckPopup(true)}>
            <div>
              <img src={DollarIcon} alt="" style={{ width: '3.625rem' }} />
              <p>베팅하기</p>
            </div>
          </button>
        </div>

        {checkPopup && (
          <CheckPopup
            close={() => setCheckPopup(false)}
            confirm={() => confirmBetCart() } />
        )}
      </div>
    </>
  )
}
export default BetSlip;
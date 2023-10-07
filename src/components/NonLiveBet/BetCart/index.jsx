import './_style.scss'
import React, { useState, useEffect } from 'react'
import SettingIcon from '../../../assets/images/nonLiveBet/settings-btn.png'
import SettingIconOn from '../../../assets/images/nonLiveBet/settings-btn-on.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close-btn.png'
import DownArrowIcon from '../../../assets/images/nonLiveBet/down-arrow.png'
import TabIcon1 from '../../../assets/images/nonLiveBet/tab1-icon.png'
import TabIcon2 from '../../../assets/images/nonLiveBet/tab2-icon.png'
import BetCartDetails from './BetCartDetails'
import BetSlip from './BetSlip'

import { format } from "date-fns";
import { ko } from "date-fns/locale";

const BetCart = ({ close }) => {
  const [isSettingsOpen, setSettingsOpen] = useState(false)
  const [radioValue, setRadioValue] = useState("1")
  const [isActiveTab, setActiveTab] = useState(1)

  const dateFormat = "yyyy-MM-dd";
  const dateFormat1 = "H:mm:ss";
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="bet-cart__popup">
      <div className="bet-cart__container">
        <div className="bet-cart__header">
          <div className="bet-cart__title">
            {format(time, dateFormat, { locale: ko })}(월) {format(time, dateFormat1, { locale: ko })}
          </div>
          <div className="bet-cart__actions d-flex">
            <img
              src={!isSettingsOpen ? SettingIcon : SettingIconOn} alt="close" onClick={() => setSettingsOpen((prev) => !prev)} />
            <img src={CloseIcon} alt="close"
            onClick={close}/>
          </div>
        </div>
        {isSettingsOpen &&
          (<div className="bet-cart__settings">
            <div className='d-flex justify-content-between align-items-center'>
              <p>
                소수점
              </p>
              <img style={{ width: '2.375rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p>
                배당 및 변경사항을 자동승인 하겠습니까?
              </p>
            </div>
            <div className='d-flex align-items-center check-group'
              onClick={() => setRadioValue("1")}>
              <input
                type="checkbox"
                checked={radioValue === "1"}
              />
              <p>
                높은 배당만 수락
              </p>
            </div>
            <div className='d-flex align-items-center check-group'
              onClick={() => setRadioValue("2")}>
              <input
                className='w-12 h-12'
                type="checkbox"
                checked={radioValue === "2"}
              />
              <p>

                변경되는 배당 수락 (추천)
              </p>
            </div>
            <div className='d-flex align-items-center check-group'
              onClick={() => setRadioValue("3")}>
              <input
                type="checkbox"
                checked={radioValue === "3"}

              />
              <p>
                변경되는 배당 거절
              </p>
            </div>
          </div>)
        }


        <div className="bet-cart__tabs">
          <div
            className={`bet-cart__tab ${isActiveTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}>
            <div>
              <img src={TabIcon1} alt="" style={{ width: '4.313rem' }} />
              <p>베팅슬립</p>
              <span className='count'>
                <p>2</p>
              </span>
            </div>
          </div>
          <div 
            className={`bet-cart__tab ${isActiveTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}>
            <div>
              <img src={TabIcon2} alt="" style={{ width: '3.313rem' }} />
              <p>베팅내역</p>
              <span className='count'>
                <p>2</p>
              </span>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'#fff'}}>
          {isActiveTab === 2 &&
            <BetCartDetails/>
          }
          {isActiveTab === 1 &&
            <BetSlip />
          }
        </div>
      </div>
    </div>
  )
}
export default BetCart;
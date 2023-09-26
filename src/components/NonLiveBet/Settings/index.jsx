import './_style.scss'
import React, { useState, useEffect } from 'react'
import TabIcon1 from '../../../assets/images/nonLiveBet/tab1-icon.png'
import TabIcon2 from '../../../assets/images/nonLiveBet/tab2-icon.png'
import SettingIcon from '../../../assets/images/nonLiveBet/settings-btn.png'
import CloseIcon from '../../../assets/images/nonLiveBet/close-btn.png'
import DownArrowIcon from '../../../assets/images/nonLiveBet/down-arrow.png'
import DeleteIcon from '../../../assets/images/nonLiveBet/delete-icon.png'
import RefreshIcon from '../../../assets/images/nonLiveBet/refresh-icon.png'
import CrossIcon from '../../../assets/images/nonLiveBet/cross-icon.png'
import DollarIcon from '../../../assets/images/nonLiveBet/dollar-icon.png'
import CardXIcon from '../../../assets/images/nonLiveBet/card-x.png'
import CheckIcon from '../../../assets/images/nonLiveBet/check-icon.png'
import CardInfo from '../../../assets/images/nonLiveBet/card-info.png'
import Dropdown from '../../Shared/Dropdown'
const Settings = () => {
  const [radioValue, setRadioValue] = useState("1")
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
          <img style={{ width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
        </Dropdown>
      </div>
    </div>
  )
  return (
    <div className="settings-popup">
      <div className="settings-container">
        <div className="settings-header">
          <div className="settings-header__title">
            2021-08-02(월) 15:25:42
          </div>
          <div className="settings-header__actions flex">
            <img src={CloseIcon} alt="close"  />
            <img src={SettingIcon} alt="close"  />
          </div>
        </div>
        <div className='bet-card2'>
          <img src={CardXIcon} alt="close" className='bet-card2-close'/>
          <div className='flex bet-card2-header'>
            <img src={CheckIcon} alt="close" style={{ width:'3.375rem'}}/>
            <p>베팅이 수락되었습니다.</p>
          </div>
          <div className='flex bet-card2-body'>
            <p>티켓번호
              <span style={{ color: '#ffd98b' }}>4004791</span>

            </p>
            
          </div>
        </div>
        <div className='bet-card'>
          <div className='bet-header'>
            <p>아스널 VS 리버플</p>
            <div className='bet-actions'>
              <img src={CardInfo} alt="" style={{ width: '2.813rem' }} />
              <img src={CardXIcon} alt="" style={{ width: '2.438rem' }} />
            </div>
          </div>
          <div className='bet-body'>
            <div className='flex content-between items-center'> 
              <p>승무패[정규시간]</p>
              <p className='text-bold'>2.55</p>
            </div>
            <div className='flex content-between items-center'> 
              <p style={{ color:'#5e399a'}}>FC바르셀로나</p>
              <p className='text-bold'  style={{ color:'#0072bc'}}>2.26</p>
            </div>
          </div>
        </div>
        <div className='settings-collapse'>
          <div className='flex content-between items-center'>
            <p>
              소수점
            </p>
            <img style={{ width: '2.375rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
          </div>
          <div className='flex content-between items-center'>
            <p>
              배당 및 변경사항을 자동승인 하겠습니까?
            </p>
          </div>
          <div className='flex items-center check-group'
            onClick={() => setRadioValue("1")}>
            <input
              type="checkbox"
              checked={radioValue === "1"}
            />
            <p>
              높은 배당만 수락
            </p>
          </div>
          <div className='flex items-center check-group'
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
          <div className='flex items-center check-group'
            onClick={() => setRadioValue("3")}>
            <input
              type="checkbox"
              checked={radioValue === "3"}

            />
            <p>
              변경되는 배당 거절
            </p>
          </div>
          
        </div>
        <div className="settings__tabs">
          <div className="settings__tab active">
            <img src={TabIcon1} alt="" style={{ width:'4.313rem'}}/>
            <p>베팅슬립</p>
            <span className='count'>2</span>
          </div>
          <div className="settings__tab">
            <img src={TabIcon2} alt="" style={{ width: '3.313rem' }}/>
            <p>베팅내역</p>
            <span className='count'>2</span>
          </div>  
        </div>
        <div className='settings__filter'>
          <div className='select-time'>
            {InboxSearch}
          </div>
          <div className='delete flex'>
            <img src={DeleteIcon} alt="" />
            <span>전체삭제</span>
          </div>
        </div>
        <div className='empty-games'>
          <div className=''>
            <p>선택하신 경기가 없습니다.</p>
            <p> 원하시는 경기의 배당을 선택주세요. </p>
          </div>
        </div>
        <div className='settings__amounts'>
          <div className='settings__amount-cell'>
            <p>보유금액</p>
            <p className='amount-held'>3,522,170</p>
          </div>
          <div className='divided-line'></div>
          <div className='settings__amount-cell'>
            <p>베팅금액</p>
            <div className='input-field'>
              <img src={RefreshIcon} alt="" className='refresh-icon' />
              <input
                type="text"
                placeholder="10,000"
              />
            </div>
          </div>
        </div>
        <div className='settings__calculator'>
          <div className='settings__numbers'>
            <button className='num-btn'>1</button>
            <button className='num-btn'>2</button>
            <button className='num-btn'>3</button>
            <button className='num-btn'>4</button>
            <button className='num-btn'>5</button>
            <button className='cross-btn'>
              <img src={CrossIcon} alt="" style={{ width: '5.5rem' }} />
            </button>
          </div>
          <div className='settings__numbers'>
            <button className='num-btn'>6</button>
            <button className='num-btn'>7</button>
            <button className='num-btn'>8</button>
            <button className='num-btn'>9</button>
            <button className='num-btn'>0</button>
            <button className='cross-btn'>
             00
            </button>
          </div>
          <div className='plus-btns'>
            <button>
              <div>+10,000</div>
            </button>
            <button>
              <div>+50,000</div>
            </button>
            <button>
              <div>+100,000</div>
            </button>
            <button className='active'>
              <div>최대</div>
            </button>
          </div>
        </div>
        <div className='bill-info'>
          <div className='bill-info-content'>
            <div className='bill-info-row'>
              <p>총 배당</p>
              <p style={{ color:'#e9441d'}}>1.00</p>
            </div>
            <div className='bill-info-row'>
              <p>총 베팅금액</p>
              <p style={{ color: '#f04281' }}>10,000</p>
            </div>
            <div className='divided-line'></div>
          </div>
          <div className='bill-info-row2'>
            <p>당첨 예상금액</p>
            <p style={{ color: '#33a1e9' }}>11,000</p>
          </div>

          <div className='bill-info-content2'>
            <div className='bill-info-content-row'>
              <div className='flex content-between items-center'>
                <p>최소 베팅:</p>
                <p style={{ color: '#f04281', paddingRight:'2.125rem' }}>5,000</p>
              </div>
              <div className='flex content-between items-center'>
                <p style={{ paddingLeft:'1.875rem'}}>최대 베팅:</p>
                <p >5,000,000</p>
              </div>
            </div>
            <div className='bill-info-content-row'>
              <div className='flex content-between items-center'>
                <p>최대 당첨:</p>
                <p style={{paddingRight: '2.125rem' }}>10,000,000</p>
              </div>
              <div className='flex content-between items-center'>
                <p style={{ paddingLeft: '1.875rem' }}>최대 배당:</p>
                <p >300</p>
              </div>
            </div>
          </div>
          <div className='submit-btn'>
            <button>
              <div>
                <img src={DollarIcon} alt="" style={{ width: '3.625rem' }} />
                <p>베팅하기</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Settings;
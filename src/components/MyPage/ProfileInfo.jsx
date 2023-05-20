
import './_myPage.scss';
import React, { useState } from 'react'
import ProfileImg from '../../assets/images/profile-img.png'
import ProfileTag from '../../assets/images/profile-tag.png'
import DollarIcon from '../../assets/images/dollar-icon.png'
import PIcon from '../../assets/images/p-icon.png'
import Button1 from '../../assets/images/button-icon1.png'
import Button2 from '../../assets/images/button-icon2.png'
import Button3 from '../../assets/images/button-icon3.png'
import Button4 from '../../assets/images/button-icon4.png'
import Button5 from '../../assets/images/button-icon5.png'
import Button6 from '../../assets/images/button-icon6.png'
import TelegramIcon from '../../assets/images/footer/telegram-icon.png'
import TalkIcon from '../../assets/images/footer/talk-icon.png'

import ArrowUpWhite from "../../assets/myInfo/down-arrow.png";
import ArrowDown from "../../assets/myInfo/down-arrow.png";
import ArrowUp from "../../assets/myInfo/down-arrow.png";

import DropDownControls from "../../components/Shared/DropDownControls";
import CountryDropDown from '../../components/Shared/CountryDropDown';
import Koreaflag from "../../assets/myInfo/korea_flag.png";
import UKflag from '../../assets/second-flag.png'


const ProfileInfo = () => {
  const [isCountryOpen, setCountryOpen] = useState();
  const [country, setCountry] = useState("KR");
  const DropdownArrow = ({ isOpen, isWhite }) => (
    <>
      {isWhite ? (
        <img style={{ width: '3.375rem' }} className="object-contain" src={isOpen ? ArrowUpWhite : ArrowUpWhite} alt="arrow" />
      ) : (
        <img style={{ width: '3.375rem' }} className="object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
      )}
    </>
  )
  const CountryButton = (
    <div style={{
      paddingBottom: '0.6875rem', paddingTop: '0.875rem', paddingLeft: '0.9rem',
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: '',
      background: 'linear-gradient(to top, #7f5f3f, #a67c52)',
      paddingRight: '1.8rem',
      borderRadius: '0.7rem',
    }}>
      <div style={{ marginRight: '1.7rem', marginTop: '0.1rem', marginLeft: '2rem' }}>
        <img style={{ width: '7.0625rem' }} className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
      </div>
      <label style={{ marginRight: '2.45rem', fontSize: '3rem', marginTop: '0.225rem', fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd', textShadow: '#000000 0rem 0rem 1rem' }}>{country}</label>
      <DropdownArrow isWhite isOpen={isCountryOpen} />
    </div>
  )


  return (
    <div className='profile'>
      <div className='profile-card'>
        <div className='profile-info'>
          <div>
            <div className='profile-img'>
              <img src={ProfileTag} alt="ProfileImg" className='tag' />
              <img src={ProfileImg} alt="ProfileImg" />
            </div>
            <div className='profile-details'>
              <p>LEVEL 3</p>
              <p><span>마이프로틴화이팅</span> 님</p>
              <div className='profile-box'>
                <img src={DollarIcon} alt="Dollar" />
                <div>
                  <p> 100,000,000</p>
                  <span> 원</span>
                </div>
              </div>
              <div className='profile-box'>
                <img src={PIcon} alt="Dollar" />
                <div>
                  <p> 12,500,000</p>
                  <span> P</span>
                </div>
              </div>
              </div>
          </div>
          <div className='profile-buttons'>
            <div className='profile-button'>
              <button>
                <div className='button-img' ><img src={Button1} alt="Button1" /></div>
                <p>충전</p>
              </button>
            </div>
            <div className='profile-button'>
              <button>
                <div className='button-img' ><img src={Button2} alt="ProfileImg" /></div>
                <p>환전</p>
              </button>
            </div>
            <div className='profile-button'>
              <button>
                <div className='button-img' ><img src={Button3} alt="ProfileImg" /></div>
                <p>쪽지</p>
              </button>
            </div>
            <div className='profile-button'>
              <button>
                <div className='button-img' ><img src={Button4} alt="ProfileImg" /></div>
                <p>문의</p>
              </button>
            </div>
          </div>
          <div className='profile-buttons'>
            <div className='profile-button2'>
              <button>
                <div className='button-img2' ><img src={Button5} alt="Button1" /></div>
                <p>출석부</p>
              </button>
            </div>
            <div className='profile-button2'>
              <button>
                <div className='button-img2' ><img src={Button6} alt="Button1" /></div>
                <p>로그아웃</p>
              </button>
            </div>
            <div className='profile-button2'>
              <div className='dropdown-mypage' onClick={() => setCountryOpen((prev => !prev))}>
                <DropDownControls buttonChild={CountryButton} isDropdownOpen={isCountryOpen} setDropdownOpen={setCountryOpen} >
                  <div style={{ right: "0rem", top: '11rem', position: 'absolute', zIndex: '40' }}>
                    <CountryDropDown setCountry={setCountry} country={country} isBig='true' />
                  </div>
                </DropDownControls>
              </div>
              {/* <button>
                <div className='button-img2' ><img src={Button5} alt="Button1" /></div>
                <p>충전</p>
              </button> */}
            </div>
          </div>
        </div>
        <div className='profile-social'>
          <div>
            <div>
              <img src={TalkIcon} alt="Contact" />
              <p>test1234</p>
            </div>
            <div className='v-line'></div>
            <div>
              <img src={TelegramIcon} alt="Contact" />
              <p>test1234</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;
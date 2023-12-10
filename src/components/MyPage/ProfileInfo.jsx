
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

import ArrowDown from "../../assets/images/down-arrow.png";
import DropDownControls from "../../components/Shared/DropDownControls";
import CountryDropDown from '../../components/Shared/CountryDropDown';
import KoreaFlag from "../../assets/images/korea-flag.png";
import UKflag from '../../assets/images/UK_flag.png'

import { useNavigate } from "react-router-dom";
const ProfileInfo = () => {
  const [isCountryOpen, setCountryOpen] = useState();
  const [country, setCountry] = useState("KR");
  const navigate = useNavigate();

  const CountryButton = (
     <>
      <div className='country-flag' >
        <img className="" src={country === "KR" ? KoreaFlag : UKflag  } alt="flag"></img>
      </div>
      <div className="country-label">
        <p>{country}</p>
        <img src={ArrowDown} alt="arrow" />
      </div>
    </> 
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
                  <span className='pr-4px'> 원</span>
                </div>
              </div>
              <div className='profile-box'>
                <img src={PIcon} alt="Dollar" />
                <div>
                  <p> 12,500,000</p>
                  <span className='pr-px'> P</span>
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
                <div className='button-img' >
                  <img src={Button3} alt="ProfileImg" />
                  <span className="badge badge--red badge--md">
                    <span>5</span>
                  </span>
                </div>
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
              <button className='audience-btn' onClick={() => navigate("/attendance")}>
                <div className='button-img2' ><img src={Button5} alt="Button1" /></div>
                <p>출석부</p>
              </button>
            </div>
            <div className='profile-button2'>
              <button className='logout-btn'
                onClick={() => navigate("/")}>
                <div className='button-img2' ><img src={Button6} alt="Button1" /></div>
                <p>로그아웃</p>
              </button>
            </div>
            <div className='profile-button2' onClick={() => setCountryOpen((prev => !prev))}>
                <DropDownControls buttonChild={CountryButton} isDropdownOpen={isCountryOpen} setDropdownOpen={setCountryOpen} >
                  <div style={{ right: "0rem", position: 'absolute', zIndex: '40', width: '100%' }}>
                    <CountryDropDown setCountry={setCountry} country={country} isBig='true' />
                  </div>
                </DropDownControls>
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
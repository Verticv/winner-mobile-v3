import React from 'react'
import SpeakerIcon from '../../../assets/images/mainPage/speaker.png'
import '../NoticeBanner/_noticeBanner.scss';

const NoticeBanner = () => {
  return (
    <div className='notice-banner'>
      <div className='notice-banner__icon'>
        <img src={SpeakerIcon} alt="speakerIcon" />
      </div>
      <div className='notice-banner__content'>
        <span> 입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
      </div>
    </div>
  )
}

export default NoticeBanner;
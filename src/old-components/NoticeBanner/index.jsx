import React from 'react'
import SpeakerIcon from '../../assets/speaker.png'

const NoticeBanner = () => {
    return (
        <div className='first-color'>
            <div className='second-color'>
                <div className='notice-banner'>
                    <div className="notice-banner-icon"><img src={SpeakerIcon} alt="speakerIcon" /></div>
                    <div className='banner-container'>
                        <span id="banner">입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeBanner;

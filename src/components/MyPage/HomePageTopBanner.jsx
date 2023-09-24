

import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/myPage/home-white.png'
import LeftArrowIcon from '../../assets/myPage/LeftArrow-white.png'
import './_myPage.scss';

const HomePageTopBanner = ({ pageTitle, toPath = "/mypage", isFreeboard = false, setOpen }) => {
    const navigate = useNavigate();
    return (
        <div className='Home-page-top-banner'>
            <img
                onClick={() => setOpen(true)}
                className='left-arrow'
                src={LeftArrowIcon}
                alt="left_arrow_icon"
            />
            <span className='page-title'>{pageTitle}</span>
            <img
                onClick={() => navigate('/main')}
                className='home-icon'
                src={HomeIcon}
                alt="home_icon"
            />
        </div>
    )
}

export default HomePageTopBanner

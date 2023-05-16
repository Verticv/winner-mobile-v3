

import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/myPage/home.png'
import LeftArrowIcon from '../../assets/myPage/newLeftArrow.png'

const HomePageTopBanner = ({ pageTitle, toPath = "/mypage", isFreeboard = false }) => {
    const navigate = useNavigate();
    return (
        <div className='Home-page-top-banner'>
            <img
                onClick={() => {
                    window.location.pathname.includes('/mypage/coupon/all') ? navigate('/mypage/coupon') :
                    isFreeboard ? navigate(-1) : navigate(toPath)
                }}
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

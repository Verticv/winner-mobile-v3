

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/myPage/home-white.png'
import LeftArrowIcon from '../../assets/myPage/LeftArrow-white.png'
import './_myPage.scss';
// import MenuList from '../Shared/MenuList';

const HomePageTopBanner = ({ pageTitle, toPath = "/mypage", isFreeboard = false, setOpen, isOpen }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('isOpen2', isOpen);
    })


    return (
        <>
            <div className='Home-page-top-banner'>
                <img
                    //  onClick={() => {
                    //     // window.location.pathname.includes('/mypage/coupon/all') ? navigate('/mypage') :
                    //     navigate('/mypage')
                    // }
                    // }
                    onClick={() => {
                        // window.location.pathname.includes('/mypage/coupon/all') ? navigate('mypage/coupon') :
                        // isFreeboard ? navigate(-1) : navigate(toPath);
                        setOpen(prev => !prev)
                    }
                    }
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
            {/* {isOpen === true && (
                <MenuList
                    key={0}
                    items={subItems}
                    selectedTab={selectedSubTab}
                    setOpen={setOpen}
                    setSelectedTab={setActiveTab} 
                />
            )} */}
        </>
    )
}

export default HomePageTopBanner

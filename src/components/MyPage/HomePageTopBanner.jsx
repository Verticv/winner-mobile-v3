import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import HomeIcon from '../../assets/myPage/home-white.png';
import LeftArrowIcon from '../../assets/myPage/LeftArrow-white.png';
import './_myPage.scss';
// import MenuList from '../Shared/MenuList';

import { useDispatch } from 'react-redux';
import {
  resetMyPageSelectedMainMenuId,
  resetMyPageSelectedSubMenuId,
} from '../../counterSlice';

const HomePageTopBanner = ({
  pageTitle,
  toPath = '/mypage',
  isFreeboard = false,
  setOpen,
  isOpen,
}) => {
  const navigate = useNavigate();
  // const history = createBrowserHistory();

  // useEffect(() => {
  //   console.log('isOpen2', isOpen);
  // });

  const dispatch = useDispatch();

  return (
    <>
      <div className="Home-page-top-banner">
        <img
          onClick={() => {
            // window.location.pathname.includes('/mypage/coupon/all') ? navigate('mypage/coupon') :
            // isFreeboard ? history.back() : navigate(toPath);
            // setOpen(prev => !prev)
            // window.location.pathname.includes('/mypage/coupon/all') ? navigate('mypage/coupon') : navigate(-1);
            // history.back();
            // navigate('/mypage');
            if(window.location.pathname.includes('/mypage/bet-history')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/coupon/all')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/money')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/points')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/win-lose-settlement')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/gameresults')) navigate('/mypage');
            else if(window.location.pathname.includes('/mypage/freeboard')) navigate('/mypage');
            else if(window.location.pathname.includes('/freeboard')) navigate('/mypage/freeboard');
            else if(window.location.pathname.includes('/mypage/inbox/view')) navigate('/mypage/inbox');
            else if(window.location.pathname.includes('/mypage/inbox')) navigate('/mypage');
            else navigate(-1);
          }}
          className="left-arrow"
          src={LeftArrowIcon}
          alt="left_arrow_icon"
          // style={{ marginTop: '0.5rem' }}
          style={{ marginTop: '0.7rem' }}
        />
        <span className="page-title" style={{ marginBottom: '1rem' }}>{pageTitle}</span>
        <img
          onClick={() => {
            dispatch(resetMyPageSelectedMainMenuId());
            dispatch(resetMyPageSelectedSubMenuId());
            navigate('/main');
          }}
          className="home-icon"
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
  );
};

export default HomePageTopBanner;

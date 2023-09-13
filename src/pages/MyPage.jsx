import React, { useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import ProfileHeader from "../components/MyPage/Header";
import ProfileInfo from "../components/MyPage/ProfileInfo";
import ProfileMenu from "../components/MyPage/ProfileMenu";
// import BetHistory from "../components/MyPage/BetHistory";
import BetHistoryTest from '../components/MyPage/BetHistoryTest';
import Header from "../components/Header";
import NoticeBanner from "../components/MainPage/NoticeBanner";
import HomePageTopBanner from "../components/MyPage/HomePageTopBanner";
import FixedMenu from '../components/FixedMenu';
import "../components/MyPage/_myPage.scss"
import MoneyCharge from '../components/MyPage/MoneyCharge';
import ScrollButton from '../components/MyPage/ScrollButton';
import HorizontalMenu1 from '../components/MyPage/HorizontalMenu1';
import MoneyChargeHistory from '../components/MyPage/MoneyChargeHistory';
import MoneyExchangePage from '../components/MyPage/MoneyExchangePage';
import PointsPage from '../components/MyPage/PointsPage';

import activeIcon1 from '../assets/mainPage/icons/recharge-application2-v3.png';
import activeIcon2 from '../assets/mainPage/icons/active-icon22_v3.png';
import Icon2 from '../assets/mainPage/icons/charging-history2_v3.png';
import Icon1 from '../assets/mainPage/icons/Icon12-v3.png';



function MyPage({ setOpen, isAuthenticated, setAuthenticated }) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedSubTab, setSelectedSubTab] = useState(0)
  const [subActiveButton, setSubActiveButton] = useState();

  const [selectedTab1, setSelectedTab1] = useState(0)
    const [selectedSubTab1, setSelectedSubTab1] = useState(0)
    console.log(selectedSubTab1, selectedTab1, setSelectedSubTab)
 console.log(selectedSubTab);
  useEffect(() => {
    if (window.location.pathname === '/mypage') {
        setSubActiveButton('')
    }
}, [])
useEffect(() => {
    window.scrollTo(0, 0);
}, [])


const tabsArray1 = [
  { text: "충전신청", icon: Icon1, activeIcon: activeIcon1, id: 0, path: "/mypage/money/charge", width: '7.875rem' },
  { text: "충전내역", icon: Icon2, activeIcon: activeIcon2, id: 1, path: "/mypage/money/charge/history", width: '7.875rem' },
];
  return (
    <>
    
    <Routes>
      <Route index element={
        <div className="container mypage">
        <ProfileHeader setOpen={setOpen} />
        <ProfileInfo />
        <ProfileMenu />
      </div>
      }></Route>
      <Route path="/bet-history/*" element={<>
        <Header/> 
        <NoticeBanner />
        <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' />
        <BetHistoryTest isAuthenticated={isAuthenticated}
                        subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
        />
                          
      </>}>
      </Route>

      {/* <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page"> */}

      <Route path="/money/*" element={
         <>
         <Header/> 
        <NoticeBanner />
        <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' />
                 <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page">
                 <div id='container-nav'>
                                <HorizontalMenu1 itemsArray={tabsArray1} setSelectedTab={setSelectedTab1} setSelectedSubTab={setSelectedSubTab1} isMoneyPage='true' />
                            </div>
          <Routes>
            <Route path="/charge" element={
              <>
              <ScrollButton />
              <MoneyCharge subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
              </>
            } ></Route>
            <Route path="/charge/history" element={
              <>
              <ScrollButton />
              <div style={{ marginTop: '1rem' }}>
                <MoneyChargeHistory subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}/>
              </div>
              </>
            } ></Route>
          </Routes>
          <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />                
          </div>
         </>
      }></Route>
      {/* </div> */}

      <Route path="/money/exchange/*"
                element={
                    <>  
                        <Header/> 
                        <NoticeBanner />
                        <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' />
                        <MoneyExchangePage isAuthenticated={true} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                        <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />  
                    </>
                }
            >
            </Route>

            <Route path="/points/*"
                element={
                    <>
                        <Header/> 
                        <NoticeBanner />
                        <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' />
                        <PointsPage isAuthenticated={true} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                        <FixedMenu
                         selectedTab={selectedTab}
                         setSelectedTab={setSelectedTab}
                        />  
                    </>
                }
            >
            </Route>

    </Routes>
    
    </>
  )
}
export default MyPage
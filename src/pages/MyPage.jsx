import React, { useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import ProfileHeader from "../components/MyPage/Header";
import ProfileInfo from "../components/MyPage/ProfileInfo";
import ProfileMenu from "../components/MyPage/ProfileMenu";
import BetHistory from "../components/MyPage/BetHistory";
import Header from "../components/Header";
import NoticeBanner from "../components/MainPage/NoticeBanner";
import HomePageTopBanner from "../components/MyPage/HomePageTopBanner";
import HorizontalMenu from "../components/MyPage/HorizontalMenu";
import FixedMenu from '../components/FixedMenu';
import "../components/MyPage/_myPage.scss"

import activeBG from '../assets/mainPage/points/active-bg.png'
import icon1 from '../assets/bigIcons/1.png';
import icon2 from '../assets/images/bottom-nav/menu1.png';
import icon3 from '../assets/images/bottom-nav/menu2.png';
// import icon4 from '../assets/images/bottom-nav/menu3.png';
import icon5 from '../assets/images/bottom-nav/menu4.png';
import icon6 from '../assets/images/bottom-nav/menu5.png';
import icon7 from '../assets/images/bottom-nav/menu6.png';
import icon8 from '../assets/images/bottom-nav/menu7.png';
import icon9 from '../assets/images/bottom-nav/menu8.png';
import icon10 from '../assets/images/bottom-nav/menu9.png';
import icon11 from '../assets/images/bottom-nav/menu10.png';
// import icon12 from '../assets/images/bottom-nav/menu11.png';
// import HotelCasinoBetHistory from '../HotelCasinoBetHistory'

import icon1Active from '../assets/bigIcons/1-active.png';
import icon2Active from '../assets/images/bottom-nav/menu-on1.png';
import icon3Active from '../assets/images/bottom-nav/menu-on2.png';
// import icon4Active from '../assets/images/bottom-nav/menu-on3.png';
import icon5Active from '../assets/images/bottom-nav/menu-on4.png';
import icon6Active from '../assets/images/bottom-nav/menu-on5.png';
import icon7Active from '../assets/images/bottom-nav/menu-on6.png';
import icon8Active from '../assets/images/bottom-nav/menu-on7.png';
import icon9Active from '../assets/images/bottom-nav/menu-on8.png';
import icon10Active from '../assets/images/bottom-nav/menu-on9.png';
import icon11Active from '../assets/images/bottom-nav/menu-on10.png';
// import icon12Active from '../assets/images/bottom-nav/menu-on11.png';


function MyPage({ setOpen, isAuthenticated, setAuthenticated }) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedSubTab, setSelectedSubTab] = useState(0)
  const [subActiveButton, setSubActiveButton] = useState();

 console.log(selectedSubTab);
  useEffect(() => {
    if (window.location.pathname === '/mypage') {
        setSubActiveButton('')
    }
}, [])
useEffect(() => {
    window.scrollTo(0, 0);
}, [])

  const tabsArray = [
    { text: "전체", icon: icon1, activeIcon: icon1Active, id: -1, path: "/mypage/bet-history/all", activeBG: activeBG },
    { text: "라이브카지노", icon: icon2, activeIcon: icon2Active, id: 0, path: "/mypage/bet-history/all/live-casino", activeBG: activeBG },
    { text: "스포츠", icon: icon3, activeIcon: icon3Active, id: 1, path: "/mypage/bet-history/all/sports", activeBG: activeBG },
    { text: "슬롯", icon: icon5, activeIcon: icon5Active, id: 2, path: "/mypage/bet-history/all/slot-game", activeBG: activeBG },
    { text: "호텔카지노", icon: icon6, activeIcon: icon6Active, id: 3, path: "/mypage/bet-history/all/hotel-casino", activeBG: activeBG },
    { text: "e-스포츠", icon: icon7, activeIcon: icon7Active, id: 4, path: "/mypage/bet-history/all/e-sports", activeBG: activeBG },
    { text: "미니게임", icon: icon8, activeIcon: icon8Active, id: 5, path: "/mypage/bet-history/all/minigame", activeBG: activeBG, subPath: "/mypage/bet-history/all/minigame/powerball", subPath2: "/mypage/bet-history/all/minigame/powerladder", subPath3: "/mypage/bet-history/all/minigame/speedkino", subPath4: "/mypage/bet-history/all/minigame/kinoladder" },
    { text: "키론가상게임", icon: icon9, activeIcon: icon9Active, id: 6, path: "/mypage/bet-history/all/ar-game", activeBG: activeBG },
    { text: "피싱게임", icon: icon10, activeIcon: icon10Active, id: 7, path: "/mypage/bet-history/all/fishing-game", activeBG: activeBG },
    { text: "티비벳", icon: icon11, activeIcon: icon11Active, id: 8, path: "/mypage/bet-history/all/bet", activeBG: activeBG }
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
      <Route path="/bet-history/all/*" element={<>
        {/* <div className="w-full z-30 flex flex-col items-center"> */}
        {/* <div style={{ maxWidth: '1242px', paddingBottom: '0.01rem' }} className="w-full flex flex-col"> */}
        <Header/> 
        <NoticeBanner />
        <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' />
        {/* </div> */}
        <div className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', position: 'relative', top: '0', marginLeft:"0.188rem" }}>
                                <div id='scroll-wrapper'
                                    style={{ padding: '0.1rem 0 0.1rem 1.2rem', paddingRight: '0', overflowX: 'scroll', }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
                                >
                                    <div className="bet-history" style={{ display: 'flex', flexShrink: '0' }}>
                                        <HorizontalMenu key={5} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                    </div>
                                </div>
                                <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                            </div>
                            <BetHistory isAuthenticated={isAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />

                            <FixedMenu
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />                
      </>}>
      </Route>
    </Routes>
    </>
  )
}
export default MyPage
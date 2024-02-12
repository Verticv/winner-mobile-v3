import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileHeader from '../components/MyPage/Header';
import ProfileInfo from '../components/MyPage/ProfileInfo';
// import ProfileMenu from '../components/MyPage/ProfileMenu';
import ProfileMenu2 from '../components/MyPage/ProfileMenu2';

import BetHistoryTest from '../components/MyPage/BetHistoryTest';
import Header from '../components/Header';
import NoticeBanner from '../components/MainPage/NoticeBanner';
import HomePageTopBanner from '../components/MyPage/HomePageTopBanner';
import FixedMenu from '../components/FixedMenu';
import MoneyCharge from '../components/MyPage/MoneyCharge';
// import ScrollButton from '../components/MyPage/ScrollButton';
import HorizontalMenu1 from '../components/MyPage/HorizontalMenu1';
import MoneyChargeHistory from '../components/MyPage/MoneyChargeHistory';
import MoneyExchangePage from '../components/MyPage/MoneyExchangePage';
import PointsPage from '../components/MyPage/PointsPage';
import GameResultsPage from '../components/MyPage/GameResultsPage';

import activeIcon1 from '../assets/mainPage/icons/recharge-application2-v3.png';
import activeIcon2 from '../assets/mainPage/icons/active-icon22_v3.png';
import Icon2 from '../assets/mainPage/icons/charging-history2_v3.png';
import Icon1 from '../assets/mainPage/icons/Icon12_v3.png';
import DistributorPage from '../components/MyPage/DistributorPage';
import WinLoseSettlement from '../components/MyPage/WinLoseSettlement';
import CouponUsage from '../components/MyPage/CouponUsage';
import FreeBoard from '../components/MyPage/FreeBoard';
import Inbox from '../components/MyPage/Inbox';
import InboxView from '../components/MyPage/InboxView';
import EditInfo from '../components/MyPage/EditInfo';

function MyPage({ setOpen, isAuthenticated, setAuthenticated }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const [subActiveButton, setSubActiveButton] = useState();
  const [distributorPageActive, setDistributorPageActive] = useState();
  // const [isOpen2, setOpen2] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false); //!-- once pushing (main)menu, this valuable becomes true, it shows sub menu then.

  const [selectedTab1, setSelectedTab1] = useState(0);
  const [selectedSubTab1, setSelectedSubTab1] = useState(0);
  console.log(selectedSubTab1, selectedTab1, setSelectedSubTab);

  const [activeButton, setActiveButton] = useState();

  console.log(selectedSubTab);
  useEffect(() => {
    if (window.location.pathname === '/mypage') {
      setSubActiveButton('');
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabsArray1 = [
    {
      text: '충전신청',
      icon: Icon1,
      activeIcon: activeIcon1,
      id: 0,
      path: '/mypage/money/charge',
      width: '7.563rem',
    },
    {
      text: '충전내역',
      icon: Icon2,
      activeIcon: activeIcon2,
      id: 1,
      path: '/mypage/money/charge/history',
      width: '7.563rem',
    },
  ];
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <div className="container mypage">
              {/* <ProfileHeader setOpen={setOpen} /> */}
              <ProfileHeader showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />
              <ProfileInfo />
              {/* <ProfileMenu2 isOpen={isOpen2} setOpen={setOpen2} /> */}
              <ProfileMenu2 showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />
            </div>
          }
        ></Route>
        <Route
          path="/bet-history/*"
          element={
            <>
              <Header />
              <NoticeBanner />
              <HomePageTopBanner
                pageTitle="베팅내역"
                toPath="/mypage/bet-history"
              />
              <BetHistoryTest
                isAuthenticated={isAuthenticated}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                isMyPage={true} //!- true: if click FixedMenu, go to home
              />
            </>
          }
        ></Route>

        {/* <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page"> */}

        <Route
          path="/money/*"
          element={
            <>
              <Header />
              <NoticeBanner />
              <HomePageTopBanner
                pageTitle="머니충전"
                toPath="/mypage/bet-history"
                setOpen={setOpen}
              />
              <div
                style={{ maxWidth: '1242px', paddingBottom: '16.125rem' }}
                className="relative w-full flex flex-col justify-center overflow-hidden money-page"
              >
                <div id="container-nav">
                  <HorizontalMenu1
                    itemsArray={tabsArray1}
                    setSelectedTab={setSelectedTab1}
                    setSelectedSubTab={setSelectedSubTab1}
                    isMoneyPage="true"
                  />
                </div>
                <Routes>
                  <Route
                    path="/charge"
                    element={
                      <>
                        {/* <ScrollButton /> */}
                        <MoneyCharge
                          subActiveButton={subActiveButton}
                          setSubActiveButton={setSubActiveButton}
                        />
                      </>
                    }
                  ></Route>
                  <Route
                    path="/charge/history"
                    element={
                      <>
                        {/* <ScrollButton /> */}
                        <div style={{ marginTop: '0.625rem' }}>
                          <MoneyChargeHistory
                            subActiveButton={subActiveButton}
                            setSubActiveButton={setSubActiveButton}
                          />
                        </div>
                      </>
                    }
                  ></Route>
                </Routes>
                <FixedMenu
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              </div>
            </>
          }
        ></Route>
        {/* </div> */}

        <Route
          path="/money/exchange/*"
          element={
            <>
              <Header />
              <NoticeBanner />
              <HomePageTopBanner
                pageTitle="머니환전"
                toPath="/mypage/bet-history"
                setOpen={setOpen}
              />
              <MoneyExchangePage
                isAuthenticated={true}
                setAuthenticated={setAuthenticated}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/points/*"
          element={
            <>
              <Header />
              <NoticeBanner />
              <HomePageTopBanner
                pageTitle="포인트"
                toPath="/mypage/bet-history"
                setOpen={setOpen}
              />
              <PointsPage
                isAuthenticated={true}
                setAuthenticated={setAuthenticated}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/gameresults/*"
          element={
            <>
              <Header />
              <NoticeBanner />
              {/* <HomePageTopBanner pageTitle='베팅내역' toPath='/mypage/bet-history' /> */}
              <GameResultsPage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/distributor-page"
          element={
            <>
              <Header />
              <NoticeBanner />
              <DistributorPage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
                distributorPageActive={distributorPageActive}
                setDistributorPageActive={setDistributorPageActive}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/win-lose-settlement"
          element={
            <>
              <WinLoseSettlement
                isAuthenticated={true}
                setAuthenticated={setAuthenticated}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
              {/* <FixedMenu
                         selectedTab={selectedTab}
                         setSelectedTab={setSelectedTab}
                        />  */}
            </>
          }
        ></Route>

        <Route
          path="/freeboard"
          element={
            <>
              <FreeBoard
                isAuthenticated={true}
                setAuthenticated={setAuthenticated}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/coupon/*"
          element={
            <>
              <CouponUsage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
                subActiveButton={subActiveButton}
                setSubActiveButton={setSubActiveButton}
              />
            </>
          }
        ></Route>

        <Route
          path="/inbox"
          element={
            <>
              <Inbox
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>

        <Route
          path="/inbox/view/*"
          element={
            <>
              <InboxView
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            </>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/edit-info"
          element={
            <>
              <Header />
              <NoticeBanner />
              <EditInfo
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
              <FixedMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
export default MyPage;

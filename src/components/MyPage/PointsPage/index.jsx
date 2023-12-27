import PointsApply from '../PointsApply';
import PointsTransactionHistory from '../PointsTransactionHistory';
// import HomePageTopBanner from '../HomePageTopBanner';
import HorizontalMenu3 from '../HorizontalMenu3';
import React, { useState, useEffect } from 'react';
import Icon1 from '../../../assets/mainPage/points/1_v3.png';
import Icon2 from '../../../assets/mainPage/points/2_v3.png';
import Icon3 from '../../../assets/mainPage/points/3_v3.png';
import Icon1Active from '../../../assets/mainPage/points/1-active-v3.png';
import Icon2Active from '../../../assets/mainPage/points/2-active-v3.png';
import Icon3Active from '../../../assets/mainPage/points/3-active-v3.png';
import activeBG from '../../../assets/mainPage/points/active-bg-v3.png';
import { Route, Routes } from 'react-router-dom';
import PointsAccumulateHistory from '../PointsAccumulateHistory';

import './_pointsPage.scss';

const tabsArray = [
  {
    text: '포인트전환신청',
    icon: Icon1,
    activeIcon: Icon1Active,
    id: 0,
    path: '/mypage/points/all',
    activeBG: activeBG,
    width: '7.5rem',
  },
  {
    text: '포인트적립내역',
    icon: Icon2,
    id: 1,
    activeIcon: Icon2Active,
    path: '/mypage/points/all/points-accumulate-history',
    activeBG: activeBG,
    width: '7.875rem',
  },
  {
    text: '포인트전환내역',
    icon: Icon3,
    id: 2,
    activeIcon: Icon3Active,
    path: '/mypage/points/all/points-transaction-history',
    activeBG: activeBG,
    width: '7.875rem',
  },
];

// const LeftMenuSubArray = [
//     {
//         text: "포인트전환신청",
//         icon: subIcon1,
//         id: 0,
//         path: "/mypage/points/all",
//         width: '9.9375rem'
//     },
//     {
//         text: "포인트적립내역",
//         icon: subIcon2,
//         id: 1,
//         path: "/mypage/points/all/points-accumulate-history",
//         width: '9.9375rem'
//     },
//     {
//         text: "포인트전환내역",
//         icon: subIcon3,
//         id: 2,
//         path: "/mypage/points/all/points-transaction-history",
//         width: '9.9375rem'
//     }
// ]

const PointsPage = ({
  isAuthenticated,
  setAuthenticated,
  subActiveButton,
  setSubActiveButton,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  console.log(selectedSubTab, selectedTab);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SubMenuList = (
    <>
      <div
        style={{ padding: '2rem 1.875rem 0.975rem 1.9rem', display: 'flex' }}
      >
        <div
          style={{
            borderRadius: '1.125rem',
            padding: '0.563rem',
            marginRight: '1rem',
            height: '13.125rem',
            background: '#631e9a',
            width: '36.5rem',
          }}
        >
          <div
            style={{
              borderRadius: '1.125rem',
              color: '#5e399a',
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '2.25rem',
                letterSpacing: '-0.07rem',
              }}
            >
              잔여 포인트
            </div>
            <div
              style={{
                fontSize: '4.125rem',
                letterSpacing: '-0.13rem',
                fontWeight: '700'
              }}
            >
              <span style={{ color: '#f04281'}}>278</span>
              <span>P</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '1.125rem',
            padding: '0.563rem',
            marginRight: '',
            height: '13.125rem',
            background: '#631e9a',
            width: '36.5rem',
          }}
        >
          <div
            style={{
              borderRadius: '1.125rem',
              color: '#594e6a',
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '2.25rem',
                letterSpacing: '-0.07rem',
              }}
            >
              당월 적립포인트
            </div>
            <div
              style={{
                fontSize: '4.125rem',
                letterSpacing: '-0.13rem',
                color: '#5e399a',
                fontWeight: '700'
              }}
            >
              <span>50</span>
              <span>P</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ padding: '1.875rem', paddingTop: '0', display: 'flex' }}
        className="w-full flex"
      >
        <div
          style={{
            borderRadius: '1.125rem',
            padding: '0.563rem',
            marginRight: '1rem',
            height: '13.125rem',
            background: '#631e9a',
            width: '24rem',
          }}
        >
          <div
            style={{
              borderRadius: '1.125rem',
              color: '#594e6a',
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '2.25rem',
                letterSpacing: '-0.07rem',
              }}
            >
              전월 적립포인트
            </div>
            <div
              style={{
                fontSize: '3.425rem',
                letterSpacing: '-0.13rem',
                color: '#5e399a',
                fontWeight: '700'
              }}
            >
              <span style={{}}>228</span>
              <span>P</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '1.125rem',
            padding: '0.563rem',
            marginRight: '1rem',
            height: '13.125rem',
            background: '#631e9a',
            width: '24rem',
          }}
        >
          <div
            style={{
              borderRadius: '1.125rem',
              color: '#594e6a',
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingRight: '0.26rem',
            }}
          >
            <div
              className="text-gray-r7b7b7b  text-4xl tracking-tight flex items-center"
              style={{
                fontSize: '2.25rem',
                letterSpacing: '-0.07rem',
              }}
            >
              총 누적포인트
            </div>
            <div
              style={{
                fontSize: '3.425rem',
                letterSpacing: '-0.13rem',
                color: '#5e399a',
                fontWeight: '700'
              }}
            >
              <span style={{}}>278</span>
              <span>P</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '1.125rem',
            padding: '0.563rem',
            marginRight: '',
            height: '13.125rem',
            background: '#631e9a',
            width: '24rem',
          }}
        >
          <div
            style={{
              borderRadius: '1.125rem',
              color: '#594e6a',
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              className="text-gray-r7b7b7b  text-4xl tracking-tight flex items-center"
              style={{
                fontSize: '2.25rem',
                letterSpacing: '-0.07rem',
              }}
            >
              총 사용포인트
            </div>
            <div
              style={{
                fontSize: '3.425rem',
                letterSpacing: '-0.13rem',
                color: '#5e399a',
                fontWeight: '700'
              }}
            >
              <span style={{}}>228</span>
              <span>P</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div
      style={{ marginTop: '-0.063rem' }}
      className="relative w-full flex flex-col justify-center overflow-hidden"
    >
      <Routes>
        <Route
          path="/all/*"
          element={
            <>
              {/* <Header /> */}
              {/* <HomePageTopBanner pageTitle='포인트' toPath='/mypage/points' /> */}
              <div
                style={{ padding: '0.038rem 1.288rem' }}
                className="mypage-points"
                id="container-nav"
              >
                <HorizontalMenu3
                  withSmallMarginTop
                  itemsArray={tabsArray}
                  setSelectedTab={setSelectedTab}
                  setSelectedSubTab={setSelectedSubTab}
                />
              </div>
              <Routes>
                <Route
                  index
                  element={
                    <div className="points-apply">
                      <PointsApply
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                    </div>
                  }
                />
                <Route
                  path="/points-accumulate-history"
                  element={
                    <>
                      <PointsAccumulateHistory
                        SubMenuList={SubMenuList}
                        subActiveButton={subActiveButton}
                        setSubActiveButton={setSubActiveButton}
                      />
                    </>
                  }
                />

                <Route
                  path="/points-transaction-history"
                  element={
                    <PointsTransactionHistory
                      SubMenuList={SubMenuList}
                      subActiveButton={subActiveButton}
                      setSubActiveButton={setSubActiveButton}
                    />
                  }
                ></Route>
              </Routes>
              {/* <NavBottom /> */}
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default PointsPage;

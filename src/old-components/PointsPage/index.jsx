import PointsApply from '../PointsApply'
import PointsTransactionHistory from '../PointsTransactionHistory'
import HomePageTopBanner from '../HomePageTopBanner';
import HorizontalMenu1 from '..//HorizontalMenu1'
import React, { useState, useEffect } from 'react'
import Icon1 from '../../assets/mainPage/points/1.png';
import Icon2 from '../../assets/mainPage/points/2.png';
import Icon3 from '../../assets/mainPage/points/3.png';
import Icon1Active from '../../assets/mainPage/points/1-active.png';
import Icon2Active from '../../assets/mainPage/points/2-active.png';
import Icon3Active from '../../assets/mainPage/points/3-active.png';
import activeBG from '../../assets/mainPage/points/active-bg.png';
import { Route, Routes } from 'react-router-dom';
import PointsAccumulateHistory from '../PointsAccumulateHistory';
import Logo from "../../assets/myInfo/Logo.png";
import AccountProfileComponent from '../AccountProfileComponent'
import LeftMenu from "../LeftMenu";
import subIcon1 from '../../assets/bigIcons/leftMenu/13.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/14.png';
import subIcon3 from '../../assets/bigIcons/leftMenu/15.png';
import Header from '../Header';
import NavBottom from '../NavBottom';
import ScrollButton from '../ScrollButton';


const tabsArray = [
    { text: "포인트전환신청", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/points/all", activeBG: activeBG, width: '7.875rem' },
    { text: "포인트적립내역", icon: Icon2, id: 1, activeIcon: Icon2Active, path: "/mypage/points/all/points-accumulate-history", activeBG: activeBG, width: '7.875rem' },
    { text: "포인트전환내역", icon: Icon3, id: 2, activeIcon: Icon3Active, path: "/mypage/points/all/points-transaction-history", activeBG: activeBG, width: '7.875rem' },
];

const LeftMenuSubArray = [
    {
        text: "포인트전환신청",
        icon: subIcon1,
        id: 0,
        path: "/mypage/points/all",
        width: '9.9375rem'
    },
    {
        text: "포인트적립내역",
        icon: subIcon2,
        id: 1,
        path: "/mypage/points/all/points-accumulate-history",
        width: '9.9375rem'
    },
    {
        text: "포인트전환내역",
        icon: subIcon3,
        id: 2,
        path: "/mypage/points/all/points-transaction-history",
        width: '9.9375rem'
    }
]


const PointsPage = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const SubMenuList = (
        <>
            <div style={{ padding: '1.75rem 1.875rem 0.975rem 1.9rem', display: 'flex' }}>
                <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: 'linear-gradient(to top, #846241, #97714a 50%, #a47b51)', width: '36.5rem' }}>
                    <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>잔여 포인트</div>
                        <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }}>
                            <span style={{ color: '#4c98ff', fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
                <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '', height: '13.125rem', background: '#404040', width: '36.5rem' }}>
                    <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>당월 적립포인트</div>
                        <div style={{ fontSize: '4.125rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }}>
                            <span style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>50</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ padding: '1.875rem', paddingTop: '0', display: 'flex' }} className='w-full flex'>
                <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: '#404040', width: '24rem' }}>
                    <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.35rem' }}>
                        <div style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>전월 적립포인트</div>
                        <div style={{ fontSize: '3.425rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }}>
                            <span style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>228</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
                <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '1rem', height: '13.125rem', background: '#404040', width: '24rem' }}>
                    <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.26rem' }}>
                        <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>총 누적포인트</div>
                        <div style={{ fontSize: '3.425rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }}>
                            <span style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
                <div style={{ borderRadius: "0.625rem", padding: '0.375rem', marginRight: '', height: '13.125rem', background: '#404040', width: '24rem' }}>
                    <div style={{ borderRadius: "0.5rem", color: '#ad9e8c', paddingTop: '2.15rem', background: '#272624', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', fontFamily: 'SpoqaHanSansNeoMedium', paddingRight: '0.26rem' }}>
                        <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center" style={{ fontSize: '2.25rem', letterSpacing: '-0.07rem' }}>총 사용포인트</div>
                        <div style={{ fontSize: '3.425rem', marginTop: '0.9rem', letterSpacing: '-0.13rem' }}>
                            <span style={{ fontFamily: 'SpoqaHanSansNeoBold' }}>228</span>
                            <span>P</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const MyInfo = () => {
        return (
            <>
                <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                        subActiveButton={subActiveButton}
                    />
                </div>
                <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                </div>
            </>
        )
    }

    return (
        <div style={{}} className="relative w-full flex flex-col justify-center overflow-hidden">

            <Routes>
                <Route index element={
                    <>
                        <MyInfo />
                    </>
                }
                />
                <Route path='/all/*'
                    element={<>
                        <Header />
                        <ScrollButton />
                        <HomePageTopBanner pageTitle='포인트' toPath='/mypage/points' />
                        <div className='mypage-points' id='container-nav'>
                            <HorizontalMenu1 withSmallMarginTop itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                        </div>
                        <Routes>
                            <Route index element={
                                <div className='points-apply'>
                                    <PointsApply subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                </div>
                            } />
                            <Route path='/points-accumulate-history'
                                element={
                                    <>
                                        <PointsAccumulateHistory SubMenuList={SubMenuList} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                    </>
                                }
                            />

                            <Route path="/points-transaction-history"
                                element={<PointsTransactionHistory SubMenuList={SubMenuList} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />}
                            >

                            </Route>
                        </Routes>
                        <NavBottom />
                    </>}
                >
                </Route>
            </Routes>
        </div>
    )
}

export default PointsPage

import MoneyCharge from '../MoneyCharge'
import MoneyChargeHistory from '../MoneyChargeHistory'
import HorizontalMenu1 from '../HorizontalMenu1'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import activeIcon1 from '../../assets/mainPage/icons/recharge-application2.png';
import activeIcon2 from '../../assets/mainPage/icons/active-icon22.png';
import Icon2 from '../../assets/mainPage/icons/charging-history2.png';
import Icon1 from '../../assets/mainPage/icons/Icon12.png';
import HomePageTopBanner from '../HomePageTopBanner';
import Logo from "../../assets/myInfo/Logo.png";
import LeftMenu from "../LeftMenu";
import AccountProfileComponent from '../AccountProfileComponent'
import subIcon1 from '../../assets/bigIcons/leftMenu/11.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/12.png';
import Header from '../Header';
import NavBottom from '../NavBottom';
import ScrollButton from '../ScrollButton'


const tabsArray = [
    { text: "충전신청", icon: Icon1, activeIcon: activeIcon1, id: 0, path: "/mypage/money/charge", width: '7.875rem' },
    { text: "충전내역", icon: Icon2, activeIcon: activeIcon2, id: 1, path: "/mypage/money/charge/history", width: '7.875rem' },
];

const LeftMenuSubArray = [
    {
        text: "충전신청",
        icon: subIcon1,
        id: 0,
        path: "/mypage/money/charge",
        mainPath: "/mypage/money",
        width: '9.9375rem'
    },
    {
        text: "충전내역",
        icon: subIcon2,
        id: 1,
        path: "/mypage/money/charge/history",
        mainPath: "/mypage/money",
        width: '9.9375rem'
    }
];



const MoneyPage = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

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
        <div style={{ maxWidth: '1242px', paddingBottom: '16rem' }} className="relative w-full flex flex-col justify-center overflow-hidden money-page">

            <Routes>
                <Route index element={<MyInfo />}/>
                <Route path="/*"
                    element={
                        <>
                            <Header />
                            <ScrollButton />
                            <HomePageTopBanner pageTitle='머니충전' toPath='/mypage/money' />

                            <div id='container-nav'>
                                <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isMoneyPage='true' />
                            </div>
                            <Routes>
                                <Route path='/charge' element={
                                    <>
                                        <ScrollButton />
                                        <MoneyCharge subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                        <NavBottom />
                                    </>
                                } />
                                <Route path="/charge/history"
                                    element={
                                        <>
                                            <ScrollButton />
                                            <div style={{ marginTop: '1rem' }}>
                                                <MoneyChargeHistory subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}/>
                                            </div>
                                            < NavBottom />
                                        </>
                                    }>
                                </Route>
                            </Routes>
                        </>
                    }
                >
                </Route>
            </Routes>
        </div>
    )
}

export default MoneyPage

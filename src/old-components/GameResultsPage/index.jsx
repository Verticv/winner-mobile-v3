import React, { useState } from 'react'
import HorizontalMenu1 from '../HorizontalMenu1'
import HorizontalSubMenu from '../HorizontalSubMenu2';
import Icon1 from '../../assets/gameresults/sport-1.png';
import Icon2 from '../../assets/gameresults/sport-2.png';
import Icon1Active from '../../assets/gameresults/sport-1-active.png';
import Icon2Active from '../../assets/gameresults/sport-2-active.png';
import activeBG from '../../assets/gameresults/active-bg.png';
import inActiveBG from '../../assets/gameresults/inactive-bg.png';
import HomePageTopBanner from '../HomePageTopBanner'
import Pagination from '../Pagination'
import SportsContent from '../SportsContent'
import { Route, Routes } from 'react-router'

import DateSearchBar from '../DateSearchBar';
import MinigamesMatchResultPanel from '../MinigamesMatchResultPanel';
import CardHeader from '../CardHeader';
import PowerballResultsTable from '../PowerballResultsTable';
import MinigameTab from '../MinigameTab';
import TableHeader2 from '../TableHeader2';
import subIcon1 from '../../assets/bigIcons/leftMenu/16.png';
import subIcon2 from '../../assets/bigIcons/leftMenu/17.png';
import Logo from "../../assets/myInfo/Logo.png";
import LeftMenu from "../LeftMenu";
import AccountProfileComponent from '../AccountProfileComponent'
import Header from '../Header';
import NavBottom from '../NavBottom';
import HorizontalMenu14 from '../HorizontalMenu14'
import Icon9 from '../../assets/gameresults/1.png'
import Icon10 from '../../assets/gameresults/2.png'
import Icon3 from '../../assets/gameresults/3.png'
import Icon4 from '../../assets/gameresults/4.png'
import Icon5 from '../../assets/gameresults/5.png'
import Icon6 from '../../assets/gameresults/6.png'
import Icon7 from '../../assets/gameresults/7.png'
import Icon8 from '../../assets/gameresults/8.png'
import Icon11 from '../../assets/gameresults/10.png'
import Icon12 from '../../assets/gameresults/11.png'
import subInactive from '../../assets/gameresults/sub-inactive.png';
import subActive from '../../assets/gameresults/sub-active.png';
import ScrollButton from '../ScrollButton';

const tabsArray = [
    { text: "스포츠", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/mypage/gameresults/all", activeBG: activeBG, inActiveBG: inActiveBG, width: '7.875rem' },
    { text: "미니게임", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/mypage/gameresults/minigame/powerball", activeBG: activeBG, inActiveBG: inActiveBG, width: '7.875rem' },
];

const tabsArray2 = [
    { text: "전체", icon: Icon9, id: 0, number: 854, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "축구", icon: Icon10, id: 1, number: 567, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "농구", icon: Icon3, id: 2, number: 227, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "야구", icon: Icon4, id: 3, number: 407, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "배구", icon: Icon5, id: 4, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "테니스", icon: Icon11, id: 5, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "배드민턴", icon: Icon12, id: 6, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "하키", icon: Icon6, id: 7, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "미식축구", icon: Icon7, id: 8, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "격투기", icon: Icon8, id: 9, number: 9, subInactive: subInactive, subActive: subActive, path: '#' },
];

const LeftMenuSubArray = [
    {
        text: "스포츠",
        icon: subIcon1,
        id: 0,
        path: "/mypage/gameresults/all",
        width: '9.9375rem'
    },
    {
        text: "미니게임",
        icon: subIcon2,
        id: 1,
        path: "/mypage/gameresults/minigame/powerball",
        width: '9.9375rem'
    }
]

const inboxArray = [
    {
        id: 0,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 홀/짝 (홀)",
        ratio: "1.95"
    },
    {
        id: 1,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 숫자 (2)",
        ratio: "9.00"
    },
    {
        id: 2,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 구간 A(0~2)",
        ratio: "3.15"
    },
    {
        id: 3,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 언오버 (짝 언더)",
        ratio: "3.15"
    },
    {
        id: 4,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 홀/짝 (짝)",
        ratio: "1.95"
    },
    {
        id: 5,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 구간 (중)",
        ratio: "2.90"
    },
]

const GameResults = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

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

    console.log(selectedTab, selectedSubTab)

    return (
        <div style={{ maxWidth: '1242px', paddingBottom: '0.01rem' }}>
            <Routes>
                <Route index element={<MyInfo />} />
                <Route path="/all/*"
                    element={
                        <>
                            <ScrollButton />
                            <div className='game-result'>
                                <Header />
                                <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
                                <div id='container-nav'>
                                    <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} isMoneyPage="true" />
                                </div>
                                <div style={{height:'0.9rem'}} />
                                <HorizontalSubMenu isSameWidth setSelectedSubTab={setSelectedSubTab} />
                            </div>

                            <div style={{ maxWidth: '1242px', margin: '0.9rem 0rem 0 0rem', position: 'relative', top: '0' }}>
                                <div id='scroll-wrapper2' className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', overflowY:'hidden', overflowX:'scroll' }}>
                                    <div id='bet-history' style={{ padding: '1.1rem 0 0 1.2rem', paddingRight: '0' }} >
                                        <HorizontalMenu14 key={15} itemsArray={tabsArray2} isState={selectedTab} setSelectedTab={setSelectedTab} />
                                    </div>
                                    <div style={{ height: '12.1rem' }}></div>
                                </div>
                            </div>
                            <SportsContent checkedState={checkedState} setCheckedState={setCheckedState} />
                            <Pagination page={page} setPage={setPage} />
                            <NavBottom />
                        </>
                    }
                />

                <Route path="/all/*" element={<></>}></Route>

                <Route path="/minigame/*"
                    element={
                        <>
                            <ScrollButton />
                            <Header />
                            <div className='game-result'>
                                <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
                                <div id='container-nav'>
                                    <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                </div>

                                <MinigameTab subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                <div style={{ marginTop: '1rem' }} className='test'>
                                    <DateSearchBar isLeagueSearch={false} withBlackButton hasDateSuggestion={false} disableRange />
                                </div>
                            </div>
                            <Routes>
                                <Route path="/powerball"
                                    element={
                                        <>
                                            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', margin: '0 1.875rem', borderRadius: '1.3rem' }}>
                                                <div style={{
                                                    width: '100%',
                                                    background: '#323232',
                                                    borderRadius: '1rem',
                                                    paddingBottom: '1rem'
                                                }}>
                                                    <TableHeader2 isMinigame={true} />
                                                    <div className="flex flex-col w-full px-4 pb-4" style={{ margin: '0.3rem 0.8rem 0 0.8rem', border: '0.375rem solid #473b35', borderRadius: '0.4rem', boxShadow: '0 0 0.75rem 0 rgba(0, 0, 0, 0.6)' }}>
                                                        <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" width6 />
                                                        <PowerballResultsTable able checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                                                    </div>
                                                    <div className="flex flex-col w-full px-4 pb-4" style={{ margin: '2.19rem 0.8rem 0 0.8rem', border: '0.375rem solid #473b35', borderRadius: '0.4rem', boxShadow: '0 0 0.75rem 0 rgba(0, 0, 0, 0.6)' }}>
                                                        <CardHeader flag='us' name='파워볼' date='2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                                                        <PowerballResultsTable able checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginTop: '3.7rem', paddingBottom: '0.01rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >

                                </Route>
                                <Route path="/powerladder"
                                    element={
                                        <>
                                            <MinigamesMatchResultPanel />
                                            <div style={{ marginTop: '3.9rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >
                                </Route>
                                <Route path="/speedkino"
                                    element={
                                        <>
                                            <MinigamesMatchResultPanel type="speedkino" />
                                            <div style={{ marginTop: '3.7rem', paddingBottom: '0.01rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >
                                </Route>
                                <Route path="/kinoladder"
                                    element={
                                        <>
                                            <MinigamesMatchResultPanel type="kinoladder" />
                                            <div style={{ marginTop: '3.7rem', paddingBottom: '0.01rem' }}>
                                                <Pagination page={page} setPage={setPage} />
                                            </div>
                                        </>
                                    }
                                >
                                </Route>

                            </Routes>
                            <NavBottom />
                        </>
                    }
                >
                </Route>
            </Routes>
        </div>
    )
}

export default GameResults

import React, { useState, useEffect } from "react";
import { Route, useLocation, Routes, useNavigate } from "react-router-dom";

import Icon1 from '../assets/cscenter/Icon_1.png'
import Icon2 from '../assets/cscenter/Icon_2.png'
import Icon3 from '../assets/cscenter/Icon_3.png'
import Icon4 from '../assets/cscenter/Icon_4.png'
import Icon5 from '../assets/cscenter/Icon_5.png'

import Icon1Active from '../assets/cscenter/Icon_1-active.png'
import Icon2Active from '../assets/cscenter/Icon_2-active.png'
import Icon3Active from '../assets/cscenter/Icon_3-active.png'
import Icon4Active from '../assets/cscenter/Icon_4-active.png'
import Icon5Active from '../assets/cscenter/Icon_5-active.png'

import subIcon1 from '../assets/bigIcons/leftMenu/21.png';
import subIcon2 from '../assets/bigIcons/leftMenu/22.png';
import subIcon3 from '../assets/bigIcons/leftMenu/23.png';
import subIcon5 from '../assets/bigIcons/leftMenu/25.png';

import HomePageTopBanner from '../components/MyPage/HomePageTopBanner';
import HorizontalMenu1 from '../components/MyPage/HorizontalMenu1';
import Contact from '../components/Contact';
import ContactView from '../components/ContactView';
import ContactCompose from "../components/ContactCompose";
import Faq from "../components/Faq";
import MinigamePolicy from "../components/MinigamePolicy";
import SportsGamePolicy from "../components/SportsGamePolicy";
import LeftMenu from "../components/LeftMenu";
import Logo from "../assets/myInfo/Logo.png";
import Header from "../components/Header";
import NoticeBanner from '../components/MainPage/NoticeBanner';
import FixedMenu from "../components/FixedMenu";
import Announcement from '../components/Announcement';
import AnnouncementView from '../components/AnnouncementView'

export default function Test({ isAuthenticated, setAuthenticated }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const tabsArray = [
        { text: "문의하기", icon: Icon1, activeIcon: Icon1Active, id: 0, path: "/cscenter/all/contact/all", hasSameParent: true, width: '7.75rem' },
        { text: "공지사항", icon: Icon2, activeIcon: Icon2Active, id: 1, path: "/cscenter/all/announcement", hasSameParent: true, width: '7.75rem', marginLeft: '0.2rem' },
        { text: "자주묻는질문", icon: Icon3, activeIcon: Icon3Active, id: 2, path: "/cscenter/all/faq", hasSameParent: true, width: '7.75rem', marginLeft: '0.2rem' },
        { text: "계좌문의", icon: Icon4, activeIcon: Icon4Active, id: 3, path: "#", width: '7.75rem', marginLeft: '0.1rem' },
        { text: "베팅규정", icon: Icon5, activeIcon: Icon5Active, id: 4, path: "/cscenter/all/policy/sportsgame/soccer", hasSameParent: true, width: '7.75rem', marginLeft: '0.1rem' },
    ];
    const LeftMenuSubArray = [
        {
            text: "문의하기",
            icon: subIcon1,
            id: 0,
            path: "/cscenter/all/contact/all",
            width: '9.9375rem'
        },
        {
            text: "공지사항",
            icon: subIcon2,
            id: 1,
            path: "/cscenter/all/announcement",
            width: '9.9375rem'
        },
        {
            text: "자주묻는질문",
            icon: subIcon3,
            id: 2,
            path: "/cscenter/all/faq",
            width: '9.9375rem'
        },
        {
            text: "베팅규정",
            icon: subIcon5,
            id: 3,
            path: "/cscenter/all/policy/sportsgame/soccer",
            width: '9.9375rem'
        }
    ]

    const location = useLocation();
    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState()
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    const [subActiveButton, setSubActiveButton] = useState();
    const [activeButton, setActiveButton] = useState();
    const [cscenterActive, setCscenterActive] = useState();

    useEffect(() => {
        setCscenterActive('/cscenter')
    }, [setCscenterActive])

    useEffect(() => {
        if (location?.state?.from === '/main') {
            window.onpopstate = () => {
                navigate('/main')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location?.state])

    const MyInfo = () => {
        return (
            <>
                <Header />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                        subActiveButton={subActiveButton}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                        cscenterActive={cscenterActive}
                        setCscenterActive={setCscenterActive}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} src={Logo} alt="logo" />
                </div>
            </>
        )
    }
    return (
        <div className="cscenter-page" style={{overflow: 'hidden'}}>
        <Routes>
            <Route index element={<MyInfo />} />
            <Route
                path="/all/*"
                element={
                    <>
                        <Header />
                        <NoticeBanner />
                        <Routes>
                            <Route
                                path="/contact/all/*"
                                element={
                                    <>

                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={1} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <Contact subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                    </>
                                }
                            />
                            <Route path="contact/view/*"
                                element={
                                    <>
                                        <HomePageTopBanner
                                            pageTitle="문의하기"
                                            toPath="/cscenter/all/contact/all"
                                        />
                                        <ContactView />
                                    </>
                                }
                            />
                            <Route path="/announcement/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={2} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <Announcement setSubActiveButton={setSubActiveButton} />
                                    </>
                                }
                            />
                            <Route path="/announcement/view"
                                element={
                                    <>
                                        {useEffect(() => {
                                            setSubActiveButton('/cscenter')
                                        }, [setSubActiveButton])
                                        }
                                        <HomePageTopBanner pageTitle='공지사항' toPath='/cscenter' />
                                        <div style={{ marginBottom: '19.625rem', paddingBottom: '0.1rem' }}>
                                            <AnnouncementView />
                                        </div>
                                    </>
                                }
                            />
                            <Route path="contact/compose"
                                element={
                                    <>
                                        <HomePageTopBanner
                                            pageTitle="문의하기"
                                            toPath="/cscenter/all/contact/all"
                                        />
                                        <ContactCompose />
                                    </>
                                }
                            />
                            <Route path="/faq/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={3} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <div style={{ marginBottom: '19.625rem' }}>
                                            <Faq subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                        </div>
                                    </>
                                }
                            />
                            <Route path="/policy/sportsgame/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={4} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <SportsGamePolicy setSelectedTab={setSelectedTab} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                                        {/* <SportsGamePolicy selectedTab={selectedTab} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} /> */}
                                    </>}
                            />
                            <Route path="/policy/minigame/*"
                                element={
                                    <>
                                        <HomePageTopBanner pageTitle='고객센터' toPath='/cscenter' />
                                        <div id='container-nav'>
                                            <HorizontalMenu1 key={5} withSmallMarginTop={true} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                                        </div>
                                        <MinigamePolicy />
                                    </>
                                }
                            />
                        </Routes>
                        <FixedMenu />
                    </>
                }
            />
        </Routes>
        </div>
    )
}   
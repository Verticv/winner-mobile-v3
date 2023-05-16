/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router';
import { useLocation } from "react-router-dom";
import MoneyPage from "../MoneyPage";
import EditInfo from "../EditInfo";
import Inbox from "../Inbox";
import MoneyExchangePage from "../MoneyExchangePage";
import PointsPage from "../PointsPage";
import WinLoseSettlement from "../WinLoseSettlement";
import LeftMenu from "../LeftMenu";
// import EditInfo from 'components/myPage/EditInfo';
import AccountProfileComponent from '../AccountProfileComponent'
// import BetHistory from 'components/myPage/BetHistory'
import CouponUsage from '../CouponUsage';
import BetHistory from '../BetHistory';
// import Inbox from 'components/myPage/Inbox'
import InboxView from '../InboxView'
import GameResultsPage from '../GameResultsPage'
import Icon1 from "../../assets/myInfo/1.png";
import Icon2 from "../../assets/myInfo/2.png";
import Icon3 from "../../assets/myInfo/3.png";
import Icon4 from "../../assets/myInfo/4.png";
import Icon5 from "../../assets/myInfo/5.png";
import Icon6 from "../../assets/myInfo/6.png";
import Icon7 from "../../assets/myInfo/7.png";
import Icon8 from "../../assets/myInfo/8.png";
import Icon9 from "../../assets/myInfo/9.png";
import Icon10 from "../../assets/myInfo/10.png";
import Icon11 from "../../assets/myInfo/11.png";
import Icon12 from "../../assets/myInfo/12.png";
import Icon13 from "../../assets/myInfo/13.png";
import Icon14 from "../../assets/myInfo/14.png";
import Logo from "../../assets/myInfo/Logo.png";
import ScrollButton from '../ScrollButton'
// import Freeboard from "./Freeboard";
// import img from '../../img27.png'
import Header from "../Header";
import NavBottom from "../NavBottom";
import FreeBoardMain from "../FreeBoardMain";
import HomePageTopBanner from "../HomePageTopBanner";


const MyPage = ({ setAuthenticated, isAuthenticated, distributorPageActive, setDistributorPageActive }) => {

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname);
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname);
    const [subActiveButton, setSubActiveButton] = useState();
    const [activeButton2, setActiveButton2] = useState()
    const [activeButton, setActiveButton] = useState()

    useEffect(() => {
        if (window.location.pathname === '/mypage') {
            setSubActiveButton('')
        }
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const LeftMenuArray = [
        {
            text: "베팅내역",
            icon: Icon1,
            id: 0,
            path: "/mypage/bet-history",
            mainPath: "/mypage",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "머니충전",
            icon: Icon2,
            id: 1,
            path: "/mypage/money",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "머니환전",
            icon: Icon3,
            id: 2,
            path: "/mypage/money/exchange",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "포인트전환",
            icon: Icon4,
            id: 3,
            path: "/mypage/points",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "총판페이지",
            icon: Icon5,
            id: 4,
            path: "/distributor-page",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "윈루즈정산",
            icon: Icon6,
            id: 5,
            path: "/mypage/win-lose-settlement",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "라이브영상",
            icon: Icon7,
            id: 6,
            path: "#",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "경기결과",
            icon: Icon8,
            id: 7,
            path: "/mypage/gameresults",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "게시판",
            icon: Icon9,
            id: 8,
            path: "/mypage/freeboard",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "쿠폰관리",
            icon: Icon10,
            id: 9,
            path: "/mypage/coupon",
            inboxCount: "1",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "쪽지관리",
            icon: Icon11,
            id: 10,
            path: "/mypage/inbox",
            inboxCount: "20",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "고객센터",
            icon: Icon12,
            id: 11,
            path: "/cscenter",
            mainPath: "#",
            hasArrow: true,
            width: '9.9375rem'
        },
        {
            text: "계좌문의",
            icon: Icon13,
            id: 12,
            path: "#",
            mainPath: "#",
            width: '9.9375rem'
        },
        {
            text: "회원정보수정",
            icon: Icon14,
            id: 13,
            path: "#",
            mainPath: "#",
            width: '9.9375rem'
        },
    ];


    const MyInfo = ({ activeButton, setActiveButton }) => {

        console.log(`location.state`, location.state)
        return (
            <>
                <AccountProfileComponent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                <div style={{ marginTop: '1.9rem', marginBottom: '36.675rem' }} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuArray}
                        activeButton2={activeButton2}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                        setSubActiveButton={setSubActiveButton}
                        distributorPageActive={distributorPageActive}
                        setDistributorPageActive={setDistributorPageActive}
                    />
                </div>
                <div className="w-full flex justify-center mb-40" style={{ display: 'flex', justifyContent: 'center', marginLeft: '0.2rem', paddingBottom: '5rem' }}>
                    <img style={{ width: '20.375rem' }} className="object-contain" src={Logo} alt="logo" />
                </div>
            </>
        )
    }

    return (
        <Routes >
            <Route index element={
                <>
                    <MyInfo activeButton={activeButton} setActiveButton={setActiveButton} />
                </>
            }
            />
            <Route path="/bet-history/*"
                element={
                    <>
                        <BetHistory isAuthenticated={isAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                    </>
                }
            >
            </Route>
            <Route path="/money/*"
                element={
                    <>
                        <MoneyPage isAuthenticated={true} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton} />
                    </>
                }
            />
            <Route path="/money/exchange/*"
                element={
                    <>
                        <MoneyExchangePage isAuthenticated={true} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                    </>
                }
            >
            </Route>
            <Route path="/points/*"
                element={
                    <>
                        <PointsPage isAuthenticated={true} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                    </>
                }
            >
            </Route>
            <Route path="/win-lose-settlement"
                element={
                    <>
                        <ScrollButton />
                        <WinLoseSettlement isAuthenticated={true} setAuthenticated={setAuthenticated}
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                        />
                    </>
                }
            >

            </Route>
            <Route path="/gameresults/*"
                element={
                    <>
                        <GameResultsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                    </>
                }
            >
            </Route>
            <Route path="/freeboard/*"
                element={
                    <>
                        <Header />
                        <HomePageTopBanner pageTitle='게시판' toPath={window.location.pathname.includes('/mypage') ? '/mypage' : '/main'} isFreeboard={true} />
                        <div>
                            <ScrollButton />
                            <FreeBoardMain key={14}
                                activeButton={activeButton}
                                setActiveButton={setActiveButton}
                            />
                        </div>
                        <NavBottom />
                    </>
                }
            >
            </Route>

            <Route path="/coupon/*"
                element={
                    <>
                        <CouponUsage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}
                            subActiveButton={subActiveButton} setSubActiveButton={setSubActiveButton}
                        />
                    </>
                }
            >
            </Route>

            <Route exact path="/inbox"
                element={
                    <>
                        <Header />
                        <ScrollButton />
                        <Inbox
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                        />
                        <NavBottom />
                    </>
                }
            >
            </Route>
            <Route path="/inbox/*"
                element={
                    <>
                        <ScrollButton />
                        <InboxView />
                    </>
                }
            >
            </Route>
            <Route path="/edit-info/*"
                element={
                    <>
                        <Header />
                        <ScrollButton />
                        <EditInfo activeButton={activeButton}
                            setActiveButton={setActiveButton} />
                        <NavBottom />
                    </>
                }
            >
            </Route>
        </Routes>
    );
};

export default MyPage;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCookie, setCookie } from './utils';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePageTopBanner from './components/MyPage/HomePageTopBanner';
import FixedMenu from './components/FixedMenu';
import NoticeBanner from './components/MainPage/NoticeBanner';

import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import CSCenterPage from './pages/CSCenterPage';
import Authentication from './pages/Authentication';
import NonLiveBet from './pages/NonLiveBet';

import EsportsPage from './components/EsportsPage';
import FreeBoardView from './components/FreeBoardView';
import FreeBoardView2 from './components/FreeBoardView2';
import FreeBoardCompose from './components/FreeBoardCompose';
import MinigamesPage from './components/MinigamesPage';
import ScrollToTop from './components/ScrollToTop';
import AttendPage from './components/AttendPage';
import KironGuide from './components/KironGuide';
import HoldemGuide from './components/HoldemGuide';
import LiveSportsGuide from './components/LiveSportsGuide';
import HotelCasinoStructure from './components/HotelCasinoStructure';

import './App.css';
import './assets/sass/global.scss';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const pathname = window.location.pathname;
  const [isExpanded, setExpanded] = useState(null);

  const setFooterDefaultState = () => {
    setExpanded(null);
  };

  useEffect(() => {
    const previousUrl = getCookie('previousUrl');
    const currentUrl = getCookie('currentUrl');
    if (!previousUrl) {
      setCookie('previousUrl', pathname);
      setCookie('currentUrl', pathname);
    } else {
      setCookie('previousUrl', currentUrl);
      setCookie('currentUrl', pathname);
    }
  }, [pathname]);

  useEffect(() => {
    const app = document.querySelector('.app');
    const html = document.querySelector('html');
    const bodyWidth = app.offsetWidth;

    if (bodyWidth <= 1242) {
      const fontSize = (bodyWidth * 16) / 1242;
      html.style.fontSize = `${fontSize}px`;
    }
    window.addEventListener('resize', () => {
      const bodyWidth = app.offsetWidth;
      if (bodyWidth <= 1242) {
        const fontSize = (bodyWidth * 16) / 1242;
        html.style.fontSize = `${fontSize}px`;
      }
    });
  }, []);

  // const setOpen1  = (e) =>  {
  // 	console.log('fffffffffffffffffff')
  // 	setOpen(true)
  // }

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/main"
              element={
                <>
                  {/* <Header setOpen={setOpen1} isOpen={isOpen}/> */}
                  <Header />
                  <MainPage setFooterDefaultState={setFooterDefaultState} />
                  <Footer isExpanded={isExpanded} setExpanded={setExpanded} />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          {/* my page */}
          <Routes>
            <Route
              path="/mypage/*"
              element={
                <>
                  <MyPage
                    // setOpen={setOpen1}
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          {/* Freeboard- view 1, 2, compose */}
          <Routes>
            <Route
              path="/freeboard/view/*"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner
                    pageTitle="게시판"
                    toPath={
                      window.location.pathname.includes('/mypage')
                        ? '/mypage'
                        : '/main'
                    }
                    isFreeboard={true}
                  />
                  <FreeBoardView />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/freeboard/view2/*"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner
                    pageTitle="게시판"
                    toPath={
                      window.location.pathname.includes('/mypage')
                        ? '/mypage'
                        : '/main'
                    }
                    isFreeboard={true}
                  />
                  <FreeBoardView2 />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/freeboard/compose"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner
                    pageTitle="게시판"
                    toPath={
                      window.location.pathname.includes('/mypage')
                        ? '/mypage'
                        : '/main'
                    }
                    isFreeboard={true}
                  />
                  <FreeBoardCompose />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            {/* cscenter  page*/}
            <Route
              path="/cscenter/*"
              element={
                <>
                  <CSCenterPage />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/esports/*"
              element={
                <>
                  {/* <Header setOpen={setOpen1} isOpen={isOpen}/> */}
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner pageTitle="e-스포츠" />
                  <EsportsPage
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
                  <ScrollToTop />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Authentication
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
                </>
              }
            ></Route>
          </Routes>

          <Routes>
            <Route
              path="/bet-combination"
              element={
                <>
                  <Header />
                  <NonLiveBet
                    isAuthenticated={isAuthenticated}
                    setAu
                    thenticated={setAuthenticated}
                  />
                  <ScrollToTop />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/minigame/*"
              element={
                <>
                  <MinigamesPage
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/kiron/guide"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner pageTitle="키론가상게임" />
                  <KironGuide />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/holdem/guide"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner pageTitle="홀덤게임" />
                  <HoldemGuide />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/liveSports/guide"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner pageTitle="라이브스포츠" />
                  <LiveSportsGuide />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/hotelcasino/structure"
              element={
                <>
                  <Header />
                  <NoticeBanner />
                  <HomePageTopBanner pageTitle="호텔카지노" />
                  <HotelCasinoStructure />
                  <FixedMenu
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                  <ScrollToTop />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/attendance"
              element={
                <>
                  <AttendPage
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
                  <ScrollToTop />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;

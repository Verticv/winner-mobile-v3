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

import EsportsPage from './old-components/EsportsPage';
import FreeBoardView from './components/FreeBoardView';
import FreeBoardView2 from './components/FreeBoardView2';
import FreeBoardCompose from './components/FreeBoardCompose';
import MinigamesPage from './components/MinigamesPage';
import ScrollToTop from './components/ScrollToTop';


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
                </>
              }
            />
          </Routes>
          {/* my page */}
          <Routes>
            <Route
              path="/mypage/*"
              element={
                <MyPage
                  // setOpen={setOpen1}
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
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
                  />{' '}
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
                  <EsportsPage
                    isAuthenticated={isAuthenticated}
                    setAuthenticated={setAuthenticated}
                  />
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
                    setAuthenticated={setAuthenticated}
                  />
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
                </>
              }
            />
          </Routes>
          {/* <Routes>
            <Route
              path="/minigame/powerball/*"
              element={
                <>
                  <div className="powerball_top">
                    <div className="powerball_area">
                      <iframe
                        id="game_frame"
                        src="https://ntry.com/scores/powerball/live.php"
                        scrolling="no"
                        frameborder="0"
                        title="powerball"
                      ></iframe>
                    </div>
                  </div>{' '}
                </>
              }
            />
            <Route
              path="/powerladder/*"
              element={
                <>
                  <div className="powerball_top">
                    <div className="powerball_area">
                      <iframe
                        id="game_frame"
                        src="https://ntry.com/scores/power_ladder/live.php"
                        scrolling="yes"
                        frameborder="0"
                        title="powerball"
                      ></iframe>
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path="/speedkino/*"
              element={
                <>
                  <div className="powerball_top">
                    <div className="powerball_area">
                      <iframe
                        id="game_frame"
                        src="https://ntry.com/scores/speedkeno/live.php"
                        scrolling="yes"
                        frameborder="0"
                        title="powerball"
                      ></iframe>
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path="/kinoladder/*"
              element={
                <>
                  <div className="powerball_top">
                    <div className="powerball_area">
                      <iframe
                        id="game_frame"
                        src="https://ntry.com/scores/keno_ladder/live.php"
                        scrolling="yes"
                        frameborder="0"
                        title="kinoladder"
                      ></iframe>
                    </div>
                  </div>
                </>
              }
            />
          </Routes> */}
        </div>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;

import './assets/sass/global.scss';
import React,  { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import ScrollToTop from './helpers/scrollToTop';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import { getCookie, setCookie } from './utils';
import MyPage from './pages/MyPage';
import Authentication from './pages/Authentication';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const pathname = window.location.pathname;

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


  return (
    <>
    <div className='app'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/main"
            element={
              <>
                <Header />
                <MainPage />
                <Footer />
              </>
            }
          />
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
        {/* my page */}
        <Routes>
          <Route
            path="/mypage/*"
            element={
              <MyPage
                isAuthenticated={isAuthenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;


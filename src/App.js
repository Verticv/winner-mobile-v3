import './assets/sass/global.scss';
import React,  { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import ScrollToTop from './helpers/scrollToTop';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import EsportsPage from './old-components/EsportsPage';
import { getCookie, setCookie } from './utils';
import MyPage from './pages/MyPage';
import Authentication from './pages/Authentication';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const pathname = window.location.pathname;
	const [isExpanded, setExpanded] = useState(null);

	const setFooterDefaultState = () => {
		setExpanded(null)
	}
	
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
		<Router>
			<div className="app">
				{/* <Router> */}
				<ScrollToTop />
				<Routes>
					<Route
						path="/main"
						element={
							<>
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
								isAuthenticated={isAuthenticated}
								setAuthenticated={setAuthenticated}
							/>
						}
					/>
				</Routes>
				<Routes>
					<Route
						path="/esports/*"
						element={
							<>
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
				{/* <Outlet /> */}
				{/* </Router> */}
			</div>
		</Router>
	);
}

export default App;


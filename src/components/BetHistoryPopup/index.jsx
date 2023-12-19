import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BoardComposeViewPanel from '../../components/MyPage/BoardComposeViewPanel';
import CloseIcon from '../../assets/images/nonLiveBet/close.png';
import icon1 from '../../assets/images/mainPage/menu1.png';
import icon2 from '../../assets/images/mainPage/menu4.png';
import icon3 from '../../assets/images/mainPage/menu3.png';
import icon4 from '../../assets/images/mainPage/menu2.png';
import icon5 from '../../assets/images/mainPage/menu5.png';
import icon6 from '../../assets/images/mainPage/menu6.png';
import icon7 from '../../assets/images/mainPage/menu7.png';
import icon8 from '../../assets/images/mainPage/menu8.png';
import icon9 from '../../assets/images/mainPage/menu9.png';
import icon10 from '../../assets/images/mainPage/menu10.png';
import icon1Active from '../../assets/images/bottom-nav/menu-on1.png'
import icon2Active from '../../assets/images/bottom-nav/menu-on4.png'
import icon3Active from '../../assets/images/bottom-nav/menu-on3.png'
import icon4Active from '../../assets/images/bottom-nav/menu-on2.png'
import icon5Active from '../../assets/images/bottom-nav/menu-on5.png';
import icon6Active from '../../assets/images/bottom-nav/menu-on6.png';
import icon7Active from '../../assets/images/bottom-nav/menu-on7.png';
import icon8Active from '../../assets/images/bottom-nav/menu-on8.png';
import icon9Active from '../../assets/images/bottom-nav/menu-on9.png';
import icon10Active from '../../assets/images/bottom-nav/menu-on10.png';

import HorizontalMenu from '../../components/MyPage/HorizontalMenu';
import LiveCasinoBetHistory from '../../components/MyPage/LiveCasinoBetHistory';
import Pagination from '../../components/MyPage/Pagination';
import SlotBetHistory from '../../components/MyPage/SlotBetHistory';
import ESportsBetHistory from '../../components/MyPage/ESportsBetHistory';
import ARGameBetHistory from '../../components/MyPage/ARGameBetHistory';
import DateSearchBar from '../../components/MyPage/DateSearchBar';
import MinigameBetHistoryPopup from '../../components/MyPage/MinigameBetHistoryPopup';
import HotelCasinoBetHistory from '../../components/MyPage/HotelCasinoBetHistory';

import './_betHistoryPopup.scss';

const BetHistoryPopup = ({ setPopupOpen, setAttachedArray, attachedArray }) => {
  const tabsArray = [
    {
      id: 0,
      icon: icon1,
      activeIcon: icon1Active,
      text: '라이브카지노',
      width: '7.75rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 1,
      icon: icon4,
      activeIcon: icon4Active,
      text: '스포츠',
      width: '7.75rem',
      marginTop: '0.4rem',
      textMargin: '0.7rem',
      isActive: true,
      path: '/freeboard/compose',
    },
    {
      id: 2,
      icon: icon3,
      activeIcon: icon3Active,
      text: '라이브스포츠',
      width: '7.75rem',
      marginTop: '0.4rem',
      textMargin: '0.7rem',
      isActive: true,
      path: '/freeboard/compose',
    },
    {
      id: 3,
      icon: icon2,
      activeIcon: icon2Active,
      text: '슬롯',
      width: '7.75rem',
      marginTop: '0.5rem',
      textMargin: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 4,
      icon: icon5,
      activeIcon: icon5Active,
      text: '호텔카지노',
      width: '7.75rem',
      marginTop: '0.4rem',
      textMargin: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 5,
      icon: icon6,
      activeIcon: icon6Active,
      text: 'e-스포츠',
      width: '7.75rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 6,
      icon: icon7,
      activeIcon: icon7Active,
      text: '미니게임',
      width: '7.75rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 7,
      icon: icon8,
      activeIcon: icon8Active,
      text: '키론가상게임',
      width: '7.75rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 8,
      icon: icon9,
      activeIcon: icon9Active,
      text: '피싱게임',
      width: '7.75rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
    {
      id: 9,
      icon: icon10,
      activeIcon: icon10Active,
      text: '티비벳',
      width: '5.875rem',
      marginTop: '0.4rem',
      isActive: false,
      path: '/freeboard/compose',
    },
  ];

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(0);
  const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(10).fill(false));
  const [subActiveButton, setSubActiveButton] = useState(0);

  useEffect(() => {
    window.onpopstate = () => {
      if (window.location.pathname === '/freeboard/compose') {
        navigate('/mypage/freeboard');
      }
    };
  });

  const [page, setPage] = useState(0);

  useEffect(() => {
    setHistorySelectedSubTab(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {};
  }, [selectedSubTab]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {};
  }, [selectedSubTab, selectedTab, historySelectedSubTab]);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', appHeight);
  appHeight();

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  console.log(`selectedSubTab`, selectedSubTab);

  return (
    <div className="베팅내역-popup">
      <div className="베팅내역-border">
        <div className="first-section">
          <label className="text">베팅내역</label>
          <button
            style={{
              marginRight: '3.625rem',
              width: '3.4rem',
              height: '3.1875rem',
              right: '0',
              top: '2.9rem',
              position: 'absolute',
              background: 'bottom',
            }}
            onClick={() => setPopupOpen((prev) => !prev)}
          >
            <img
              className="close hover"
              style={{ width: '3.1875rem', height: 'auto' }}
              src={CloseIcon}
              alt="close_icon"
            />
          </button>
        </div>

        <div className="w-full h-full bg-white" style={{ height: 'auto' }}>
          <div className="w-full">
            <div
              style={{
                height: 'auto',
                width: '77.625rem',
              }}
              className="overflow-y-auto hide-scrollbar"
            >
              <div
                className="w-full relative top-0"
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    background: 'linear-gradient(to right, #ffffff00, #ffffff',
                    width: '3.125rem',
                  }}
                  className="absolute h-full right-0 z-50"
                ></div>
                <div
                  id="scroll-wrapper"
                  style={{
                    overflowX: 'scroll',
                    overflowY: 'hidden',
                    background: '#c2acef',
                    marginTop: '10px',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginBottom: ' 5px',
                    padding: '1.5rem',
                    paddingRight: '2rem',
                    borderRadius: '10px'
                  }}
                  className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
                >
                  <div
                    className=" flex flex-shrink-0 w-full"
                    style={{ display: 'flex', flexShrink: '0'  }}
                  >
                    <HorizontalMenu
                      itemsArray={tabsArray}
                      withoutFirst={false}
                      setSelectedTab={setSelectedTab}
                      selectedSubTab={selectedSubTab}
                      setSelectedSubTab={setSelectedSubTab}
                      popup={true}
                    />
                  </div>
                </div>
                <div
                  style={{ height: '13.5rem', top: '2.5rem', right: '2.7rem', boxShadow: 'rgb(194, 172, 239) 0rem 0px 1rem 1.5rem' }}
                  className="nav-shadow absolute h-full left-0 z-50"
                ></div>
              </div>

              {selectedTab === 0 ? (
                <>
                  <LiveCasinoBetHistory
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    margon1
                    isPopup
                  />
                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : selectedTab === 1 ? (
                <div
                  style={{ marginBottom: '5.625rem', paddingBottom: '0.1rem' }}
                  className="w-full h-full"
                >
                  <div
                    style={{ marginTop: '1rem' }}
                    className="ar-date SportsBetHistory"
                  >
                    <DateSearchBar
                      isGameResultsSearch={true}
                      isFreeboard="true"
                    />
                  </div>
                  <div style={{ paddingBottom: '0.1rem', margin: '0 1.8rem' }}>
                    <BoardComposeViewPanel
                      attachedArray={attachedArray}
                      setPopupOpen={setPopupOpen}
                      setAttachedArray={setAttachedArray}
                      type={0}
                      winAmount="0"
                      isAttached={true}
                      noButtons={true}
                      checkedState={checkedState}
                      setCheckedState={setCheckedState}
                      isSportsAndLiveSports={true}
                    />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <div style={{ marginTop: '1.25rem' }}>
                      <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                    </div>
                  </div>
                </div>
              ) : selectedTab === 2 ? (
                <div
                  style={{ marginBottom: '5.625rem', paddingBottom: '0.1rem' }}
                  className="w-full h-full"
                >
                  <div
                    style={{ marginTop: '1rem' }}
                    className="ar-date SportsBetHistory"
                  >
                    <DateSearchBar
                      isGameResultsSearch={true}
                      isFreeboard="true"
                    />
                  </div>
                  <div style={{ paddingBottom: '0.1rem', margin: '0 1.8rem' }}>
                    <BoardComposeViewPanel
                      attachedArray={attachedArray}
                      setPopupOpen={setPopupOpen}
                      setAttachedArray={setAttachedArray}
                      type={0}
                      winAmount="0"
                      isAttached={true}
                      noButtons={true}
                      checkedState={checkedState}
                      setCheckedState={setCheckedState}
                      isSportsAndLiveSports={true}
                    />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <div style={{ marginTop: '1.25rem' }}>
                      <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                    </div>
                  </div>
                </div>
              ) : selectedTab === 3 ? (
                <>
                  <SlotBetHistory
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    isPopup
                  />
                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : selectedTab === 4 ? (
                <>
                  <HotelCasinoBetHistory
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    subActiveButton={subActiveButton}
                    setSubActiveButton={setSubActiveButton}
                    isPopup
                  />

                  <div style={{ marginTop: '1.25rem' }}>
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : selectedTab === 5 ? (
                <>
                  <ESportsBetHistory
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    isPopup
                  />

                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    {/* <Pagination page={page} setPage={setPage} /> */}
                  </div>
                </>
              ) : selectedTab === 6 ? (
                <>
                  <MinigameBetHistoryPopup
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    isPopup
                  />
                </>
              ) : selectedTab === 7 ? (
                <>
                  <ARGameBetHistory
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    isPopup
                  />

                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : selectedTab === 8 ? (
                <>
                  <SlotBetHistory
                    key={20}
                    isState={selectedSubTab}
                    setState={setSelectedSubTab}
                    isPopup
                  />

                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : selectedTab === 9 ? (
                <>
                  <LiveCasinoBetHistory
                    key={100}
                    showSub={false}
                    isState={historySelectedSubTab}
                    setState={setHistorySelectedSubTab}
                    margon1
                    isPopup
                  />
                  <div
                    style={{ marginTop: '1.25rem', paddingBottom: '0.1rem' }}
                  >
                    <Pagination page={page} setPage={setPage} isBetHistoryPopup={true} />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetHistoryPopup;

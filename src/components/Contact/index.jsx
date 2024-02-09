import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HorizontalSubMenu from '../MyPage/HorizontalSubMenu';
import Pagination from '../MyPage/Pagination';
import ContactTable from '../ContactTable';
import Search from '../Search';

import './_contact.scss';

const Contact = ({ subActiveButton, setSubActiveButton }) => {
  const tabsArray = [
    {
      text: '전체',
      id: 0,
      width: '11.5625rem',
      path: '/cscenter/all/contact/all',
    },
    {
      text: '카지노',
      id: 1,
      width: '13.4375rem',
      path: '/cscenter/all/contact/all/live-casino',
    },
    {
      text: '스포츠',
      id: 2,
      width: '13.4375rem',
      path: '/cscenter/all/contact/all/sports',
    },
    {
      text: '라이브스포츠',
      id: 3,
      width: '21.3125rem',
      path: '/cscenter/all/contact/all/livesports',
    },
    {
      text: '슬롯게임',
      id: 4,
      width: '11.5625rem',
      path: '/cscenter/all/contact/all/slot',
    },
    {
      text: '호텔카지노',
      id: 5,
      width: '18.3125rem',
      path: '/cscenter/all/contact/all/hotelcasino',
    },
    {
      text: '홀덤',
      id: 6,
      width: '11.5625rem',
      path: '/cscenter/all/contact/all/holdom',
    },
    {
      text: 'e-스포츠',
      id: 7,
      width: '15.3125rem',
      path: '/cscenter/all/contact/all/e-sports',
    },
    {
      text: '미니게임',
      id: 8,
      width: '15.3125rem',
      path: '/cscenter/all/contact/all/minigame',
    },
    {
      text: '키론가상게임 ',
      width: '21.3125rem',
      id: 9,
      path: '/cscenter/all/contact/all/ar-game',
      additionLeftScroll: -90,
    },
    {
      text: '피싱게임 ',
      width: '15.3125rem',
      id: 10,
      path: '/cscenter/all/contact/all/ar-game1',
      additionLeftScroll: -90,
    },
    {
      text: '티비벳',
      id: 11,
      width: '13.5625rem',
      path: '/cscenter/all/contact/all/slot2',
    },
    {
      text: '충전/환전',
      width: '16.3125rem',
      id: 12,
      path: '/cscenter/all/contact/all/transaction',
    },
    {
      text: '베팅관련',
      width: '15.3125rem',
      id: 13,
      path: '/cscenter/all/contact/all/about-betting',
    },
    {
      text: '기타',
      width: '10.3125rem',
      id: 14,
      path: '/cscenter/all/contact/all/other',
      additionLeftScroll: -200,
    },
  ];

  const inboxArray = [
    {
      id: 0,
      text: '은행계좌정보',
      isRead: false,
      time: '2021.06.28 15:36',
      category: '계좌문의',
      isClicked: true,
      isFirst: true,
      path: '/cscenter/all/contact/view/1',
    },
    {
      id: 1,
      text: '스포츠북 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '스포츠',
      path: '/cscenter/all/contact/view/2',
    },
    {
      id: 2,
      text: '카지노 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '카지노',
      path: '/cscenter/all/contact/view/3',
    },
    {
      id: 3,
      text: '키론가상게임 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '키론가상게임',
      path: '/cscenter/all/contact/view/4',
    },
    {
      id: 4,
      text: '미니게임 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '미니게임',
      path: '/cscenter/all/contact/view/5',
    },
    {
      id: 5,
      text: '슬롯 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '슬롯게임',
      path: '/cscenter/all/contact/view/6',
    },
    {
      id: 6,
      text: '충전환전 문의',
      isRead: false,
      time: '2021.06.28 15:36',
      category: '충전환전',
      path: '/cscenter/all/contact/view/7',
    },
    {
      id: 7,
      text: '베팅관련 문의',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '베팅관련',
      path: '/cscenter/all/contact/view/8',
    },
    {
      id: 8,
      text: '문의드립니다',
      isRead: true,
      time: '2021.06.28 15:36',
      category: '기타',
      path: '/cscenter/all/contact/view/9',
    },
    {
      id: 9,
      text: '문의드립니다',
      isRead: false,
      time: '2021.06.28 15:36',
      category: '기타',
      isLast: true,
      path: '/cscenter/all/contact/view/10',
    },
  ];
  const location = useLocation();
  const [, setSelectedTab] = useState(0);
  const [page, setPage] = useState(0);
  const [, setSelectedSubTab] = useState(location.pathname);
  const [checkedState, setCheckedState] = useState(
    new Array(inboxArray.length).fill(false)
  );
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.onpopstate = (e) => {
      setTimeout(() => {
        setSubActiveButton('/cscenter/all/contact/all');
      }, 0);
    };
    return () => {
      setSubActiveButton('/cscenter/all/contact/all');
    };
  }, [setSubActiveButton, navigate]);

  return (
    <div className="contact-container">
      <div
        className="w-full flex relative top-0"
        style={{ position: 'relative' }}
      >
        <div
          id="scroll-wrapper12"
          style={{
            paddingLeft: '1.875rem',
            overflowX: 'scroll',
            display: 'flex',
            height: '7rem',
          }}
          className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
        >
          <HorizontalSubMenu
            key={40}
            itemsArray={tabsArray}
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
          />
        </div>
        <div
          style={{ height: '88%' }}
          className="nav-shadow absolute h-full left-0 z-50"
        ></div>
      </div>

      <div
        style={{
          borderRadius: '1em',
          margin: '1.875rem',
          marginTop: '1.875rem',
          background:
            'linear-gradient(to top, rgb(236, 235, 235), rgb(219, 176, 232) 50%, rgb(203, 120, 230))',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0.375rem 0.375rem 0px',
          padding: '0.1875rem',
        }}
        className="shadow-subNavbar overflow-hidden"
      >
        <div className="flex flex-col w-full">
          <ContactTable
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            array={inboxArray}
          />
        </div>
      </div>

      <div className="two-buttons">
        <button
          className="hover shadow-box-myPage shadow-text-myPage"
          style={{
            background:
              'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))',
          }}
        >
          <div
            className="div-border"
            style={{
              background:
                'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))',
            }}
          >
            <div className="text">
              <span className=" tracking-tight text-white">계좌문의</span>
            </div>
          </div>
        </button>
        <button
          className="hover shadow-box-myPage shadow-text-myPage"
          style={{
            background:
              'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
          }}
          onClick={() => navigate('/cscenter/all/contact/compose')}
        >
          <div
            className="div-border"
            style={{
              background:
                'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
              color: '#ffdfbd',
            }}
          >
            <div className="text">
              <span className=" tracking-tight text-white">문의작성</span>
            </div>
          </div>
        </button>
      </div>

      <div style={{ marginBottom: '3.75rem' }}>
        <Pagination page={page} setPage={setPage} withMarginBottom={false} />
      </div>

      <Search />
    </div>
  );
};

export default Contact;

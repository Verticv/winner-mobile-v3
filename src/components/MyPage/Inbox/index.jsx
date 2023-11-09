import React, { useState, useEffect } from 'react';

import Header from '../../Header';
import NoticeBanner from '../../MainPage/NoticeBanner';
import HomePageTopBanner from '../HomePageTopBanner';
import Pagination from '../../MyPage/Pagination';
import Search from '../../Search';

import InboxTable from '../InboxTable';

import './_inbox.scss';

const inboxArray = [
  {
    id: 0,
    text: '서버 점검 안내',
    isRead: false,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    isClicked: true,
    path: '/mypage/inbox/1',
    isFirst: true,
  },
  {
    id: 1,
    text: '서버 점검 안내',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    path: '/mypage/inbox/2',
  },
  {
    id: 2,
    text: '바이너리 서비스 종료 안내',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    path: '/mypage/inbox/3',
  },
  {
    id: 3,
    text: '미니게임 파워볼 동행복권 시스템 정기 점검',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/4',
  },
  {
    id: 4,
    text: '스포츠 & 미니게임 충전 보너스 (21.04.24 변경)',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    path: '/mypage/inbox/5',
  },
  {
    id: 5,
    text: '일시 : 2021.4.27 화요일 14:00 부터 서버안정화를 위한 정기점검이 진행됩니다.',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    path: '/mypage/inbox/6',
  },
  {
    id: 6,
    text: '입금계좌변경안내',
    isRead: false,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/7',
  },
  {
    id: 7,
    text: '입금계좌변경안내',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/8',
  },
  {
    id: 8,
    text: '입금계좌변경안내',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/9',
  },
  {
    id: 9,
    text: '입금계좌변경안내',
    isRead: false,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/10',
  },
  {
    id: 10,
    text: '입금계좌변경안내',
    isRead: true,
    time: '2021.06.28 15:36',
    type: '일반',
    category: '공지',
    path: '/mypage/inbox/11',
    isLast: true,
  },
];

const Inbox = ({ activeButton, setActiveButton }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveButton('/mypage/inbox');
  }, [setActiveButton]);

  const [page, setPage] = useState(0);
  const [checkedState, setCheckedState] = useState(
    new Array(inboxArray.length).fill(false)
  );

  const [isAllSelected, setAllSelected] = useState(false);

  const AllSelectButtonPressed = () => {
    if (isAllSelected === false) {
      setAllSelected(true);
      setCheckedState(Array(inboxArray.length).fill(true));
    } else {
      setAllSelected(false);
      setCheckedState(Array(inboxArray.length).fill(false));
    }
  };

  const CouponTitle = ({
    text = '사용 가능한 쿠폰',
    number = '10',
    numberColor = '#ff6ea3',
    endText = '장',
  }) => {
    return (
      <div className="flex items-center space-x-20px coupon-title">
        <div
          style={{ fontSize: '2.625rem', letterSpacing: '-0.07rem' }}
          className=" racking-tight text-gray-r8c8c8c"
        >
          <span style={{ color: '#ffffff' }}>{text} </span>
          <span
            style={{ color: numberColor, fontWeight: 'bold' }}
            className="font-robotoBold"
          >
            {number}
          </span>
          <span style={{ color: '#ffffff' }}>{endText}&nbsp;</span>
        </div>
      </div>
    );
  };

  return (
    <div className="inbox">
      <Header />
      <NoticeBanner />
      <HomePageTopBanner pageTitle="쪽지관리" />
      <div
        style={{
          margin: '1.875rem',
          marginBottom: '1.4rem',
          marginTop: '0rem',
          background: '',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#c8c8c8',
        }}
        className="mt-4 flex justify-between"
      >
        <CouponTitle text="전체 받은 쪽지" number="7" endText="건" />
        <div
          className="flex"
          style={{ display: 'flex', marginRight: '-0.6rem' }}
        >
          <CouponTitle
            text="쪽지보관은 최장"
            number="14"
            endText="일"
            numberColor="#ffd98b"
          />
          <CouponTitle
            text="최대"
            number="20"
            endText="개"
            numberColor="#ffd98b"
          />
        </div>
      </div>
      <div
        style={{
          borderRadius: '1.1rem',
          margin: '1.875rem',
          marginTop: '0',
          background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )',
          padding: '0.1rem',
          boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 0.75rem 0px'
        }}
        className="shadow-subNavbar overflow-hidden"
      >
        <div className="flex flex-col w-full">
          <InboxTable
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            array={inboxArray}
          />
        </div>
      </div>

      <div
        style={{ margin: '3.7rem 1.9rem 2.5rem' }}
        className="flex items-center justify-between flex-shrink-0"
      >
        <div className="flex w-full" style={{ display: 'flex' }}>
          <button
            style={{
              height: '7.3125rem',
              padding: ' 0.1875rem',
              fontSize: '2.8125rem',
              marginRight: ' 0.75rem',
              width: '24.9rem',
              background: '#936cee',
              borderRadius: '1rem',
            }}
            className="hover shadow-box-myPage"
            onClick={() => AllSelectButtonPressed()}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#936cee',
                borderRadius: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
            >
              <span
                style={{
                  fontSize: '2.8125rem',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.07rem',
                  color: '#ffffff',
                }}
                className="shadow-text-myPage  tracking-tight text-14px text-white mb-2"
              >
                {isAllSelected ? '선택해제' : '전체선택'}
              </span>
            </div>
          </button>
          <button
            style={{
              height: '7.3125rem',
              padding: ' 0.1875rem',
              fontSize: '2.8125rem',
              marginRight: ' 0.75rem',
              width: '24.9rem',
              background: '#936cee',
              borderRadius: '1rem',
            }}
            className="hover shadow-box-myPage"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background:'#936cee',
                borderRadius: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
            >
              <span
                style={{
                  fontSize: '2.8125rem',
                  color: '#ffffff',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.07rem',
                }}
                className="shadow-text-myPage  tracking-tight text-14px text-white pb-2"
              >
                선택삭제
              </span>
            </div>
          </button>
          <button
            style={{
              height: '7.3125rem',
              padding: ' 0.1875rem',
              fontSize: '2.8125rem',
              // marginRight: ' 0.75rem',
              width: '24.9rem',
              background:
                'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
              borderRadius: '1rem',
            }}
            className="hover shadow-box-myPage"
            // onClick={() => allSelectButtonPressed()}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))',
                borderRadius: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
            >
              <span
                style={{
                  fontSize: '2.8125rem',
                  color: '#ffffff',
                  marginTop: '0.2rem',
                  letterSpacing: '-0.07rem',
                }}
                className="shadow-text-myPage  tracking-tight text-14px text-white pb-2"
              >
                전체읽음처리
              </span>
            </div>
          </button>
        </div>
      </div>

      <div
        style={{ marginBottom: '3.75rem', marginTop: '4rem' }}
        className="flex w-full justify-center mt-4px"
      >
        <Pagination page={page} setPage={setPage} withMarginBottom={false} />
      </div>

      <Search />
    </div>
  );
};

export default Inbox;

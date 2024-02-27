import Pagination from '../Pagination';
import React, { useState, useEffect } from 'react';
import DateSearchBar1 from '../DateSearchBar1';
import HistoryTable from '../HistoryTable';
// import { useNavigate } from 'react-router-dom';

const tableData = [
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#888888',
      buttonText: '취소',
      textColor: '#ededeb',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
  [
    {
      0: { 신청포인트: '100,000,000' },
    },
    {
      0: { 사용구분: '보유머니전환' },
    },
    {
      0: { 신청일시: '2021-06-30 14:45' },
    },
    {
      0: { 처리일시: '2021-06-30 14:45' },
    },
    {
      buttonColor: '#5d659f',
      buttonText: '완료',
    },
  ],
];

const PointsTransactionHistory = ({
  SubMenuList,
  subActiveButton,
  setSubActiveButton,
}) => {
  const [page, setPage] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //!- this occurs error (empty page)
  // useEffect(() => {
  //   window.onpopstate = (e) => {
  //     setTimeout(() => {
  //       navigate('/mypage/points');
  //       setSubActiveButton('/mypage/points/all/points-transaction-history');
  //     }, 0);
  //   };
  //   return () => {
  //     setSubActiveButton('/mypage/points/all/points-transaction-history');
  //   };
  // }, [setSubActiveButton, subActiveButton, navigate]);

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + '...' : str;
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{
                    // fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // marginTop: '1.938rem', letterSpacing: '-0.07rem', marginBottom: '1.4rem', marginLeft: "1.688rem"
                    fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    letterSpacing: '-0.07rem', marginLeft: "1.688rem", marginTop: '2.9rem', marginBottom: '0.9rem'
                }}>
                    <span style={{
                        color: '#ffd98b', textOverflow: 'ellipsis', maxWidth: '34.4rem', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: '700', lineHeight: '4rem'
                    }}>{truncate('louie3', 22, 22)}</span>
                    <span style={{ color: '#eeeeee', lineHeight: '4rem' }}>
          님의 포인트전환 정보입니다.
        </span>
      </div>

      {SubMenuList}

      <div className="date-div" style={{ marginTop: '-0.601rem' }}>
        <DateSearchBar1
          isLeagueSearch={false}
          withBlackButton
          isPoints="true"
        />
      </div>
      <div className="h-full w-full">
        <HistoryTable
          containerBackground="#f7f9fc"
          tableData={tableData}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          isPopupOpen={isPopupOpen}
          setPopupOpen={setPopupOpen}
          cardHeight="21rem"
          isButtonGradient={false}
          hasLeftInput={false}
          width45
        />
      </div>

      <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default PointsTransactionHistory;

import React from 'react';

import Header from '../Header';
import HomePageTopBanner from '../MyPage/HomePageTopBanner';
import NoticeBanner from '../../components/MainPage/NoticeBanner';

import AttendanceCalendar from '../AttendanceCalendar';
import NavBottom from '../FixedMenu';

import './_attendPage.scss';

const AttendPage = ({ isAuthenticated, setAuthenticated }) => {
  return (
    <div style={{ maxWidth: '1242px' }} className="container">
      <Header />
      <NoticeBanner />
      <HomePageTopBanner pageTitle="출석부" toPath="/main" />

      <div style={{ padding: '0 1.875rem' }} className="contents">
        <div className="content_1">
          <AttendanceCalendar />
        </div>
      </div>
      <NavBottom />
    </div>
  );
};

export default AttendPage;

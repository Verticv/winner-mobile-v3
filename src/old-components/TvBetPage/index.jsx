import React, { useState } from 'react'
import { Route, Routes } from 'react-router';
import Header from '../Header';
import HomePageTopBanner from "../HomePageTopBanner";
import HorizontalMenu9 from '../HorizontalMenu9';
import NavBottom from '../NavBottom';
import TvBetStructure from '../TvBetStructure';
import TvBetInfo from '../TvBetInfo';

const TvBetPage = ({ isAuthenticated, setAuthenticated }) => {

  const MenuArray = [
    { text: "화면구성설명", id: 0, path: "/tvbet/structure" },
    { text: "베팅방법", id: 1, path: "/tvbet/info" },
  ];

  const [, setSelectedTab] = useState(0)

  return (
    <div className="relative flex flex-col justify-center overflow-hidden" style={{ paddingBottom: '17rem' }}>

      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Header isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        <HomePageTopBanner pageTitle='티비벳' toPath='/main' />
      </div>


      <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">
        <div style={{ marginTop: '0.1rem' }}>
          <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} isFlex />
        </div>

        <div className='shadow-to-box' style={{ margin: '1rem 1.9rem', padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', borderRadius: '1rem' }}>
          <div className="flex mt-20px mb-60px w-default"
            style={{ borderRadius: ' 1rem', padding: '2rem 1.7rem 1.5rem', background: '#323232' }}
          >
            <Routes>
              <Route path="/structure"
                element={
                  <TvBetStructure />
                }
              >
              </Route>
              <Route path="/info"
                element={<TvBetInfo />}
              >
              </Route>
            </Routes>

          </div>
        </div>
        <div>
          <NavBottom />
        </div>

      </div>
    </div>
  )
}

export default TvBetPage

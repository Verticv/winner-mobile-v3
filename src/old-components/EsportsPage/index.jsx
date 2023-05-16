import React, { useState } from 'react'
import { Route, Routes } from 'react-router';
import Header from '../Header';
import HomePageTopBanner from "../HomePageTopBanner";
import HorizontalMenu9 from '../HorizontalMenu9';
import EsportsStructure from '../EsportsStructure';
import EsportsSingle from '../EsportsSingle';
import NavBottom from '../NavBottom';
import EsportsMulti from '../EsportsMulti';

const EsportsPage = ({ isAuthenticated, setAuthenticated }) => {

    const MenuArray = [
        { text: "화면구성설명", id: 0, path: "/esports/structure" },
        { text: "단폴더 베팅방법", id: 1, path: "/esports/single" },
        { text: "다폴더 베팅방법", id: 2, path: "/esports/multi" },
    ];

    const [, setSelectedTab] = useState(0)

    return (
        <div className="relative flex flex-col justify-center overflow-hidden" style={{ paddingBottom: '17rem' }}>

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <Header isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='e-스포츠' toPath='/main' />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">
                <div style={{ marginTop: '0.1rem' }}>
                    <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />
                </div>

                <div className="w-default">
                    <Routes>
                        <Route path="/structure" element={<></>}></Route>
                    </Routes>
                </div>
                <div className='shadow-to-box' style={{ margin: '1rem 1.9rem', padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', borderRadius: '1rem' }}>
                    <div style={{ borderRadius: ' 1rem', padding: '2rem 1.7rem 1.5rem', background: '#323232' }}>
                        <Routes>
                            <Route path="/structure" element={<EsportsStructure />} />
                            <Route path="/single" element={<EsportsSingle />} />
                            <Route path="/multi" element={<EsportsMulti />} />
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

export default EsportsPage

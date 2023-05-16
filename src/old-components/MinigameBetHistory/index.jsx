import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
// import ScrollButton from '../ScrollButton'
import SelectAllButton from '../SelectAllButton'
import Icon1 from '../../assets/myPage/second-btns/1.png'
import Icon3 from '../../assets/minigameResults/1.png'
import Icon4 from '../../assets/minigameResults/2.png'
import Icon5 from '../../assets/minigameResults/3.png'
import Icon6 from '../../assets/minigameResults/4.png'
import HorizontalSubMenu from '../HorizontalSubMenuDefault';
// import SubHorizontalMenu5 from './SubHorizontalMenu5'
// import HorizontalMenu from '../HorizontalMenu'
import PowerLadderBetHistoryPanel from '../PowerLadderBetHistoryPanel'
import KinoLadderBetHistoryPanel from '../KinoLadderBetHistoryPanel'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Pagination from '../Pagination'

const subTabsArray = [
    { text: "전체", path: "/mypage/bet-history/all/minigame", icon: Icon1, id: 0, width: '16.375rem', marginIcon: '', },
    { text: "파워볼", path: "/mypage/bet-history/all/minigame/powerball", icon: Icon3, id: 1, width: '7.2rem' },
    { text: "파워사다리", path: "/mypage/bet-history/all/minigame/powerladder", icon: Icon4, id: 2, width: '7.2rem' },
    { text: "스피드키노", path: "/mypage/bet-history/all/minigame/speedkino", icon: Icon5, id: 3, custom: "mt-8px", width: '7.2rem' },
    { text: "키노사다리", path: "/mypage/bet-history/all/minigame/kinoladder", icon: Icon6, id: 4, width: '7.2rem' },
];

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const tableData = [
    [
        {
            0: { 베팅번호: 7193915 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:46:13" }
        },
        {
            0: { 게임종류: "파워볼" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { 배당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 7193914 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "홀/짝" }
        },
        {
            0: { 베팅내역: "짝" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "홀/짝" }
        },
        {
            0: { 베팅내역: "홀" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const tableData1 = [
    [
        {
            0: { 베팅번호: 7193915 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:46:13" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { 배당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 7193914 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const MinigameBetHistory = ({ isState = 0, setState, showSub = true, isPopup = false, subActiveButton, setSubActiveButton }) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [page, setPage] = useState(0)
    const [selectedTab, setSelectedTab] = useState()
    const [selectedSubTab, setSelectedSubTab] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/bet-history')
                setSubActiveButton('/mypage/bet-history/all/minigame')
            }, 0)
        }
        return (() => {
            if (subActiveButton)
                setSubActiveButton('/mypage/bet-history/all/minigame')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <div className="LiveCasinoBetHistory">
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', position: 'relative', top: '0' }}>
                        <div id='scroll-wrapper1' style={{ padding: '1.875rem', paddingTop: '0', overflowX: 'scroll', flexDirection: 'row' }}>
                            <HorizontalSubMenu key={6} itemsArray={subTabsArray} setSelectedTab={setSelectedTab} selectedTab={selectedTab} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab} popup />
                        </div>
                        <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                    </div>
                    <DateSearchBar isLeagueSearch={false} isPoints />
                </>

            )}

            <Routes>
                <Route index element={
                    <div style={{ margin: '-0.2rem 0 0' }}>
                        <HistoryTable
                            containerBackground='#f7f9fc'
                            tableData={tableData}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            isPopupOpen={isPopupOpen}
                            setPopupOpen={setPopupOpen}
                            cardHeight='42.15rem'
                            isPopup={isPopup}
                        />
                    </div>
                } />
                <Route path='/powerball'
                    element={
                        <div style={{ margin: '-0.2rem 0 0' }}>
                            <HistoryTable
                                containerBackground='#f7f9fc'
                                tableData={tableData1}
                                checkedState={checkedState}
                                setCheckedState={setCheckedState}
                                isPopupOpen={isPopupOpen}
                                setPopupOpen={setPopupOpen}
                                cardHeight='37.75rem'
                                isPopup={isPopup}
                            />
                        </div>
                    }
                />
                <Route path="/powerladder"
                    element={
                        <PowerLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} />
                    }
                >
                </Route>

                <Route path="/speedkino"
                    element={
                        <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="speedkino" />
                    }
                >
                </Route>
                <Route path="/kinoladder"
                    element={
                        <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="kinoladder" />
                    }
                >
                </Route>

            </Routes>
            <div style={{ margin: '0 1.9rem', marginBottom: '3rem' }}>
                <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>
            <Pagination page={page} setPage={setPage} />


        </div>
    )
}

export default MinigameBetHistory

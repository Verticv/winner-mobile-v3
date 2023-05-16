import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import SelectAllButton from '../SelectAllButton'
import Icon1 from '../../assets/myPage/second-btns/1.png'
import Icon2 from '../../assets/myPage/second-btns/icon5.png'
import Icon3 from '../../assets/myPage/second-btns/icon7.png'
import Icon4 from '../../assets/myPage/second-btns/icon6.png'
import activeBG from '../../assets/myPage/second-btns/active-bg.png'
import HorizontalSubMenu from '../HorizontalSubMenuDefault'
import { useNavigate } from 'react-router-dom'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0, activeBG: activeBG, marginIcon: '', width: '16.375rem', path: '#' },
    { text: "두윈카지노", icon: Icon3, id: 2, activeBG: activeBG, marginIcon: '', width: '16.375rem', path: '#' },
    { text: "보타카지노", icon: Icon2, id: 1, activeBG: activeBG, width: '16.375rem', path: '#' },
    { text: "준비중", icon: Icon4, id: 3, activeBG: activeBG, width: '16.375rem', path: '#' },
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
            0: { 베팅번호: 1891241599 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "에볼루션" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "+12,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 1891241599 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45" }
        },
        {
            0: { 게임종류: "아시아게이밍" }
        },
        {
            0: { 게임구분: "바카라" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const LiveCasinoBetHistory = ({ isState = 0, setState, showSub = true, isPopup = false, subActiveButton, setSubActiveButton }) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    // const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/bet-history')
                setSubActiveButton('/mypage/bet-history/all/hotel-casino')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/bet-history/all/hotel-casino')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <div className="LiveCasinoBetHistory">
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0" style={{ width: '100%', display: 'flex', position: 'relative', top: '0' }}>
                        <div id='scroll-wrapper1' style={{ padding: '1.875rem', paddingRight: '0', paddingTop: '0', overflowX: 'scroll' }} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <HorizontalSubMenu key={6} itemsArray={subTabsArray} setSelectedTab={setSelectedTab} selectedTab={selectedTab} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab} popup />
                            </div>
                        </div>
                        <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                    </div>
                </>

            )}
            {/* <img src={img22} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
            <DateSearchBar isLeagueSearch={false} isPoints />

            {/* <ScrollButton /> */}

            <div className="h-full" style={{ marginTop: '-0.2rem', marginBottom: '-0.4rem' }}>
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='33.75rem'
                    isPopup={isPopup}
                />
            </div>

            <div style={{ margin: '0 1.9rem', marginBottom: '3rem' }}>
                <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>
        </div>
    )
}

export default LiveCasinoBetHistory

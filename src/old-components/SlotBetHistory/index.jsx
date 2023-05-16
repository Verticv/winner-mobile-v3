import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
// import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from '../SelectAllButton'
import Icon0 from '../../assets/slotGame/1.png'
import Icon1 from '../../assets/slotGame/2.png'
import Icon2 from '../../assets/slotGame/3.png'
import Icon3 from '../../assets/slotGame/4.png'
import Icon4 from '../../assets/slotGame/5.png'
import Icon5 from '../../assets/slotGame/6.png'
import Icon6 from '../../assets/slotGame/7.png'
import Icon7 from '../../assets/slotGame/8.png'
import Icon8 from '../../assets/slotGame/9.png'
import Icon9 from '../../assets/slotGame/10.png'
import Icon10 from '../../assets/slotGame/11.png'
import Icon11 from '../../assets/slotGame/12.png'
import Icon12 from '../../assets/slotGame/13.png'
import Icon13 from '../../assets/slotGame/14.png'
import Icon14 from '../../assets/slotGame/15.png'
import Icon15 from '../../assets/slotGame/16.png'
import Icon17 from '../../assets/slotGame/17.png'
import Icon18 from '../../assets/slotGame/18.png'
import Icon19 from '../../assets/slotGame/19.png'
import Icon20 from '../../assets/slotGame/20.png'
import Icon21 from '../../assets/slotGame/21.png'
import Icon22 from '../../assets/slotGame/22.png'
import Icon23 from '../../assets/slotGame/23.png'
import HorizontalSubMenu from '../HorizontalSubMenuDefault'
import { useNavigate } from 'react-router-dom'
// import Icon16 from '../../assets/slotGame/17.png'

// import SubHorizontalMenu3 from '../SubHorizontalMenu3'

const subTabsArray = [

    { text: "전체", icon: Icon0, id: 0, marginIcon: '', width: '16.375rem', path: '#' },
    { text: "마이크로게이밍", icon: Icon1, id: 1, width: '16.375rem', path: '#' },
    { text: "YGG드라실", icon: Icon2, id: 2, width: '16.375rem', path: '#' },
    { text: "드라군소프트", icon: Icon3, id: 3, width: '16.375rem', path: '#' },
    { text: "분고", icon: Icon4, id: 4, custom: "mt-8px", width: '16.375rem', path: '#' },
    { text: "플레이슨", icon: Icon5, id: 5, width: '16.375rem', path: '#' },
    { text: "넷엔트", icon: Icon6, id: 6, width: '16.375rem', path: '#' },
    { text: "프레그메틱플레이", icon: Icon7, id: 7, width: '16.375rem', path: '#' },
    { text: "퀵스핀", icon: Icon8, id: 8, width: '16.375rem', path: '#' },
    { text: "스페이드", icon: Icon9, id: 9, width: '16.375rem', path: '#' },
    { text: "하바네로", icon: Icon10, id: 10, width: '16.375rem', path: '#' },
    { text: "월드매치", icon: Icon11, id: 11, width: '16.375rem', path: '#' },
    { text: "엘리시움", icon: Icon12, id: 12, width: '16.375rem', path: '#' },
    { text: "플레이앤고", icon: Icon13, id: 13, width: '16.375rem', path: '#' },
    { text: "YL게이밍", icon: Icon14, id: 14, width: '16.375rem', path: '#' },
    { text: "레드타이거", icon: Icon15, id: 15, width: '16.375rem', path: '#' },
    { text: "플레이텍", icon: Icon17, id: 16, width: '16.375rem', path: '#' },
    { text: "스카이윈드", icon: Icon18, id: 17, width: '16.375rem', path: '#' },
    { text: "씨큐나인", icon: Icon19, id: 18, width: '16.375rem', path: '#' },
    { text: "올웨이스핀", icon: Icon20, id: 19, width: '16.375rem', path: '#' },
    { text: "와즈단", icon: Icon21, id: 20, width: '16.375rem', path: '#' },
    { text: "PG소프트", icon: Icon22, id: 21, width: '16.375rem', path: '#' },
    { text: "로얄슬롯게이밍", icon: Icon23, id: 22, width: '16.375rem', path: '#' },

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
            0: { 게임종류: "레드타이거" }
        },
        {
            0: { 게임구분: "Dragon's Luck" }
        },
        {
            0: { 베팅금액: "12,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "Starz Megaways" }
        },
        {
            0: { 베팅금액: "900,000,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
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
            0: { 게임종류: "프레그메틱플레이" }
        },
        {
            0: { 게임구분: "블랙잭" }
        },
        {
            0: { 베팅금액: "800,000" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]


const SlotBetHistory = ({ isState = 0, setState, showSub = true, isPopup = false, subActiveButton, setSubActiveButton, key, path }) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/bet-history')
                setSubActiveButton(path)
            }, 0)
        }
        return (() => {
            if (subActiveButton)
            setSubActiveButton(path)
        })
    }, [setSubActiveButton, path, subActiveButton, navigate]);

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
                        <div style={{ height: '10.8rem', top: '1.6rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                    </div>
                </>

            )}

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

export default SlotBetHistory

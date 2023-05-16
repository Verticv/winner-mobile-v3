import React, { useState, useEffect } from 'react'
import UpIcon from '../../assets/betCombinationPanel/up-red.png'
import DownIcon from '../../assets/betCombinationPanel/down-blue.png'
import BonusCell from '../../assets/betCombinationPanel/event.png'
import Gift from '../../assets/betCombinationPanel/gift.png'
import NormalCell from '../../assets/betCombinationPanel/blue-card.png'
import FootballIcon from '../../assets/betCombinationPanel/soccer.png'
import GlobeIcon from '../../assets/betCombinationPanel/world.png'
import ArrowBlack from '../../assets/betCombinationPanel/down.png'
import DropDownControls from '../DropDownControls'
import T1 from '../../assets/betCombinationPanel/t1.png'
import T2 from '../../assets/betCombinationPanel/t2.png'
import T3 from '../../assets/betCombinationPanel/t3.png'
import T4 from '../../assets/betCombinationPanel/t4.png'
import T5 from '../../assets/betCombinationPanel/t5.png'
import T6 from '../../assets/betCombinationPanel/t6.png'
import T7 from '../../assets/betCombinationPanel/t7.png'
import T8 from '../../assets/betCombinationPanel/t8.png'
import T9 from '../../assets/betCombinationPanel/t9.png'
import T10 from '../../assets/betCombinationPanel/t10.png'
import T11 from '../../assets/betCombinationPanel/t11.png'
import T12 from '../../assets/betCombinationPanel/t12.png'
import T13 from '../../assets/betCombinationPanel/t13.png'
import T14 from '../../assets/betCombinationPanel/t14.png'
import T15 from '../../assets/betCombinationPanel/t15.png'
import T16 from '../../assets/betCombinationPanel/t16.png'
import ArrowUp from '../../assets/betCombinationPanel/arrow_up.png'
import ArrowDown from '../../assets/betCombinationPanel/arrow_dn.png'
import NorwayIcon from '../../assets/betCombinationPanel/norway.png'
import AustriaIcon from '../../assets/betCombinationPanel/austria.png'
import NetherlandIcon from '../../assets/betCombinationPanel/netherland.png'
import UKIcon from '../../assets/betCombinationPanel/uk.png'
import Plus from '../../assets/betCombinationPanel/plus.png'
import Minus from '../../assets/betCombinationPanel/minus.png'
import Clock from '../../assets/betCombinationPanel/clock-light-gray.png'
import Cup from '../../assets/betCombinationPanel/cup.png'
import Medal from '../../assets/betCombinationPanel/Medal.png'
import Jewel from '../../assets/betCombinationPanel/jewel.png'
import _uniqueId from 'lodash/uniqueId';
import './_betCombinationPanel.scss';

const BetCombinationPanel = ({
    addedCard,
    setAddedCard,
    checkedState,
    setCheckedState,
    filterArray
}) => {

    const subArray = [
        {
            id: 0,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 1,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 2,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 3,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]

    const subArray2 = [
        {
            id: 5,
            type: "핸디캡",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 6,
            type: "핸디캡",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 7,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 8,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]
    const subArray3 = [
        {
            id: 20,
            type: "핸디캡",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 21,
            type: "핸디캡",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 22,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 23,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]

    const subArray4 = [
        {
            id: 24,
            type: "핸디캡",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 25,
            type: "핸디캡",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 26,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 27,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]

    const subArray5 = [
        {
            id: 29,
            type: "핸디캡",
            team1: "PSV 에인트호번 (asd)",
            team2: "FC 에인트호번",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 30,
            type: "핸디캡",
            team1: "PSV 에인트호번 (asd)",
            team2: "FC 에인트호번",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 31,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 32,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]

    const subArray6 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드12",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드12",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]
    const subArray7 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "노팅엄 포리스트",
            team2: "사우스햄튼 FC",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "노팅엄 포리스트",
            team2: "사우스햄튼 FC",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]
    const subArray8 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "레딩",
            team2: "울버햄프턴 원더랜드",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "레딩",
            team2: "울버햄프턴 원더랜드",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData: { text: '승무패 (연장미포함)', img: Cup }
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData: { text: '언오버 (연장미포함)', img: Jewel }
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData: { text: '핸디캡 (연장미포함)', img: Medal }
        },
    ]
    const FirstArray = [
        {
            id: 9,
            type: "승무패",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            logo1: T2,
            logo2: T3,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "red",
            stat2Color: "blue",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray
        },
        {
            id: 10,
            type: "승무패",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            logo1: T1,
            logo2: T4,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "red",
            stat2Color: "blue",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray2,
            isLast: true
        },
    ]

    const SecondArray = [
        {
            id: 11,
            type: "승무패",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            logo1: T5,
            logo2: T6,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "left",
            subArray: subArray3,
            isLast: true
        },
    ]

    const ThirdArray = [
        {
            id: 12,
            type: "승무패",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            logo1: T7,
            logo2: T8,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray4
        },
        {
            id: 13,
            type: "승무패",
            team1: "PSV 에인트호번 (Am)",
            team2: "FC 에인트호번",
            logo1: T9,
            logo2: T10,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray5,
            isLast: true
        },
    ]

    const FourthArray = [
        {
            id: 14,
            type: "승무패",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드 FC",
            logo1: T11,
            logo2: T12,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray6
        },
        {
            id: 15,
            type: "승무패",
            team1: "노팅엄 포리스트 FC",
            team2: "사우스햄튼 FC",
            logo1: T13,
            logo2: T14,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray7
        },
        {
            id: 16,
            type: "승무패",
            team1: "레딩",
            team2: "울버햄프턴 원더러스 FC",
            logo1: T15,
            logo2: T16,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray8,
            isLast: true,
        },

    ]

    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("국가선택")
    const [isHover1, setHover1] = useState(null)
    const [isOpen, setOpen] = useState(new Array(20).fill(false))
    const [isButtonOn, setButtonOn] = useState([])
    const [isButtonClicked, setButtonClicked] = useState("");
    console.log('isButtonClicked', isButtonClicked);
    const [openPopup, setOpenPopup] = useState(false);
    console.log(`isHover1`, isHover1)

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };
    const handleOnClick = (position) => {
        const updatedButtonClicked = isButtonOn
        const index = isButtonOn.indexOf(position);
        index > -1 ? updatedButtonClicked.splice(index, 1) : updatedButtonClicked.push(position)
        setButtonOn(updatedButtonClicked);
    }

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    useEffect(() => {
        if (!selectedCarrier) {
            setSelectedCarrier('value')
        }
    }, [selectedCarrier])

    const gameResultButton = (
        <div
            style={{
                width: "35.6rem",
                height: "7.1rem",
                border: '0.1875rem solid #404040',
                fontSize: '2.625rem',
                background: '#1a1a1a'
            }}
            className="gameresultbtn-style group"
            onClick={() => setOpenPopup((prev) => !prev)}
        >
            <div className="gameresultbtn-style1">
                <img style={{ width: '3.75rem', marginLeft: '2.0625rem', marginRight: '0.8rem' }} className="gameresultbtn-style2" src={GlobeIcon} alt="" />
                <p style={{ color: "#ccc2b6" }} className="gameresultbtn-style3">{selectedCarrier}</p>
            </div>
            <img style={{ width: '1.5625rem', marginRight: '2rem' }} src={ArrowBlack} alt="" />
        </div >
    )

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function SearchDropdownCell({ items }) {
        return items.map(item => {
            let isChecked = checkedState[item.id]
            return (
                <div onPointerUp={() => handleOnChange(item.id)} style={{ height: '8rem', paddingLeft: '3rem', paddingRight: '3rem', fontSize: '2.8125rem', fontWeight: '400', fontFamily: 'SpoqaHanSansNeoMedium', margin: '0' }} className="searchcell-style">
                    <p>{item.text}</p>
                    <input
                        className='input-style w-12 h-12'
                        type="checkbox"
                        checked={isChecked}
                        name={item.text}
                    />
                </div>

            )
        });
    }

    const searchDropdown = (
        <div className="searchdropdown-style shadow-to-box shadow-plain5" style={{ height: "calc(var(--vh) * 100 - 40rem)", padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #303030 50%, #4a4a4a)', borderRadius: '1.5rem' }}>
            <div style={{ height: "", width: '100%' }} className='searchdropdown-style1'>
                <SearchDropdownCell items={filterArray} />
            </div>
            <div style={{ padding: '1.875rem' }} className="searchdropdown-style2">
                <div className='divsearchdropdown-style3 shadow-to-box hover'>
                    <button
                        style={{
                            backgroundColor: "#171a1d",
                            padding: '1px',
                        }}
                        className="searchdropdown-style3"
                        onClick={() => setDropdownOpen(false)}
                    >
                        <div className="searchdropdown-style4">
                            <span style={{ fontSize: '2.8125rem' }} className="searchdropdown-style5 shadow-to-text" >
                                확인
                            </span>
                        </div>
                    </button>
                </div>
                <div className='divsearchdropdown-style6 shadow-to-box hover'>
                    <button
                        style={{
                            backgroundColor: "#cb4343",
                            // height: "7.3125rem",
                            padding: '1px',
                        }}
                        className="searchdropdown-style6"
                        onClick={() => setCheckedState(filterArray.fill(false))}
                    >
                        <div
                            style={{
                                // borderColor: "#f36576"
                            }}
                            className="searchdropdown-style7"
                        >
                            <span style={{ fontSize: '2.8125rem' }} className="searchdropdown-style8 shadow-to-text" >
                                초기화
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )

    const InboxSearch = (

        // <DropDownInput isBetCombination={true} />
        <DropDownControls
            buttonChild={gameResultButton}
            isDropdownOpen={isDropdownOpen}
            setDropdownOpen={setDropdownOpen}
            open={openPopup}
            setOpen={setOpenPopup}
        >
            {searchDropdown}
        </DropDownControls>
    )

    const EventOptions = ({
        team1 = "CF파추카",
        team2 = "과달하라 차바스",
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47",
    }) => (
        <div className="event-container">
            <div
                className='shadow-to-box'
                style={{
                    width: "29.45rem",
                    height: "7.4375rem",
                    padding: '0.1875rem',
                    marginRight: '0.4rem',
                    background: 'linear-gradient(to top, #7a652c, #debb78)',
                    borderRadius: '0.5rem'
                }}
            >
                <button
                    style={{
                        width: "100%",
                        height: "100%",
                        fontSize: '2.625rem',
                        background: "linear-gradient(to top, #9c6c38, #c79e45)",
                    }}
                    className="event-content"
                    onMouseEnter={() => setHover1(0)}
                    onMouseLeave={() => setHover1(null)}
                >
                    <div
                        style={{
                            color: "#ffffff",
                            textShadow: "rgb(0 0 0 / 31%) 0.225rem 0.225rem 0",
                            padding: '0 1rem'
                        }}
                        className="event-content1 bg-gradient-to-b"
                    >
                        <span style={{ width: '20.8rem' }} className="event-content2">{team1}</span>
                        <span className="event-content3">{stat1}</span>
                    </div>
                </button>
            </div>

            <div
                className='shadow-to-box'
                style={{
                    width: "10.1rem",
                    height: "7.4375rem",
                    padding: '0.1875rem',
                    marginRight: '0.4rem',
                    background: 'linear-gradient(to top, #7a652c, #debb78)',
                    borderRadius: '0.5rem'
                }}
            >
                <button
                    style={{
                        width: "100%",
                        height: "100%",
                        fontSize: '2.625rem',
                        background: "linear-gradient(to top, #9c6c38, #c79e45)"
                    }}
                    className="event-content4"
                >
                    <div
                        style={{
                            color: "#ffffff",
                            textShadow: "rgb(0 0 0 / 31%) 0.225rem 0.225rem 0",
                        }}
                        className="event-content5 bg-gradient-to-b"
                    >
                        <span className="event-content6">{stat2}</span>
                    </div>
                </button>
            </div>

            <div
                className='shadow-to-box'
                style={{
                    width: "29.4875rem",
                    height: "7.4375rem",
                    padding: '0.1875rem',
                    fontSize: '2.625rem',
                    background: 'linear-gradient(to top, #7a652c, #debb78)',
                    borderRadius: '0.5rem'
                }}
            >
                <button
                    style={{
                        width: "100%",
                        height: "100%",
                        fontSize: '2.625rem',
                        background: "linear-gradient(to top, #9c6c38, #c79e45)"
                    }}
                    className="event-content7"
                    onMouseEnter={() => setHover1(1)}
                    onMouseLeave={() => setHover1(null)}
                >
                    <div
                        style={{
                            color: "#ffffff",
                            textShadow: "rgb(0 0 0 / 31%) 0.225rem 0.225rem 0",
                            padding: '0 1rem'
                        }}
                        className="event-content8 bg-gradient-to-b"
                    >
                        <span className="event-content9">{stat3}</span>
                        <span className="event-content10">{team2}</span>
                    </div>
                </button>
            </div>
        </div>
    )

    const NormalOptions = ({
        id,
        bet = "none",
        team1 = "FK Haugesund",
        team2 = "스트룀스고세 IF",
        logo1 = null,
        logo2 = null,
        hasUp = false,
        hasDown = false,
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47",
        stat1Color = "none",
        stat2Color = "none",
        isSubButton,
        buttonWithExtraData,
        isSubArray = false,
        items_id = null,
        special = false
    }) => {
        const [isHover3, setHover3] = useState("")

        return (
            <div className="normaloption-container">
                <div
                    className='shadow-to-box'
                    style={{
                        width: "29.6875rem",
                        height: `${isSubButton ? "9.9375rem" : "7.4375rem"}`,
                        padding: '0.1875rem',
                        marginRight: '0.45rem',
                        borderRadius: '0.5rem',
                        background: (`${id}left` === isButtonClicked || `${id}left` === isHover3)
                            ? "linear-gradient(to bottom, #4f4a41, #2f2c28)"
                            : isSubButton ? 'linear-gradient(to top, #2a2a2a, #434343)' : "linear-gradient(to top, #3c3c3b, #6b6865)",
                    }}
                >
                    <button
                        style={{
                            width: "100%",
                            height: "100%",
                            fontSize: '2.625rem',
                        }}
                        className="normaloption-content"
                        onClick={() => {
                            handleOnClick(isSubArray ? `${items_id}-${id}left` : `${id}left`)
                            setButtonClicked(`${id}left`)
                            setAddedCard(prevArray =>
                                [...prevArray, { id: _uniqueId('prefix-'), value: "left", special: team1 }])
                        }}
                        onMouseEnter={() => setHover3(`${id}left`)}
                        onMouseLeave={() => setHover3(null)}
                    >
                        <div
                            style={{
                                padding: '0 0.7875rem',
                                background: (`${id}left` === isHover3 || isButtonOn.indexOf(isSubArray ? `${items_id}-${id}left` : `${id}left`) > -1)
                                    ? "linear-gradient(to top, #634d38, #987959)"
                                    : isSubButton ? 'linear-gradient(to top, #262626, #333333)' : "linear-gradient(to bottom, #545452, #373736)",
                                color: (`${id}left` === isHover3 || isButtonOn.indexOf(isSubArray ? `${items_id}-${id}left` : `${id}left`) > -1) ? "#ffdfbd" : "#c8c8c8",
                                textShadow: (`${id}left` === isHover3 || isButtonOn.indexOf(isSubArray ? `${items_id}-${id}left` : `${id}left`) > -1) ? "1px 1px 0px #00000070" : ""
                            }}
                            className="normaloption-content1"
                        >
                            <span style={{ width: '21rem', textAlign: 'start' }} className="normaloption-content2">{hasUp ? truncate(team1, 8, 8) : team1 === "FK Haugesund" ? truncate(team1, 12, 12) : truncate(team1, 11, 11)}</span>
                            <span style={{ color: stat1Color === "red" && isButtonOn.indexOf(isSubArray ? `${items_id}-${id}left` : `${id}left`) === -1 && `${id}left` !== isHover3 ? "#e65454" : "" }} className="normaloption-content3">
                                {hasUp === true && (
                                    <img className='normaloption-content4' style={{ width: '1.3125rem', height: '1.125rem' }} src={UpIcon} alt="" />
                                )}
                                <p>{stat1}</p>
                            </span>
                        </div>
                        {buttonWithExtraData?.text && (
                            <p style={{ fontSize: '1.875rem', marginLeft: '1.4875rem' }} className="normaloption-content5">
                                <img style={{ maxWidth: '2.5625rem', maxHeight: '2.5625rem', marginRight: '0.1875rem' }} className="" src={buttonWithExtraData?.img} alt="" />
                                <span style={{ color: isButtonOn.indexOf(isSubArray ? `${items_id}-${id}left` : `${id}left`) === -1 && `${id}left` !== isHover3 ? "#7b7b7b" : "#fadcdc" }} className='normaloption-content6'>{buttonWithExtraData?.text}</span>
                            </p>
                        )}
                    </button>
                </div>

                <div
                    className='shadow-to-box'
                    style={{
                        width: "10rem",
                        height: `${isSubButton ? "9.9375rem" : "7.4375rem"}`,
                        padding: '0.1875rem',
                        marginRight: '0.35rem',
                        borderRadius: '0.5rem',
                        background: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}middle` : `${id}middle`) > -1 || `${id}middle` === isHover3)
                            ? "linear-gradient(to bottom, #4f4a41, #2f2c28)"
                            : isSubButton ? 'linear-gradient(to top, #2a2a2a, #434343)' : "linear-gradient(to top, #3c3c3b, #6b6865)",
                    }}
                >

                    <button
                        style={{
                            width: "100%",
                            height: "100%",
                            fontSize: '2.625rem',
                            backgroundColor: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}middle` : `${id}middle`) > -1 || `${id}middle` === isHover3) ? "#cb4343" : "#b3b3b3"
                        }}
                        className="normaloption-content7"
                        onClick={() => {
                            setButtonClicked(`${id}middle`)
                            handleOnClick(isSubArray ? `${items_id}-${id}middle` : `${id}middle`)
                            setAddedCard(prevArray =>
                                [...prevArray, { id: _uniqueId('prefix-'), value: "middle" }])
                        }}
                        onMouseEnter={() => setHover3(`${id}middle`)}
                        onMouseLeave={() => setHover3(null)}

                    >
                        <div
                            style={{
                                padding: '0 0.6875rem',
                                background: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}middle` : `${id}middle`) > -1 || `${id}middle` === isHover3)
                                    ? "linear-gradient(to top, #634d38, #987959)"
                                    : isSubButton ? 'linear-gradient(to top, #262626, #333333)' : "linear-gradient(to bottom, #545452, #373736)",
                                color: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}middle` : `${id}middle`) > -1 || `${id}middle` === isHover3) ? "#ffdfbd" : "#c8c8c8",
                                textShadow: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}middle` : `${id}middle`) > -1 || `${id}middle` === isHover3) ? "1px 1px 0px #00000070" : ""
                            }}
                            className="normaloption-content8 bg-gradient-to-b px-10px pt-2px"
                        >
                            <span style={{ color: stat2Color === "blue" && `${id}middle` !== isButtonClicked && `${id}middle` !== isHover3 ? "#4c98ff" : "" }} className="normaloption-content9">{stat2}</span>
                        </div>
                    </button>
                </div>

                <div
                    className='shadow-to-box'
                    style={{
                        width: "29.6875rem",
                        height: `${isSubButton ? "9.9375rem" : "7.4375rem"}`,
                        padding: '0.1875rem',
                        marginRight: '0.45rem',
                        borderRadius: '0.5rem',
                        background: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}right` : `${id}right`) > -1 || `${id}right` === isHover3)
                            ? "linear-gradient(to bottom, #4f4a41, #2f2c28)"
                            : isSubButton ? 'linear-gradient(to top, #2a2a2a, #434343)' : "linear-gradient(to top, #3c3c3b, #6b6865)",
                    }}
                >
                    <button
                        style={{
                            width: "100%",
                            height: "100%",
                            fontSize: '2.625rem',
                            backgroundColor: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}right` : `${id}right`) > -1 || `${id}right` === isHover3) ? "#cb4343" : "#b3b3b3"
                        }}
                        className="normaloption-content10"
                        onClick={() => {
                            setButtonClicked(`${id}right`)
                            handleOnClick(isSubArray ? `${items_id}-${id}right` : `${id}right`)
                            setAddedCard(prevArray =>
                                [...prevArray, { id: _uniqueId('prefix-'), value: "right" }])
                        }}
                        onMouseEnter={() => setHover3(`${id}right`)}
                        onMouseLeave={() => setHover3(null)}
                    >
                        <div
                            style={{
                                padding: '0 0.7875rem',
                                background: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}right` : `${id}right`) > -1 || `${id}right` === isHover3)
                                    ? "linear-gradient(to top, #634d38, #987959)"
                                    : isSubButton ? 'linear-gradient(to top, #262626, #333333)' : "linear-gradient(to bottom, #545452, #373736)",
                                color: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}right` : `${id}right`) > -1 || `${id}right` === isHover3) ? "#ffdfbd" : "#c8c8c8",
                                textShadow: (isButtonOn.indexOf(isSubArray ? `${items_id}-${id}right` : `${id}right`) > -1 || `${id}right` === isHover3) ? "1px 1px 0px #00000070" : ""
                            }}
                            className="normaloption-content11 bg-gradient-to-b"
                        >
                            <span className="normaloption-content12">
                                <p>{stat3}</p>
                                {hasDown === true && (
                                    <img className='normaloption-content13' style={{ width: '1.3125rem', height: '1.125rem' }} src={DownIcon} alt="" />
                                )}
                            </span>
                            <span style={{ width: '21rem', textAlign: 'end' }} className="normaloption-content14">{team2 === "FC Blau Weiss Linz" ? truncate(team2, 13, 13) : team2 === "스트룀스고세 IF" ? truncate(team2, 9, 9) : truncate(team2, 8, 8)}</span>
                        </div>
                    </button>
                </div>
            </div>
        )
    }

    function LeagueCell({
        array = [],
        isSubArray = false,
        isLastSubarray = false,
        isSubButton
    }) {
        const [isHover2, setHover2] = useState(null)
        console.log(`isHover2`, isHover2)
        const handleOnChange = (position) => {
            const updatedCheckedState = isOpen.map((item, index) =>
                index === position ? !item : item
            );
            setOpen(updatedCheckedState);
        };

        return array?.map(items => (
            <div className="leaguecell-container">
                <div
                    style={{ backgroundColor: isSubArray === true ? "#262626" : "#323232", height: `${isSubButton ? "11.6875rem" : "9.3rem"}`, borderBottom: '0.1875rem solid #1e1e1e' }}
                    className={`${items.isLast && isOpen[items.id] === false && "leaguecell-content"} ${items.isLastSubarray === true && "leaguecell-content"} leaguecell-content1`}
                >

                    <div style={{ marginLeft: '0.75rem' }} className="leaguecell-content2">
                        <NormalOptions
                            isSubButton={isSubButton}
                            id={items.id}
                            bet={items.bet}
                            logo1={items.logo1}
                            logo2={items.logo2}
                            team1={items.team1}
                            team2={items.team2}
                            hasUp={items.hasUp}
                            hasDown={items.hasDown}
                            stat1Color={items.stat1Color}
                            stat2Color={items.stat2Color}
                            buttonWithExtraData={items?.buttonWithExtraData}
                        />
                    </div>
                    {isSubArray === false && (
                        <div className="leaguecell-content3">
                            <button
                                style={{
                                    width: "5.625rem",
                                    height: "7.4375rem",
                                    padding: '0.1875rem',
                                    backgroundColor: isOpen[items.id] === true ? "#5b646e" : "#171a1d",
                                    background: isOpen[items.id] === true
                                        ? "linear-gradient(to top, #4b3b09, #e8b888)"
                                        : "linear-gradient(to top, #4b3b09, #e8b888)",
                                }}
                                className="leaguecell-content4 group"
                                onClick={() => handleOnChange(items.id)}
                                onMouseOver={() => setHover2(items.id)}
                                onMouseLeave={() => setHover2(null)}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        // borderColor: isOpen[items.id] === true ? "#8f97a0" : "#737579",
                                        background: isOpen[items.id] === true
                                            ? "linear-gradient(to bottom, #f38d27, #b45a00)"
                                            : "linear-gradient(to bottom, #a67c52, #7f5f3f)",

                                    }}
                                    className="leaguecell-content5"
                                >
                                    <span style={{ textShadow: "1px 1px 1px #00000070", marginTop: isOpen[items.id] === true ? '0.3rem' : '0.3rem' }} className="leaguecell-content6" >
                                        {isOpen[items.id] === true ? (
                                            <img style={{ width: '1.8375rem' }} className='leaguecell-content7' src={Minus} alt="" />
                                        ) : (
                                            <img style={{ width: '1.8375rem' }} className='' src={Plus} alt="" />
                                        )}
                                    </span>
                                </div>
                            </button>
                        </div>
                    )}


                </div>
                {isOpen[items.id] === true && (
                    <LeagueCell isSubButton array={items.subArray} isSubArray={true} isLastSubarray={items.isLast} />
                )}
            </div>
        ))
    }

    const LeagueGroup = ({
        flag = NorwayIcon,
        title,
        array = FirstArray,
        isLastElement = false
    }) => {
        const [isHover4, setHover4] = useState("")
        console.log(`isHover4`, isHover4)
        return (
            <div style={{ paddingTop: '1.6875rem' }} className="leaguegroup-container">
                <img style={{ filter: "drop-shadow(5px 5px 5px #00000020)", width: '65.8125rem' }} className="leaguegroup-content" src={NormalCell} alt="" />
                <div style={{ height: '7.5rem' }} className="leaguegroup-content1">
                    <img style={{ width: '3.9375rem', marginLeft: '1.8125rem' }} className="" src={FootballIcon} alt="" />
                    <img style={{ width: '5.625rem', marginLeft: '1.0625rem', marginRight: '0.875rem' }} className="" src={flag} alt="" />
                    <p
                        style={{ fontSize: '2.625rem' }}
                        className="leaguegroup-content2"
                        onMouseEnter={() => setHover4(title)}
                        onMouseLeave={() => setHover4("")}
                    >
                        {title}
                    </p>
                    <div style={{ fontSize: '2.625rem', marginTop: '0.025rem' }} className="leaguegroup-content3">
                        <p className="leaguegroup-content4">2021-06-29</p>
                        <p style={{ marginTop: '-0.875rem' }} className="leaguegroup-content5">
                            <img style={{ width: '2.375rem', height: '2.375rem', marginRight: '0.4875rem', marginTop: '0.2rem' }} className="leaguegroup-content6" src={Clock} alt="" />
                            <span>15:45</span>
                        </p>
                    </div>
                </div>

                <div style={{ paddingBottom: `${isLastElement ? "1.125rem" : ""}`, borderBottomWidth: `${isLastElement ? "0.1875rem" : ""}` }} className={`leaguegroup-content7 ${isLastElement ? "leaguegroup-content8" : "leaguegroup-content9"} shadow-to-box shadow`}>
                    <LeagueCell array={array} />
                </div>
            </div>
        )
    }

    return (
        <div style={{ borderRadius: "0.5rem" }} className="betpanel-container shadow-to-box">
            <div style={{ paddingTop: '1.9rem', paddingBottom: '1.125rem' }} className="betpanel-content">
                <div style={{ fontSize: '2.625rem', marginLeft: "12.4rem" }} className="betpanel-content1">
                    <p>승(홈)</p>
                    <img className='betpanel-content2' src={ArrowUp} alt="" style={{ width: "1.3125rem", marginLeft: '1.2rem' }} />
                </div>
                <div style={{ fontSize: '2.625rem', marginLeft: "13.3rem" }} className="betpanel-content3">무</div>
                <div style={{ fontSize: '2.625rem', marginLeft: "14.5rem" }} className="betpanel-content4 space-x-2">
                    <p>패(원정)</p>
                    <img className='betpanel-content5' src={ArrowDown} alt="" style={{ width: "1.3125rem", marginLeft: '1rem' }} />
                </div>
                <div style={{ fontSize: '2.625rem', marginLeft: "8.8rem" }} className="betpanel-content6">정보</div>
            </div>


            <div className="eventoptions-container">
                <img style={{ width: '77.625rem', paddingTop: '0.3rem' }} className="eventoptions-content" src={BonusCell} alt="" />
                <img style={{ width: '6.75rem' }} className="eventoptions-content1" src={Gift} alt="" />
                <div className="eventoptions-content2">
                    <p style={{ color: "#fff", fontSize: '2.625rem', marginTop: "2.3rem", letterSpacing: '-0.07rem', textShadow: "rgb(0 0 0 / 31%) 0.225rem 0.225rem 0" }} className="eventoptions-content3">보너스 이벤트</p>
                </div>
                <div style={{ marginLeft: '1.9rem' }} className="eventoptions-content4">
                    <EventOptions
                        team1="다폴더 보너스 배당"
                        team2="◀3폴더 이상 베팅시"
                        stat1="-"
                        stat2="VS"
                        stat3="-"
                    />
                </div>
            </div>

            <div className="">
                <div style={{ width: '76.875rem', height: '8.4375rem', marginTop: '2.5rem', marginLeft: '0.3125rem', borderWidth: '0.1875rem' }} className="betpanel-content7">
                    <div className="betpanel-content8">
                        <img style={{ width: '3.9375rem', marginLeft: '1.4425rem' }} className="betpanel-content9" src={FootballIcon} alt="" />
                        <p style={{ fontSize: '2.625rem', marginLeft: '0.6875rem', color: '#ccc2b6' }} className="betpanel-content10">축구</p>
                        <div
                            style={{ backgroundColor: "#826140", color: '#ffdfbd', fontSize: '2.9375rem', minWidth: '8.125rem', height: '4.5rem', padding: '0.15rem 2rem 0' }}
                            className="betpanel-content11"
                        >
                            15
                        </div>
                    </div>
                    <div style={{ marginRight: '0.6rem', marginTop: '0.1rem' }} className="mr-5px">
                        {InboxSearch}
                    </div>
                </div>
            </div>


            <div style={{ marginBottom: '15.9375rem' }} className="">
                <LeagueGroup title="노르웨이 - Eliteserien" />
                <LeagueGroup flag={AustriaIcon} title="오스트리아 - 컵" array={SecondArray} />
                <LeagueGroup flag={NetherlandIcon} title="네덜란드 - D2" array={ThirdArray} />
                <LeagueGroup isLastElement flag={UKIcon} title="영국 - U23" array={FourthArray} />
            </div>


        </div >
    )
}

export default BetCombinationPanel

import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import './_speedKinoRoundResult.scss';

const SpeedKinoRoundResult = () => {

    const [selectedTab, setSelectedTab] = useState(0)

    console.log(`selectedTab`, selectedTab)

    const historyTabsArray = [
        { text: "숫자합 홀짝", id: 0, path: "/minigame/speedkino" },
        { text: "숫자합 마지막자리 언오버", id: 1, path: "/minigame/speedkino/sum" }
    ]

    const HistoryMenu = ({
        itemsArray,
        setSelectedTab,
        setSelectedSubTab = null
    }) => {
        // r0056a6
        const navigate = useNavigate();
        const pathname = window.location.pathname
        const [isHover, setHover] = useState(null)
        console.log(isHover)

        function TabsList({ items }) {
            return items.map((item, index) => (
                <button
                    className={`${pathname === item.path
                            ? "tabslistspeedkino"
                            : "tabslistspeedkino1"
                        } tabslistspeedkino2`}
                    style={{ height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : ''}`, borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}` }}
                    key={item.id}
                    onPointerUp={() => {
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onMouseOver={() => setHover(item.id)}
                    onMouseLeave={() => setHover(null)}
                >
                    <div >
                        <div>
                            <span
                                className={`${pathname === item.path
                                        ? "tabslistspeedkino3"
                                        : "tabslistspeedkino4"
                                    } tabslistspeedkino5`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            ));
        }

        return (
            <div className="tabslistspeedkino-container">
                <TabsList items={itemsArray} />
            </div>
        )
    }


    const array = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]

    const array1 = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '오',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '언',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]


    function Cells({ items }) {
        return items.map((item, index) => (
            <div
                style={{
                    height: "7rem", borderBottomWidth: '0.1875rem', fontSize: '2.25rem',
                    backgroundColor: index % 2 === 0 ? "#323231" : "#30302f"
                }}
                className="container-cells"
            >
                <div className="content-cells">{item.month} [{item.roundNumber}]</div>
                <div className="content-cells"
                style={{
                    paddingLeft: '0.3rem',
                    paddingTop: '0.2rem'
                }}
                >
                    <div
                        style={{ width: "4.5rem", height: "4.5rem", fontSize: '2.25rem', backgroundColor: item.departureNumberColor }}
                        className="content-cells1"
                    >
                        <p className='content-cells2'>{item.departureText}</p>
                        {item.departureNumber && <div style={{ width: '2.25rem', height: '2.25rem', fontSize: '1.5rem', top: '-0.5rem', right: item.departureNumberDirection === "right" ? "-0.75rem" : "", left: item.departureNumberDirection === "left" ? "-0.75rem" : "" }} className={`content-cells3`}
                        >{item.departureNumber}</div>}
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="history-menu-container">
            <div style={{ margin: '0' }}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <Routes>
                <Route path="/*"
                    element={
                        <>
                            <div className="speedkino-path">
                                <div style={{ fontSize: '2.25rem' }} className='speedkino-path1'>
                                    <div style={{ height: '5.25rem', marginRight: '0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem' }} className="speedkino-path2">회차</div>
                                    <div style={{ height: '5.25rem' }} className="speedkino-path2">홀/짝</div>
                                </div>
                            </div>
                            <div className="cells-speedkino text-585858">
                                <Cells items={array} />
                            </div>
                        </>
                    }
                />

                <Route path="/sum/*"
                    element={
                        <>
                            <div className="speedkino-sum">
                                <div style={{ fontSize: '2.25rem' }} className='speedkino-sum1'>
                                    <div style={{ height: '5.25rem', marginRight: '0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem' }} className="speedkino-sum2">회차</div>
                                    <div style={{ height: '5.25rem' }} className="speedkino-sum2">언오버</div>
                                </div>
                            </div>
                            <div className="cells-speedkino1">
                                <Cells items={array1} />
                            </div>
                        </>
                    }
                />
            </Routes>
            {/* <Route exact path="/minigame/speedkino">
                <div className="font-spoqaMedium tracking-tight text-gray-r454545 mt-8">
                    <div style={{fontSize: '2.25rem'}} className='flex w-full'>
                        <div style={{height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">회차</div>
                        <div style={{height: '5.25rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">홀/짝</div>
                    </div>
                </div>
                <div className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                    <Cells items={array} />
                </div>
            </Route>
            <Route path="/minigame/speedkino/sum">
                <div className="font-spoqaMedium tracking-tight text-gray-r454545 mt-8">
                    <div style={{fontSize: '2.25rem'}} className='flex w-full'>
                        <div style={{height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">회차</div>
                        <div style={{height: '5.25rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">언오버</div>
                    </div>
                </div>
                <div className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                    <Cells items={array1} />
                </div>
            </Route> */}

        </div>
    )
}

export default SpeedKinoRoundResult

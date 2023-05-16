import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import KinoLadderPanel from '../KinoLadderPanel'
import PowerballPanel from '../PowerballPanel'
import PowerLadderPanel from '../PowerLadderPanel'
import RefreshIcon from '../../assets/minigames/refresh_icon.png'
import ClockIcon from '../../assets/minigames/clock_blue.png'
import SpeedKinoPanel from '../SpeedKinoPanel'
import { ko } from "date-fns/locale"
import { format } from 'date-fns'
import {
    PowerballHistoryArray,
    PowerballResultsArray,
    PowerLadderResultsArray
} from '../arrays'
import './_minigamesPanel.scss';

const MinigamesPanel = ({
    selectedGame,
    setSelectedGame,
    selectedTab,
    setSelectedTab,
    setSelectedOption
}) => {

    const [checkedState, setCheckedState] = useState(
        new Array(PowerballHistoryArray.length).fill(false)
    );
    const dateFormat = "MM월 dd일"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="container">

            <div
                style={{
                    background: "linear-gradient(to right, #6c553e, #473b35",
                    boxShadow: 'inset 0px 1px 0px 0px rgba(0, 0, 0, 0.2)',
                    height: '8.5rem',
                    margin: '0.9375rem 0 0.9rem',
                    borderBottom: '0.1875rem solid #3a300f',
                    borderTop: '0.1875rem solid #a98d70',
                    paddingTop: '0.2rem'
                }}
                className="divcontent"
            >
                <div style={{ width: '6.5rem', marginRight: '0.9375rem' }}></div>
                <div className="divcontent1">
                    <div style={{ fontSize: '2.8125rem', marginRight: '1.6875rem', color: '#ccc2b6' }} className="divcontent2">
                        {format(time, dateFormat, { locale: ko })} {format(time, dateFormat1, { locale: ko })} <p style={{ color: "#ffe699", marginLeft: '0.6rem' }} className="">[216회차]</p>
                    </div>
                    <div style={{ color: "#ffdfbd" }} className="divcontent3">
                        <img style={{ width: '3rem', marginRight: '0.75rem' }} className="imgcontent" src={ClockIcon} alt="" />
                        <p style={{ fontSize: '3.375rem' }}>02:16</p>
                    </div>
                </div>
                <img style={{ width: '7.9375rem', marginRight: '0.2rem', marginTop: '0.6rem', marginLeft: '-2.1rem' }} src={RefreshIcon} alt="" className="imgcontent1 hover" />
            </div>

            <div className="container1">
                <div className="divcontent4">
                    <Routes>
                        <Route path="/powerball/*"
                            element={
                                <>
                                    <PowerballPanel
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                        historyArray={PowerballHistoryArray}
                                        resultsArray={PowerballResultsArray}
                                        checkedState={checkedState}
                                        setCheckedState={setCheckedState}
                                        setSelectedOption={setSelectedOption}
                                    />
                                </>
                            }
                        />
                        <Route path="/powerladder/*"
                            element={
                                <>
                                    <PowerLadderPanel
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                        historyArray={PowerballHistoryArray}
                                        resultsArray={PowerLadderResultsArray}
                                        checkedState={checkedState}
                                        setCheckedState={setCheckedState}
                                        setSelectedOption={setSelectedOption}
                                    />                        </>
                            }
                        />
                        <Route path="/speedkino/*"
                            element={
                                <>
                                    <SpeedKinoPanel
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                        historyArray={PowerballHistoryArray}
                                        resultsArray={PowerLadderResultsArray}
                                        checkedState={checkedState}
                                        setCheckedState={setCheckedState}
                                        setSelectedOption={setSelectedOption}
                                    />
                                </>
                            }
                        />
                        <Route path="/kinoladder/*"
                            element={
                                <>
                                    <KinoLadderPanel
                                        selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                        historyArray={PowerballHistoryArray}
                                        resultsArray={PowerLadderResultsArray}
                                        checkedState={checkedState}
                                        setCheckedState={setCheckedState}
                                        setSelectedOption={setSelectedOption}
                                    />                          </>
                            }
                        />
                    </Routes>
                    {/* <Route path="/minigame/powerball">
                        <PowerballPanel  
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerballResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />
                    </Route>

                    <Route path="/minigame/powerladder">
                        <PowerLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />
                    </Route>

                    <Route path="/minigame/speedkino">
                        <SpeedKinoPanel
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                    
                    </Route>
                                    
                    <Route path="/minigame/kinoladder">
                        <KinoLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                   
                    </Route> */}
                </div>
            </div>

            {/* 
             */}
        </div>
    )
}

export default MinigamesPanel

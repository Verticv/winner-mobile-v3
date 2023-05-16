/* eslint-disable */
import HorizontalMenu3 from '../HorizontalMenu3'
import Header from '../Header';
import Cart from '../Cart'
import React, { useEffect, useState } from 'react'
import PowerballIcon from '../../assets/MinigamesPage/powerball.png'
import PowerLadder from '../../assets/MinigamesPage/powerladder.png'
import SpeedKino from '../../assets/MinigamesPage/speedkino.png'
import KinoLadder from '../../assets/MinigamesPage/kinoladder.png'
// import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import MinigamesPanel from '../MinigamesPanel'
import { Routes, Route, useLocation } from 'react-router'
import "./IframeStyle.scss"


const MinigamesPage = ({ isAuthenticated, setAuthenticated }) => {

    const GameTypeArray = [
        { id: 0, img: PowerballIcon, text: "파워볼", textColor: '#d75bc3', time: "02:16", path: "/minigame/powerball" },
        { id: 1, img: PowerLadder, text: "파워사다리", textColor: '#4479be', time: "02:16", path: "/minigame/powerladder" },
        { id: 2, img: SpeedKino, text: "스피드키노", textColor: '#da644c', time: "02:16", path: "/minigame/speedkino" },
        { id: 3, img: KinoLadder, text: "키노사다리", textColor: '#d5a53f', time: "02:16", path: "/minigame/kinoladder" },
    ]

    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedOption, setSelectedOption] = useState([
        {
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        }
    ])
    console.log(`selectedOption`, selectedOption)

    const location = useLocation();

    useEffect(() => {
        setSelectedTab(0)
    }, [location]);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    return (
        <div style={{ maxWidth: '1242px' }} className="container">
            <div className="header">
                <Header isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div style={{ marginBottom: "7rem" }} className="content">
                <div className="content1"
                    style={{ marginTop: '1rem' }}
                >

                    <div style={{ padding: '0 1.8rem', marginBottom: '1.6rem' }}>
                        <Routes>
                            <Route path="/powerball/*"
                                element={
                                    <>
                                        <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                                    </>
                                }
                            />
                            <Route path="/powerladder/*"
                                element={
                                    <>
                                        <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                                    </>
                                }
                            />
                            <Route path="/speedkino/*"
                                element={
                                    <>
                                        <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/speedkino"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                                    </>
                                }
                            />
                            <Route path="/kinoladder/*"
                                element={
                                    <>
                                        <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/kinoladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                                    </>
                                }
                            />
                        </Routes>
                    </div>

                    <div className="content2">
                        <div
                            style={{ backgroundColor: "#e8e8e8", height: windowDimensions.width < 768 ? "60rem" : "42rem",
                                height: '61rem'
                        }}
                            className="content3"
                        >
                            <Routes>
                                <Route path="/powerball/*"
                                    element={
                                        <>
                                            <div className='powerball_top'>
                                                <div className='powerball_area'>
                                                    <iframe id="game_frame" src="https://ntry.com/scores/powerball/live.php" scrolling="no" frameborder="0" title="powerball"></iframe>
                                                </div>
                                            </div>                              </>
                                    }
                                />
                                <Route path="/powerladder/*"
                                    element={
                                        <>
                                            <div className='powerball_top'>
                                                <div className='powerball_area'>
                                                    <iframe id="game_frame" src="https://ntry.com/scores/power_ladder/live.php" scrolling="yes" frameborder="0" title="powerball"></iframe>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                                <Route path="/speedkino/*"
                                    element={
                                        <>
                                            <div className='powerball_top'>
                                                <div className='powerball_area'>
                                                    <iframe id="game_frame" src="https://ntry.com/scores/speedkeno/live.php" scrolling="yes" frameborder="0" title="powerball"></iframe>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                                <Route path="/kinoladder/*"
                                    element={
                                        <>
                                            <div className='powerball_top'>
                                                <div className='powerball_area'>
                                                    <iframe id="game_frame" src="https://ntry.com/scores/keno_ladder/live.php" scrolling="yes" frameborder="0" title="kinoladder"></iframe>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </Routes>
                        </div>
                        {/* <MinigamesRightPanel selectedGame={selectedGame} selectedOption={selectedOption}/> */}
                    </div>

                    <div className="content4">
                        <MinigamesPanel selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSelectedOption={setSelectedOption} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </div>

                    <Cart selectedOption={selectedOption} />


                </div>
            </div>

        </div>
    )
}

export default MinigamesPage

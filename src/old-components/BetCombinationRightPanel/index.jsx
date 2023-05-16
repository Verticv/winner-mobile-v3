import BetCartHorizontalMenu2 from "../BetCartHorizontalMenu2";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import CartHighlight from "../../assets/betCombinationRightPanel/white-cart.png";
import Cart from "../../assets/betCombinationRightPanel/gray-cart.png";
import HistoryHighlight from "../../assets/betCombinationRightPanel/white-setting.png";
import History from "../../assets/betCombinationRightPanel/gray-setting.png";
import TrashIcon from "../../assets/betCombinationRightPanel/bet-cart-delete.png";
import CloseIcon from "../../assets/betCombinationRightPanel/bet-close.png";
import ClockIcon from "../../assets/betCombinationRightPanel/clock-yellow.png";
import RefrshIcon from "../../assets/betCombinationRightPanel/bet-cart-refrech.png";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import BetCombinationRightPanelCart from "../BetCombinationRightPanelCart";
import BetCombinationRightPanelHistory from "../BetCombinationRightPanelHistory";
import "./_betCombinationRightPanel.scss";

const BetCombinationRightPanel = ({
    addedCard,
    setAddedCard,
    isPanelFixed,
    setPanelFixed,
    setOpenedCart,
}) => {
    const tabsArray = [
        {
            text: "베팅카트",
            icon: Cart,
            iconHighlight: CartHighlight,
            id: 0,
            number: 2,
            path: "/bet-combination",
            width: '3.4375rem'

        },
        {
            text: "베팅내역",
            icon: History,
            iconHighlight: HistoryHighlight,
            id: 1,
            number: 2,
            path: "/bet-combination/history",
            width: '4rem',
            isLeft: 'true'
        },
    ];

    const dateFormat1 = "HH:mm:ss";
    const dateFormat2 = "yyyy-MM-dd (eee)"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [selectedTab, setSelectedTab] = useState(0);
    const [buttonHover, setButtonHover] = useState(null);

    return (
        <div className="container-RP w-fill">
            <div
                style={{
                    background: "linear-gradient(to top, #323231, #545452)",
                    height: "8.5625rem",
                    padding: "0 0.525rem 0 1.125rem",
                    borderRadius: "1.6875rem",
                    marginLeft: "1.7rem",
                    marginRight: "1.7rem",
                }}
                className="content-RP1 shadow-to-box"
            >
                <div style={{ fontSize: "2.625rem" }} className="content-RP2">
                    <p
                        style={{ marginRight: "1.7rem", fontSize: "2.625rem" }}
                        className="content-RP3"
                    >
                        {format(Date.now(), dateFormat2, { locale: ko })}
                        {/* 2021-08-02 (월) */}
                    </p>
                    <div
                        style={{ color: "#ffe672", fontSize: "3.375rem" }}
                        className="content-RP4"
                    >
                        <img
                            style={{ width: "2.875rem", marginRight: "0.6rem" }}
                            className="content-RP5"
                            src={ClockIcon}
                            alt=""
                        />
                        <p className="content-RP6" style={{ color: '#ffdfbd' }}>
                            {format(time, dateFormat1, { locale: ko })}
                        </p>
                    </div>
                </div>

                <div className="content-RP7">
                    <div
                        style={{
                            width: "6.5rem",
                            height: "6.5rem",
                            padding: '0.1875rem',
                            background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                            borderRadius: '1rem',
                            marginRight: '0.75rem'
                        }}
                        className='shadow-to-box hover'
                    >
                        <button
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                            }}
                            className={`${buttonHover === 0 && "content-RP8"} content-RP9`}
                            onPointerDown={() => setButtonHover(0)}
                            onPointerUp={() => {
                                setButtonHover(null);
                                setAddedCard([]);
                            }}
                            onPointerOut={() => setButtonHover(null)}
                        >
                            <div style={{ borderColor: "#9c9c9c" }} className="content-RP10">
                                <img className="content-RP11" src={TrashIcon} alt="" />
                            </div>
                        </button>
                    </div>

                    <div
                        style={{
                            width: "6.5rem",
                            height: "6.5rem",
                            padding: '0.1875rem',
                            background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                            borderRadius: '1rem',
                            marginRight: '0.75rem'
                        }}
                        className='shadow-to-box hover'
                    >
                        <button
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                            }}
                            className={`${buttonHover === 1 && "content-RP12"} content-RP13`}
                            onPointerDown={() => setButtonHover(1)}
                            onPointerUp={() => {
                                setButtonHover(null);
                            }}
                            onPointerOut={() => setButtonHover(null)}
                        >
                            <div style={{
                                borderColor: "#9c9c9c",
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} className="content-RP14">
                                <img className="content-RP15" src={RefrshIcon} alt="" />
                            </div>
                        </button>
                    </div>

                    <div
                        style={{
                            width: "6.5rem",
                            height: "6.5rem",
                            padding: '0.1875rem',
                            background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                            borderRadius: '1rem',
                            marginRight: '0.75rem'
                        }}
                        className='shadow-to-box hover'
                    >
                        <button
                            onPointerDown={() => setButtonHover(2)}
                            onPointerUp={() => {
                                setButtonHover(null);
                                setOpenedCart(false);
                            }}
                            onPointerOut={() => setButtonHover(null)}
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                            }}
                            className={`${buttonHover === 2 && "content-RP16"} content-RP17`}
                        >
                            <div style={{
                                borderColor: "#9c9c9c",
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} className="content-RP18">
                                <img
                                    style={{ width: "2.875rem" }}
                                    src={CloseIcon}
                                    alt=""
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginBottom: "0.0625rem",
                    paddingLeft: "1.45rem",
                    paddingRight: "1.7rem",
                }}
                className="content-menu2"
            >
                <BetCartHorizontalMenu2
                    itemsArray={tabsArray}
                    setSelectedTab={setSelectedTab}
                    isState={selectedTab}
                    setState={setSelectedTab}
                />
            </div>
            {/* <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} /> */}

            <div
                style={{ maxHeight: "calc((var(--vh) * 100) - 24rem)" }}
                className="content-panelcart"
            >
                <Routes>
                    <Route
                        index
                        element={
                            <>
                                <div
                                    style={{ paddingLeft: "", paddingRight: "" }}
                                >
                                    <BetCombinationRightPanelCart
                                        addedCard={addedCard}
                                        setAddedCard={setAddedCard}
                                    />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/history/*"
                        element={
                            <>
                                {/* <h1>hello</h1> */}
                                <BetCombinationRightPanelHistory />
                            </>
                        }
                    ></Route>
                </Routes>
                {/* <Route exact path="/bet-combination">
                      <div style={{paddingLeft: '1.875rem', paddingRight: '1.875rem'}}>
                     <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />     
                    </div> 
                 </Route>
                   
                 <Route path="/bet-combination/history">
                     <BetCombinationRightPanelHistory /> 
                 </Route>  */}
            </div>
        </div>
    );
};

export default BetCombinationRightPanel;

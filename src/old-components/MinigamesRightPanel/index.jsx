import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import PopupControls from '../PopupControls';
import RoundResultPopup from '../RoundResultPopup';
import PowerLadderRoundResultPopup from '../PowerLadderRoundResultPopup';
import SpeedKinoRoundResultPopup from '../SpeedKinoRoundResultPopup';
import ClockIcon from '../../assets/minigames/clock_blue.png'
import RefrshIcon from "../../assets/betCombinationRightPanel/bet-cart-refrech.png";
import CloseIcon from "../../assets/betCombinationRightPanel/bet-close.png";
import SelectionBg from '../../assets/minigames/cart-check-img.png'
import CheckIcon from '../../assets/minigames/checkbox.png'
import BetIcon from '../../assets/betCombinationRPCart/dollar.png'
import LockIcon from '../../assets/minigames/lock.png'
import BlueButton from '../../assets/minigames/blue.png'
import RedButton from '../../assets/minigames/red.png'
import YellowButton from '../../assets/minigames/yellow.png'
import GreenButton from '../../assets/minigames/green.png'
import BlueButtonSq from '../../assets/minigames/blue_sq.png'
import RedButtonSq from '../../assets/minigames/red_sq.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"
import { Link } from 'react-router-dom';
import './_minigamesRightPanel.scss';


const MinigamesRightPanel = ({
    selectedGame,
    selectedOption,
    setOpenedCart
}) => {

    const [inputValue, setInputValue] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [redirectPath, setRedirectPath] = useState("")
    const [buttonClicked, setButtonClicked] = useState("")
    var nf = new Intl.NumberFormat();

    useEffect(() => {
        if (window.location.pathname === "/minigame/powerball") {
            setRedirectPath('/mypage/bet-history/all/minigame/powerball')
        } else if (window.location.pathname === "/minigame/powerladder") {
            setRedirectPath('/mypage/bet-history/all/minigame/powerladder')
        } else if (window.location.pathname === "/minigame/speedkino") {
            setRedirectPath('/mypage/bet-history/all/minigame/speedkino')
        } else {
            setRedirectPath('/mypage/bet-history/all/minigame/kinoladder')
        }
        return () => {
            setRedirectPath('')
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setRedirectPath, window.location.pathname]);

    // const BetAmountButton = ({ amount }) => (
    //     <button
    //         style={{
    //             width: "24.4rem",
    //             height: '7.5rem',
    //             // padding: '0.2rem',
    //             fontSize: '2.625rem',
    //             borderColor: "#b3bac1",
    //             borderRadius: '0.75rem'
    //         }}
    //         className="bet-button"
    //         onPointerDown={() => setButtonClicked(amount)}
    //         onPointerUp={() => {
    //             setInputValue(inputValue + amount)
    //             setButtonClicked(null)
    //         }}
    //         onPointerOut={() => setButtonClicked(null)}
    //     >
    //         <div
    //             style={{
    //                 borderRadius: "0.75rem",
    //                 background: buttonClicked === amount ? "linear-gradient(to bottom, #a8defd, #8dc6ee)" : "linear-gradient(to bottom, #feffff, #cedeed)",
    //                 borderWidth: "0.1875rem",
    //                 borderColor: "#fff",
    //                 // borderWidth: '0.1875rem'
    //             }}
    //             className="bet-div">
    //             <span className="bet-span">{nf.format(amount)}</span>
    //         </div>
    //     </button>
    // )
    // const BetFixedAmountButton = ({ amount, text }) => (
    //     <button
    //         style={{
    //             width: "24.4rem",
    //             height: '7.5rem',
    //             fontSize: '2.625rem',
    //             borderColor: "#171a1d",
    //             borderRadius: '0.75rem',
    //             backgroundColor: '#747679',
    //             // padding: '0.2rem',
    //         }}
    //         className="betfixed-button"
    //         onClick={() => setInputValue(amount)}
    //     >
    //         <div
    //             style={{
    //                 width: "100%",
    //                 borderRadius: "0.75rem",
    //                 borderWidth: "0.1875rem",
    //                 borderColor: "#747679",
    //                 background: "linear-gradient(to bottom, #585b5e, #303337)",
    //             }}
    //             className="betfixed-div">
    //             <span className="betfixed-span">{text}</span>
    //         </div>
    //     </button>
    // )

    const BetAmountButton = ({ amount }) => (
        <div
            style={{
                width: "24.375rem",
                height: '7.5rem',
                background: buttonClicked === amount ? 'linear-gradient(to top, #4b3b09, #e8b888)' : 'linear-gradient(to top, #393835, #6b6865)',
                borderRadius: '0.5rem',
                padding: '0.1875rem'
            }}
            className='hover'
        >
            <button
                style={{
                    width: "100%",
                    height: '100%',
                    // padding: '0.2rem',
                    fontSize: '2.625rem',
                    // background: 'linear-gradient(to top, #323231, #545452)',
                    background: buttonClicked === amount ? "linear-gradient(to bottom, #a67c52, #7f5f3f)" : "linear-gradient(to top, #323231, #545452)",
                    // borderColor: "#b3bac1",
                    borderRadius: '0.5rem'
                }}
                className="btn-style"
                onPointerDown={() => setButtonClicked(amount)}
                onPointerUp={() => {
                    setInputValue(inputValue + amount)
                    setButtonClicked(null)
                }}
                onPointerOut={() => setButtonClicked(null)}
            >
                <div
                    style={{
                        borderRadius: "0.75rem",
                        // background: buttonClicked === amount ? "linear-gradient(to bottom, #a8defd, #8dc6ee)" : "linear-gradient(to bottom, #feffff, #cedeed)",
                        borderWidth: "0.1875rem",
                        borderColor: "#fff",
                    }}
                    className="divstyle">
                    <span className="spanstyle shadow-to-text">{nf.format(amount)}</span>
                </div>
            </button>
        </div>
    )

    const BetFixedAmountButton = ({ amount, text }) => (
        <div
            style={{
                width: "100%",
                height: '100%',
                padding: '0.1875rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(to top, #4b3b09, #e8b888)'
            }}
            className='hover'
        >
            <button
                style={{
                    width: "100%",
                    height: '100%',
                    fontSize: '2.625rem',
                    borderColor: "#171a1d",
                    borderRadius: '0.5rem',
                    // backgroundColor: '#747679',
                    background: 'linear-gradient(to bottom, #a67c52, #7f5f3f)'

                    // padding: '0.2rem',
                }}
                className="btncontentstyle"
                onClick={() => setInputValue(amount)}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: "0.75rem",
                        borderWidth: "0.1875rem",
                        borderColor: "#747679",
                        // background: "linear-gradient(to bottom, #585b5e, #303337)",
                    }}
                    className="divcontentstyle">
                    <span className="spancontentstyle shadow-to-text">{text}</span>
                </div>
            </button>
        </div>
    )

    const GrayButton = ({ text }) => (
        <div
            style={{
                width: '36.775rem',
                height: '7.5rem',
                background: 'linear-gradient(to top, #393835, #6b6865)',
                borderRadius: '0.5rem',
                padding: '0.1875rem',
                zIndex: '200'
            }}
            className='shadow-to-box hover'
        >
            <button
                style={{
                    background: "linear-gradient(to top, #323231, #545452)",
                    // borderRadius: "0.75rem",
                    width: '100%',
                    height: '100%',
                    // padding: '1px',
                    fontSize: '2.625rem',
                    borderRadius: '0.5rem'
                }}
                className={`gray-button`}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: "0.75rem",
                        paddingBottom: '0.4625rem',
                        background: 'bottom'
                    }}
                    className={`gray-button-div`}
                >
                    <div
                        style={{
                            // background: "linear-gradient(to bottom, #f7f7f7, #e9e9e9)",
                            borderRadius: "0.75rem",
                            borderBottomLeftRadius: "0.75rem 0.6rem",
                            borderBottomRightRadius: "0.75rem 0.6rem",
                            borderColor: "#d6dfe8",

                        }}
                        className={`gray-button-div1`}
                    >
                        <div style={{
                            fontSize: '2.625rem', color: '#c8c8c8',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            alignItems: 'center',
                            height: '100%',
                            marginTop: '0.2rem'
                        }} className={`gray-button-div2 shadow-to-text`}>
                            {text}
                        </div>

                    </div>
                </div>
            </button>
        </div>
    )

    const AttachButton = (
        <GrayButton text='회차결과' />
    )

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
        <div className="container-RP w-fill">
            <div
                style={{
                    background: "linear-gradient(to top, #323231, #545452)",
                    height: "8.5625rem",
                    padding: "0 0.125rem 0 0.225rem",
                    borderRadius: "1.6875rem",
                    marginLeft: "1.7rem",
                    marginRight: "1.7rem",
                }}
                className="content-RP1 shadow-to-box"
            >
                <div style={{ fontSize: "2.625rem", fontFamily: 'SpoqaHanSansNeoMedium' }} className="content-RP2">
                    <p
                        style={{ marginRight: "1.7rem", fontSize: "2.625rem", display: 'flex', alignItems: 'center' }}
                        className="content-RP3"
                    >
                        {format(time, dateFormat, { locale: ko })} {format(time, dateFormat1, { locale: ko })} <p style={{ color: "#ffe699", marginLeft: '0.8125rem' }} className=""> [216회차]</p>
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
                            {/* {format(time, dateFormat1, { locale: ko })} */}
                            02:16
                        </p>
                    </div>
                </div>

                <div className="content-RP7">
                    {/* <div
                        style={{
                            width: "6.5rem",
                            height: "6.5rem",
                            padding: '0.1875rem',
                            background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                            borderRadius: '1rem',
                            marginRight: '0.75rem'
                        }}
                        className='shadow-to-box'
                    >
                        <button
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                            }}
                            // className={`${buttonHover === 0 && "content-RP8"} content-RP9`}
                            // onPointerDown={() => setButtonHover(0)}
                            onPointerUp={() => {
                                // setButtonHover(null);
                                // setAddedCard([]);
                            }}
                            // onPointerOut={() => setButtonHover(null)}
                        >
                            <div style={{ borderColor: "#9c9c9c" }} className="content-RP10">
                                <img className="content-RP11" src={TrashIcon} alt="" />
                            </div>
                        </button>
                    </div> */}

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
                                borderRadius: '0.8rem',
                                // display: 'flex',
                                // justifyContent: 'center',
                                // alignItems: 'center'
                            }}
                            // className={`${buttonHover === 1 && "content-RP12"} content-RP13`}
                            // onPointerDown={() => setButtonHover(1)}
                            onPointerUp={() => {
                                // setButtonHover(null);
                            }}
                        // onPointerOut={() => setButtonHover(null)}
                        >
                            <div style={{
                                borderColor: "#9c9c9c",
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} className="content-RP14">
                                <img className="content-RP15" src={RefrshIcon} style={{ width: '2.9375rem' }} alt="" />
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
                            // onPointerDown={() => setButtonHover(2)}
                            onPointerUp={() => {
                                // setButtonHover(null);
                                setOpenedCart(false);
                            }}
                            // onPointerOut={() => setButtonHover(null)}
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                                borderRadius: '0.8rem',
                                // display: 'flex',
                                // justifyContent: 'center',
                                // alignItems: 'center'
                            }}
                        // className={`${buttonHover === 2 && "content-RP16"} content-RP17`}
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

            <div className="rightpanel-container" >

                <div
                    style={{
                        // paddingBottom: '1.125rem',    
                        paddingBottom: '1.425rem',
                        paddingTop: '0.9rem',
                        marginLeft: '1.3rem'
                    }}
                    className="rightpanel-content"
                >


                    <div style={{ height: "11.6875rem" }} className="rightpanel-content1">
                        <img className="rightpanel-content2" src={SelectionBg} alt="" style={{ width: '73.5rem' }} />
                        <div style={{ padding: '0.7rem 4rem 0 6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} className="rightpanel-content3">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{
                                    width: "3.75rem",
                                    marginLeft: '0.1rem',
                                    marginRight: '0.5rem'
                                }} className="rightpanel-content4" src={CheckIcon} alt="" />
                                <p style={{ color: "#ffdfbd", fontSize: '2.625rem', marginTop: '' }} className="rightpanel-content5">게임선택</p>
                            </div>
                            {/* <div
                                style={{ textAlign: 'center', marginLeft: '0.4rem', letterSpacing: '-0.07rem', marginTop: '-0.1rem' }}
                            >
                                <span style={{ color: '#c8c8c8', fontSize: '1.875rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>일반볼</span>
                                <br />
                                <span style={{ color: '#4c98ff', fontSize: '2.25rem', fontFamily: 'SpoqaHanSansNeoBold' }}>

                                    홀짝/언오버
                                </span>
                            </div> */}
                            <div>
                                <div
                                    // onClick={() => {
                                    //     setChosen(`${titleNumber}-1`)
                                    //     if (titleNumber === 2) {
                                    //         setSelectedOption([{ type: "파워볼", name: "언오버", selection: "언더", buttonType: "blue", subtitle: "4.5" }])
                                    //     } else {
                                    //         setSelectedOption([{ type: "일반볼", name: "언오버", selection: "언더", buttonType: "blue", subtitle: "72.5" }])
                                    //     }
                                    // }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    {/* <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={RedButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝오버</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                4.5
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>


                            {console.log('selectedOption', selectedOption[0])}
                            <div style={{ width: "30rem", fontSize: '1.875rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '1rem' }} className="rightpanel-content6">
                                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") && (
                                    <p style={{ color: "rgb(200, 200, 200)" }} className="rightpanel-content7">{selectedOption[0].type}</p>
                                )}
                                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") ? (
                                    <p style={{ color: "#4c98ff", fontSize: '2.25rem', fontFamily: 'SpoqaHanSansNeoBold' }} className="rightpanel-content8">{selectedOption[0].name}</p>
                                ) : (
                                    <p style={{ color: "#4c98ff", fontSize: '2.25rem', fontFamily: 'SpoqaHanSansNeoBold' }} className="rightpanel-content9">{selectedOption[0].name}</p>
                                )}
                            </div>
                            <div style={{ width: "16rem", marginTop: '-0.4rem'}} className="rightpanel-content10">
                                {selectedOption[0].buttonType && (
                                    <div
                                        style={{ width: "11.375rem" }}
                                        className="rightpanel-content11"
                                    >
                                        <img
                                            style={{
                                                paddingTop: (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "0.2rem" : "",
                                                // width: (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "10.375rem" : ""
                                                width: (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? '10.375rem' : '11.375rem'
                                            }}
                                            className={`${(selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "rightpanel-content12" : ""
                                                } rightpanel-content13`}
                                            src={
                                                selectedOption[0].buttonType === "blue"
                                                    ? BlueButton
                                                    : selectedOption[0].buttonType === "red"
                                                        ? RedButton
                                                        : selectedOption[0].buttonType === "yellow"
                                                            ? YellowButton
                                                            : selectedOption[0].buttonType === "green"
                                                                ? GreenButton
                                                                : selectedOption[0].buttonType === "blue_sq"
                                                                    ? BlueButtonSq
                                                                    : RedButtonSq
                                            }
                                            alt=""
                                        />
                                        <div className="rightpanel-content14 -space-y-5 -mb-2">
                                            <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: "3.75rem" }} className="rightpanel-content15 -mt-1">{selectedOption[0].selection}</p>
                                            {selectedOption[0].subtitle && (
                                                <p style={{ fontSize: "1.6rem", zIndex: '10' }} className="rightpanel-content16 betoption-content7">
                                                    {selectedOption[0].subtitle}
                                                </p>
                                            )}
                                        </div>
                                        {selectedOption[0].tailSide && (
                                            <div style={{ width: '3.75rem', height: '3.75rem', marginTop: '0.18rem', top: '1.2rem' }} className={`${selectedOption[0].tailSide === "left" ? "rightpanel-content17" : "rightpanel-content18"} rightpanel-content19 w-22px h-22px`}>
                                                <div style={{ fontSize: '2.0625rem' }} className="rightpanel-content20 text-12px">{selectedOption[0].tail}</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ height: '7rem', paddingLeft: '3.2rem', paddingRight: '3.5rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #252525', background: '#323232' }} className="content-cart">
                    <p className="content-cart1">보유금액</p>
                    <p style={{ fontSize: '2.625rem' }} className="content-cart2">3,522,170</p>
                </div>
                <div style={{ height: '7.125rem', paddingLeft: '3.2rem', paddingRight: '3.5rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #252525', background: '#323232' }} className="content-cart12">
                    <p className="content-cart13">배당률</p>
                    <p style={{ color: "#f26522" }} className="content-cart14">1.95</p>
                </div>

                {/* <div style={{ height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '0rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem' }} className="minirightpanel3">
                    <p className="minirightpanel4">베팅금액</p>

                    <input
                        style={{ color: "#d52e2e", width: "36.875rem", height: "5.375rem", backgroundColor: "#e8e8e8", borderWidth: '0.1875rem' }}
                        className="minirightpanel5"
                        placeholder="0"
                        value={nf.format(inputValue)}
                        onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </div> */}
                <div style={{ height: '7rem', paddingLeft: '3.2rem', paddingRight: '1.5rem', fontSize: '2.625rem', borderBottom: '0.1875rem solid #252525', background: '#323232' }} className="content-cart15">
                    <p className="content-cart16">베팅금액</p>
                    <input
                        style={{ color: "#d52e2e", width: "36.875rem", height: "5.3rem", backgroundColor: "#1a1a1a", border: '0.1875rem solid #404040' }}
                        className="content-cart17"
                        placeholder="0"
                        value={nf.format(inputValue)}
                        onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </div>
                {/* <div style={{ height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem' }} className="minirightpanel6">
                    <p className="minirightpanel7">적중금액</p>
                    <p className="minirightpanel8">19,500</p>
                </div> */}
                <div style={{
                    height: '6.25rem', paddingLeft: '3.2rem', paddingRight: '3.5rem', fontSize: '2.625rem',
                    // borderBottom: '0.1875rem solid #1e1e1e',
                    background: '#323232'
                }} className="content-cart18">
                    <p className="content-cart19">적중금액</p>
                    <p className="content-cart20">19,500</p>
                </div>






                <div style={{ marginTop: '3rem' }} className="betamount-btn">

                    <div className="betamount-btn1" style={{ marginTop: '-0.5rem' }}>
                        <div className="betamount-btn2">
                            <div style={{ marginRight: '0.6rem' }}>
                                <BetAmountButton amount={5000} inputValue={inputValue} setInputValue={setInputValue} />
                            </div>
                            <div style={{ marginRight: '0.6rem' }}>
                                <BetAmountButton amount={10000} inputValue={inputValue} setInputValue={setInputValue} />
                            </div>
                            <BetAmountButton amount={50000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                        <div style={{ marginTop: '0.6rem', marginBottom: '0.6rem' }} className="betamount-btn3">
                            <div style={{ marginRight: '0.6rem' }}>
                                <BetAmountButton amount={100000} inputValue={inputValue} setInputValue={setInputValue} />
                            </div>
                            <div style={{ marginRight: '0.6rem' }}>
                                <BetAmountButton amount={500000} inputValue={inputValue} setInputValue={setInputValue} />
                            </div>
                            <BetAmountButton amount={1000000} inputValue={inputValue} setInputValue={setInputValue} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '0.6rem' }} className="betfixedamount-btn">
                        <div style={{ marginRight: '0.6rem', width: '24.375rem', height: '7.5rem' }} className="betfixedamount-btn1">
                            <BetFixedAmountButton amount={22170} text="잔돈" />
                        </div>
                        <div style={{ marginRight: '0.6rem', width: '24.375rem', height: '7.5rem' }} className="betfixedamount-btn1">
                            <BetFixedAmountButton amount={0} text="초기화" />
                        </div>
                        <div className="betfixedamount-btn1" style={{ width: '24.375rem', height: '7.5rem' }}>
                            <BetFixedAmountButton amount={3522170} text="최대" />
                        </div>
                    </div>

                    <div
                        style={{
                            height: '9rem', padding: '0.1875rem', borderRadius: '0.5rem',
                            background: 'linear-gradient(to top, #3d4a8d, #88d9e8)'
                        }}
                        className='hover'
                    >
                        <button
                            style={{
                                height: '100%', padding: '1px', fontSize: '3.1875rem',
                                background: 'linear-gradient(to top, #396084, #528ccd)'
                            }}
                            className="buttonstayle"
                        >
                            <div className="div-style flex items-center justify-center">
                                <img style={{ width: '3.1875rem', height: '3.1875rem', marginTop: '0.2rem' }} src={BetIcon} alt="" />
                                <span style={{ marginLeft: '0.8125rem', color: '#d6f3ff' }} className="span-style shadow-to-text">베팅하기</span>
                            </div>
                        </button>
                    </div>
                </div>





                {(window.location.pathname === "/minigame/speedkino" || window.location.pathname === "/minigame/kinoladder") && (
                    <div className="div-style-content bg-opacity-70" style={{ zIndex: '20' }}>
                        <div className="div-style-content1">
                            <img style={{ width: '10.4375rem' }} className="div-style-content2" src={LockIcon} alt="" />
                            <div
                                style={{ textShadow: "2px 4px 4px #00000080", fontSize: '2.9375rem' }}
                                className="div-style-content3 text-18px"
                            >지금은 베팅할 수 없습니다.</div>
                        </div>
                    </div>
                )}
            </div>


            <div style={{ marginTop: '0.6rem' }} className='popup-container'>
                <div style={{ marginRight: '0.75rem' }}>
                    <Routes>
                        <Route path="powerball/*"
                            element={
                                <>
                                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                        <RoundResultPopup setPopupOpen={setPopupOpen} />
                                    </PopupControls>
                                </>
                            }
                        />

                        <Route path="powerladder/*"
                            element={
                                <>
                                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                        <PowerLadderRoundResultPopup setPopupOpen={setPopupOpen} />
                                    </PopupControls>
                                </>
                            }
                        />

                        <Route path="speedkino/*"
                            element={
                                <>
                                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                        <SpeedKinoRoundResultPopup setPopupOpen={setPopupOpen} />
                                    </PopupControls>
                                </>
                            }
                        />

                        <Route path="kinoladder/*"
                            element={
                                <>
                                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                        <PowerLadderRoundResultPopup key={2} setPopupOpen={setPopupOpen} />
                                    </PopupControls>
                                </>
                            }
                        />
                    </Routes>
                </div>

                <Link to={redirectPath} style={{ textDecoration: 'none', zIndex: '200' }}>
                    <GrayButton text='전체베팅내역' />
                </Link>
            </div>
        </div >
    )
}

export default MinigamesRightPanel

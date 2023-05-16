import React from 'react'
import BlueButton from '../../assets/minigames/blue.png'
import RedButton from '../../assets/minigames/red.png'
import YellowButton from '../../assets/minigames/yellow.png'
import GreenButton from '../../assets/minigames/green.png'
import RedButtonPressed from '../../assets/minigames/red_pressed.png'
import BlueButtonPressed from '../../assets/minigames/blue_pressed.png'
import GreenButtonPressed from '../../assets/minigames/green_pressed.png'
import YellowButtonPressed from '../../assets/minigames/yellow_pressed.png'
import './_powerballGame.scss';

const PowerballGame = ({ state, setChosen, setSelectedOption }) => {


    const BetOptions = ({
        width = 28.725,
        height = 23.375,
        gradient1 = "#988a77",
        gradient2 = "#7a6c5e",
        titleBg = "#00000030",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null,
        borderColor = "#4d473c",
        missingBorder = "left",
        type = "파워볼",
        gradient11 = '#4b443d',
        gradient12 = '#cbc2b5',
        // borderRight = '0'
    }) => (
        <div
            style={{
                width: width + "rem",
                height: height + "rem",
                marginBottom: '0.1rem'
            }}
            className={`betoptions-style`}
        >
            <div
                style={{
                    // backgroundColor: "#fdfdf8",
                    width: width - 0.1875 + "rem",
                    height: height - 0.1875 + "rem",
                    // border: '0.1875rem solid',
                    // borderImage: `linear-gradient(to bottom, ${`red`}, ${`blue`})`,
                    // border: '0.1875rem solid',

                    // borderRight: '0',
                    // borderImage: `linear-gradient(to bottom, ${gradient11}, ${gradient12}) 30`,

                }}
                className={`betoptions-style1`}
            >
                <div
                    style={{
                        border: '0.1875rem solid',
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                        borderImage: `linear-gradient(to top, ${gradient11}, ${gradient12}) 30`,
                        borderRight: (missingBorder === "both" || missingBorder === "right") ? `` : '0.1875rem solid',
                        borderLeft: (missingBorder === "both" || missingBorder === "left") ? `` : '0.1875rem solid',
                        // borderRight: (missingBorder === "right") ? `0` : '',
                        // border: '0.1875rem solid',
                        // borderImage: `linear-gradient(to bottom, ${`red`}, ${`blue`})`,
                        // borderRight: '0'
                    }}
                    className="betoptions-style2"
                >
                    {/* {missingBorder} */}
                    <div
                        style={{
                            height: '5.9rem',
                            // borderRight: (missingBorder !== "both" && missingBorder === "left") ? `0.1875rem solid ${borderColor}` : '',
                            // borderTop: `0.1875rem solid ${borderColor}`,
                            borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: (missingBorder !== "both" && missingBorder === "right") ? `0.1875rem solid ${borderColor}` : '',
                        }} className="betoptions-style3">
                        <div
                            style={{
                                height: "4rem",
                                // width: '15.9375rem', 
                                borderWidth: '0.1875rem',
                                backgroundColor: titleBg,
                                fontSize: '2.25rem',
                                paddingLeft: titleNumber === 1 || titleNumber === 2 || titleNumber === 3 || titleNumber === 4 || titleNumber === 5 ? '1.2rem' : "1rem",
                                paddingRight: titleNumber === 1 || titleNumber === 2 || titleNumber === 3 || titleNumber === 4 || titleNumber === 5 ? '1.5rem' : "1rem"
                            }}
                            className="betoptions-style4 shadow-plain2"
                        >
                            <p style={{ marginTop: '0.35rem', letterSpacing: titleNumber === 10 ? '0.1rem' : '' }} className={`${(titleNumber === 6 || titleNumber === 8) && ""} betoptions-style5`}>[{titleNumber}게임] {type}</p>
                        </div>

                        <div style={{ fontSize: '2.625rem', marginLeft: '0.75rem' }} className="betoptions-style6">
                            <div className="betoptions-style7">{subText}{subText2 ? `/${subText2}` : ''} </div>
                        </div>
                    </div>


                    {titleNumber === 1 || titleNumber === 6 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: missingBorder !== "both" && missingBorder === "left" ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: missingBorder !== "both" && missingBorder === "right" ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: titleNumber === 1 ? '#b1aa9d' : '#a0aca9'
                            // , marginLeft: '-0.3rem', marginTop: '-0.1rem'
                        }}
                            className="betoptions-style8"
                        >
                            <div className="betoptions-style9">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝", selection: "홀", buttonType: "blue" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝", selection: "홀", buttonType: "blue" }])
                                        }
                                    }}
                                    style={{ height: '11.375rem' }}
                                    className="betoptions-style10"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoptions-style11" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style12">홀</p>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{
                                        fontSize: '2.4375rem', marginLeft: '-0.3rem', marginTop: '-0.1rem'
                                    }} className="betoptions-style13">1.95</p>
                                </div>
                            </div>

                            <div className="betoptions-style14">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝", selection: "짝", buttonType: "red" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝", selection: "짝", buttonType: "red" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoptions-style15"
                                >

                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoptions-style16" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style17">짝</p>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem', marginLeft: '-0.4rem' }} className="betoptions-style18">1.95</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 2 || titleNumber === 7 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: missingBorder !== "both" && missingBorder === "left" ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: missingBorder !== "both" && missingBorder === "right" ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: titleNumber === 2 ? '#b1aa9d' : '#a0aca9'
                        }}
                            className="betoption-content"
                        >
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 2) {
                                            setSelectedOption([{ type: "파워볼", name: "언오버", selection: "언더", buttonType: "blue", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "언오버", selection: "언더", buttonType: "blue", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">언더</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 2 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">1.95</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 2) {
                                            setSelectedOption([{ type: "파워볼", name: "언오버", selection: "오버", buttonType: "red", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "언오버", selection: "오버", buttonType: "red", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">오버</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 2 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">1.95</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 3 || titleNumber === 8 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: missingBorder !== "both" && missingBorder === "left" ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: missingBorder !== "both" && missingBorder === "right" ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: titleNumber === 3 ? '#b1aa9d' : '#a0aca9'
                        }} className="betoption-space">
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝/언오버", selection: "홀언더", buttonType: "blue", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝/언오버", selection: "홀언더", buttonType: "blue", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">홀언더</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.75</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝/언오버", selection: "홀오버", buttonType: "blue", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝/언오버", selection: "홀오버", buttonType: "blue", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-2` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">홀오버</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.75</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝/언오버", selection: "짝언더", buttonType: "red", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝/언오버", selection: "짝언더", buttonType: "red", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-3` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝언더</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.75</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{ type: "파워볼", name: "홀짝/언오버", selection: "짝오버", buttonType: "red", subtitle: "4.5" }])
                                        } else {
                                            setSelectedOption([{ type: "일반볼", name: "홀짝/언오버", selection: "짝오버", buttonType: "red", subtitle: "72.5" }])
                                        }
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-4` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝오버</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.75</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 4 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: (missingBorder !== "both" && missingBorder === "left") ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: (missingBorder !== "both" && missingBorder === "right") ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: titleNumber === 4 ? '#b1aa9d' : '#a0aca9'
                        }} className="betoption-space">
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{ type: "파워볼", name: "구간", selection: "A", buttonType: "yellow", subtitle: "(0~2)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">A</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(0~2)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.15</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{ type: "파워볼", name: "구간", selection: "B", buttonType: "yellow", subtitle: "(3~4)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">B</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(3~4)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.10</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{ type: "파워볼", name: "구간", selection: "C", buttonType: "yellow", subtitle: "(5~6)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">C</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(5~6)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.10</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{ type: "파워볼", name: "구간", selection: "D", buttonType: "yellow", subtitle: "(7~9)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">D</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(7~9)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">3.15</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 5 ? (
                        <div style={{
                            height: '31.7rem',
                            // borderRight: missingBorder !== "both" && missingBorder === "left" ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: missingBorder !== "both" && missingBorder === "right" ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: titleNumber === 5 ? '#b1aa9d' : '#a0aca9'
                        }} className="betoption-spacey">
                            <div className="betoption-space-x15">
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-1`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "0", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-1` ? "indexstyle" : "indexstyle1"}  betoption-content3`} src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">0</p>
                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-2`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "1", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-2` ? "indexstyle" : "indexstyle1"}  betoption-content3`} src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">1</p>

                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-3`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "2", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-3` ? "indexstyle" : "indexstyle1"}  betoption-content3`} src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">2</p>

                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-4`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "3", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-4` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">3</p>

                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-5`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "4", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-5` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-5` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">4</p>

                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="betoption-space-x15">
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-6`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "5", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-6` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-6` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">5</p>

                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-7`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "6", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-7` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-7` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">6</p>
                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-8`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "7", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-8` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-8` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">7</p>
                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-9`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "8", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-9` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-9` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">8</p>
                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                                <div className="betoption-content-1">
                                    <div
                                        onClick={() => {
                                            setChosen(`${titleNumber}-10`)
                                            setSelectedOption([{ type: "파워볼", name: "숫자", selection: "9", buttonType: "yellow" }])
                                        }}
                                        // style={{paddingTop: "3px"}} 
                                        style={{ height: '11.375rem' }}
                                        className="betoption-content2"
                                    >
                                        <img style={{ width: '11.375rem', maxWidth: 'unset' }} className={`${state === `${titleNumber}-10` && "indexstyle"}  betoption-content3`} src={state === `${titleNumber}-10` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoptions-style-17">9</p>
                                    </div>
                                    <div style={{ height: '3.65rem' }}>
                                        <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">9.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ) : titleNumber === 9 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: (missingBorder !== "both" && missingBorder === "left") ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: (missingBorder !== "both" && missingBorder === "right") ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: '#a0aca9',
                        }} className="betoption-content9-space">
                            <div className="betoption-content--1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{ type: "일반볼", name: "구간", selection: "소", buttonType: "green", subtitle: "(15~64)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">소</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">2.90</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{ type: "일반볼", name: "구간", selection: "중", buttonType: "green", subtitle: "(65~80)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">중</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">2.60</p>
                                </div>
                            </div>
                            <div className="betoption-content--1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{ type: "일반볼", name: "구간", selection: "대", buttonType: "green", subtitle: "(81~130)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">대</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">2.90</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 10 ? (
                        <div style={{
                            height: '17.375rem',
                            // borderRight: (missingBorder !== "both" && missingBorder === "left") ? `0.1875rem solid ${borderColor}` : '',
                            borderTop: `0.1875rem solid ${borderColor}`,
                            // borderBottom: `0.1875rem solid ${borderColor}`,
                            // borderLeft: (missingBorder !== "both" && missingBorder === "right") ? `0.1875rem solid ${borderColor}` : '',
                            borderTopColor: '#a0aca9',
                        }} className="betoption-space changeChange">
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "홀소", buttonType: "green", subtitle: "(15~64)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">홀소</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.85</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "홀중", buttonType: "green", subtitle: "(65~80)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">홀중</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.55</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "홀대", buttonType: "green", subtitle: "(81~130)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">홀대</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.85</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "짝소", buttonType: "green", subtitle: "(15~64)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-4` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝소</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.85</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-5`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "짝중", buttonType: "green", subtitle: "(64~80)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-5` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝중</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.55</p>
                                </div>
                            </div>
                            <div className="betoption-content1">
                                <div
                                    onClick={() => {
                                        setChosen(`${titleNumber}-6`)
                                        setSelectedOption([{ type: "일반볼", name: "홀짝/소중대", selection: "짝대", buttonType: "green", subtitle: "(81~130)" }])
                                    }}
                                    // style={{paddingTop: "3px"}} 
                                    style={{ height: '11.375rem' }}
                                    className="betoption-content2"
                                >
                                    <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="betoption-content3" src={state === `${titleNumber}-6` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="betoption-content4">
                                        <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="betoption-content5">짝대</p>
                                        <div className='betoption-content6'>
                                            <p style={{ fontSize: "1.6rem" }} className="betoption-content7">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3.65rem' }}>
                                    <p style={{ fontSize: '2.4375rem' }} className="betoption-content8">4.85</p>
                                </div>
                            </div>
                        </div>
                    ) : <></>}

                </div>
            </div>
        </div >
    )

    return (
        <div
            style={{ width: "1260px" }}
            className="containerball"
        >
            <div className="contentball">
                {/* <PanelTitle title="파워볼" /> */}
                <div className="contentball1">
                    <div className="contentball2">
                        <div style={{ marginRight: '0.1rem' }} className="contentball2">
                            <BetOptions />
                        </div>
                        <BetOptions titleNumber={3} width={48.8} subText2="언오버" missingBorder='right' />
                    </div>
                    <div className="contentball2">
                        <div style={{ marginRight: '0.1rem' }} className="contentball2">
                            <BetOptions titleNumber={2} subText="언오버" />
                        </div>
                        <BetOptions titleNumber={4} width={48.8} subText="구간" missingBorder='right' />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }} className="contentball3">
                        <BetOptions titleNumber={5} width={77.625} height={37.7} subText="숫자" missingBorder='both' />
                    </div>
                </div>
            </div>
            <div className="contentball">
                {/* <PanelTitle title="일반볼" /> */}
                <div className="contentball1">
                    <div className="contentball2">
                        <div style={{ marginRight: '0.1rem' }}>
                            <BetOptions
                                titleNumber={6}
                                titleBg="#00000030"
                                gradient1="#687f78"
                                gradient2="#50655e"
                                borderColor='#3e4a41'
                                type='일반볼'
                                gradient11="#2b3838"
                                gradient12="#a0bab4"
                            />
                        </div>
                        <BetOptions
                            titleNumber={8}
                            titleBg="#00000030"
                            gradient1="#687f78"
                            gradient2="#50655e"
                            width={48.8}
                            subText2="언오버"
                            borderColor='#3e4a41'
                            missingBorder='right'
                            type='일반볼'
                            gradient11="#2b3838"
                            gradient12="#a0bab4"
                        />
                    </div>
                    <div className="contentball2" style={{ marginBottom: '0rem' }}>
                        <div style={{ marginRight: '0.1rem' }}>
                            <BetOptions
                                titleNumber={7}
                                titleBg="#00000030"
                                gradient1="#687f78"
                                gradient2="#50655e"
                                subText="언오버"
                                borderColor='#3e4a41'
                                type='일반볼'
                                gradient11="#2b3838"
                                gradient12="#a0bab4"
                            />
                        </div>
                        <BetOptions
                            titleNumber={9}
                            titleBg="#00000030"
                            gradient1="#687f78"
                            gradient2="#50655e"
                            width={48.8}
                            subText="구간"
                            borderColor='#3e4a41'
                            missingBorder='right'
                            type='일반볼'
                            gradient11="#2b3838"
                            gradient12="#a0bab4"
                        />
                    </div>
                    <BetOptions
                        titleNumber={10}
                        titleBg="#00000030"
                        gradient1="#687f78"
                        gradient2="#50655e"
                        width={77.625}
                        subText2="소중대"
                        borderColor='#3e4a41'
                        missingBorder='both'
                        type='일반볼'
                        gradient11="#2b3838"
                        gradient12="#a0bab4"
                    />
                </div>
            </div>
        </div>
    )
}

export default PowerballGame

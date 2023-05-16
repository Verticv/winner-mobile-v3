import React, { useState } from 'react'
import BlueButton from '../../assets/minigames/blue_sq.png'
import RedButton from '../../assets/minigames/red_sq.png'
import BlueSMButton from '../../assets/minigames/blue.png'
import RedSMButton from '../../assets/minigames/red.png'
import BlueButtonPressed from '../../assets/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../assets/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../assets/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../assets/minigames/blue_pressed.png'
import './_powerLadderGame.scss';

const PowerLadderGame = ({ setSelectedOption }) => {

    const [state, setState] = useState("")

    const PanelTitle = ({ title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder, width }) => (
        <div style={{
            height: '5.8rem',
            width: width,
            // borderTopColor: '#b8d5e6',
            // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
            // borderTop: `0.1875rem solid #abc7db`,
            borderBottom: `0.1875rem solid #313f4c`,
            // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
        }} className={`powerladdergame-content7`}>
            <div
                style={{ height: "4rem", width: '8.4375rem', borderWidth: '0.1875rem', backgroundColor: titleBg, fontSize: '2.25rem' }}
                className="powerladdergame-content8 shadow-plain2"
            >
                <p style={{ marginTop: '0.25rem' }} className="powerladdergame-content9">{titleNumber}{title}</p>
            </div>

            <div style={{ fontSize: '2.625rem', marginLeft: '0.75rem' }} className="powerladdergame-content10">
                <div className="powerladdergame-content11">{subText} {subText2 ? `/${subText2}` : ''} </div>
            </div>
        </div>
    )

    const SingleCard = ({
        width = 28.625,
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#e8f9ff",
        gradient2 = "#bcdbf6",
        titleBg = "rgb(0 0 0 / 30%)",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        button1Text = "홀",
        button2Text = "짝",
        missingBorder = "left",
        isMiddle
    }) => (
        <div
            style={{
                width: width + "rem",
                height: height + "rem",

                marginBottom: '0.1rem',

            }}
            className={`powerladdergame-content4`}
        >
            <div
                style={{
                    width: width + "rem",
                    height: height - 0.1875 + "rem",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to bottom, #698195, #445463)",
                    borderImage: 'linear-gradient(to top, #212a33, #b5becb) 30',
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' || isMiddle ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' || isMiddle ? `0.1875rem solid` : '',
                }}
                className={`powerladdergame-content5`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,

                    }}
                    className="powerladdergame-content6"
                >
                    <PanelTitle title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem',
                        // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTop: `0.1875rem solid #abc7db`,
                        // borderBottom: `0.1875rem solid #abc7db`,
                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTopColor: '#b5bdca',
                        // padding: '0.9rem 2.1rem 0',
                        paddingLeft: `${extraLeftPadding + 2}rem`,
                        paddingRight: `${extraRightPadding + 2.2}rem`,
                        padding: '0.9rem 2.2rem 0px 2rem'
                    }} className="powerladdergame-content12">
                        <div style={{ marginRight: '' }} className="powerladdergame-content13">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "홀짝", selection: "홀", buttonType: "blue_sq" }])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{ type: "파워사다리", name: "출발점", selection: "좌", buttonType: "blue_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "줄갯수", selection: "3줄", buttonType: "blue_sq" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="powerladdergame-content14"
                            >
                                <img style={{ width: '10.125rem', maxWidth: 'unset' }} className="powerladdergame-content15" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="powerladdergame-content16">{button1Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="powerladdergame-content17">1.95</p>
                            </div>
                        </div>

                        <div className="powerladdergame-content18">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "홀짝", selection: "짝", buttonType: "red_sq" }])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{ type: "파워사다리", name: "출발점", selection: "우", buttonType: "red_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "줄갯수", selection: "4줄", buttonType: "red_sq" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="powerladdergame-content19"
                            >

                                <img style={{ width: '10.125rem', maxWidth: 'unset' }} className="powerladdergame-content20" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="powerladdergame-content21">{button2Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="powerladdergame-content22">1.95</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const ThreeCard = ({
        width = 77.825,
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#e8f9ff",
        gradient2 = "#bcdbf6",
        titleBg = "rgba(0, 0, 0, 0.3)",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        missingBorder = "left"
    }) => (
        <div
            style={{
                width: width + "rem",
                height: height + "rem",
                // background: "linear-gradient(to bottom, #b8d5e6, #b7c7d4)",
                marginBottom: '0.1rem',
            }}
            className={`threecard-container`}
        >
            <div
                style={{
                    // width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to bottom, #698195, #445463)",
                    borderImage: 'linear-gradient(to top, #212a33, #b5becb) 30',
                    borderBottom: `0.1875rem solid #fff`,
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' ? `0.1875rem solid` : '',
                    // backgroundColor: "#fdfdf8",
                }}
                className={`threecard-content`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,

                    }}
                    className="threecard-content1"
                >
                    <PanelTitle width={width} isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem',
                        borderTopWidth: '0.1875rem',
                        // borderTopColor: 'white',
                        padding: '0.3rem 2.6rem 0px 2.5rem',
                        // paddingLeft: `${extraLeftPadding + 2}rem`,
                        // paddingRight: `${extraRightPadding + 2.2}rem`,
                        // borderTop: `0.1875rem solid #abc7db`,
                        // borderBottom: `0.1875rem solid #abc7db`,
                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTop: '0.1875rem solid #b5bdca',

                        // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',

                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                    }} className="threecard-content2">
                        <div style={{ marginRight: '' }} className="threecard-content3">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "left", tail: "3" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "left", tail: "3" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="threecard-content4"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content5" src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 60%)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content6">짝</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="threecard-content7">
                                    <div style={{ fontSize: '2.0625rem' }} className="threecard-content8">3</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content9">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content10">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "right", tail: "3" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "right", tail: "3" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="threecard-content11"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content12" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 60%)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content13">홀</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="threecard-content14">
                                    <div style={{ fontSize: '2.0625rem' }} className="threecard-content15">3</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content16">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content17">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-3`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "left", tail: "4" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "left", tail: "4" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="threecard-content18"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content19" src={state === `${titleNumber}-3` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 60%)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content20">홀</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="threecard-content21">
                                    <div style={{ fontSize: '2.0625rem' }} className="threecard-content22">4</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content23">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content24">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-4`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "right", tail: "4" }])
                                    } else {
                                        setSelectedOption([{ type: "파워사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "right", tail: "4" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="threecard-content25"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content26" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 60%)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content27">짝</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="threecard-content28">
                                    <div style={{ fontSize: '2.0625rem' }} className="threecard-content29">4</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content30">3.80</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div
            style={{ width: "1260px" }}
            className="powerladdergame-container"
        >
            <div className="powerladdergame-content">
                <div className="powerladdergame-content1">
                    <div className="powerladdergame-content2">
                        <div style={{ marginRight: '0.25rem' }}>
                            <SingleCard width={25.62} height={23.375} titleNumber={1} title='게임' subText="홀짝" />
                        </div>
                        <div style={{ marginRight: '0.25rem' }} >
                            <SingleCard isMiddle='true' button1Text='좌' button2Text='우' width={25.82} height={23.375} titleNumber={2} title='게임' subText="출발점" missingBorder='none' />
                        </div>
                        <div>
                            <SingleCard button1Text='3줄' button2Text='4줄' width={25.82} height={23.375} titleNumber={3} title='게임' subText="줄갯수" missingBorder='right' />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard width='77.526rem' title='게임' subText='좌우 출발 3/4줄' titleNumber={4} missingBorder="both" />
                </div>
            </div>
        </div>
    )
}

export default PowerLadderGame

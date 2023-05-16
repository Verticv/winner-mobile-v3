import React, { useState } from 'react'
import BlueButton from '../../assets/minigames/blue_sq.png'
import RedButton from '../../assets/minigames/red_sq.png'
import BlueSMButton from '../../assets/minigames/blue.png'
import RedSMButton from '../../assets/minigames/red.png'
import BlueButtonPressed from '../../assets/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../assets/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../assets/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../assets/minigames/blue_pressed.png'
import './_kinoLadderGame.scss';

const KinoLadderGame = ({ setSelectedOption }) => {

    const [state, setState] = useState("")

    // const PanelTitle = ({ title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder }) => (
    //     <div style={{
    //         height: '5.8125rem',
    //         borderTopColor: '#b8d5e6',
    //         borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #c7b8a4` : '',
    //         borderTop: `0.1875rem solid #c7b8a4`,
    //         borderBottom: `0.1875rem solid #c7b8a4`,
    //         borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #c7b8a4` : '',
    //     }} className={`kinoladdergame-content7`}>
    //         <div
    //             style={{ height: "4.4rem", width: '8.4375rem', borderWidth: '0.1875rem', backgroundColor: titleBg, fontSize: '2.25rem' }}
    //             className="kinoladdergame-content8 shadow-to-box shadow-plain2"
    //         >
    //             <p style={{ marginTop: '0.35rem' }} className="kinoladdergame-content9">{titleNumber}{title}</p>
    //         </div>

    //         <div style={{ fontSize: '2.625rem', marginLeft: '0.75rem' }} className="kinoladdergame-content10">
    //             <div className="kinoladdergame-content11">{subText} {subText2 ? `/${subText2}` : ''} </div>
    //         </div>
    //     </div>
    // )

    const PanelTitle = ({ title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder, width }) => (
        <div style={{
            height: '5.8rem',
            width: width,
            // borderTopColor: '#b8d5e6',
            // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
            // borderTop: `0.1875rem solid #abc7db`,
            borderBottom: `0.1875rem solid #443a26`,
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
        gradient1 = "#fff8ae",
        gradient2 = "#ffda8a",
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
                // background: "#c7b8a4",
                marginBottom: '0.1rem',
                // padding: '1px'
            }}
            className={`kinoladdergame-content4`}
        >
            <div
                style={{
                    width: width  + "rem",
                    height: height - 0.1875 + "rem",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to top, #5b4e37, #786749)",
                    borderImage: 'linear-gradient(to top, #443a25, #bba07c) 30',
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' || isMiddle ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' || isMiddle ? `0.1875rem solid` : '',

                }}
                className={`kinoladdergame-content5`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="kinoladdergame-content6"
                >
                    <PanelTitle title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem',
                        // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTop: `0.1875rem solid #abc7db`,
                        // borderBottom: `0.1875rem solid #abc7db`,
                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTopColor: '#baa07b',
                        padding: '0.9rem 2.1rem 0',
                        paddingLeft: `${extraLeftPadding + 2}rem`,
                        paddingRight: `${extraRightPadding + 2.2}rem`
                    }} className="kinoladdergame-content12">
                        <div style={{ marginRight: '' }} className="kinoladdergame-content13">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "홀짝", selection: "홀", buttonType: "blue_sq" }])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{ type: "키노사다리", name: "출발점", selection: "좌", buttonType: "blue_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "줄갯수", selection: "3줄", buttonType: "blue_sq" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="kinoladdergame-content14"
                            >
                                <img style={{ width: '10.125rem', maxWidth: 'unset' }} className="kinoladdergame-content15" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="kinoladdergame-content16">{button1Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="kinoladdergame-content17">1.95</p>
                            </div>
                        </div>

                        <div className="kinoladdergame-content18">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "홀짝", selection: "짝", buttonType: "red_sq" }])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{ type: "키노사다리", name: "출발점", selection: "우", buttonType: "red_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "줄갯수", selection: "4줄", buttonType: "red_sq" }])

                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="kinoladdergame-content19"
                            >

                                <img style={{ width: '10.125rem', maxWidth: 'unset' }} className="kinoladdergame-content20" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="kinoladdergame-content21">{button2Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="kinoladdergame-content22">1.95</p>
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
        gradient1 = "#fff8ae",
        gradient2 = "#ffda8a",
        titleBg = "rgb(0 0 0 / 30%)",
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
                // background: "#c7b8a4",
                marginBottom: '0.1rem',
                // padding: '1px'
            }}
            className={`three-card-container`}
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to top, #5b4e37, #786749)",
                    borderImage: 'linear-gradient(to top, #443a25, #bba07c) 30',
                    borderBottom: `0.1875rem solid #fff`,
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' ? `0.1875rem solid` : '',
                }}
                className={`three-card-content`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="three-card-content1"
                >
                    <PanelTitle width={width} isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem',
                        padding: '0.3rem 2.6rem 0px 2.5rem',
                        borderTop: '0.1875rem solid #baa07b',
                        // borderTopWidth: '0.1875rem',
                        // borderTopColor: 'white',
                        // padding: '0 3.875rem',
                        // paddingLeft: `${extraLeftPadding + 3.875}rem`,
                        // paddingRight: `${extraRightPadding + 3.875}rem`,
                        // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #c7b8a4` : '',
                        // borderBottom: `0.1875rem solid #c7b8a4`,
                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #c7b8a4` : '',
                    }} className="three-card-content2">
                        <div style={{ marginRight: '' }} className="three-card-content3">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "left", tail: "3" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "left", tail: "3" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="three-card-content4"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="three-card-content5" src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="three-card-content6">짝</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="three-card-content7">
                                    <div style={{ fontSize: '2.0625rem' }} className="three-card-content8">3</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="three-card-content9">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="three-card-content10">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "right", tail: "3" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "right", tail: "3" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="three-card-content11"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="three-card-content12" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="three-card-content13">홀</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="three-card-content14">
                                    <div style={{ fontSize: '2.0625rem' }} className="three-card-content15">3</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="three-card-content16">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="three-card-content17">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-3`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "left", tail: "4" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "홀", buttonType: "blue", tailSide: "left", tail: "4" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="three-card-content18"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="three-card-content19" src={state === `${titleNumber}-3` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="three-card-content20">홀</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="three-card-content21">
                                    <div style={{ fontSize: '2.0625rem' }} className="three-card-content22">4</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="three-card-content23">3.80</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="three-card-content10">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-4`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "right", tail: "4" }])
                                    } else {
                                        setSelectedOption([{ type: "키노사다리", name: "좌우 출발 3/4줄", selection: "짝", buttonType: "red", tailSide: "right", tail: "4" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="three-card-content11"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="three-card-content12" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="three-card-content13">짝</p>
                                <div style={{ width: '3.75rem', height: '3.75rem' }} className="three-card-content14">
                                    <div style={{ fontSize: '2.0625rem' }} className="three-card-content15">4</div>
                                </div>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="three-card-content16">3.80</p>
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
            className="kinoladdergame-container"
        >
            <div className="kinoladdergame-content">
                <div className="kinoladdergame-content1">
                    <div className="kinoladdergame-content2">
                        <div style={{ marginRight: '0.25rem' }} className="kinoladdergame-content3">
                            <SingleCard width={25.62} height={23.375} titleNumber={1} title='게임' subText="홀짝" />
                        </div>
                        <div style={{ marginRight: '0.25rem' }} className="kinoladdergame-content23">
                            <SingleCard width={25.82} isMiddle='true' button1Text='좌' button2Text='우' height={23.375} titleNumber={2} title='게임' subText="출발점" missingBorder='none' />
                        </div>
                        <div>
                            <SingleCard width={25.82} button1Text='3줄' button2Text='4줄' height={23.375} titleNumber={3} title='게임' subText="줄갯수" missingBorder='right' />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard width='77.526rem' titleNumber={4} subText='좌우 출발 3/4줄' extraLeftPadding={1.8} extraRightPadding={1.75} missingBorder="both" />
                </div>
            </div>
        </div>
    )
}

export default KinoLadderGame

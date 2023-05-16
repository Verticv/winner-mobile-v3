import React, { useState } from 'react'
import BlueButton from '../../assets/minigames/blue_sq.png'
import RedButton from '../../assets/minigames/red_sq.png'
import BlueSMButton from '../../assets/minigames/blue.png'
import RedSMButton from '../../assets/minigames/red.png'
import BlueButtonPressed from '../../assets/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../assets/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../assets/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../assets/minigames/blue_pressed.png'
import './_speedKinoGame.scss';

const SpeedKinoGame = ({ setSelectedOption }) => {

    const [state, setState] = useState("")

    // const PanelTitle = ({ title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder }) => (
    //     <div style={{
    //         height: '5.8125rem',
    //         borderTopColor: '#b8d5e6',
    //         borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
    //         borderTop: `0.1875rem solid #cf9494`,
    //         borderBottom: `0.1875rem solid #cf9494`,
    //         borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
    //     }} className={`panel-title-container`}>
    //         <div
    //             style={{ height: "4.4rem", width: '8.4375rem', borderWidth: '0.1875rem', backgroundColor: titleBg, fontSize: '2.25rem' }}
    //             className="panel-title-content shadow-to-box shadow-plain2"
    //         >
    //             <p style={{ marginTop: '0.35rem' }} className="panel-title-content1">{titleNumber}{title}</p>
    //         </div>

    //         <div style={{ fontSize: '2.625rem', marginLeft: '0.75rem' }} className="panel-title-content2">
    //             <div className="panel-title-content3">{subText} {subText2 ? `/${subText2}` : ''} </div>
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
            borderBottom: `0.1875rem solid #523535`,
            paddingLeft: '0.15rem'
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
        width = 24.625,
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
        titleBg = "rgba(0, 0, 0, 0.3)",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        button1Text = "홀",
        button2Text = "짝",
        missingBorder = "left"
    }) => (
        <div
            style={{
                width: width + "rem",
                height: height + "rem",
                // background: "#cf9494",
                marginBottom: '0.1rem',
                // padding: '1px'
                // paddingRight: button1Text === "언더" ? '0.35rem' : ""
            }}
            className={`single-card-container`}
        >
            <div
                style={{
                    // width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    // backgroundColor: "#fdfdf8",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to top, #4f3838, #6b4949)",
                    borderImage: 'linear-gradient(to top, #3a2b2b, #9a7878) 30',
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' ? `0.1875rem solid` : '',
                }}
                className={`single-card-content`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="single-card-content1"
                >
                    <PanelTitle title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem',
                        // borderTopWidth: '0.1875rem',
                        // borderTopColor: 'white',
                        borderTop: '0.1875rem solid #886666',
                        padding: '0.7rem 8.2rem 0 8rem',
                        // paddingLeft: `${extraLeftPadding + 2}rem`,
                        // paddingRight: `${extraRightPadding + 2.2}rem`,
                        // borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                        // borderTop: `0.1875rem solid #cf9494`,
                        // borderBottom: `0.1875rem solid #cf9494`,
                        // borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                    }} className="single-card-content2">
                        <div style={{ marginRight: '' }} className="single-card-content3">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝", selection: "홀", buttonType: "blue_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "언더/오버", selection: "언더", buttonType: "blue_sq" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="single-card-content4"
                            >
                                <img style={{ width: '10.2rem', maxWidth: 'unset' }} className="single-card-content5" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="single-card-content6">{button1Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="single-card-content7">1.95</p>
                            </div>
                        </div>

                        <div className="single-card-content8">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝", selection: "짝", buttonType: "red_sq" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "언더/오버", selection: "오버", buttonType: "red_sq" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="single-card-content9"
                            >

                                <img style={{ width: '10.2rem', maxWidth: 'unset' }} className="single-card-content10" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="single-card-content11">{button2Text}</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="single-card-content12 font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
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
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
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
                // background: "#cf9494",
                marginBottom: '0.2rem',
                // padding: '1px'
            }}
            className={`threecard-container`}
        >
            <div
                style={{
                    // width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    border: '0.1875rem solid',
                    background: "linear-gradient(to top, #4f3838, #6b4949)",
                    borderImage: 'linear-gradient(to top, #3a2b2b, #9a7878) 30',
                    borderBottom: `0.1875rem solid #fff`,
                    // backgroundColor: "#fdfdf8",
                    borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === '' ? `0.1875rem solid` : '',
                    borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === '' ? `0.1875rem solid` : '',
                }}
                className={`threecard-content`}
            >
                <div
                    style={{
                        // background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="threecard-content1"
                >
                    <PanelTitle width='77.526rem' isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} />

                    <div style={{
                        height: '17.375rem',
                        borderTop: '0.1875rem solid #886666',
                        padding: '0.1rem 2.6rem 0px 2.5rem',
                    }} className="threecard-content2">
                        <div style={{ marginRight: '' }} className="threecard-content8">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "홀언더", buttonType: "blue" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "홀언더", buttonType: "blue" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="threecard-content9"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content10" src={state === `${titleNumber}-1` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content11">홀언더</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content12">3.75</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content8">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "홀오버", buttonType: "blue" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "홀오버", buttonType: "blue" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="threecard-content9"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content10" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content11">홀오버</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content12">3.75</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content8">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-3`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "짝언더", buttonType: "red" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "짝언더", buttonType: "red" }])
                                    }
                                }}
                                // style={{paddingTop: "3px"}} 
                                style={{ height: '11.375rem' }}
                                className="threecard-content9"
                            >
                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content10" src={state === `${titleNumber}-3` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content11">짝언더</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content12">3.75</p>
                            </div>
                        </div>

                        <div style={{ marginRight: '' }} className="threecard-content8">
                            <div
                                onClick={() => {
                                    setState(`${titleNumber}-4`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "짝오버", buttonType: "red" }])
                                    } else {
                                        setSelectedOption([{ type: "스피드키노", name: "홀짝/언오버", selection: "짝오버", buttonType: "red" }])
                                    }
                                }}
                                style={{ height: '11.375rem' }}
                                className="threecard-content9"
                            >

                                <img style={{ width: '11.375rem', maxWidth: 'unset' }} className="threecard-content10" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{ textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem' }} className="threecard-content11">짝오버</p>
                            </div>
                            <div style={{ height: '3.65rem' }}>
                                <p style={{ fontSize: '2.4375rem' }} className="threecard-content12">3.75</p>
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
            className="speedgame-container"
        >
            <div className="speedgame-content">
                <div className="speedgame-content1">
                    <div className="speedgame-content2">
                        <div style={{ marginRight: '0.25rem', marginBottom: '0rem' }} className="speedgame-content3">
                            <SingleCard button1Text='홀' button2Text='짝' width={38.6} height={23.375} titleNumber={1} title='게임' subText="홀짝" />
                        </div>
                        <div>
                            <SingleCard button1Text='언더' button2Text='오버' width={38.6} height={23.375} titleNumber={2} title='게임' subText="언더/오버" missingBorder='right' />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard width='77.526rem' titleNumber={3} title='게임' subText="홀짝/언오버" missingBorder='both' />
                </div>
            </div>
        </div>
    )
}

export default SpeedKinoGame

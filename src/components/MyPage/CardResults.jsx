import React from 'react';
import UpIcon from '../../assets/up-red.png'
import DownIcon from '../../assets/blue-down.png'

const CardResults = ({
    bet,
    result,
    score,
    team1,
    team2,
    stat1,
    stat2,
    stat3,
    isAttached = false,
    hasUp,
    hasDown = false,
    smallCard = false,
    withoutRadius,
    smallContent = false,
    isMinigame = false,
    shouldTruncate = true.valueOf,
    secondCard,
    withTopBorder,
    width92,
    isFreeboard,
    isCompose,
    minigame
}) => {

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    if (isMinigame === true) return (
        <div style={{ borderBottomLeftRadius: withoutRadius ? '' : '0.5rem', borderBottomRightRadius: withoutRadius ? '' : '0.5rem', display: 'flex', alignItems: 'center', marginTop: withTopBorder ? '0.7rem' : '0.8rem', borderTop: withTopBorder ? '0.1875rem solid #252525' : '', paddingTop: withTopBorder ? '0.6rem' : '' }}>

            <div style={{ marginLeft: '1.1rem', fontSize: '2.625rem', marginRight: '1rem' }}>
                <div style={{ marginRight: isAttached && "0.313rem", fontSize: '2.5rem' }}>
                    <p style={{ marginTop: "2.2rem" }}>{score}</p>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                    padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "", borderRadius: '0.6rem',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            textShadow: bet === 'left' ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                            background: bet === "left" ? "linear-gradient(to top, rgb(101, 79, 57), rgb(125, 99, 72) 50%, rgb(151, 120, 89))" : "#252525",
                            borderRadius: '0.6rem',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8 ',
                            fontWeight: bet === "left" ? 'bold' : ""
                        }}
                    >
                        <div style={{
                            paddingLeft: bet === "left" ? '0.7rem' : '0.8rem',
                            letterSpacing: '-0.07rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: bet === "left" ? '' : '0.1rem',
                            paddingRight: bet === "left" ? '' : '0.15rem'
                        }}>
                            <span style={{ fontSize: '2.625rem', marginTop: '0.1rem' }}>{shouldTruncate ? truncate(team1, 11, 11) : team1}</span>
                            <div style={{ width: '7rem', textAlign: 'center' }}>
                                {hasUp && <img style={{ marginRight: '0.4375rem', width: '1.313rem', height: '1.188rem' }} src={UpIcon} alt="" />}
                                <span style={{ fontSize: '2.625rem', marginRight: '0.3rem' }}>{stat1}</span>
                            </div>
                        </div>
                    </button>
                </div>

                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '10rem' : '10rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "", borderRadius: '0.6rem',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: bet === "left" ? "#252525" : "#252525",
                            borderRadius: '0.6rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8 ',
                        }}
                    >
                        <div style={{ paddingLeft: '0rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "middle" ? '' : '0.1rem' }}>
                            <span style={{ fontSize: '2.625rem', color: '#c8c8c8' }} className="font-roboto tracking-tight text-14px">{stat2}</span>
                        </div>
                    </button>
                </div>
                <div style={{
                    background: 'linear-gradient(to top, #2f2d29, #2f2d29 50%, #4f4a41)', padding: '0.1875rem', width: smallCard ? '25.02rem' : '26.875rem', height: '7.4375rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "", borderRadius: '0.6rem',
                    cursor: 'pointer',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                }}>
                    <button style={{
                        width: '100%',
                        height: '100%',
                        textShadow: bet === 'right' ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                        background: bet === "right" ? "linear-gradient(to top,  #654f39,  #7d6348 50%, #977859)" : "#252525",
                        borderRadius: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        color: bet === "right" ? '#ffdfbd' : '#c8c8c8 ',
                        fontWeight: bet === "right" ? '' : 'bold'
                    }}>
                        <div
                            style={{
                                textShadow: bet === "right" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                                paddingRight: team2?.length > 11 ? '0.2rem' : '0.8rem',
                                paddingLeft: '0.5rem',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                width: '100%',
                                marginTop: bet === "right" ? '0.1rem' : ''
                            }}
                        >
                            <div style={{ width: hasDown ? '9rem' : '6rem', textAlign: 'center' }}>
                                <span style={{ fontSize: '2.625rem' }} className="font-roboto tracking-tight">{stat3}</span>
                                {hasDown && <img style={{ marginLeft: '0.4375rem' }} src={DownIcon} alt="" />}
                            </div>
                            <span style={{ fontSize: '2.625rem', maxWidth: smallContent ? '15.6rem' : '15.6rem', marginLeft: '1.4rem', letterSpacing: '-0.07rem' }}>{shouldTruncate ? truncate(team2, 11, 11) : team2}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div style={{ background: "#f7f7f7", borderBottomLeftRadius: withoutRadius ? '' : '0.5rem', borderBottomRightRadius: withoutRadius ? '' : '0.5rem', display: 'flex', alignItems: 'center', height: '6.938rem', padding: '0.375rem 0.3rem 0.4rem 0.4rem', paddingTop: secondCard ? '0.5rem' : '0.375rem', marginBottom: secondCard ? '0.05rem' : '', borderTop: secondCard ? '0.1875rem solid #dddddd' : '', marginTop: secondCard ? '0.063rem' : '' }}>
            <div style={{ display: 'flex', width: width92 ? '92%' : '' }} >
                <div style={{
                    background: bet === "left" ? "#5523a0" : '#bbbbbb', padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '6.188rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "", borderRadius: '0.6rem',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            background: bet === "left" ? "linear-gradient(to top, #5423a0, #9d3bbb)" : "#ffffff",
                            borderRadius: '0.6rem',
                            color: bet === "left" ? '#ffdfbd' : '#c8c8c8',
                            textShadow: bet === 'left' ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                            cursor: 'pointer',
                            fontWeight: bet === "left" ? 'bold' : ""
                        }}
                    >
                        <div
                            style={{
                                paddingLeft: bet === "left" ? '0.7rem' : '0.7rem', letterSpacing: '-0.07rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "left" ? '' : '0.1rem', paddingRight: bet === "left" ? '' : '0.15rem',
                                color: bet === "left" ? '#ffffff' : '#444444',
                            }}
                        >
                            <span style={{
                                fontSize: '2.25rem', marginTop: '-0.213rem', whiteSpace: 'nowrap',
                                maxWidth: isCompose ? "17rem" : isFreeboard ? '17rem' : hasUp ? '15.6rem' : '21rem',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {minigame ? truncate(team1, 11, 11) : truncate(team1, 9, 9)}
                            </span>
                            <div style={{ marginRight: '0.6rem' }}>
                                {hasUp && <img style={{ marginRight: '1.688rem', marginBottom: "0.25rem", width: '1.313rem', height: '1.188rem' }} src={UpIcon} alt="" />}
                                <span style={{ fontSize: '2.25rem', marginRight: '0.2rem', textAlign: 'right' }}>{stat1}</span>
                            </div>
                        </div>
                    </button>
                </div>

                <div style={{
                    background: '#bbbbbb', padding: '0.1875rem', width: smallCard ? '10rem' : '10rem', height: '6.188rem', marginRight: '0.375rem',
                    borderRadius: '0.6rem',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                    flexShrink: 0
                }}>
                    <button
                        style={{
                            width: '100%',
                            height: '100%',
                            background: bet === "middle" ? "linear-gradient(to top,  #654f39,  #7d6348 50%, #977859)" : "#ffffff",
                            textShadow: bet === "middle" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                            borderRadius: '0.6rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: bet === "middle" ? '#ffdfbd' : '#444444',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ paddingLeft: '0rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: bet === "middle" ? '' : '0.1rem' }}>
                            <span style={{ fontSize: '2.25rem' }}>{stat2}</span>
                        </div>
                    </button>
                </div>
                <div style={{
                    background: bet === "right" ? "#5523a0" : '#bbbbbb', padding: '0.1875rem', width: smallCard ? '26.875rem' : '26.875rem', height: '6.188rem', marginRight: '0.375rem',
                    textShadow: bet === "left" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "", borderRadius: '0.6rem',
                    boxShadow: '0px 0.375rem 0.188rem 0px rgba(0, 0, 0, 0.5)',
                }}>
                    <button style={{
                        width: '100%',
                        height: '100%',
                        // textShadow: bet === "right" ? "rgb(0 0 0) 0.1rem 0.1rem 0.1rem" : "",
                        background: bet === "right" ? "linear-gradient(to top,  #5423a0, #9d3bbb)" : "#ffffff",
                        borderRadius: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        color: bet === "right" ? '#ffffff' : '#444444',
                        fontWeight: bet === 'right' ? 'bold' : ''
                    }}>
                        <div
                            style={{
                                textShadow: bet === "right" ? "0.094rem 0.162rem 0px rgba(0, 0, 0, 0.5)" : "",
                                paddingRight: isFreeboard ? '0.8rem' : team2?.length > 11 ? '0.2rem' : '0.8rem',
                                paddingLeft: '',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                width: '100%',
                                marginTop: bet === "right" ? '0.1rem' : ''
                            }}
                        >
                            <div style={{ marginLeft: '0.6rem', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontSize: '2.25rem', textAlign: 'center', display: 'flex', alignItems: 'center', flexShrink: 0 }} >{stat3}</span>
                                {hasDown && <img style={{ width: '1.313rem', height: '1.188rem', objectFit: 'contain', marginLeft: '1.875rem' }} src={DownIcon} alt="" />}
                            </div>
                            <span style={{
                                marginTop: "-0.563rem",
                                fontSize: '2.25rem',
                                maxWidth: isCompose ? "17rem" : isFreeboard ? '17rem' : hasDown ? '15.6rem' : '21rem',
                                marginLeft: '', letterSpacing: '-0.07rem',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {/* {minigame ? truncate(team2, 11, 11) : truncate(team2, 7, 7)} */}
                                {team2}
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {score ? (
                <div style={{
                    marginRight: isAttached && "0.313rem",
                    fontSize: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    width: '5.5rem',
                    flexShrink: 0
                }}
                >
                    {
                        result === "cancel"
                            ? <p style={{ color: result === "cancel" ? '#4c98ff' : '', marginLeft: '0.45rem', letterSpacing: '-0.06rem', fontWeight: "bold" }}>취소</p>
                            : (result === "win" || result === "lose" || result === "equality")
                                ? (
                                    <>
                                        <p
                                            style={{
                                                marginBottom: score.length > 4 ? '-0.5rem' : '-1.4rem',
                                                marginLeft: '-0.2rem',
                                                fontWeight: "bold",
                                                color: result === "win" ? '#e65454' : result === "lose" ? '#666666' : result === 'equality' ? '#44bb60' : ''
                                            }}
                                        >
                                            {result === "win" ? "승" : result === "lose" ? "패" : result === "equality" ? "무" : ""}
                                        </p>
                                        {score.length > 5 ? (
                                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                                <p
                                                    style={{
                                                        margin: '0 0 2.2rem -0.4rem',
                                                        letterSpacing: '-0.07rem',
                                                        lineHeight: '2.3rem',
                                                        textAlign: 'start',
                                                        paddingLeft: '0.8rem',
                                                        // fontSize:'2.1rem',
                                                        marginBottom: '3.2rem'
                                                    }}
                                                >{score.split(':')[0]}:{'\n'}{score.split(':')[1]}</p>
                                            </div>

                                        ) : (
                                            <p
                                                style={{
                                                    margin: '0 0 2.2rem -0.4rem',
                                                    letterSpacing: score.length > 4 ? '-0.2rem' : '-0.07rem',
                                                    fontSize: score.length > 4 ? '2rem' : '',
                                                    lineHeight: score.length > 4 ? '2.3rem' : '',
                                                    color: "#666666"
                                                }}
                                            >{score}</p>
                                        )}

                                    </>
                                )
                                : "결과없음"
                    }
                </div>
            ) : (
                <div style={{
                    marginTop: "-0.563rem",
                    marginRight: isAttached && "5px",
                    fontSize: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '5.5rem',
                    height: '100%',
                    paddingTop: '0.1rem'
                }}
                >
                    {result === "cancel"
                        ? <p style={{ color: result === "cancel" ? '#33a1e9' : '', marginLeft: '0.45rem', letterSpacing: '-0.06rem', fontWeight: "bold" }}>취소</p>
                        : (result === "win" || result === "lose" || result === "equality")
                            ? (
                                <p
                                    style={{
                                        marginLeft: '0.45rem',
                                        color: result === "win" ? '#e65454' : result === "lose" ? '#666666' : result === 'equality' ? '#44bb60' : ''
                                    }}
                                >
                                    {result === "win" ? "승" : result === "lose" ? "패" : result === "equality" ? "무" : ""}
                                </p>
                            )
                            : "결과없음"
                    }
                </div>
            )}


        </div>
    )
}

export default CardResults;

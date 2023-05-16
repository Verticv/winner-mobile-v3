import React from 'react'
import '../BoardComposeViewPanel/RadioButton.css';
import TableHeader from '../TableHeader'
import CardHeader from '../CardHeader'
import CardResults from '../CardResults'
import CardContent from '../CardContent'

const PowerLadderBetHistoryPanel = ({
    checkedState = null,
    setCheckedState = null,
    isPopup
}) => {

    return (
        <div className='PowerLadderBetHistoryPanel'>
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1rem', margin: '0 1.86rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader middleText='VS' />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-to-box' style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='us' name='파워사다리' date='2021-06-29 15:45' isMinigame={true} minigameType="powerladder" smallCard />
                                <CardResults
                                    bet="right"
                                    result="lose"
                                    team1="홀 [200회]"
                                    team2="[200회] 짝"
                                    // team2="과달하라"
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    shouldTruncate={false}
                                    minigame
                                />
                            </div>
                            <CardContent number='1' isPopup={isPopup} withButtons={!isPopup} withInput={true} withUploadButton={isPopup} checkedState={checkedState} type={0} setCheckedState={setCheckedState} hasHistory=" 짝" time=" 2021-06-29 15:45:05" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem', margin: '2.1rem 1.8rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader middleText='VS' />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-to-box' style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='us' name='파워사다리' date='2021-06-29 15:45' isMinigame={true} minigameType="powerladder" smallCard />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    // choice="home"
                                    team1="우3홀 [200회]"
                                    team2="[200회] 좌3짝"
                                    stat1="1.95"
                                    stat2="VS"
                                    stat3="1.95"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    withoutRadius
                                    shouldTruncate={false}
                                    minigame
                                />
                            </div>
                            <CardContent number='2' isPopup={isPopup} withButtons={!isPopup} withInput={true} withUploadButton={isPopup} winAmount="+900,000,000" checkedState={checkedState} type={1} setCheckedState={setCheckedState} hasHistory=" 홀" time=" 2021-06-29 15:45:05" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerLadderBetHistoryPanel

import React from 'react'
import './BoardComposeViewPanel/RadioButton.css'
import TableHeader from '../MyPage/SportsTableHeader'
import CardHeader from '../MyPage/CardHeader'
import CardResults from '../MyPage/CardResults'
import CardContent from '../MyPage/CardContent'
import USFlagIcon from '../../assets/myPage/sports/usaFlag.png'
import ENFlagIcon from '../../assets/myPage/sports/englandFlag.png'
import SpainFlagIcon from '../../assets/flag.png'

const SportsBetHistoryPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{ background: 'linear-gradient(to top,#ededeb, #cb78e6 )', boxShadow: '0px 0px 0.75rem 0px rgba(0, 0, 0, 0.8)', padding: '0.187rem', borderRadius: '1.875rem' }}>
                <div style={{ borderRadius: "1.875rem", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0.438rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full' style={{ border: '0.45rem solid #6852a7', borderRadius: '0.625rem', boxShadow: "0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)" }}>
                                <CardHeader flag={USFlagIcon} name='축구 / 미국 - 메이저리그사커' date='  06-29 15:45' smallCard />
                                <CardResults
                                    bet="right"
                                    result="cancel"
                                    score=""
                                    team1="CF파추카"
                                    team2="과달하라 차바스 과..."
                                    stat1="2.26"
                                    stat2="2.96"
                                    stat3="3.47"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                />
                            </div>
                            <CardContent checkedState={checkedState} number="0" setCheckedState={setCheckedState} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: 'linear-gradient(to top,#ededeb, #cb78e6 )', boxShadow: '0px 0px 0.5rem 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.875rem', marginTop: '2.1rem' }}>
                <div style={{ borderRadius: "1.875rem", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0.438rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full' style={{ border: '0.45rem solid #6852a7', borderRadius: '0.625rem', boxShadow: "0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)"}}>
                                <CardHeader flag={ENFlagIcon} name='축구 / 잉글랜드 - 프리미어리그' date='06-29 15:45' smallCard />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="5:2"
                                    team1="맨유"
                                    team2="첼시"
                                    stat1="2.95"
                                    stat2="4.62"
                                    stat3="1.39"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    withoutRadius
                                />
                                <CardResults
                                    bet="right"
                                    result="win"
                                    score="0.3"
                                    team1="아스널"
                                    team2="맨시티"
                                    stat1="2.26"
                                    stat2="3.32"
                                    stat3="2.50"
                                    isAttached={false}
                                    hasUp={true}
                                    hasDown={true}
                                    secondCard='true'
                                />
                            </div>
                            <CardContent winAmount="+900,000,000" checkedState={checkedState} number="1" setCheckedState={setCheckedState} secondCard='true' />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: 'linear-gradient(to top,#ededeb, #cb78e6 )', boxShadow: '0px 0px 0.5rem 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.875rem', marginTop: '2rem' }}>
                <div style={{ borderRadius: "1.875rem", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0.438rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg" >
                            <div style={{ marginBottom: '-1rem', border: '0.45rem solid #6852a7', borderRadius: '0.625rem', boxShadow: "0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)" }} className='rounded-lg w-full'>
                                <CardHeader flag={ENFlagIcon} name='축구 / 잉글랜드 - 프리미어리그' date='06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="5:2"
                                    team1="맨유"
                                    team2="첼시"
                                    stat1="2.95"
                                    stat2="4.62"
                                    stat3="1.39"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                />
                            </div>
                            <div className='rounded-lg w-full' style={{ border: '0.45rem solid #6852a7', borderRadius: '0.625rem', boxShadow: "0px 0.188rem 0.563rem 0px rgba(0, 0, 0, 0.5)", marginTop: '1.7rem' }}>
                                <CardHeader flag={SpainFlagIcon} name='축구 / 스페인 - 라리가' date='06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="lose"
                                    score="1:2"
                                    team1="바르셀로나"
                                    team2="레알마드리드"
                                    stat1="1.80"
                                    stat2="3.32"
                                    stat3="1.90"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                />
                            </div>
                            <CardContent winAmount="0" checkedState={checkedState} number="2" setCheckedState={setCheckedState} lastElement='true' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SportsBetHistoryPanel

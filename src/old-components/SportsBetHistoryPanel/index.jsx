import React from 'react'
import '../BoardComposeViewPanel/RadioButton.css'
import TableHeader from '../TableHeader'
import CardHeader from '../CardHeader'
import CardResults from '../CardResults'
import CardContent from '../CardContent'

const SportsBetHistoryPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.6)', padding: '0.187rem', borderRadius: '1.1rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-to-box' style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='us' name='MLS' date='2021-06-29 15:45' smallCard />
                                <CardResults
                                    bet="right"
                                    result="cancel"
                                    score=""
                                    team1="CF파추카 CF파추카"
                                    team2="과달하라 차바 과달하라 차바"
                                    stat1="2.26"
                                    stat2="2.96"
                                    stat3="3.40"
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
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem', marginTop: '2.1rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-to-box' style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='uk' name='EPL' date='2021-06-29 15:45' smallCard />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="5:0"
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
                                    result="lose"
                                    score="1:2"
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
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem', marginTop: '2rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }} className="w-full">
                        <div className="w-full rounded-lg" >
                            <div style={{ marginBottom: '-1rem', border: '0.45rem solid #473b35', borderRadius: '0.4rem' }} className='rounded-lg w-full shadow-to-box'>
                                <CardHeader flag='uk' name='EPL' date='2021-06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="5:0"
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
                            <div className='rounded-lg w-full shadow-to-box' style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem', marginTop: '1.7rem' }}>
                                <CardHeader flag='spain' name='라리가' date='2021-06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="100:100"
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

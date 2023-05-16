import React from 'react'
import '../BoardComposeViewPanel/RadioButton.css';
import TableHeader from '../TableHeader'
import CardHeader from '../CardHeader'
import CardResults from '../CardResults'

const SportsMatchResultPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {
    return (
        <>
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', margin: '0 1.875rem', borderRadius: '1.3rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar">
                    <TableHeader />
                    <div style={{ padding: '0rem 0.9rem 0 0.7rem' }}>
                        <div style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem', marginBottom: '2rem' }} className='shadow-to-box'>
                            <CardHeader flag='us' name='MLS' date='2021-06-29 15:45' />
                            <CardResults
                                bet="middle"
                                result="equality"
                                score="4:4"
                                team1="CF파추카"
                                team2="과달하라 차바하아"
                                stat1="2.26"
                                stat2="2.96"
                                stat3="3.47"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>
                        <div style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem', marginBottom: '1.75rem' }} className='shadow-to-box'>
                            <CardHeader flag='uk' name='EPL' date='2021-06-29 15:45' />
                            <CardResults
                                bet="left"
                                result="win"
                                score="5:0"
                                team1="맨유"
                                team2="첼시"
                                stat1="2.95"
                                stat2="VS"
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
                                stat2="VS"
                                stat3="2.25"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                                secondCard='true'
                            />
                        </div>
                        <div style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem', marginBottom: '1.9rem' }} className='shadow-to-box'>
                            <CardHeader flag='uk' name='EPL' date='2021-06-29 15:45' />
                            <CardResults
                                bet="left"
                                result="win"
                                score="1:0"
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
                        <div style={{ border: '0.45rem solid #473b35', borderRadius: '0.4rem' }} className='shadow-to-box'>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default SportsMatchResultPanel

import React from 'react'

import TableHeader from '../MyPage/TableHeader';
import CardHeader from '../MyPage/CardHeader';
import CardResults from '../MyPage/CardResults';
import CardContent from '../MyPage/CardContent';

import USFlagIcon from '../../assets/myPage/sports/usaFlag.png'
import ENFlagIcon from '../../assets/myPage/sports/englandFlag.png'

const FreeBoardPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            {/* <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.8)', padding: '0.1875rem', borderRadius: '1.875rem'}}> */}
            <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 0.75rem 0 rgba(0, 0, 0, 0.8)', padding: '0.1875rem', borderRadius: '1.875rem'}}>
                <div style={{ borderRadius: "1.875rem", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader smallCard isFreeboard />
                    <div style={{ padding: '0.9rem' }} className="w-full">
                        <div className="w-full rounded-lg" style={{ padding: '0.2875rem 0.1875rem' }}>
                            <div className='rounded-lg w-full shadow-box-myPage' style={{ border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem' }}>
                                <CardHeader flag={USFlagIcon} name='축구 / 미국 - 메이저리그사커' date='06-29 15:45' smallCard />
                                <CardResults
                                    bet="right"
                                    result="lose"
                                    score="1:2"
                                    team1="CF파추카"
                                    team2="과달하라 차바스 text"
                                    stat1="2.26"
                                    stat2="2.96"
                                    stat3="3.40"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    smallCard
                                    width92
                                    isFreeboard
                                />
                            </div>
                            <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} isFreeboard />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.8)', padding: '0.1875rem', borderRadius: '1.875rem', marginTop: '1.7rem' }}> */}
            <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 0.75rem 0 rgba(0, 0, 0, 0.8)', padding: '0.1875rem', borderRadius: '1.875rem', marginTop: '1.7rem' }}>
                <div style={{ borderRadius: "1.875rem", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader smallCard isFreeboard />
                    <div style={{ padding: '0.9rem' }} className="w-full">
                        <div className="w-full rounded-lg" style={{ padding: '0.2875rem 0.1875rem' }}>
                            <div className='rounded-lg w-full  shadow-box-myPage' style={{ background: '', border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem' }}>
                                <CardHeader flag={ENFlagIcon} name='축구 / 잉글랜드 - 프리미어리그' date='06-29 15:45' smallCard />
                                <CardResults
                                    bet="left"
                                    result="cancel"
                                    score=""
                                    team1="맨유"
                                    team2="첼시"
                                    stat1="2.95"
                                    stat2="4.62"
                                    stat3="1.39"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    smallCard
                                    width92
                                    isFreeboard
                                />
                            </div>
                            <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} isFreeboard/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FreeBoardPanel;

import React, { useState } from 'react'
import './RadioButton.css'
import TableHeader from '../../MyPage/TableHeader';
import CardHeader from '../../MyPage/CardHeader';
import CardResults from '../../MyPage/CardResults'
import CardContent from '../../MyPage/CardContent'
import SelectAllButton from '../SelectAllButton'

import USFlagIcon from '../../../assets/myPage/sports/usaFlag.png'
import ENFlagIcon from '../../../assets/myPage/sports/englandFlag.png'
import SpainFlagIcon from '../../../assets/flag.png'

const BoardComposeViewPanel = ({
    setAttachedArray = null,
    setPopupOpen
}) => {

    const data = [
        {
            id: 0,
            flag: USFlagIcon,
            name: '축구 / 미국 - 메이저리그사커',
            date: '06-29 15:45',
            bet: "right",
            result: "lose",
            score: "4:4",
            team1: "CF파추카",
            team2: "과달하라 차바스",
            stat1: "2.26",
            stat2: "2.96",
            stat3: "3.47",
            winAmount: '0',
            hasUp: false,
            hasDown: false,
        },
        {
            id: 1,
            flag: ENFlagIcon,
            name: '축구 / 잉글랜드 - 프리미어리그',
            date: '06-29 15:45',
            bet: "left",
            result: "win",
            score: "0:3",
            team1: "맨유",
            team2: "첼시",
            stat1: "2.95",
            stat2: "3.32",
            stat3: "2.50",
            winAmount: '+900,000,000',
            hasUp: false,
            hasDown: false,
        },
        {
            id: 2,
            flag: USFlagIcon,
            name: '축구 / 미국 - 메이저리그사커',
            date: '06-29 15:45',
            bet: "right",
            result: "lose",
            score: "4:4",
            team1: "CF파추카",
            team2: "과달하라 차바스",
            stat1: "2.26",
            stat2: "2.96",
            stat3: "3.47",
            winAmount: '0',
            hasUp: false,
            hasDown: false,
        },
        {
            id: 3,
            flag: ENFlagIcon,
            name: '축구 / 잉글랜드 - 프리미어리그',
            date: '06-29 15:45',
            bet: "left",
            result: "win",
            score: "0:3",
            team1: "맨유",
            team2: "첼시",
            stat1: "2.95",
            stat2: "3.32",
            stat3: "2.50",
            winAmount: '+900,000,000',
            hasUp: false,
            hasDown: false,
        },
        {
            id: 4,
            flag: USFlagIcon,
            name: '축구 / 미국 - 메이저리그사커',
            date: '06-29 15:45',
            bet: "right",
            result: "lose",
            score: "4:4",
            team1: "CF파추카",
            team2: "과달하라 차바스",
            stat1: "2.26",
            stat2: "2.96",
            stat3: "3.47",
            winAmount: '0',
            hasUp: false,
            hasDown: false,
        },
    ]

    const addEntryClick = (id) => {
        const currentObject = data?.filter(card => card?.id === id)?.[0]
        setAttachedArray(oldArray => [...oldArray, currentObject]);
        setPopupOpen(false)
    };
    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)

    return (
        <>
            <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)', padding: '0.1875rem', borderRadius: '1.3rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar">
                    <TableHeader smallCard isFreeboard/>
                    <div style={{ padding: '0 0.9rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-box-myPage' style={{ border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem', marginTop: '1rem' }}>
                                <CardHeader flag={USFlagIcon} name='축구 / 미국 - 메이저리그사커' date='06-29 15:45' />
                                <CardResults
                                    bet="right"
                                    result="lose"
                                    score="4:4"
                                    team1="CF파추카"
                                    team2="과달하라 차바스 과"
                                    stat1="2.26"
                                    stat2="2.96"
                                    stat3="3.47"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                />
                            </div>
                            <CardContent canUpload={true} isPopup={true} withButtons={false} withInput={true} withUploadButton={true} number="0" id={data[0].id} uploadHandler={addEntryClick} checkedState={checkedState} setCheckedState={setCheckedState} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)', padding: '0.1875rem', borderRadius: '1.3rem', marginTop: '2.3rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar">
                    <TableHeader smallCard />
                    <div style={{ padding: '0 1rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div className='rounded-lg w-full shadow-box-myPage' style={{ border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem', marginTop: '1rem' }}>
                                <CardHeader flag={ENFlagIcon} name='축구 / 잉글랜드 - 프리미어리그' date='06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="win"
                                    score="5:2"
                                    team1="맨유"
                                    team2="첼시"
                                    stat1="2.95"
                                    stat3="1.39"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    withoutRadius
                                    smallCard
                                />
                                <CardResults
                                    bet="right"
                                    result="win"
                                    score="0:3"
                                    team1="아스널"
                                    team2="맨시티"
                                    stat1="2.95"
                                    stat2="3.32"
                                    stat3="2.50"
                                    isAttached={false}
                                    hasUp={true}
                                    hasDown={true}
                                    smallCard
                                />
                            </div>
                            <CardContent canUpload={true} isPopup={true} withButtons={false} withInput={true} withUploadButton={true} number="1" id={data[1].id} uploadHandler={addEntryClick} checkedState={checkedState} setCheckedState={setCheckedState} winAmount="+900,000,000" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: 'linear-gradient(to top,#ecebeb, #dbb0e8 50%, #cb78e6 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)', padding: '0.1875rem', borderRadius: '1.3rem', marginTop: '2.3rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', background: '#ffffff' }} className="shadow-subNavbar">
                    <TableHeader />
                    <div style={{ padding: '0 1rem' }} className="w-full">
                        <div className="w-full rounded-lg">
                            <div style={{ marginBottom: '0.6875rem', border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem', marginTop: '1rem' }} className='rounded-lg w-full shadow-box-myPage'>
                                <CardHeader flag={ENFlagIcon} name='축구 / 잉글랜드 - 프리미어리그' date='06-29 15:45' />
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
                            <div className='shadow-box-myPage' style={{ border: '0.45rem solid rgb(104, 82, 167)', borderRadius: '0.8rem', marginTop: '1.875rem' }}>
                                <CardHeader flag={SpainFlagIcon} name='라리가' date='06-29 15:45' />
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
                            <CardContent canUpload={true} isPopup={true} withButtons={false} withInput={true} withUploadButton={true} number="2" id={data[1].id} uploadHandler={addEntryClick} checkedState={checkedState} setCheckedState={setCheckedState} winAmount="0" />
                        </div>
                    </div>
                </div>
            </div>
            <SelectAllButton btn2Text='내역올리기' buttonsNumber={3} count={10} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />

        </>
    )
}

export default BoardComposeViewPanel

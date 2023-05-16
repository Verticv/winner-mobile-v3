import Pagination from '../Pagination'
import HomePageTopBanner from '../HomePageTopBanner';
import React, { useState } from 'react'
import SummaryIcon from '../../assets/mainPage/distributor/SummaryIcon.png'
import PieIcon from '../../assets/mainPage/distributor/pie.png'
import DetailIcon from '../../assets/mainPage/distributor/detail.png'
import MemberIcon from '../../assets/mainPage/distributor/member.png'
import RecommendIcon from '../../assets/mainPage/distributor/recommend.png'
import SummaryIcon1 from '../../assets/mainPage/distributor/SummaryIcon1.png'
import SummaryIcon2 from '../../assets/mainPage/distributor/SummaryIcon2.png'
import SummaryIcon3 from '../../assets/mainPage/distributor/SummaryIcon3.png'
import SummaryIcon4 from '../../assets/mainPage/distributor/SummaryIcon4.png'
import SummaryIcon5 from '../../assets/mainPage/distributor/SummaryIcon5.png'
import SummaryIcon6 from '../../assets/mainPage/distributor/SummaryIcon6.png'
import SummaryIcon7 from '../../assets/mainPage/distributor/SummaryIcon7.png'
import SummaryIcon8 from '../../assets/mainPage/distributor/SummaryIcon8.png'
import DefaultUser from '../../assets/mainPage/distributor/default.png'

import ScrollButton from '../ScrollButton'
import DateSearchBar from '../DateSearchBar'
import Diamond from '../../assets/mainPage/distributor/diamond.png'
import WhiteArrow from '../../assets/mainPage/distributor/arrow.png'
import WhiteArrow1 from '../../assets/mainPage/distributor/arrow1.png'
import BlueTriangle from '../../assets/mainPage/distributor/blue_triangle2.png'
import { useEffect } from 'react';

const DistributorPage = ({
    isAuthenticated,
    setAuthenticated,
    distributorPageActive,
    setDistributorPageActive,
}) => {

    useEffect(() => {
        if (window.location.pathname === '/distributor-page') {

            setDistributorPageActive('/distributor-page');
        } else {
            setDistributorPageActive('')
        }
    }, [setDistributorPageActive])

    const RecommendedUserArray = [
        {
            id: 0,
            number: 1,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 3,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: true
        },
        {
            id: 3,
            number: 2,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 6,
            number: 3,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 9,
            number: 4,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            isLast: true
        },
    ]

    const RecommendedUserArray2 = [
        {
            id: 12,
            number: 1,
            username: "louie33",
            nickname: "위너테스트3",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: false,
        },
    ]

    const [page, setPage] = useState(0);
    const [isArrowUp, setArrowUp] = useState(new Array(8).fill(false))
    const [viewOnline, setViewOnline] = useState(false)


    const handleOnChange = (position) => {
        const updatedCheckedState = isArrowUp.map((item, index) =>
            index === position ? !item : item
        );
        setArrowUp(updatedCheckedState);
    };

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }


    const SummaryCard = ({ text1, text2, img, count }) => (
        <div style={{ width: '18rem', height: '16.5rem', marginBottom: '0.8125rem', padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderRadius: '0.5rem' }}>
            <div style={{ width: '100%', height: '100%', background: '#323232', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0.4rem' }}>
                <div className='flex flex-col items-center justify-around' style={{ paddingBottom: '1.5625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <img style={{ marginTop: '1.4125rem', width: '5.1875rem' }} src={img} alt="" />
                    {text1 && <span style={{ fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.09rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.1rem', letterSpacing: '-0.07rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r616161">{text1}</span>}
                    {text2 && <span style={{ fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.375rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r616161">{text2}</span>}
                </div>
                <span style={{ fontSize: '2.25rem', lineHeight: '1.625rem', marginBottom: '1.2rem', fontFamily: 'RobotoBold', color: '#aa9264', letterSpacing: '-0.07rem' }} className="font-robotoBold tracking-tight text-blue-r0056a6">{count}</span>
            </div>
        </div>
    )

    const PercentageCell = () => (
        <>
            <div>
                <div style={{ padding: '0', width: '100%', overflowX: 'scroll', marginBottom: '1rem' }}>
                    <table style={{ width: '513.2rem', padding: '', display: 'block', borderCollapse: 'collapse', background: 'rgba(36,36,36)' }}>
                        <thead style={{ height: '8.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', borderBottom: '0.1875rem solid #202020' }}>
                            <tr style={{ height: '8.8125rem', letterSpacing: '-0.07rem' }}>
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: '#1a1b1c' }}>구분</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1rem', paddingTop: '' }}>스포츠</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '' }}>미니게임</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span style={{letterSpacing:'-0.24rem'}}>프레그메틱</span><br /><span>플레이</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>에볼루션</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>로얄지</td>
                                <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', display: 'flex', flexDirection: 'column', paddingTop: '1.2rem', paddingLeft: '0.7rem' }}><span>아시아</span><span>게이밍</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>드림</span><br /><span>게이밍</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>섹시</span><br /><span>게이밍</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem', letterSpacing:'-0.24rem' }}>빅게이밍</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>오리엔탈</span><br /><span>게임</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem', letterSpacing:'-0.24rem' }}>이주기</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>마이크로</span><br /><span>게이밍</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>YGG</span><br /><span>드라실</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>드라군</span><br /><span>소프트</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>분고</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>플레이슨</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>넷엔트</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>퀵스핀</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>스페이드</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>하바네로</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>월드매치</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>엘리시움</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>플레이</span><br /><span>엔고</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>YL</span><br /><span>게이밍</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>레드</span><br /><span>타이거</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>플레이텍</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>스카이</span><br /><span>윈드</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>씨큐나인</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>올웨이</span><br /><span>스핀</span></td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>와즈단</td>

                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>PG</span><br /><span>소프트</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>로얄슬롯</span><br /><span>게이밍</span></td>

                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>두윈</span><br /><span>카지노</span></td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>보타</span><br /><span>카지노</span></td>

                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>e-스포츠</td>
                                <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>키론</span><br /><span>가상게임</span></td>

                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingRight: '2rem' }}>관리</td>
                            </tr>
                        </thead>
                        <tbody style={{ height: '8.8125rem', background: '#323232' }}>
                            <tr style={{ height: '8.8125rem', fontFamily: 'RobotoRegular', color: '#c8c8c8', letterSpacing: '-0.07rem', borderBottomLeftRadius: '1rem' }}>
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: '#2c2c2c', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium' }}>변경</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1.3rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                <td>
                                    <button
                                        className='shadow-to-box hover'
                                        style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                                    >
                                        <div
                                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: 'linear-gradient(to top, rgb(127, 95, 63), rgb(166, 124, 82))', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}
                                        >
                                            <span className="small-padding shadow-to-text" style={{ color: 'rgb(255, 232, 189)' }}>
                                                수정
                                            </span>

                                        </div>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

    const DetailCell = () => (
        <>
            <div>
                <div style={{ display: 'flex', }}>
                    <div style={{ width: '38.5rem', height: '5.7rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.8rem' }}>
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }}>
                            <span style={{ color: '#ffdfbd' }}>입금 :</span>
                            <span style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.625rem' }}>{truncate("000,000,000", 15, 15)}</span>
                        </div>
                    </div>
                    <div style={{ width: '38.5rem', height: '5.7rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.8rem' }}>
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }}>
                            <span style={{ color: '#ffdfbd' }}>보너스 :</span>
                            <span style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.625rem' }}>{truncate("0", 15, 15)}</span>
                        </div>
                    </div>
                    <div style={{ width: '38.5rem', height: '5.7rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '', marginTop: '1.8rem', marginLeft: '1rem', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: '1.8rem' }}>
                        <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.5rem' }} src={Diamond} alt="" />
                        <div style={{ marginTop: '0.15rem' }}>
                            <span style={{ color: '#ffdfbd' }}>출금 :</span>
                            <span style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.625rem' }}>{truncate("0", 15, 15)}</span>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '0', width: '100%', overflowX: 'scroll', marginBottom: '1rem' }}>
                    <table style={{ width: '474.625rem', padding: '', display: 'block', background: '', borderCollapse: 'collapse' }}>
                        <thead style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', background: '#242424', color: '#ccc2b6' }}>
                            <tr style={{ height: '8.925rem', borderBottom: '0.1875rem solid #202020' }}>
                                <td style={{ width: '13.8125rem', textAlign: 'center', background: 'rgb(29, 30, 31)' }}>구분</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>스포츠</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>미니게임</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem', letterSpacing: '-0.1rem' }}><span style={{letterSpacing:'-0.24rem'}}>프레그메틱</span><br /><span >플레이</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem' }}>에볼루션</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem' }}>로얄지</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2rem' }}><span>아시아</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }}><span>드림</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }}><span>섹시</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem', letterSpacing:'-0.24rem' }}>빅게이밍</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>오리엔탈</span><br /><span>게임</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem', letterSpacing:'-0.24rem' }}>이주기</td>

                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>마이크로</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>YGG</span><br /><span>드라실</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>드라군</span><br /><span>소프트</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>분고</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>플레이슨</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>넷엔트</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>퀵스핀</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>스페이드</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>하바네로</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>월드매치</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>엘리시움</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>플레이</span><br /><span>엔고</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>YL</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>레드</span><br /><span>타이거</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>플레이텍</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>스카이</span><br /><span>윈드</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>씨큐나인</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>올웨이</span><br /><span>스핀</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>와즈단</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>PG</span><br /><span>소프트</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>로얄슬롯</span><br /><span>게이밍</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>두윈</span><br /><span>카지노</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>보타</span><br /><span>카지노</span></td>

                                <td style={{ backgroundColor: "#242424e6", width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center h-full flex items-center justify-center">e-스포츠</td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>키론</span><br /><span>가상게임</span></td>
                                <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', background: '#1d1e1f' }}>합계</td>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '2.625rem', fontFamily: 'RobotoRegular', color: '#c8c8c8' }} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                            <tr style={{ height: '8.925rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #202020', letterSpacing: '-0.07rem', background: '#323232', color: '#c8c8c8' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', background: '#2c2c2c', color: '#ccc2b6' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.9rem', paddingBottom: '0.2rem' }} className="text-right">1.09M</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">33K</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">3.06M</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4">0</td>
                                <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'center', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td>
                            </tr>
                            <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #202020', background: '#2e2e2e' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', background: '#2c2c2c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4">0</td>
                                <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'right', paddingRight: '3.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>

                            </tr>
                            <tr style={{ height: '8.925rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', padding: '0.3rem 0 0 0.5rem', background: '#2c2c2c ' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right pr-4">0</td>
                                <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'right', paddingRight: '3.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

    function RecommendedUserCell({ items, withPadding }) {

        const [isUserCountOpen, setUserCountOpen] = useState(new Array(20).fill(false))
        const [subArrowClicked, setSubArrowClicked] = useState(new Array(8).fill(false))
        const handleOnChange1 = (position) => {
            const updatedCheckedState = isUserCountOpen.map((item, index) =>
                index === position ? !item : item
            );
            setUserCountOpen(updatedCheckedState);
        };

        const handleOnChange2 = (position) => {
            const updatedCheckedState = subArrowClicked.map((item, index) =>
                index === position ? !item : item
            );
            setSubArrowClicked(updatedCheckedState);
        };

        return items.map(item => (
            <>
                <div style={{
                    fontSize: '2.625rem', height: '11.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontFamily: 'RobotoRegular',
                    padding: '0.6rem 5.875rem 0px 1.875rem',
                    background: item.id % 2 === 1 ? '#242424' : '#323232',
                    letterSpacing: '-0.07rem',
                    paddingLeft: withPadding ? '1.875rem' : '0',
                }} className={`${item.id % 2 === 1 ? "bg-white" : "bg-gray-f8f9fb"} ${item.isLast ? "border-b" : "border-b"} w-full flex items-center justify-evenly font-roboto text-gray-r585858 tracking-tight border-l border-r border-gray-dddddd`}>
                    <div className="w-full h-full flex items-center justify-center" style={{ width: '13rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '2.7rem' }}>{item.number}</div>
                    <div className="w-full h-full flex items-center justify-center" style={{ width: '21.7rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '0.2rem' }}>{item.username}</div>
                    {item.name && (
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium" style={{ width: '16.6rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>{item.name}</div>
                    )}
                    <div className="w-full h-full flex items-center justify-center font-spoqaMedium" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', paddingLeft: '3.5rem' }}>{item.nickname}</div>
                    <div className="relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginLeft: '0.9rem', marginRight: '-0.9rem' }}>
                        {item.user_count === 0
                            ? <div className="" style={{ fontFamily: 'RobotoRegular' }}>{item.added_amount}</div>
                            :
                            <button
                                style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                                className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} hover flex items-center justify-center rounded-lg hover:opacity-75`}
                                onClick={() => {
                                    handleOnChange1(item.id)
                                }}
                            >
                                <div
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: isUserCountOpen[item.id] === true ? 'linear-gradient(to top, #b45a00, #f38d27)' : 'linear-gradient(#a67c52, #7f5f3f)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                    className={`${isUserCountOpen[item.id] === true
                                        ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                        : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                        } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-8 py-5 shadow-to-box shadow-to-text`}
                                >
                                    <span className="font-spoqaMedium tracking-tight text-white small-padding" style={{ color: 'rgb(255, 232, 189)' }}>
                                        {isUserCountOpen[item.id] === true ? "접기" : "보기"}  {item.user_count}
                                    </span>
                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isUserCountOpen[item.id] === true ? '' : 'rotate(180deg)' }} className={isUserCountOpen[0] === false && " transform rotate-180"} src={WhiteArrow1} alt="" />
                                </div>
                            </button>
                        }
                        {isUserCountOpen[item.id] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem'}}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full text-center flex flex-col items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div>{item.recommended_date}</div>
                        <div className="flex items-center -mt-3.5">{item.login_date}</div>
                        <div className="flex items-center -mt-3.5 font-spoqaMedium">({item.absent_date})</div>
                    </div>
                    <div className="test relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginLeft: '', marginRight: '-0.1rem', paddingLeft: withPadding ? '2.5rem' : '5.1rem' }}>
                        <button
                            style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem' }}
                            className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} hover flex items-center justify-center rounded-lg hover:opacity-75 shadow-to-box shadow-to-text`}
                            onClick={() => {
                                handleOnChange1(item.id + 1)
                            }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: isUserCountOpen[item.id + 1] === true ? 'linear-gradient(to top, #b45a00, #f38d27)' : 'linear-gradient(#a67c52, #7f5f3f)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                className={`${isUserCountOpen[item.id + 1] === true
                                    ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                    : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                    } flex items-center justify-center rounded-lg border w-full h-full cursor-pointer px-10 py-5 shadow-to-box shadow-to-text`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white" style={{ color: 'rgb(255, 232, 189)' }}>
                                    {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                                </span>
                                <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isUserCountOpen[item.id + 1] === true ? '' : 'rotate(180deg)' }} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow1} alt="" />
                            </div>
                        </button>
                        {isUserCountOpen[item.id + 1] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem' }}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.added_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.bonus}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.withdraw_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.added_withdraw_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.bet_amount}</p></div>
                    <div className="w-full h-full flex items-center justify-end text-right" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', textAlign: 'right' }}><p className="pr-32px">{item.win_lose}</p></div>
                    <div className="relative w-full h-full flex items-center justify-center" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', paddingLeft: withPadding ? '5rem' : '' }}>
                        <button
                            style={{ width: "11rem", height: '6.375rem', fontSize: '2.4375rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to top, #4b3b09, #e8b888)', padding: '0.1875rem', borderRadius: '0.5625rem', marginRight: !withPadding ? '-8rem' : '' }}
                            className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} hover flex items-center justify-center rounded-lg hover:opacity-75 shadow-to-box shadow-to-text`}
                            onClick={() => {
                                handleOnChange1(item.id + 2)
                            }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', background: isUserCountOpen[item.id + 2] === true ? 'linear-gradient(to top, #b45a00, #f38d27)' : 'linear-gradient(#a67c52, #7f5f3f)', borderRadius: '0.5625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07REM' }}
                                className={`${isUserCountOpen[item.id + 2] === true
                                    ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db"
                                    : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                    } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-10 py-5`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white" style={{ color: 'rgb(255, 232, 189)' }}>
                                    {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                                </span>
                                <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isUserCountOpen[item.id + 2] === true ? '' : 'rotate(180deg)' }} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow1} alt="" />
                            </div>
                        </button>
                        {isUserCountOpen[item.id + 2] === true && (
                            <div className="absolute bottom-0 -mb-px" style={{ position: 'absolute', bottom: '-1rem', left: items === RecommendedUserArray2 && "11.5rem"  }}>
                                <img style={{ width: '3.111875rem', height: 'auto' }} className='object-contain' src={BlueTriangle} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="w-full h-full flex items-center justify-end" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><p className="pr-32px">{item.point}</p></div>
                    <div className="w-full h-full flex items-center justify-end" style={{ width: '18rem', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><p className="pr-32px">{item.holding_amount}</p></div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: ' #131313 0px 18px 36px -18px inset',
                        borderTop: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id + 1] === true || isUserCountOpen[item.id + 2] === true) && "0.375rem solid #a67c52",
                        opacity: '0.9',
                    }}
                    className={`flex flex-col relative`}
                >
                    {(isUserCountOpen[item.id] === true && item.hasSubArray === true) && (
                        <>
                            <div
                                style={{ display: 'flex' }}
                            >
                                <div className=" w-full flex flex-col"
                                    style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem', width: '100%' }}
                                >
                                    <div style={{ height: '8.9625rem', fontSize: '2.625rem', background: 'rgb(36,36,36)', padding: !withPadding ? '0' : '0px 1.875rem', borderBottomWidth: '0.1875rem', display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', justifyContent: 'space-evenly' }} className="test w-full bg-gray-r8e9296 border-b border-r border-l border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                        <div style={{ width: '13rem', paddingLeft: '2.6rem', textAlign: '', paddingTop: '0.6rem' }}>번호</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '21.7rem', letterSpacing: '-0.07rem', paddingTop: '0.7rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(0)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>아이디</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[0] === true ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '18rem', textAlign: 'center', paddingLeft: '3.4rem', paddingTop: '0.6rem' }} className="text-center -mt-3.5">별명</div>
                                        <button
                                            style={{ margin: '0', padding: '0', width: '18rem', height: '100%', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}
                                            className="text-center flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(1)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', marginTop: '1.2rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>하부</div>
                                                <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', marginTop: '' }}>유저수</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[1] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ width: '18rem', height: '100%', fontSize: '2.4rem', textAlign: 'center', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className="text-center flex items-center justify-center hover:opacity-75 "
                                            onClick={() => handleOnChange2(2)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                                                <div style={{ height: '3.29rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center' }}>추천일시</div>
                                                <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center', margin: '-0.5rem 0' }} className="flex items-center -mt-3.5">로그인일시</div>
                                                <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center' }} className="flex items-center -mt-3.5">(미접속일수)</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', fontSize: '2.4rem', transform: subArrowClicked[2] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '18rem', textAlign: 'center' }}>요율보기</div>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">입금액</div>
                                        <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">보너스</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(3)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>출금액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[3] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', textAlign: 'center' }}>입출금액</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(4)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>베팅액</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[4] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', display: 'flex', height: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(5)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>윈루즈</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[5] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <div style={{ width: '18rem', textAlign: 'center' }}>상세내역</div>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex text-center items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(6)}
                                        >
                                            <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>포인트</p>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[6] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                        <button
                                            style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                            className="text-center flex items-center justify-center hover:opacity-75"
                                            onClick={() => handleOnChange2(7)}
                                        >
                                            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>보유</div>
                                                <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>금액</div>
                                            </div>
                                            <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: subArrowClicked[7] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                        </button>
                                    </div>
                                    <RecommendedUserCell items={RecommendedUserArray2} />
                                </div>
                            </div>
                        </>
                    )}

                    {isUserCountOpen[item.id + 1] === true && (
                        <>
                            {(isUserCountOpen[item.id] === true && item.hasSubArray === true) ? (
                                <>
                                    <div className="h-10px" />
                                    <PercentageCell />
                                </>
                            ) : (<PercentageCell />)}
                        </>
                    )}
                    {isUserCountOpen[item.id + 2] === true && (

                        <>
                            {((isUserCountOpen[item.id] === true && item.hasSubArray === true) || isUserCountOpen[item.id + 1] === true) ? (
                                <>
                                    <div className="h-10px" />
                                    <DetailCell />
                                </>
                            ) : (<DetailCell />)}
                        </>

                    )}
                </div>

            </>
        ));
    }

    const UsersOnline = ({ name = "tntwk" }) => (
        <div
            style={{
                background: 'linear-gradient(to top, #232323, #4f4f4f)',
                height: '6.6rem',
                marginRight: '1.5375rem',
                padding: '0.1875rem',
                borderRadius: '3.2rem',
                paddingTop: '0.2rem'
            }}
            className="rounded-full  border border-gray-dddddd flex items-center justify-center"
        >
            <div
                style={{
                    background: "#6b6b6b",
                    width: 'max-content',
                    height: '100%',
                    paddingTop: '0.1875rem',
                    borderRadius: '3.2rem'
                }}
                className="h-full w-full rounded-full flex items-center"
            >

                <div style={{
                    marginBottom: '0.28125rem',
                    paddingLeft: '1.1rem',
                    paddingRight: '2.1rem',
                    background: 'linear-gradient(to top, #4b443c, #2f2d29)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '3.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '0.3rem'
                }} className="h-full w-full rounded-full flex items-center">
                    <img style={{ width: '3.9375rem', height: '3.9375rem', marginRight: '0.7rem', marginTop: '-0.4rem' }} className='mr-3' src={DefaultUser} alt="" />
                    <span style={{ fontSize: '2.8125rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium pt-2">{name}</span>
                </div>
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col h-full">
            <ScrollButton />
            <HomePageTopBanner pageTitle='총판페이지' toPath='/mypage' />
            <div style={{ margin: '0', marginTop: '0', overflowX: 'hidden', marginRight: '0', marginBottom: '0' }} className="relative overflow-hidden flex flex-col h-full">
                <div style={{ marginLeft: '1.875rem', height: '11.1875rem', fontSize: '3rem', paddingTop: '' }} className='flex flex-col items-center'>
                    <div style={{ margin: 'auto', marginBottom: '0.25rem', background: '#272726', display: 'flex', width: '52rem', marginTop: '1.6rem', letterSpacing: '-0.07rem', height: '5rem', paddingTop: '0.7rem', borderRadius: '3rem', justifyContent: 'center' }} className="tracking-tight flex items-center">
                        <p style={{ margin: '0', color: '#aa9264', fontFamily: 'SpoqaHanSansNeoMedium', marginRight: '1rem', marginLeft: '1.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '21.4rem' }}>{truncate('Louie3', 12, 12)}</p>
                        <p style={{ margin: '0', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }}>님의 총판 정보입니다.</p>
                    </div>
                </div>

                <div style={{ marginTop: '1.3rem' }} className="relative flex flex-col justify-start limit:justify-center">

                    <div className="flex flex-col items-start w-full h-full">

                        <div className="w-1836px">
                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.4rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3rem', height: '3.1875rem', marginRight: '0.8125rem', marginTop: '-0.3rem' }} src={SummaryIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '', color: '#ccc2b6', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>총판현황</span>
                            </div>

                            <div style={{ marginLeft: '1.875rem', width: '73.7rem', display: 'flex', flexWrap: 'wrap' }} className="flex w-full flex-wrap">
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon1} text1="전체 유저" text2="" count={5} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon2} text1="요율 설정" text2="완료건" count={20} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon3} text1="요율 설정" text2="미완료건" count={5} />
                                </div>
                                <SummaryCard img={SummaryIcon4} text1="전체 포인트" text2="" count={0} />

                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon5} text1="현재까지" text2="사용 포인트" count={0} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon6} text1="현재" text2="나의 포인트" count={0} />
                                </div>
                                <div style={{ marginRight: '0.5625rem' }}>
                                    <SummaryCard img={SummaryIcon7} text1="진행중인" text2="금액" count="78,307.50" />
                                </div>
                                <SummaryCard img={SummaryIcon8} text1="제휴 금액" text2="" count="117,515,875.76" />
                            </div>

                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.3rem', marginTop: '4rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', marginRight: '0.8125rem' }} src={PieIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '0rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', letterSpacing: '-0.07rem' }}>롤링요율</span>
                            </div>

                            <div className='flex relative div-shadow' style={{ display: 'flex', position: 'relative' }}>
                                <div style={{ padding: '0', width: '114.75rem', background: '#1e1e1e' }}>
                                    <div style={{ width: '75.925rem', overflowX: 'scroll', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', padding: '0.1875rem', margin: '0 1.7rem', boxShadow: '0 0rem 1rem 0 #000', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }} className="w-full overflow-scroll">
                                        <table style={{ width: '425.3rem', padding: '', display: 'block', borderCollapse: 'collapse', background: '#2e2e2e', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}>
                                            <thead style={{ height: '8.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', borderBottom: '0.1875rem solid #202020' }} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                                <tr style={{ height: '8.8125rem', letterSpacing: '-0.07rem' }}>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1rem', paddingTop: '' }}>스포츠</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '' }}>미니게임</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}><span style={{letterSpacing:'-0.24rem'}}>프레그메틱</span><br /><span>플레이</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>에볼루션</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '', paddingLeft: '1.4rem' }}>로얄지</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}><span style={{letterSpacing:'-0.24rem'}}>아시아</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}><span style={{letterSpacing:'-0.24rem'}}>드림</span><br /><span>게이밍</span></td>

                                                    <td style={{ width: '14.8rem', fontSize: '2.625rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>섹시</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', letterSpacing:'-0.24rem' }}>빅게이밍</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>오리엔탈</span><br /><span>게임</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', letterSpacing:'-0.24rem' }}>이주기</td>

                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>마이크로</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>YGG</span><br /><span>드라실</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>드라군</span><br /><span>소프트</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>분고</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>플레이슨</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>넷엔트</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>퀵스핀</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>스페이드</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>하바네로</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>월드매치</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>엘리시움</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>플레이</span><br /><span>엔고</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>YL</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>레드</span><br /><span>타이거</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>플레이텍</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>스카이</span><br /><span>윈드</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>씨큐나인</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>올웨이</span><br /><span>스핀</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>와즈단</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>PG</span><br /><span>소프트</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>로얄슬롯</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>두윈</span><br /><span>카지노</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>보타</span><br /><span>카지노</span></td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>e-스포츠</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}><span>키론</span><br /><span>가상게임</span></td>
                                                </tr>
                                            </thead>
                                            <tbody style={{ height: '8.8125rem', background: '#323232', borderBottomLeftRadius: '1rem' }} className="w-full text-585858 tracking-tight font-spoqaMedium">
                                                <tr style={{ height: '8.8125rem', fontFamily: 'RobotoRegular', color: '#c8c8c8', letterSpacing: '-0.07rem', borderBottomLeftRadius: '1rem' }} className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingRight: '1.3rem', borderBottomLeftRadius: '1rem' }}>0.70%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.70%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '' }}>0.00%</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '16.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                    <td style={{ width: '14.5rem', fontSize: '2.625rem', textAlign: 'center', paddingLeft: '1rem' }}>0.00%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='nav-shadow' style={{ height: '17rem' }}></div>
                            </div>

                            <div style={{ marginLeft: '1.875rem', marginBottom: '1.1rem', marginTop: '5rem', display: 'flex', alignItems: 'center' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', marginRight: '0.8125rem', marginTop: '0.2rem' }} src={DetailIcon} alt="" />
                                <span style={{ fontSize: '3rem', marginTop: '0.4rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>나의 상세내역</span>
                            </div>

                            <div style={{ marginLeft: '1.875rem', maxWidth: '1242px' }} className="relative w-full flex flex-col justify-center overflow-visible DistributorPage">
                                <DateSearchBar withMargin={false} isLeagueSearch={false} withBlackButton isDistributorPage={true} />
                            </div>


                            <div style={{ width: '73.875rem', height: '12.7rem', borderWidth: '0.1875rem', borderRadius: '3.1875rem', padding: '2.2rem 2.75rem', margin: '1.875rem 0', marginLeft: '1.875rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', background: '#2e2e2e', border: '0.1875rem solid #635f5b', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex flex-wrap w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067">
                                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginLeft: '0.2rem', width: '50%' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.12rem' }} className="text-white">입금 :</span>
                                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>2,520,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ fontSize: '2.5rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.3125rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.12rem' }} className="text-white">출금 :</span>
                                                <span className="text-yellow-ffcc000" style={{ color: '#ffd200' }}>5,800,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ width: '50%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: '' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.3125rem' }} src={Diamond} alt="" />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.12rem' }} className="text-white">보너스 :</span>
                                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>500,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ fontSize: '2.5rem' }} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ width: '1.2rem', height: '1.3125rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.12rem' }} className="text-white">입출금 합계 :</span>
                                                <span className="text-red-f47d7d" style={{ color: '#ff7f7f' }}>-300,200,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex relative div-shadow' style={{ display: 'flex', position: 'relative' }}>
                                <div style={{ padding: '0', width: '114.75rem' }}>
                                    <div style={{ width: '75.625rem', background: 'linear-gradient(to top, #1f1f1e, #343434 80%)', borderTopLeftRadius: '0.4rem', borderBottomLeftRadius: '0.4rem', overflow: 'scroll', height: '35.8rem', marginLeft: '1.875rem', padding: '0.1875rem', boxShadow: 'rgb(0 0 0) 0 0rem 1rem 0' }} className="w-full overflow-scroll">
                                        <table style={{ width: '469.625rem', padding: '', display: 'block', background: '', borderCollapse: 'collapse' }}>
                                            <thead style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', background: '#242424', color: '#ccc2b6' }}>
                                                <tr style={{ height: '8.925rem', borderBottom: '0.1875rem solid #202020' }}>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', background: 'rgb(29, 30, 31)' }}>구분</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>스포츠</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>미니게임</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '1rem' }}><span style={{letterSpacing:'-0.24rem'}}>프레그메틱</span><br /><span >플레이</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '0.5rem' }}>에볼루션</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem' }}>로얄지</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }}><span>드림</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '2.5rem' }}><span>섹시</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem', letterSpacing:'-0.24rem' }}>빅게이밍</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>오리엔탈</span><br /><span>게임</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '3rem', letterSpacing:'-0.24rem' }}>이주기</td>

                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>마이크로</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>YGG</span><br /><span>드라실</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', paddingRight: '' }}><span>드라군</span><br /><span>소프트</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>분고</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>플레이슨</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>넷엔트</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>퀵스핀</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>스페이드</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>하바네로</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>월드매치</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>엘리시움</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>플레이</span><br /><span>엔고</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>YL</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>레드</span><br /><span>타이거</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>플레이텍</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>스카이</span><br /><span>윈드</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>씨큐나인</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>올웨이</span><br /><span>스핀</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}>와즈단</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>PG</span><br /><span>소프트</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>로얄슬롯</span><br /><span>게이밍</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>두윈</span><br /><span>카지노</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>보타</span><br /><span>카지노</span></td>
                                                    <td style={{ backgroundColor: "#242424e6", width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }} className="text-center h-full flex items-center justify-center">e-스포츠</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem' }}><span>키론</span><br /><span>가상게임</span></td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'center', paddingTop: '0.5rem', background: '#1d1e1f' }}>합계</td>
                                                </tr>
                                            </thead>
                                            <tbody style={{ fontSize: '2.625rem', fontFamily: 'RobotoRegular', color: '#c8c8c8' }} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                                <tr style={{ height: '8.925rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #202020', letterSpacing: '-0.07rem', background: '#323232', color: '#c8c8c8' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', background: '#2c2c2c', color: '#ccc2b6' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.9rem', paddingBottom: '0.2rem' }} className="text-right">1.09M</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">33K</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right">3.06M</td>
                                                    {/* <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4">0</td> */}
                                                    <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'center', paddingRight: '1.2rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td>
                                                </tr>
                                                <tr style={{ height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #202020', background: '#2e2e2e' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', background: '#2c2c2c' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right">0</td>
                                                    {/* <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0.4rem' }} className="text-right pr-4">0</td> */}
                                                    <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'right', paddingRight: '3.8rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                                </tr>
                                                <tr style={{ height: '8.925rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem', background: '#323232' }} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                    <td style={{ width: '13.8125rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6', textAlign: 'center', padding: '0.3rem 0 0 0.5rem', background: '#2c2c2c ' }} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.6rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right">0</td>
                                                    {/* <td style={{ width: '13.8125rem', textAlign: 'right', paddingRight: '0.8rem', paddingBottom: '0rem' }} className="text-right pr-4">0</td> */}
                                                    <td style={{ backgroundColor: "#2c2c2c", color: "", width: '13.8125rem', textAlign: 'right', paddingRight: '3.8rem', paddingBottom: '0.2rem' }} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='nav-shadow' style={{ height: '35rem' }}></div>
                            </div>
                            <div style={{ marginLeft: '1.875rem', marginTop: '4.3125rem', marginBottom: '0.75rem', fontFamily: 'SpoqaHanSansNeoMedium', display: 'flex', alignItems: 'center', letterSpacing: '-0.07rem' }} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{ width: '3.1875rem', height: '2.75rem', marginRight: '0.7rem' }} className='object-contain -mt-1.5' src={MemberIcon} alt="" />
                                <div style={{ fontSize: '3rem', color: '#ccc2b6', marginTop: '0.1rem' }}>접속중인 회원수 : <span className="font-spoqaBold tracking-tight text-gray-r454545" style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#c8c8c8' }}>2명</span></div>

                                <div
                                    style={{
                                        width: "13.25rem",
                                        height: "5.0625rem",
                                        borderRadius: "0.5625rem",
                                        marginLeft: "2.4rem",
                                        padding: '0.1875rem',
                                        background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                                        boxShadow: 'rgb(0 0 0) 0 0.4375rem 0.75rem 0',
                                        marginTop: '-0.1rem'
                                    }}
                                    className="hover flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                                    onClick={() => setViewOnline(!viewOnline)}
                                >
                                    <div
                                        style={{
                                            background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                                            borderRadius: "0.4625rem",
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                                    >
                                        <span style={{
                                            fontSize: '2.625rem', color: '#ffdfbd', fontFamily: 'SpoqaHanSansNeoMedium',
                                            marginTop: '0.2rem',
                                            marginLeft: '-0.1rem',
                                        }} className="shadow-to-text font-spoqaMedium tracking-tight text-white pt-px">
                                            {viewOnline ? "닫기" : "보기"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {viewOnline && (
                                <div style={{ marginLeft: '1.875rem', display: 'flex', position: 'relative' }} className='flex relative'>
                                    <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '74.5rem', position: 'absolute', zIndex: '50' }} className="absolute h-full z-50"></div>
                                    <div style={{ width: '75.75rem', height: "9rem", padding: '0 1.225rem', borderRadius: '1.25rem', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderRightWidth: '0', display: 'flex', position: 'relative', alignItems: 'center', overflow: 'scroll', background: '#2e2e2e' }} className="flex bg-gray-f9f9f9 relative border border-gray-dddddd rounded-2xl items-center overflow-scroll">
                                        <UsersOnline />
                                        <UsersOnline name="tkskdl12" />
                                    </div>
                                </div>
                            )}
                            <div style={{ marginLeft: '1.875rem', marginTop: '4.3rem', fontSize: '3rem', width: '73.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="flex items-end justify-between tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <div className="flex items-center items-center flex" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '3.1875rem', height: '2.9375rem', marginRight: '0.7125rem' }} className='object-contain -mt-1.5' src={RecommendIcon} alt="" />
                                    <div className='mt-1' style={{ color: '#ccc2b6' }}>추천 회원내역</div>
                                </div>

                                <div style={{ maxWidth: '40.6875rem', height: '5.3125rem', border: '0.1875rem solid #635f5b', fontSize: '2.625rem', borderRadius: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2e2e2e', padding: '0 2rem', marginTop: '0.1rem' }}>
                                    <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '0.9rem' }} src={Diamond} alt="" />
                                    <div style={{ marginTop: '0.15rem' }}>
                                        <span style={{ color: '#ffffff' }}>보유금 총합계 :</span>
                                        <span style={{ color: '#ffcc00', letterSpacing: '0', marginLeft: '0.625rem' }}>{truncate("75,000", 15, 15)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex relative div-shadow' style={{
                                marginLeft: '1.8125rem', color: '#c8c8c8', padding: '0.1875rem',
                                borderTopLeftRadius: '0.4rem',
                                borderBottomLeftRadius: '0.4rem',
                                background: 'linear-gradient(to top, rgb(31, 31, 30), rgb(52, 52, 52) 80%)',
                                boxShadow: 'rgb(0 0 0) 0px 0rem 1rem 0px',
                                marginTop: '0.375rem',
                            }}>
                                <div style={{ padding: '0', width: '114.75rem', background: '' }}>
                                    <div style={{ width: '75.625rem', borderRightWidth: '0', display: 'flex', flexDirection: 'column', overflow: 'scroll', background: '#1e1e1e' }}>
                                        <div style={{ width: '290.125rem', padding: '', display: 'flex', flexDirection: 'column', fontSize: '2.625rem' }}>
                                            <div style={{ height: '8.9625rem', fontSize: '2.625rem', background: '#2e2e2e', padding: '0px 1.875rem', borderBottom: '0.1875rem solid #202020', display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>
                                                <div style={{ width: '13rem', paddingLeft: '2.6rem', textAlign: '', paddingTop: '0.6rem' }}>번호</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '21.7rem', letterSpacing: '-0.07rem', paddingTop: '0.7rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(0)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>아이디</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[0] === true ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '16.6rem', textAlign: 'center', marginTop: '0.5rem' }}>이름</div>
                                                <div style={{ width: '18rem', textAlign: 'center', paddingLeft: '3.4rem', paddingTop: '0.6rem' }} className="text-center -mt-3.5">별명</div>
                                                <button
                                                    style={{ margin: '0', padding: '0', width: '18rem', height: '100%', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(1)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', marginTop: '1.2rem' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>하부</div>
                                                        <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', marginTop: '' }}>유저수</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[1] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ width: '18rem', height: '100%', fontSize: '2.4rem', textAlign: 'center', background: 'bottom', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75 "
                                                    onClick={() => handleOnChange(2)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ccc2b6', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                                                        <div style={{ height: '3.29rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center' }}>추천일시</div>
                                                        <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center', margin: '-0.5rem 0' }} className="flex items-center -mt-3.5">로그인일시</div>
                                                        <div style={{ height: '3.29rem', display: 'flex', alignItems: 'center' }} className="flex items-center -mt-3.5">(미접속일수)</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', fontSize: '2.4rem', transform: isArrowUp[2] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '18rem', textAlign: 'center' }}>요율보기</div>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">입금액</div>
                                                <div style={{ width: '18rem', textAlign: 'center' }} className="text-center -mt-3.5">보너스</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(3)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>출금액</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[3] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', textAlign: 'center' }}>입출금액</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(4)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>베팅액</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[4] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', display: 'flex', height: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(5)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>윈루즈</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[5] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <div style={{ width: '18rem', textAlign: 'center' }}>상세내역</div>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="flex text-center items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(6)}
                                                >
                                                    <p style={{ color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>포인트</p>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[6] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                                <button
                                                    style={{ padding: '0', margin: '0', background: 'bottom', width: '18rem', height: '100%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                                    className="text-center flex items-center justify-center hover:opacity-75"
                                                    onClick={() => handleOnChange(7)}
                                                >
                                                    <div className="flex flex-col items-center justify-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>보유</div>
                                                        <div className="flex items-center -mt-3.5" style={{ display: 'flex', alignItems: 'center', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.625rem' }}>금액</div>
                                                    </div>
                                                    <img style={{ width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', transform: isArrowUp[7] === false ? "rotate(180deg)" : "" }} src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt="" />
                                                </button>
                                            </div>
                                            <RecommendedUserCell withPadding items={RecommendedUserArray} />
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-shadow' style={{ height: '100%' }}></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '3.75rem', paddingBottom: '0.01rem' }} className="flex justify-center w-full">
                            <Pagination withMarginBottom page={page} setPage={setPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistributorPage

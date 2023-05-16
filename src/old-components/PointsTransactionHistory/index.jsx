import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import { useNavigate } from 'react-router-dom'

const tableData = [
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#464646',
            buttonText: '취소',
            textColor: '#c8c8c8',
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],
    [
        {
            0: { 신청포인트: '100,000,000' },
        },
        {
            0: { 사용구분: "보유머니전환" }
        },
        {
            0: { 신청일시: "2021-06-30 14:45" }
        },
        {
            0: { 처리일시: "2021-06-30 14:45" }
        },
        {
            buttonColor: '#826140',
            buttonText: '완료'
        }
    ],

]

const PointsTransactionHistory = ({ SubMenuList, subActiveButton, setSubActiveButton }) => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/points')
                setSubActiveButton('/mypage/points/all/points-transaction-history')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/points/all/points-transaction-history')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    return (
        <div className="flex flex-col items-center">

            <div style={{
                fontSize: '2.624375rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '2.5rem', letterSpacing: '-0.07rem', marginBottom: '1.4rem',
            }} className="font-spoqaMedium tracking-tight my-4 text-gray-r8c8c8c">
                <span className="font-spoqaBold text-blue-r0056a6" style={{
                    color: '#aa9264', fontFamily: 'SpoqaHanSansNeoBold', textOverflow: 'ellipsis', maxWidth: '34.4rem', overflow: 'hidden', whiteSpace: 'nowrap'
                }}>{truncate('louie3', 22, 22)}</span>
                <span className="" style={{ color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium' }}>님의 포인트전환 정보입니다.</span>
            </div>

            {SubMenuList}

            <div className='date-div' style={{ marginTop: '-1.1rem' }}>
                <DateSearchBar isLeagueSearch={false} withBlackButton isPoints='true' />
            </div>
            <div className="h-full w-full">
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='21rem'
                    isButtonGradient={false}
                    hasLeftInput={false}
                    width45
                />
            </div>


            <div style={{ marginTop: '1.875rem', paddingBottom: '0.01rem' }}>
                <Pagination page={page} setPage={setPage} />
            </div>

        </div>
    )
}

export default PointsTransactionHistory

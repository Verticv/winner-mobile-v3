import Pagination from '../Pagination'
import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import SelectAllButton from '../SelectAllButton'
import { useNavigate } from 'react-router-dom'

const tableData = [
    [
        {
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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
            0: { 충전금액: '12,000' },
        },
        {
            0: { 보너스금액: "+12,000" }
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



const MoneyChargeHistory = ({ subActiveButton, setSubActiveButton }) => {

    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/money')
                setSubActiveButton('/mypage/money/charge/history')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/money/charge/history')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <div className="MoneyChargeHistory">
            <DateSearchBar isLeagueSearch={false} withBlackButton />
            <HistoryTable
                containerBackground='#f7f9fc'
                tableData={tableData}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
                isPopupOpen={isPopupOpen}
                setPopupOpen={setPopupOpen}
                cardHeight='20.9375rem'
                isButtonGradient={false}
            />
            <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            <div style={{marginTop:'-0.2rem', marginBottom:'-16rem'}}>
                <Pagination page={page} setPage={setPage} />
            </div>
        </div>
    )
}

export default MoneyChargeHistory

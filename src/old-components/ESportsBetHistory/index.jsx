import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DateSearchBar from '../DateSearchBar'

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const ESportsBetHistory = ({ isState = 0, setState, showSub = false, isPopup = false, subActiveButton, setSubActiveButton }) => {

    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/bet-history')
                setSubActiveButton('/mypage/bet-history/all/e-sports')
            }, 0)
        }
        return (() => {
            if (subActiveButton)
                setSubActiveButton('/mypage/bet-history/all/e-sports')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <div className="">
            <DateSearchBar isLeagueSearch={false} isPoints />

            <div style={{
                padding: '0.1875rem',
                background: 'linear-gradient(to top, #1f1f1e, #3b3b3b 50%, #4a4a4a)',
                boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.6)',
                borderRadius: '1rem',
                position: 'relative',
                margin: '0 1.875rem', 
                marginTop: '1.875rem'
            }}>
                <div style={{ backgroundColor: "#323232", WebkitTextStroke: "0.2px", fontSize: '2.625rem', color: '#c8c8c8', padding: '1.875rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', borderRadius: '1rem' }}>
                    베팅내역이 없습니다.
                </div>
            </div>

        </div>
    )
}

export default ESportsBetHistory

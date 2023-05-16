import React, { useState, useEffect } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from '../SportsBetHistoryPanel'
import SelectAllButton from '../SelectAllButton'
import { useNavigate } from 'react-router-dom';

const SportsBetHistory = ({ checkedState, setCheckedState, showSub = true, attachedArray, setAttachedArray, setPopupOpen, subActiveButton, setSubActiveButton }) => {

    const [isAllSelected, setAllSelected] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/bet-history')
                setSubActiveButton('/mypage/bet-history/all/sports')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/bet-history/all/sports')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    return (
        <div className="SportsBetHistory">
            <DateSearchBar isGameResultsSearch={true} />
            <div className="w-full h-full z-10" style={{ margin: '1.9rem 1.875rem 3.75rem' }}>
                <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} />
                <div style={{ margin: '0 1.9rem', marginBottom: '3rem' }}>
                    <SelectAllButton btn2Text='내역올리기' buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
                </div>
            </div>
        </div>
    )
}

export default SportsBetHistory

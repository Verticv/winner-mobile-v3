import React from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsMatchResultPanel from '../SportsMatchResultPanel'
import './SportsContent.scss'
const SportsContent = ({ checkedState, setCheckedState, showSub = true, attachedArray, setAttachedArray, setPopupOpen }) => {
    return (
        <div className="w-full SportsBetHistory" style={{ marginTop: '1rem' }}>
            <DateSearchBar isGameResultsSearch={true} />
            <SportsMatchResultPanel />
        </div>
    )
}

export default SportsContent

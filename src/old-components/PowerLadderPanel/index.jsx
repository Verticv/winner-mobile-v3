import React from 'react'
import PowerLadderGame from '../PowerLadderGame'
import PowerballHistory from '../PowerballHistory'
import PowerLadderResults from '../PowerLadderResults'


const PowerLadderPanel = ({
    selectedTab,
    setSelectedTab,
    historyArray,
    resultsArray,
    checkedState,
    setCheckedState,
    setSelectedOption
}) => {

    return (
        <>
            {selectedTab === 0 ? (
                <PowerLadderGame setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <PowerLadderResults array={resultsArray} />
            ) : (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />
            )}

        </>
    )
}

export default PowerLadderPanel

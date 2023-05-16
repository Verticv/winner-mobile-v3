import React from 'react'
import SpeedKinoGame from '../SpeedKinoGame'
import PowerballHistory from '../PowerballHistory'
import SpeedKinoResults from '../SpeedKinoResults'

const SpeedKinoPanel = ({
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
                <SpeedKinoGame setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <SpeedKinoResults array={resultsArray} />
            ) : selectedTab === 2 ? (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />
            ) : <></>}
        </>
    )
}

export default SpeedKinoPanel

import React, { useState } from 'react'

import PowerBallResults from '../PowerBallResults'
import PowerballHistory from '../PowerballHistory'
import PowerballGame from '../PowerballGame'

const PowerballPanel = ({
    selectedTab,
    setSelectedTab,
    historyArray,
    resultsArray,
    checkedState,
    setCheckedState,
    setSelectedOption
}) => {

    const [chosen, setChosen] = useState("")


    return (
        <>
            {selectedTab === 0 ? (
                <PowerballGame state={chosen} setChosen={setChosen} setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <PowerBallResults array={resultsArray} />
            ) : (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />
            )}



        </>
    )
}

export default PowerballPanel

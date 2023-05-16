import React from 'react';
import KinoLadderGame from '../KinoLadderGame';
import PowerballHistory from '../PowerballHistory';
import PowerLadderResults from '../PowerLadderResults';

const KinoLadderPanel = ({
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
                <KinoLadderGame setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <PowerLadderResults array={resultsArray} />
            ) : selectedTab === 2 ? (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />
            ) : <></>}
        </>
    )
}

export default KinoLadderPanel

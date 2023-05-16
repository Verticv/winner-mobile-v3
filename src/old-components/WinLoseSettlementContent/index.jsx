import WinLoseSettlementContent from '../WinLoseSettlementContent'
import React from 'react'

import NavBottom from '../NavBottom';

const WinLoseSettlement = ({ isAuthenticated, setAuthenticated }) => {
    return (
        <div style={{ maxWidth: '1242px' }} className="relative w-full flex flex-col justify-center overflow-hidden">

            <div className="w-full z-30 flex flex-col items-center">
            </div>

            <div className="flex flex-col items-start limit:items-center w-full h-full">
                <div className="flex w-full">
                    <WinLoseSettlementContent />
                    <NavBottom />
                </div>

            </div>
        </div>
    )
}

export default WinLoseSettlement

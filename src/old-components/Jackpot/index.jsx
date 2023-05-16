import React from "react";
import jackpot from '../../assets/Jackpot-GIF.gif';

function Jackpot() {
    return (
        <div className="Jackpot">
            <img src={jackpot} alt="" className="jackpot-container" />

            <div className="jackpot-range">
                <p>₩1,234,567,890</p>
            </div>
        </div>
    );
}

export default Jackpot;

import HorizontalMenu5 from '../HorizontalMenu5'
import React, { useState } from 'react'
import './_speedKinoResults.scss';

const SpeedKinoResults = ({ array }) => {

    const [subTab, setSubTab] = useState(0)

    const SubTabArray = [
        { id: 0, text: "숫자합 홀짝" },
        { id: 1, text: "숫자합 마지막자리 언오버" }
    ]

    function Strip({ items }) {
        return items.map(item => (
            <div
                style={{
                    width: "61px",
                    backgroundColor: item.id % 2 === 0 ? "#f8f8f8" : "#f7f9fc",
                }}
                className="strip-content"
            >
                <div style={{ borderColor: "#c5c5c5" }} className="strip-content1">
                    <p
                        className="strip-content2"
                        style={{ color: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                    >
                        {subTab === 0 ? (
                            <>
                                {item.id % 2 === 0 ? "짝" : "홀"}
                            </>
                        ) : (
                            <>
                                {item.id % 2 === 0 ? "오버" : "언더"}
                            </>
                        )}
                    </p>
                </div>

                <div
                    style={{ height: "62px", backgroundColor: "#ffffff" }}
                    className="strip-content3"
                >
                    {item.row1 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content4"
                        >
                            {item.row1}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#f7f9fc" }}
                    className="strip-content5"
                >
                    {item.row2 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content6"
                        >
                            {item.row2}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#ffffff" }}
                    className="strip-content7"
                >
                    {item.row3 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content8"
                        >
                            {item.row3}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#f7f9fc" }}
                    className="strip-content9"
                >
                    {item.row4 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content10"
                        >
                            {item.row4}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#ffffff" }}
                    className="strip-content11"
                >
                    {item.row5 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content12"
                        >
                            {item.row5}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#f7f9fc" }}
                    className="strip-content13"
                >
                    {item.row6 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content14"
                        >
                            {item.row6}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#ffffff" }}
                    className="strip-content15"
                >
                    {item.row7 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content16"
                        >
                            {item.row7}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#f7f9fc" }}
                    className="strip-content17"
                >
                    {item.row8 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content18"
                        >
                            {item.row8}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#ffffff" }}
                    className="strip-content19"
                >
                    {item.row9 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content20"
                        >
                            {item.row9}
                        </div>
                    )}
                </div>
                <div
                    style={{ height: "62px", backgroundColor: "#f7f9fc" }}
                    className="strip-content21"
                >
                    {item.row10 && (
                        <div
                            style={{ width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5" }}
                            className="strip-content22"
                        >
                            {item.row10}
                        </div>
                    )}
                </div>
            </div>
        ))
    }

    return (
        <div style={{ height: "737px" }} className="speed-kino-results-container">
            <div style={{ height: "51px", backgroundColor: "#fdfdfd" }} className="speed-kino-results-content">
                <HorizontalMenu5 selectedTab={subTab} setSelectedTab={setSubTab} itemsArray={SubTabArray} />
            </div>

            <div className="strip-container">
                <Strip items={array} />
            </div>
        </div>
    )
}

export default SpeedKinoResults

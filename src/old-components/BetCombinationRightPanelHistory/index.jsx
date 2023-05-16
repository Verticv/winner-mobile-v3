import React from "react";
import "./_betCombinationRightPanelHistory.scss";

const BetCombinationRightPanelHistory = () => {
    const HistoryCard = ({
        title = "노르웨이 - Eliteserien",
        team1 = "FK Haugesund",
        team2 = "스트룀스고세 IF",
        side = "left",
        type = "축구 - 승무패 (게임)",
        time = "2021-06-29 16:00",
        winStatus = "lose",
    }) => (
        <div
            style={{
                borderRadius: "1.3125rem",
                // borderWidth: '0.1875rem',
                fontSize: "2.625rem",
                marginBottom: "0.375rem",
                background: 'linear-gradient(to top, #21211f, #7b746d)',
                padding: '0.1875rem'
            }}
            className="historycard-content1"
        >
            <div
                style={{
                    height: "6rem",
                    backgroundColor: "#252525",
                    paddingLeft: "1.325rem",
                    borderTopWidth: "0.1875rem",
                    borderLeftWidth: "0.1875rem",
                    borderRightWidth: "0.1875rem",
                    borderTopLeftRadius: "1.3125rem",
                    borderTopRightRadius: "1.3125rem",
                }}
                className="historycard-content2"
            >
                {title}
            </div>

            <div
                style={{
                    background: "linear-gradient(to left, #2e2e2e, #4b4b49)",
                    paddingLeft: "1.3rem",
                    borderBottomWidth: "0.1875rem",
                    borderLeftWidth: "0.1875rem",
                    borderRightWidth: "0.1875rem",
                    borderBottomLeftRadius: "1.3125rem",
                    borderBottomRightRadius: "1.3125rem",
                    paddingRight: '2rem'
                }}
                className="historycard-content3"
            >
                <p style={{ fontSize: "2.4375rem", color: '#c8c8c8' }} className="historycard-content4">
                    {time}
                </p>
                <p
                    className="historycard-content5"
                    style={{ color: side === "left" ? "#ffffff" : "#e65454" }}
                >
                    {team1}
                </p>
                <p
                    className="historycard-content6"
                    style={{ color: side === "left" ? "#e65454" : "#ffffff" }}
                >
                    {team2}
                </p>
                <p className="historycard-content7" style={{ color: '#c8c8c8', maxWidth: '59rem' }}>{type}</p>
                <div style={{ right: "1.8125rem" }} className="historycard-content8">
                    <p style={{ color: '#c8c8c8' }}>{winStatus === "win" ? "승 @" : "패 @"}</p>
                    <p
                        className="historycard-content9"
                        style={{ color: winStatus === "win" ? "#e65454" : "#4c98ff" }}
                    >
                        {winStatus === "win" ? "2.26" : "00.00"}
                    </p>
                </div>
                <div style={{ right: "1.8125rem" }} className="historycard-content10">
                    대기중
                </div>
            </div>
        </div>
    );

    const ResultsCard = () => (
        <div
            style={{
                borderRadius: "1.3125rem",
                fontSize: "2.4375rem",
                border: "0.1875rem solid #3f3f3f",
                background: "#4d4d4d",
                

            }}
            className="resultscard-content"
        >
            <div className="resultscard-content1" >
                <p className="resultscard-content2" style={{ color: '#c8c8c8' }}>베팅시간</p>
                <p className="resultscard-content3">2021-06-29 16:00</p>
            </div>
            <div className="resultscard-content4">
                <p className="resultscard-content5">베팅금액</p>
                <p className="resultscard-content6">5,000</p>
            </div>
            <div className="resultscard-content7">
                <p className="resultscard-content8">배당률</p>
                <p className="resultscard-content9">1.00</p>
            </div>
            <div className="resultscard-content10">
                <p className="resultscard-content11">적중예상금액</p>
                <p className="resultscard-content12">11,000.00</p>
            </div>
            <div className="resultscard-content13">
                <p className="resultscard-content14">티켓번호</p>
                <p className="resultscard-content15">189106964</p>
            </div>
        </div>
    );

    return (
        <div>
            <div className="historycard-container">
                <div
                    style={{ paddingLeft: "1.875rem", paddingRight: "1.875rem" }}
                    className="historycard-content"
                >
                    <HistoryCard
                        team1="FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund " 
                        team2="스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF " 
                        side="left"
                        winStatus="lose"
                    />
                    <HistoryCard
                        title="오스트리아 - 컵"
                        team1="SV Kuchl"
                        team2="FC Blau Weiss Linz"
                        side="right"
                        winStatus="win"
                    />
                    <ResultsCard />
                </div>
            </div>

            <div
                className="divcontent-1"
                style={{ height: "0.1875rem", margin: "1.875rem 0" }}
            ></div>

            <div
                style={{ paddingLeft: "1.875rem", paddingRight: "1.875rem" }}
                className="divcontent-2"
            >
                <div className="divcontent-3">
                    <HistoryCard
                        title="러시아 - Liga Pro Women"
                        team1="Malahlt"
                        team2="Granat"
                        side="right"
                        type="배구 - 승무패 (게임)"
                        winStatus="win"
                    />
                    <ResultsCard />
                </div>
            </div>
        </div>
    );
};

export default BetCombinationRightPanelHistory;

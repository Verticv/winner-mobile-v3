import React from 'react';
import './_powerballHistory.scss';

const PowerballHistory = ({ array, checkedState, setCheckedState }) => {

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    function InboxList({ items }) {
        return items.map(item => (
            <div
                style={{ height: "62px", backgroundColor: item.id % 2 === 0 ? "#ffffff" : "#f7f9fc" }}
                className="inbox-list-container"
            >
                <div style={{ width: "60px" }} className="inbox-list-content">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{ width: "117px", WebkitTextStroke: "0.2px" }} className="inbox-list-content1">{item.number}</div>
                <div style={{ width: "147px", WebkitTextStroke: "0.2px" }} className="inbox-list-content1">{item.eventCount}</div>
                <div style={{ width: "170px", WebkitTextStroke: "0.2px" }} className="inbox-list-content1">{item.betTime}</div>
                <div style={{ width: "164px", WebkitTextStroke: "0.2px" }} className="inbox-list-content1">{item.type}</div>
                <div style={{ width: "95px" }} className="inbox-list-content2">
                    <div
                        style={{
                            backgroundColor:
                                item.historyType === 0
                                    ? "#d52e2e"
                                    : item.historyType === 1
                                        ? "#00c051"
                                        : item.historyType === 2
                                            ? "#d52e2e"
                                            : item.historyType === 3
                                                ? "#2e6dd5"
                                                : ""
                        }}
                        className="inbox-list-content3"
                    >
                        {
                            item.historyType === 0
                                ? "짝"
                                : item.historyType === 1
                                    ? (
                                        <div className="inbox-list-content4">
                                            <span>홀소</span>
                                            <span style={{ fontSize: "9px" }}>(15~64)</span>
                                        </div>
                                    )
                                    : item.historyType === 2
                                        ? (
                                            <div className="inbox-list-content4">
                                                <span>오버</span>
                                                <span style={{ fontSize: "9px" }}>72.5</span>
                                            </div>
                                        )
                                        : item.historyType === 3
                                            ? "홀"
                                            : ""
                        }
                    </div>
                </div>
                <div style={{ width: "126px", WebkitTextStroke: "0.2px" }} className="inbox-list-content5">{item.percentage}</div>
                <div style={{ width: "112px", WebkitTextStroke: "0.2px" }} className="inbox-list-content6">{item.betAmount}</div>
                <div style={{ width: "121px", color: item.profit.includes("+") ? "#d52e2e" : "#585858", WebkitTextStroke: "0.2px" }} className="inbox-list-content6">{item.profit}</div>
                <div style={{ width: "107px", color: item.win ? "#d52e2e" : "#585858", WebkitTextStroke: "0.2px" }} className="inbox-list-content5">{item.win === true ? "승" : "패"}</div>
            </div>
        ));
    }

    return (
        <div className="powrball-history-container">

            <div className="powrball-history-content">
                <div style={{ width: "60px" }} className="powrball-history-content1">선택</div>
                <div style={{ width: "117px" }} className="powrball-history-content2">번호</div>
                <div style={{ width: "147px" }} className="powrball-history-content2">회차</div>
                <div style={{ width: "170px" }} className="powrball-history-content2">베팅시간</div>
                <div style={{ width: "164px" }} className="powrball-history-content2">게임분류</div>
                <div style={{ width: "95px" }} className="powrball-history-content2">베팅내역</div>
                <div style={{ width: "126px" }} className="powrball-history-content2">배당률</div>
                <div style={{ width: "112px" }} className="powrball-history-content2">베팅금액</div>
                <div style={{ width: "121px" }} className="powrball-history-content2">적중/손실</div>
                <div style={{ width: "107px" }} className="powrball-history-content2">승리</div>
            </div>

            <InboxList items={array} />
        </div>
    )
}

export default PowerballHistory

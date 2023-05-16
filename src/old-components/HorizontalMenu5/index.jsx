import React from 'react';
import './_horizontalMenu5.scss';

const HorizontalMenu5 = ({
    itemsArray,
    selectedTab = 0,
    setSelectedTab
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button
                key={item.id}
                style={{
                    height: "41px",
                    backgroundColor: selectedTab === item.id
                        ? "#3771ad"
                        : "#c7c7c7"
                }}
                className="tabslist-content"
                onClick={() => setSelectedTab(item.id)}
            >
                <div
                    style={{
                        height: "37px",
                        background: selectedTab === item.id
                            ? "linear-gradient(to bottom, #3e9dfd, #1c7cde)"
                            : "linear-gradient(to bottom, #f7f7f7, #e9e9e9)"
                    }}
                    className="tabslist-content1 rounded-b-md rounded-b-lg"
                >
                    <div className="tabslist-content2">
                        <div
                            style={{ color: selectedTab === item.id ? "#ffffff" : "#585858" }}
                            className="tabslist-content3"
                        >
                            {item.text}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="tabslist-container">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu5

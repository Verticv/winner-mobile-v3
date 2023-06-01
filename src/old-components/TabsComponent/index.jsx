import React from "react";
import './_tabs.scss';
const TabsComponent = ({
  tabsData,
  selectedTab,
  setSelectedTab,
}) => {
  const handleTabClick = (id) => {
    setSelectedTab(id);
  };
  return (
    <div className="tab-container">
      <div
        className="animated-tab"
        style={{
          transform: `translateX(${selectedTab === 0 ? "0%" : selectedTab === 1 ? "102%" : "205%"
            })`,
        }}></div>
      <button className={`${selectedTab === 0? 'active':''}`} onClick={() => handleTabClick(0)} >인기게임</button>
      <button className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>추천게임</button>
      <button className={`${selectedTab === 2 ? 'active' : ''}`}  onClick={() => handleTabClick(2)}>신규게임</button>
    </div>
  )
}

export default TabsComponent;
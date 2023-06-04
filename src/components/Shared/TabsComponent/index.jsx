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
      <div className='tab-line top'></div>
      <div
        className="animated-tab"
        style={{
          transform: `translateX(${selectedTab === 0 ? "0%" : selectedTab === 1 ? "102%" : "207%"
            })`,
        }}>
        
      </div>
      {tabsData && (tabsData.map((obj, index) => {
        return (
            <button
              key={index}
              className={`${selectedTab === obj.id ? 'active' : ''}`}
              onClick={() => handleTabClick(obj.id)} >
            <p>{obj.title}</p>
            </button>
          )
        })
      )}
      <div className='tab-line bottom'></div>
    </div>
  )
}

export default TabsComponent;
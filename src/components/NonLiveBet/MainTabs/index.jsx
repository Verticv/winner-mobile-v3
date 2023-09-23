import React, { useState } from 'react';
import './_mainTabs.scss';
import Icon1 from '../../../assets/images/nonLiveBet/Icon1.png'
import Icon2 from '../../../assets/images/nonLiveBet/Icon2.png'
import Icon3 from '../../../assets/images/nonLiveBet/Icon3.png'
import Tab from './Tab';

const MainTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className='main-tabs'>
      <div className='tabs flex items-center content-start'>
        <Tab
          id={1}
          title={'조합베팅'}
          icon={Icon1}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab} />
        <Tab
          id={2}
          title={'스페셜베팅'}
          icon={Icon2}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab} />
        <Tab
          id={3}
          title={'실시간스포츠'}
          icon={Icon3}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab} />       
      </div>
    </div>
  )
}
export default MainTabs;
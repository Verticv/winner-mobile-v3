import React, { useState, useEffect } from 'react'
import Icon1 from '../../assets/gameresults/1.png'
import Icon2 from '../../assets/gameresults/2.png'
import Icon3 from '../../assets/gameresults/3.png'
import Icon4 from '../../assets/gameresults/4.png'
import Icon5 from '../../assets/gameresults/5.png'
import Icon6 from '../../assets/gameresults/6.png'
import Icon7 from '../../assets/gameresults/7.png'
import Icon8 from '../../assets/gameresults/8.png'
import HorizontalMenu13 from '../HorizontalMenu13'
import subInactive from '../../assets/gameresults/sub-inactive.png';
import subActive from '../../assets/gameresults/sub-active.png';

const tabsArray = [
    { text: "전체", icon: Icon1, id: 0, number: 854, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "축구", icon: Icon2, id: 1, number: 567, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "농구", icon: Icon3, id: 2, number: 227, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "야구", icon: Icon4, id: 3, number: 407, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "배구", icon: Icon5, id: 4, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "하키", icon: Icon6, id: 5, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "미식축구", icon: Icon7, id: 6, number: 0, subInactive: subInactive, subActive: subActive, path: '#' },
    { text: "격투기", icon: Icon8, id: 7, number: 9, subInactive: subInactive, subActive: subActive, path: '#' },
];


const Sports2 = ({ paddingLeft, subActiveButton, setSubActiveButton }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    useEffect(() => {
        if (subActiveButton) {
            setSubActiveButton('/mypage/gameresults/all')
        }
    }, [setSubActiveButton, subActiveButton]);

    console.log(selectedTab)

    return (
        <div style={{ maxWidth: '1242px' }} className="w-full flex flex-col">

            <div className="w-full flex relative top-0">
                {/* <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff)", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div> */}
                <div id='scroll-wrapper' style={{ padding: '1.875rem', paddingRight: '0', paddingLeft: paddingLeft ? paddingLeft : '1.875rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">

                    <div className=" flex flex-shrink-0 w-full" style={{ marginTop: '0.8rem', overflowY: 'scroll' }}>
                        <HorizontalMenu13 itemsArray={tabsArray} isState={selectedTab} setSelectedTab={setSelectedTab} />
                        {/* </div> */}
                        {/* </div> */}
                        <div style={{ height: '12.1rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports2;

import React, { useState } from 'react'
import Koreaflag from '../../../assets/Koreaflag.png'

import UKflag from '../../../assets/second-flag.png'
import Koreaflag2 from '../../../assets/Koreaflag2.png'
import UKflag2 from '../../../assets/second-flag2.png'

const CountryDropDown = ({ setCountry, country, isBig }) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)

    const countriesArray = [
        { icon: Koreaflag, text: "KR", id: 0 },
        { icon: UKflag, text: "EN", id: 1 },
    ];

    function CountriesList({ items }) {
        return items.map((item, index) => (
            <div key={item.id}
                className='country-item'
                style={{ background: selectedTab === item.id ? 'linear-gradient(to right, rgb(155, 58, 185), rgb(85, 35, 160))' : '' }}
                onMouseDown={
                    () => {
                        setSelectedTab(item.id)
                        setCountry(item.text)
                    }
                }>
                <div>
                    <img className="" src={item.text === "KR" ? isBig ? Koreaflag2 : Koreaflag : isBig ? UKflag2 : UKflag} alt="flag" style={{ width: isBig ? '7.75rem' : '5.625rem' }}></img>
                </div>
                <label style={{ fontSize: isBig ? '3rem' : '2.4rem', color: selectedTab === item.id ? '#fff' : 'rgb(102, 102, 102)', fontFamily: isBig ? 'SpoqaHanSansNeoBold' : 'SpoqaHanSansNeoMedium'}} className={` font-spoqaBold cursor-pointer`}>{item.text}</label>
                
            </div>
            // <div
            //     key={item.id}
            //     style={{  height: '4.8rem', width: '100%', padding: '0.6rem', marginBottom: !index ? '0.25rem' : '', background: selectedTab === item.id ? 'linear-gradient(to right, rgb(155, 58, 185), rgb(85, 35, 160))' : '' }}
            //     className={`${(selectedTab === item.id)
            //         ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2"
            //         : (hoveredTab === item.id)
            //             ? "bg-gray-f2f2f2"
            //             : "bg-white"
            //         } flex items-center rounded-full button-height`}

            //     onMouseOver={() => { setHoveredTab(item.id) }}
            //     onMouseLeave={() => setHoveredTab(null)}
            //     onMouseDown={
            //         () => {
            //             setSelectedTab(item.id)
            //             setCountry(item.text)
            //         }
            //     }
            // >
            //     <div style={{ width: '5rem', height: '0.4rem', marginRight: '8px' }} className="rounded-full flex items-center justify-center">
            //         <img className="" src={item.text === "KR" ? isBig ? Koreaflag2 : Koreaflag : isBig ? UKflag2 : UKflag} alt="flag" style={{ width: isBig ? '7.75rem' : '5.625rem', marginTop: isBig ? '-0.7rem' : '' }}></img>
            //     </div>
            //     <label style={{ fontSize: isBig ? '3rem' : '2.4rem', color: selectedTab === item.id ? '#fff' : 'rgb(102, 102, 102)', fontFamily: isBig ? 'SpoqaHanSansNeoBold' : 'SpoqaHanSansNeoMedium', marginLeft: '6.4rem' }} className={` font-spoqaBold cursor-pointer`}>{item.text}</label>
            // </div>
        ));
    }
    return (
        <div className="popup-country">
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown

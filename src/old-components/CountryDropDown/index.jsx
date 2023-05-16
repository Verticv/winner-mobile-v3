import React, { useState } from 'react'
import Koreaflag from '../../assets/Koreaflag.png'
import UKflag from '../../assets/second-flag.png'
import Koreaflag2 from '../../assets/Koreaflag2.png'
import UKflag2 from '../../assets/second-flag2.png'

const CountryDropDown = ({ setCountry, country, isBig }) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)
    const [hoveredTab, setHoveredTab] = useState(null)

    const countriesArray = [
        { icon: Koreaflag, text: "KR", id: 0 },
        { icon: UKflag, text: "EN", id: 1 },
    ];

    function CountriesList({ items }) {
        return items.map((item, index) => (
            <div
                key={item.id}
                style={{ height: '4.8rem', width: '100%', padding: '0.6rem', marginBottom: !index ? '0.25rem' : '', background: selectedTab === item.id ? '#3d3934' : '' }}
                className={`${(selectedTab === item.id)
                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2"
                    : (hoveredTab === item.id)
                        ? "bg-gray-f2f2f2"
                        : "bg-white"
                    } flex items-center rounded-full button-height`}

                onMouseOver={() => { setHoveredTab(item.id) }}
                onMouseLeave={() => setHoveredTab(null)}
                onMouseDown={
                    () => {
                        setSelectedTab(item.id)
                        setCountry(item.text)
                    }
                }
            >
                <div style={{ width: '5rem', height: '0.4rem', marginRight: '8px' }} className="rounded-full flex items-center justify-center">
                    <img className="" src={item.text === "KR" ? isBig ? Koreaflag2 : Koreaflag : isBig ? UKflag2 : UKflag} alt="flag" style={{ width: isBig ? '7.0625rem' : '5.625rem', marginTop: isBig ? '-0.7rem' : '' }}></img>
                </div>
                <label style={{ fontSize: isBig ? '3rem' : '2.4rem', color: 'rgb(255, 223, 189)', fontFamily: isBig ? 'SpoqaHanSansNeoBold' : 'SpoqaHanSansNeoMedium', marginLeft: '6.4rem' }} className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold cursor-pointer`}>{item.text}</label>
            </div>
        ));
    }
    return (
        <div style={{ borderRadius: '0.3rem', width: "13.9rem", height: '10.2rem', border: '0.1875rem solid #2c2c2c', background: '#1f1f1e', zIndex: '100' }} className="popup-country p-2px relative flex flex-col items-center bg-white shadow-plain">
            <div style={{ width: '3rem', height: '5px', marginTop: '-5px', marginLeft: '7px' }}>
                <div style={{ width: '10px', height: '5px' }}></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown

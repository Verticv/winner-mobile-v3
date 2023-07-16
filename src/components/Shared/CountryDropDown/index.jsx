import React, { useState } from 'react'

import UKflag from '../../../assets/images/UK_flag.png'
import KoreaFlag from "../../../assets/images/korea-flag.png";
const CountryDropDown = ({ setCountry, country, isBig }) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)

    const countriesArray = [
        { icon: KoreaFlag, text: "KR", id: 0 },
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
                    <img className="" src={item.text === "KR" ? isBig ? KoreaFlag : KoreaFlag : isBig ? UKflag : UKflag} alt="flag"></img>
                </div>
                <label style={{ fontSize: isBig ? '3rem' : '2.4rem', color: selectedTab === item.id ? '#fff' : 'rgb(102, 102, 102)', fontFamily: isBig ? 'SpoqaHanSansNeoBold' : 'SpoqaHanSansNeoMedium'}} className={` font-spoqaBold cursor-pointer`}>{item.text}</label>
                
            </div>
        ));
    }
    return (
        <div className="popup-country">
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown

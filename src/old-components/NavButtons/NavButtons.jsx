import React from "react";
import Button from "./index";
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';
import icon9 from '../../assets/icon9.png';
import icon10 from '../../assets/icon10.png';
import icon1Active from '../../assets/icon1-active.png';
import icon2Active from '../../assets/icon2-active.png';
import icon3Active from '../../assets/icon3-active.png';
import icon4Active from '../../assets/icon4-active.png';
import icon5Active from '../../assets/icon5-active.png';
import icon6Active from '../../assets/icon6-active.png';
import icon7Active from '../../assets/icon7-active.png';
import icon8Active from '../../assets/icon8-active.png';
import icon9Active from '../../assets/icon9-active.png';
import icon10Active from '../../assets/icon10-active.png';

const navInfo = [{
    id: 0,
    icon: icon1,
    activeIcon: icon1Active,
    text: '전체',
    width: '4.375rem',
    height: '4.375rem',
    marginTop: '0.4rem',
    textMargin: '0.8rem',
    isActive: true,
},
{
    id: 1,
    icon: icon2,
    activeIcon: icon2Active,
    text: '라이브카지노',
    width: '4.9375rem',
    height: '5.0625rem',
    marginTop: '0.4rem',
    textMargin: '0.6rem',
    isActive: false,
},
{
    id: 2,
    icon: icon3,
    activeIcon: icon3Active,
    text: '슬롯게임',
    width: '4.5rem',
    height: '4.25rem',
    marginTop: '0.4rem',
    textMargin: '1.1rem',
    isActive: false,
}, {
    id: 3,
    icon: icon4,
    activeIcon: icon4Active,
    text: '스포츠',
    width: '4.25rem',
    height: '4.3125rem',
    marginTop: '0.4rem',
    textMargin: '0.7rem',
    isActive: false,
}, {
    id: 4,
    icon: icon5,
    activeIcon: icon5Active,
    text: '호텔카지노',
    width: '5.5625rem',
    height: '5.0625rem',
    marginTop: '0.4rem',
    textMargin: '0.4rem',
    isActive: false,
}, {
    id: 5,
    icon: icon6,
    activeIcon: icon6Active,
    text: 'e-스포츠',
    width: '4.875rem',
    height: '3.625rem',
    marginTop: '0.4rem',
    isActive: false,
}, {
    id: 6,
    icon: icon7,
    activeIcon: icon7Active,
    text: '미니게임',
    width: '4.25rem',
    height: '4.375rem',
    marginTop: '0.4rem',
    isActive: false,
}, {
    id: 7,
    icon: icon8,
    activeIcon: icon8Active,
    text: '키론가상게임',
    width: '5.375rem',
    height: '4rem',
    marginTop: '0.4rem',
    isActive: false,
}, {
    id: 8,
    icon: icon9,
    activeIcon: icon9Active,
    text: '피싱게임',
    width: '5rem',
    height: '4rem',
    marginTop: '0.4rem',
    isActive: false,
}, {
    id: 9,
    icon: icon10,
    activeIcon: icon10Active,
    text: '티비벳',
    width: '4.25rem',
    height: '4.375rem',
    marginTop: '0.4rem',
    isActive: false,
}
]

function NavButton({ btnActive, setBtnActive }) {
    return (
        <div className="nav">
            {navInfo.map(({ id, icon, activeIcon, text, width, height, marginTop, textMargin, isActive }, index) =>
                <Button
                    key={id}
                    id={id}
                    icon={icon}
                    activeIcon={activeIcon}
                    text={text}
                    index={index}
                    width={width}
                    height={height}
                    marginTop={marginTop}
                    textMargin={textMargin}
                    isActive={isActive}
                    btnActive={btnActive}
                    setBtnActive={setBtnActive}
                />
            )}
        </div>
    );
}

export default NavButton;
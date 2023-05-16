/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import activeBG from '../../assets/betCombinationRightPanel/active-bg.png'
import inactiveBG from '../../assets/betCombinationRightPanel/inactive-bg.png';
import './_betCartHorizontalMenu2.scss';


const BetCartHorizontalMenu2 = ({
    itemsArray,
    setSelectedTab,
    isState = 0,
    setSelectedSubTab = null,
    width,
    imageWidth,
}) => {

    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button
                key={item.id}
                style={{
                    background:  `url(${pathname === item.path? activeBG : inactiveBG}) round`,
                    // borderRadius: "1.625rem",
                    width: '37.2125rem',
                    height: '10.6875rem',
                    // marginRight: `${!index ? '0.375rem' : ''}`,
                    padding: '1px',
                    // background: 'bottom',
                    marginLeft: '0.1rem',
                    paddingBottom: '0.9rem',
                    paddingRight: item.isLeft ? '0.75rem' : ''
                }}
                className={`${pathname === item.path
                    ? "content-tabslist"
                    : "content-tabslist1"
                    } content-tabslist2`}
                onPointerUp={() => {
                    navigate(item.path)
                    setSelectedTab(item.id) 
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div
                    style={{
                        // height:"78px",
                        width: "100%",
                        borderRadius: "1.625rem",
                        // paddingTop: '0.5rem'
                    }}
                    className={`content-tabslist3 ${pathname === item.path
                        ? "content-tabslist"
                        : "content-tabslist1"
                        }`}
                >
                    <div
                        style={{
                            // background: pathname === item.path
                            //     ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            //     : isHover === item.id
                            //         ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            //         : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            // borderRadius: "1.625rem",
                            // borderTopLeftRadius: "1.625rem 1.3rem",
                            // borderTopRightRadius: "1.625rem 1.3rem",
                            // borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                            // boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                        }}
                        className={`content-tabslist4`}
                    >
                        <img style={{ width: item.width, marginRight: item.isLeft ? '0.5rem' : '0.875rem', marginTop: item.isLeft ? '0.1rem' : '', marginTop: '0.25rem' }} className="content-tabslist5" src={pathname === item.path ? item.iconHighlight : item.icon} alt="" />
                        <span
                            style={{ fontSize: '3rem', marginRight: item.isLeft? '0.6rem' : '0.75rem', marginTop: `${imageWidth ? '-0.5rem' : ''}` }}
                            className={`${pathname === item.path
                                ? "content-tabslist6 "
                                : "content-tabslist7"
                                } content-tabslist8`}
                        >{item.text}</span>
                        <div
                            style={{ width: '4rem', height: '4.0625rem', border: '0.1875rem solid #f7efd1', boxShadow: "2px 2px 2px #00000050", background: isState === item.id ? "linear-gradient(to bottom right, #e9441d, #8a2a13)" : "linear-gradient(to bottom, #4c6782, #26303a)" }}
                            className={`${isState === item.id
                                ? "content-tabslist9"
                                : "content-tabslist10"
                                } content-tabslist11 shadow-to-box shadow-plain`}>
                            <p style={{ fontSize: '1.9375rem' }} className=" content-tabslist12">{item.number}</p>
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div id="container" style={{ marginTop: '1.875rem', }} className="container-tabslist">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default BetCartHorizontalMenu2


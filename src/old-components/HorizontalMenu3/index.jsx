import React from 'react';
import { useNavigate } from 'react-router';
import ClockIcon from '../../assets/horizontalMenu3/clock-gray.png';
import ClockIconWhite from '../../assets/horizontalMenu3/clock-white.png';
import './_horizontalMenu3.scss';
import activeBG from '../../assets/horizontalMenu3/active-bg.png'
import inactiveBG from '../../assets/horizontalMenu3/inactive-bg.png'

const HorizontalMenu3 = ({
    itemsArray,
    selectedTab = "",
    setSelectedTab,
    setSelectedTab1,
    setSelectedOption,
    hasAnimation = true
}) => {

    const navigate = useNavigate();
    function TabsList({ items }) {
        return items.map((item, index) => (
            <button
                key={item.id}
                style={{
                    background: `url(${selectedTab === item.path ? activeBG : inactiveBG}) round`,
                    // borderRadius: "1.625rem",
                    width: '20.7rem',
                    height: '13.375rem',
                    // marginRight: `${items.length - 1 !== index ? '0.5625rem' : ''}`,
                    padding: '1px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // background: 'bottom'
                }}
                className={`${selectedTab === item.path
                    ? "button-style"
                    : "button-style1"
                    } button-style2`}
                onClick={() => {
                    setSelectedTab(item.path)
                    setSelectedTab1(0)
                    navigate(item.path)
                    setSelectedOption([
                        {
                            type: "",
                            name: "",
                            selection: "",
                            buttonType: "",
                            subtitle: null
                        }
                    ])
                }}
            // onMouseOver={() => setHover(item.path)}
            // onMouseLeave={() => setHover(null)}
            >
                <div
                // style={{
                //     width: "100%",
                //     borderRadius: "1.625rem",
                //     paddingTop: '0.5rem'
                // }}
                // className={`div-style ${selectedTab === item.path
                //     ? "div-style1"
                //     : "div-style2"
                //     }`}
                >
                    <div
                        style={{
                            // background: selectedTab === item.path
                            //     ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            //     : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            // borderRadius: "1.625rem",
                            // borderTopLeftRadius: "1.625rem 1.3rem",
                            // borderTopRightRadius: "1.625rem 1.3rem",
                            // borderColor: selectedTab === item.path ? "#1a73ce" : "#d6dfe8",
                            // boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                            // paddingTop: '1rem'
                        }}
                        className={`div-style3`}
                    >
                        <div className={`div-style4`}
                            style={{
                                marginTop: '-0rem',
                                marginLeft: '0.3rem',
                                marginBottom: '0.9rem',
                                letterSpacing: '0.1rem'
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '2.9875rem', color: selectedTab === item.path ? '#252525' : '#ccc2b6',
                                    fontFamily: 'SpoqaHanSansNeoBold',

                                    // textShadow: "-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff"
                                }}
                                className={`
                                ${item.id === 0
                                        ? "span-style"
                                        : item.id === 1
                                            ? "span-style"
                                            : item.id === 2
                                                ? "span-style"
                                                : "span-style"
                                    } span-style1`}
                            >
                                {item.text}
                            </span>
                        </div>

                        <div className="div-style5"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <img style={{ width: '3.1875rem', marginRight: '0.5875rem', marginBottom: "1rem", marginTop: '0.4rem' }} className="img-style" src={selectedTab === item.path ? ClockIconWhite : ClockIcon} alt="" />
                            <div
                                style={{ fontSize: '3.93rem', color: selectedTab === item.path ? "#473e35" : "#ad9e8c", fontFamily: 'Swagger' }}
                                className="div-style6"
                            >
                                {item.time}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div style={{ margin: '0.1rem 0' }} className="tabs-list-container">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu3

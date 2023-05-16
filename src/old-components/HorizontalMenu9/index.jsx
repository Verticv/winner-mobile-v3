/* eslint-disable */
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import activeBtn from '../../assets/sports/active-btn.png'
import activeBtn2 from '../../assets/sports/active-btn2.png'
import inactiveBtn from '../../assets/sports/inactive-btn.png'

const HorizontalMenu9 = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null,
    isFlex
}) => {

    const navigate = useNavigate();
    const pathname = window.location.pathname

    console.log(pathname)

    function TabsList({ items }) {
        return items.map(item => (
            <button
                key={item.id}
                style={{
                    height: "8.375rem",
                    width: isFlex ? '100%' : '25rem',
                    background: pathname === item.path ? "linear-gradient(to top, #a6926f, #f9f0d3)" : "linear-gradient(to top, #a6926f, #f9f0d3)",
                    background: `url(${items.length === 1 ? activeBtn2 : pathname === item.path ? activeBtn : inactiveBtn}) round`,
                    backgroundSize: "cover",
                }}
                className={`${pathname === item.path
                    ? "bg-blue-r58baf7"
                    : "bg-white "
                    } overflow-hidden w-full rounded-lg flex items-end p-px`}
                onClick={() => {
                    navigate(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderBottomLeftRadius: "9px",
                        borderBottomRightRadius: "9px",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                        boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                    }}
                    className={`mt-3px w-full rounded-2xl flex items-center justify-center pt-3px`}
                >
                    <span
                        style={{
                            fontFamily: 'SpoqaHanSansNeoBold', 
                            fontSize: '2.5rem', 
                            color: pathname === item.path ? '#252525' : '#ccc2b6', 
                            height: '100%',
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            letterSpacing: '-0.07rem',
                            marginTop: '-0.9rem'
                        }}
                    >{item.text}</span>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full space-x-2px" style={{ display: 'flex', justifyContent: 'space-around', padding: '0 1.65rem' }}>
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu9

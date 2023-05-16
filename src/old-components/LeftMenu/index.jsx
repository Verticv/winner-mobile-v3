// @ts-nocheck
/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRight from '../../assets/myInfo/right-arrow2.png'
import ArrowRightWhite from '../../assets/myInfo/right-arrow-active.png'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from '../ReauthenticatePopup'

const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array,
    subActiveButton,
    activeButton2,
    setSubActiveButton,
    activeButton,
    setActiveButton,
    distributorPageActive,
    setDistributorPageActive,
    cscenterActive,
    setCscenterActive
}) => {

    useEffect(() => {
        window.onpopstate = () => {
            console.log('add code to handle the back button if needed')
        }
    })

    const { currentPathname } = useLocation();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname)
    const [isMouseHover, setMouseHover] = useState("")

    useEffect(() => {
        setTimeout(() => {
            const isFromPreviousPage = state?.path

            if (isFromPreviousPage) {
                setActiveButton(isFromPreviousPage)
            }
        }, 0)

    }, [currentPathname, array, state?.path]);

    useEffect(() => {
        if (cscenterActive) {
            setCscenterActive('/cscenter');
        }
    }, [cscenterActive, setCscenterActive])

    function buttonPressed(text, path) {
        if (distributorPageActive) {
            setDistributorPageActive('')
        }
        if (text === "총판페이지") {
            setDistributorPageActive('/distributor-page')
            setSelectedTab('')
            setActiveButton('')
            window.open('/distributor-page');
        } else {
            navigate({
                pathname: path,
                state: { fromPage: window.location.pathname }
            })
            setSelectedTab(path)
            if (setSelectedSubTab !== null) {
                setSelectedSubTab(path)
            }

            if (isExpanded === path) {
                setExpanded(path + "closed")
            } else {
                setExpanded(path)
            }
        }
    }

    function mouseHover(path) {
        setMouseHover(path)
    }

    function mouseLeave(path) {
        setMouseHover("")
    }

    const EditProfileButton = ({ path, text, icon, iconHighlight, selectedTab, width }) => {
        const isProfileActive = activeButton?.includes(path);
        return (
            <div style={{ padding: '0 1.875rem', borderBottomWidth: '0.1875rem', background: '#242424', height: '12.375rem', borderBottom: '0.1875rem solid #323231' }} className='w-full border-b border-gray-ececec bg-gray-f7f7f7'>
                <button
                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffdfbd', background: isProfileActive ? 'linear-gradient(#a67c52, #7f5f3f)' : 'bottom', borderRadius: '1rem' }}
                    className={`${isProfileActive
                        ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2"
                        : ""
                        } flex w-full items-center rounded-full group`}
                    onClick={() => {
                        buttonPressed(path)
                        setPopupOpen(true)
                    }}
                >
                    <div
                        className={`${isProfileActive && "shadow-plain9"
                            } bg-white rounded-full flex items-center justify-center flex-shrink-0`}
                        style={{ width: '13rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img
                            style={{
                                height: '', width: '7.875rem',
                                marginLeft: '0.5rem'
                            }}
                            src={icon}
                            alt="icon" />
                    </div>
                    <div style={{ marginLeft: '2.65rem', marginRight: '4.8125rem', position: 'relative', justifyContent: 'space-between', alignItems: 'center', width: '', letterSpacing: '-0.07rem', marginTop: '0.3rem' }} className="w-full flex justify-between items-center">
                        <label className={`${isProfileActive ? "text-white group-hover:text-white" : "text-black group-hover:text-gray-r454545"} font-spoqaMedium text-5xl cursor-pointer tracking-tight`}>{text}</label>
                    </div>
                </button>
            </div>
        )
    }

    function MenuList({ items }) {

        return items.map((item, index) => (

            <div key={item.id}>

                {item.text === "회원정보수정" ? (
                    <PopupControls
                        buttonChild={(
                            <EditProfileButton
                                path='/edit'
                                text={item.text}
                                icon={item.icon}
                                iconHighlight={item.iconHighlight}
                                selectedTab={selectedTab}
                                width={item.width}
                            />
                        )}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                    >
                        <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab} />
                    </PopupControls>
                ) : (
                    <div style={{ borderBottomWidth: '0.1875rem', height: '12.375rem', }} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-f7f7f7"} border-b border-gray-ececec`}>
                        <div className='h-full' style={{ padding: '0 1.875rem', width: '100%', background: index % 2 === 0 ? '#1e1e1e' : '#242424', height: '12.375rem', borderBottom: '0.1875rem solid #323231' }}>
                            <button
                                style={{
                                    padding: '2.3125rem 0 1.3125rem 1.3125rem', paddingRight: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffdfbd',
                                    background: ((((selectedTab) === item?.path) || (distributorPageActive === '/distributor-page' && item.text === '총판페이지') || subActiveButton === item?.path)) || item?.path == '' || (state?.path === '/cscenter' && item.text === '고객센터' && distributorPageActive !== '/distributor-page') ? 'linear-gradient(#a67c52, #7f5f3f)' : 'bottom',
                                    borderRadius: '1rem'
                                }}
                                className={`${selectedTab === item?.path
                                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2"
                                    : ""
                                    } flex w-full h-full items-center focus:text-white rounded-full focus:bg-gradient-to-l hover:opacity-75 focus:from-blue-gradDark focus:to-blue-r2088f0`}
                                onClick={(e) => {
                                    if (item.text === '총판페이지') {
                                        setDistributorPageActive('/')
                                    }
                                    buttonPressed(item.text, item.path)
                                }}
                                onMouseEnter={() => mouseHover(item.path)}
                                onMouseLeave={() => mouseLeave(item.path)}
                                onFocus={(e) => {
                                    e.target.children[1].children[0].children[0].style.color = 'white'
                                    e.target.style.background = 'linear-gradient(#a67c52, #7f5f3f)'
                                    if (e.target.children[1].children[0].children.length === 3) {
                                        if (e.target.children[1].children[0].children[2]) {
                                            e.target.children[1].children[0].children[2].src = ArrowRightWhite
                                        }
                                    }
                                    if (e.target.children[1].children[0].children[1]) {
                                        e.target.children[1].children[0].children[1].src = ArrowRightWhite
                                    }
                                }}
                            >
                                <div
                                    className={`${activeButton === item?.path ? 'menu-active' : ''}`}
                                    style={{ background: '', width: '13rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <img
                                        style={{
                                            height: 'auto',
                                            width: item.width,
                                            marginTop: item.id === 0 ? '-0.9rem' : '-1.15rem'
                                        }}
                                        className="bg-white rounded-full flex items-center justify-center shadow-plain9 first-img"
                                        src={item.icon}
                                        alt="icon" />
                                </div>
                                <div style={{ marginLeft: '4.8rem', marginRight: '4.8125rem', position: 'relative', justifyContent: 'space-between', alignItems: 'center', width: '100%', letterSpacing: '-0.07rem', marginTop: '-0.7rem' }} className="relative w-full flex justify-between items-center">
                                    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                        <label
                                            className={`${activeButton === item?.path
                                                ? "text-white"
                                                : isMouseHover === item.path
                                                    ? "text-gray-r454545"
                                                    : "text-black"
                                                } font-spoqaMedium  text-5xl cursor-pointer tracking-tight`}
                                        >
                                            {item.text}
                                        </label>
                                        {item.inboxCount && (
                                            <div style={{ marginLeft: '1.875rem' }} className={`flex items-center justify-center bg-red-notification text-white rounded-full shadow-plain6 inbox-count ${item.inboxCount.split('').length === 1 ? "w-16 h-16" : "h-16 px-5"}`}>
                                                <label style={{ fontSize: '2.8125rem' }} className="font-roboto">{item.inboxCount}</label>
                                            </div>
                                        )}
                                        {item.hasArrow && (
                                            <img
                                                style={{ width: '1.9375rem', height: '3.1875rem', top: '0.2rem', right: '0.3rem', position: 'absolute' }}
                                                src={((((selectedTab) === item?.path) || (distributorPageActive === '/distributor-page' && item.text === '총판페이지') || subActiveButton === item?.path)) || item?.path == '' || (state?.path === '/cscenter' && item.text === '고객센터' && distributorPageActive !== '/distributor-page') ? ArrowRightWhite : ArrowRight}
                                                alt="icon" />
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                )}
            </div>
        ));
    }

    return (
        <MenuList items={array} />
    )
}

export default LeftMenu

/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import DropDownControls from "../MyPageCountriesDropDownControls";
import CloseIcon from "../../assets/myInfo/close.png";
import ProfileIcon from "../../assets/myInfo/profile.png";
import big_1 from "../../assets/myInfo/lv3.png";
import big_2 from "../../assets/myInfo/lv3.png";
import big_3 from "../../assets/myInfo/lv3.png";
import Logout from "../../assets/myInfo/logout.png";
import InboxIcon from "../../assets/myInfo/inbox.png";
import calendar from "../../assets/myInfo/calendar.png";
import P from "../../assets/myInfo/p.png";
import W from "../../assets/myInfo/w.png";
import Koreaflag from "../../assets/myInfo/korea_flag.png";
import UKflag from '../../assets/second-flag.png'
import KakaoLogo from "../../assets/myInfo/kakao.png";
import TelegramLogo from "../../assets/myInfo/telegram.png";
import ArrowUpWhite from "../../assets/myInfo/down-arrow.png";
import ArrowDown from "../../assets/myInfo/down-arrow.png";
import ArrowUp from "../../assets/myInfo/down-arrow.png";
import LeftArrowIcon from '../../assets/myInfo/left-arrow.png'
import CountryDropDown from '../CountryDropDown';
import { isIOS } from 'react-device-detect';

const AccountProfileComponent = ({ isAuthenticated, setAuthenticated, subActiveButton, setSubActiveButton }) => {

    const navigate = useNavigate();
    const [isCountryOpen, setCountryOpen] = useState();
    const [winImage, setWinImage] = useState(big_1 || big_2);
    const [country, setCountry] = useState("KR");
    const path = window.location.pathname;
    useEffect(() => {
        setWinImage(big_3)
    }, []);

    useEffect(() => {
        window.onpopstate = e => {
            if (window.location.pathname !== '/mypage') {
                setTimeout(navigate("/mypage", { state: { path } }), 0)

            }
        }
        return () => { }
    }, [])


    const InboxButton = (
        <button
            onClick={() => navigate("/mypage/inbox")}
            style={{ height: '9.3125rem', width: '9.375rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', marginRight: '0.45rem', marginTop: '0.15rem', borderRadius: '0.7rem', marginLeft: '0.5rem' }}
            className="shadow-to-box hover"
        >
            <img
                style={{ width: '5.5rem', marginTop: '0.2rem', marginLeft: '-0.2rem' }}
                className="object-contain"
                src={InboxIcon}
                alt="inbox_icon"
            />
            <div className="absolute flex items-center justify-center w-16 h-16 bg-red-notification top-0 right-0 -mt-3px -mr-3px rounded-full shadow-plain6" style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '-0.65rem', right: '-0.6rem', padding: '0.3rem 1.1rem', borderRadius: '0.9rem', background: '#e9441d', boxShadow: '0.09375rem 0.162375rem 0.0625rem 0 rgba(0, 0, 0, 0.51)' }}>
                <label style={{ fontSize: '2.8125rem', marginLeft: '0.1875rem', fontFamily: 'RobotoMedium', color: '#ffffff' }} className="font-roboto">1</label>
            </div>
        </button>
    );

    const ProfileButton = (
        <button
            onClick={() => navigate("/attendance")}
            style={{ height: '9.3125rem', width: '9.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', marginRight: '0.45rem', marginTop: '0.15rem', borderRadius: '0.7rem', marginLeft: '0.5rem' }}
            className="shadow-to-box hover"
        >
            <img
                style={{ width: '6.4375rem', marginTop: '' }}
                className="object-contain"
                src={calendar}
                alt="calendar"
            />
        </button>
    );

    const DropdownArrow = ({ isOpen, isWhite }) => (
        <>
            {isWhite ? (
                <img style={{ width: '3.375rem' }} className="object-contain" src={isOpen ? ArrowUpWhite : ArrowUpWhite} alt="arrow" />
            ) : (
                <img style={{ width: '3.375rem' }} className="object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
            )}
        </>
    )

    const CountryButton = (
        <div style={{
            paddingBottom: '0.6875rem', paddingTop: '0.875rem', paddingLeft: '0.9rem',
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: '',
            background: 'linear-gradient(to top, #7f5f3f, #a67c52)',
            paddingRight: '1.8rem',
            borderRadius: '0.7rem',
        }}>
            <div style={{ marginRight: '1.7rem', marginTop: '0.1rem', marginLeft: '2rem' }}>
                <img style={{ width: '7.0625rem'}} className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label style={{ marginRight: '2.45rem', fontSize: '3rem', marginTop: '0.225rem', fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd', textShadow: '#000000 0rem 0rem 1rem' }}>{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen} />
        </div>
    )

    const location = {
        pathname: '/mypage',
        state: { fromPage: window.location.pathname }
    }

    return (
        <div className="w-full top-0 z-50 flex flex-col items-start limit1920:items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <div style={{ marginBottom: '1.875rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#272726', borderBottom: '0.1875rem solid rgb(121, 102, 87)', height: '9.5rem', width: '77.625rem' }} className="relative flex w-full h-36 justify-center items-center border-b border-gray-ececec cursor-pointer">
                {window.location.pathname !== '/mypage' && (
                    <button onClick={() => navigate("/mypage", { state: { path } })
                    } className="absolute cursor-pointer" style={{ top:  isIOS ? '2.6375rem' :  '2.9375rem', left: '3.6875rem', position: 'absolute', background: 'bottom' }}>
                        <img
                            style={{ height: '3.625rem', width: '2.3125rem', transform: 'rotate(180deg)' }}
                            className="w-9"
                            src={LeftArrowIcon}
                            alt="left_arrow_icon"
                        />
                    </button>
                )}
                <span style={{ fontSize: '4rem', marginTop: '0.35rem', fontFamily: 'SpoqaHanSansNeoBold', color: '#ad9e8c', letterSpacing: '-0.1rem', marginLeft: '-0.3rem' }} className="font-spoqaBold">마이 인포</span>
                <img
                    onClick={() => navigate(isAuthenticated ? "/main" : "/")}
                    className="absolute right-12 top-12 w-14"
                    src={CloseIcon}
                    alt="close_icon"
                    style={{ position: 'absolute', right: '2.95rem', top: '2.95rem', width: '3.5rem' }}
                />
            </div>
            <div style={{ background: '#242424', padding: '', margin: '0 1.875rem', borderRadius: '1.1rem' }} className="w-full">
                <div style={{ borderRadius: '1.1rem', position: 'relative', display: 'flex', flexWrap: 'wrap', background: '#323231', padding: '0 1.875rem' }} className="shadow-to-box">
                    {/* isAuthenticated */}
                    {true && (<div style={{ padding: '2.4375rem 0 1.3125rem 0.4375rem', paddingBottom: '', display: 'flex' }} className="flex w-full">
                        <div className='relative' style={{ width: '23.6rem' }}>
                            <img style={{ maxWidth: '', width: '23.9rem' }} src={ProfileIcon} alt="profile_icon" />
                            <img style={{ width: '6.5625rem', position: 'absolute', top: '3.1rem', left: '3.5rem' }} className='absolute top-1 left-0 -ml-2' src={winImage} alt="big_1" />

                        </div>
                        <div style={{ marginLeft: '2.5375rem', background: '', width: '43.1rem', height: '25rem' }} className="w-full">
                            <p style={{ margin: '0.1rem 1.8rem 1.7rem 0', fontSize: '2.8125rem', lineHeight: '0.7', fontFamily: 'RobotoBold', color: '#ffffff', textAlign: 'right' }} className="font-robotoBold text-right text-gray-text">
                                LEVEL3
                            </p>
                            <p style={{ margin: '0px 2rem 1.475rem 0px', letterSpacing: '-0.075rem', fontSize: '3.375rem', lineHeight: '1.1', textAlign: 'right', fontFamily: 'SpoqaHanSansNeoBold', color: '#aa9264', display: 'flex', justifyContent: 'end' }} className="font-spoqaBold text-right text-blue-r1ca7ec">
                                <span style={{ whiteSpace: 'nowrap', width: '38rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>마이마이프로틴화이팅</span>
                                <span className="text-gray-a4b1b4 font-spoqaBold" style={{ color: '#c8c8c8' }}>님</span>
                            </p>
                            <div style={{ background: '#252525', borderRadius: '0.9rem' }}>
                                <div style={{ borderTopRightRadius: '3.75rem', borderTopLeftRadius: '3.75rem', padding: '0.9rem 2.1rem 0.75rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', letterSpacing: '-0.08rem', borderBottom: '0.1875rem solid #323231' }} className="flex w-full items-center bg-white rounded-t-2xl p-1.5 pr-4 border-b-2 border-blue-e8f3fd">
                                    <div className="w-1/6 ">
                                        <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img className="object-contain ml-1" style={{ width: '5.5625rem', marginTop: '0.1125rem', marginLeft: '0.3rem' }} src={W} alt="₩" />
                                        </div>
                                    </div>
                                    <p className="w-5/6 m-0 text-6xl text-right text-blue-gradLight font-robotoBold" style={{ margin: '0.679rem 0', fontFamily: 'RobotoBold', color: '#ad9e8c', fontSize: '3.75rem' }}>100,000,000 <span className="font-spoqaBold mr-3" style={{ color: '#c8c8c8', fontSize: '3.5rem', fontFamily: 'SpoqaHanSansNeoBold' }}>원</span></p>
                                </div>
                                <div style={{ borderBottomRightRadius: '3.75rem', borderBottomLeftRadius: '3.75rem', padding: '0.55rem 1.1rem 0.55rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="flex w-full items-center bg-white rounded-b-2xl p-1.5 pr-4">
                                    <div className="w-1/6 ">
                                        <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-orange-ff7e00 shadow-plain2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img className="object-contain mt-1" style={{ width: '5.5625rem', marginLeft: '0.3125rem', }} src={P} alt="P" />
                                        </div>
                                    </div>
                                    <p className="w-5/6 m-0 text-6xl text-right text-orange-ff7e00 font-robotoBold"><span style={{ margin: '0', fontFamily: 'RobotoBold', color: '#ff8926', fontSize: '3.75rem', letterSpacing: '-0.08rem', marginRight: '1.25rem', marginTop: '0.1rem', display: 'inline-block' }} >12,500,000</span> <span style={{ marginRight: '1.1875rem', color: '#c8c8c8', fontSize: '3.5rem', fontFamily: 'SpoqaHanSansNeoBold' }} className="font-spoqaBold"> P</span></p>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <div style={{ marginTop: '2.4375rem', padding: '0 0 2.4375rem', paddingTop: '0', display: 'flex', justifyContent: '', background: '', width: '100%' }} className="flex w-full justify-end">
                        {InboxButton}
                        {ProfileButton}
                        <div style={{
                            height: '9.3125rem', width: '23.75rem', marginRight: '0.9375rem',
                            display: 'flex', alignItems: 'center', justifyContent: '',
                            background: 'linear-gradient(to top, #7f5f3f, #a67c52)',
                            paddingLeft: '2.4rem',
                            paddingRight: '1.8rem',
                            marginTop: '0.15rem', borderRadius: '0.7rem', marginLeft: '0.5rem'
                        }} className="shadow-to-box hover">
                            <div style={{ marginRight: '1.8rem', marginTop: '0.1375rem', marginLeft: '-0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="w-16 h-16 rounded-full flex items-center justify-center">
                                <img className="" src={Logout} alt="logout" style={{ width: '5.625rem' }}></img>
                            </div>
                            <label style={{ marginTop: '0.225rem', fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd', fontSize: '3rem', textShadow: '#000000 0rem 0rem 1rem' }} className="shadow-to-text" onClick={() => {
                                navigate("/")
                                setAuthenticated(false)
                            }}>
                                로그아웃
                            </label>
                        </div>
                        <div className='dropdown-mypage' onClick={() => setCountryOpen((prev => !prev))}>

                            <DropDownControls buttonChild={CountryButton} isDropdownOpen={isCountryOpen} setDropdownOpen={setCountryOpen} >
                                <div style={{ right: "0rem", top: '11rem', position: 'absolute', zIndex: '40' }}>
                                    <CountryDropDown setCountry={setCountry} country={country} isBig='true' />
                                </div>
                            </DropDownControls>
                        </div>
                    </div>
                </div>
                <div style={{ borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem', height: '18.875rem', marginTop: '-7.75rem', paddingTop: '9.3125rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2 shadow-to-box">
                    <div style={{ marginTop: '-1.3rem', display: 'flex', alignItems: 'center' }} className="flex items-center ml-32">
                        <img
                            style={{ width: '7.375rem', margin: '0 1.6rem 0 7.4rem' }}
                            className="object-contain"
                            src={KakaoLogo}
                            alt="kakao-icon"
                        />
                        <span style={{ marginTop: '', marginLeft: '0.3rem', fontSize: '2.65rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-brown-r351a1e font-roboto text-4xl leading-snug tracking-wide">
                            test1234
                        </span>
                    </div>
                    <div style={{ height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '1.55rem', background: '#323231' }} className="bg-gray-c1cfdb" />
                    <div style={{ marginTop: '-1.3rem', marginRight: '8.9rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                        <img
                            style={{ width: '7.5rem' }}
                            className="object-contain"
                            src={TelegramLogo}
                            alt="kakao-icon"
                        />
                        <span style={{ marginTop: '', marginLeft: '1.8375rem', fontSize: '2.65rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug tracking-wide">
                            test1234
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AccountProfileComponent;
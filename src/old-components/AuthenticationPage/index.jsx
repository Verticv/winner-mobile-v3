import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import MobileBg from '../../assets/myInfo/bg.png'
import DownArrowIcon from '../../assets/myInfo/down-arrow-popup.png'
import KakaoLogo from '../../assets/myInfo/kakao.png'
import TelegramLogo from '../../assets/myInfo/telegram.png'
import logo from "../../assets/logo.png";
import Dropdown from '../Dropdown'
import SignedUpPopup from '../SignedUpPopup';
import userName from '../../assets/myInfo/userName.png'
import password from '../../assets/myInfo/password.png'
import DatePicker from 'react-datepicker'
import CalendarIcon from '../../assets/myPage/CalendarIcon.png';
import CloseIcon from "../../assets/myInfo/close.png";
import { getMonth, getYear } from 'date-fns'

const AuthenticationPage = ({ isAuthenticated, setAuthenticated }) => {
    const getIsMobile = () => window.innerWidth <= 305;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    const [selectedInput, setSelectedInput] = useState(null)
    const [toSignup, setSignup] = useState(false)
    const [showCompletePopup, setCompletePopup] = useState(false)
    const [endDate, setEndDate] = useState(null)

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const [selectedYear, setSelectedYear] = useState(getYear(new Date()));
    const [selectedMonth, setSelectedMonth] = useState(
        months[getMonth(new Date())]
    );

    const getCurrentYear = new Date().getFullYear(); // current year
    const listOfYears = Array.from({ length: 101 }, (_, i) => getCurrentYear - i);

    const YearButton = () => (
        <div style={{
            backgroundColor: "#3b3b3b",
            borderColor: "transparent",
            display: 'flex',
            alignItems: 'center',
            borderWidth: '0.4rem',
            color: '#ccc2b6',
            width: '10rem',
            height: '4rem',
            justifyContent: 'center'
        }}>
            <p style={{ fontFamily: 'SpoqaHanSansNeoBold', textAlign: 'center', fontSize: '2.6rem', paddingTop: '0.2rem' }}>{selectedYear}년</p>
        </div>
    );

    const MonthButton = ({ selectedMonth }) => (
        <div style={{
            backgroundColor: "#3b3b3b",
            borderColor: "transparent",
            display: 'flex',
            alignItems: 'center',
            borderWidth: '0.4rem',
            color: '#ccc2b6',
            width: '7rem',
            height: '4rem',
            justifyContent: 'center'
        }}>
            <p style={{ fontFamily: 'SpoqaHanSansNeoBold', textAlign: 'center', fontSize: '2.6rem', paddingTop: '0.2rem' }}>{selectedMonth}월</p>
        </div>
    );

    const navigate = useNavigate()

    const banksOptions = [
        "은행선택",
        "KEB하나은행",
        "제주은행",
        "전북은행",
        "우체국",
        "우리은행",
        "외환은행",
        "아메리카",
        "씨티은행",
        "신협",
        "신한은행",
        "수협",
        "새마을금고",
        "상호저축은행",
        "산업은행",
        "부산은행",
        "미즈호",
        "미쓰비시",
        "도이치",
        "대구은행",
        "농협",
        "기업은행",
        "국민은행",
        "광주은행",
        "경남은행",
        "SC제일은행",
        "JP모간",
        "HSBC",
        "ABN암로",
    ];

    const carrierOptions = ["통신사", "LGU+", "SKT", "KT"]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [toSignup])

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    const CustomInput = (props) => {
        return (
            <input
                onClick={props.onClick}
                // onFocus={() => setSelectedInput(61)}
                // onBlur={() => setSelectedInput(false)}
                value={props.value}
                type="text"
                readOnly={true}
                placeholder="생년월일"
            />
        )
    }
    return (
        <div className="AuthenticationPage">

            {/* LOGIN PAGE COMPONENTS */}
            <div style={{ width: '100%', height: '100vh', background: 'bottom', position: 'relative' }}>
                {/* BACKGROUND IMAGES */}
                <img src={MobileBg} alt="" style={{ width: '77.625rem' }} />
                <img src={logo} alt="" className='logo-img' />
                <div className="bg-white w-full z-20 px-44" style={{ background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', overflow: 'hidden', zIndex: '0', position: 'absolute', top: '57.5rem', width: '72.552rem', padding: '0.1875rem', margin: '0 2.55rem', borderRadius: '2.25rem' }}>
                    <div className="w-full h-full flex flex-col items-center justify-end pb-10px" style={{ background: 'linear-gradient(to top, #212121, #323231)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5.6rem 7.7rem 1rem', borderRadius: '2.25rem' }}>
                        {/* 환영합니다 TEXT */}
                        <div style={{ fontSize: '4.5rem', marginBottom: "5.9rem", width: '100%', color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoBold' }} className="w-full mb-12 mt-4 font-spoqaBold text-7xl">환영합니다</div>
                        {/* USERNAME AND PASSWORD INPUTS */}
                        <div style={{ paddingBottom: "10rem", width: '55.9375rem', height: '9.1875rem' }} className="w-full space-y-12 pb-20">
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
                                <div className="w-full" style={{ background: '#191817', width: '100%', display: 'flex', alignItems: 'center', borderRadius: '2.5rem', borderBottom: selectedInput === 0 ? '0.375rem solid rgb(166, 124, 82)' : '0.375rem solid #191817' }}>
                                    <img src={userName} alt="" style={{ width: '3.3125rem', margin: '-0.45rem 2.4rem 0 2.55rem', display: 'inline-block' }} />
                                    <input
                                        style={{ height: "9.1875rem", fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.25rem' }}
                                        placeholder={"아이디"}
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(0)
                                        }}
                                        onBlur={(e) => {
                                            e.target.placeholder = "아이디"
                                            setSelectedInput(false)
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2.375rem', width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="w-full" style={{ background: '#191817', width: '100%', display: 'flex', alignItems: 'center', borderRadius: '2.5rem', borderBottom: selectedInput === 1 ? '0.375rem solid rgb(166, 124, 82)' : '0.375rem solid #191817' }}>
                                    <img src={password} alt="" style={{ width: '3.3125rem', margin: '-0.45rem 2.4rem 0 2.55rem', display: 'inline-block' }} />
                                    <input
                                        style={{ height: "9.1875rem", fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.25rem' }}
                                        placeholder={"비밀번호"}
                                        type="password"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(1)
                                        }}
                                        onBlur={(e) => {
                                            e.target.placeholder = "비밀번호"
                                            setSelectedInput(false)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* LOGIN AND SIGNUP BUTTONS */}
                        <div style={{ paddingBottom: '2.8rem', width: '100%', marginTop: '20.4rem', display: 'flex', flexDirection: 'column' }} className="w-full">
                            <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '2rem' }}>
                                <button
                                    style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '2rem' }}
                                    className="hover shadow-to-box3"
                                    onClick={() => {
                                        setAuthenticated(true)
                                        navigate('/main')
                                    }}
                                >
                                    <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                        <p className='mt-1'>로그인</p>
                                    </div>
                                </button>
                            </div>
                            <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #3f3d37, #a69685)', borderRadius: '2rem' }}>
                                <button
                                    style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #4b4742, #786d62)', borderRadius: '2rem' }}
                                    className="hover shadow-to-box3"
                                    onClick={() => setSignup(true)}
                                >
                                    <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                        <p className='mt-1'>회원가입</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SIGNUP POPUP COMPONENTS */}
            {toSignup === true && (
                <div style={{ position: 'fixed', overflow: 'hidden', overflowY: 'scroll', top: '0', right: '0', width: '100vw', background: 'rgba(0, 0, 0)', height: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ zIndex: '20', width: '72.75rem', background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', marginTop: '2.4rem', padding: '0.1875rem', borderRadius: '2rem', height: '168.1875rem' }}>
                        <div style={{ padding: '0 7.6875rem', background: '#323232', width: '100%', height: '168rem', borderRadius: '2rem', paddingBottom: '1.3rem' }}>
                            <img
                                onClick={() => setSignup(false)}
                                src={CloseIcon}
                                alt="close_icon"
                                style={{ position: 'absolute', right: '6rem', top: '6rem', width: '3.5rem' }}
                            />
                            {/* BREAK */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', marginTop: '11.8125rem', marginBottom: '2.8rem', paddingLeft: '0.6rem', paddingRight: '0.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <label style={{ fontSize: '4.375rem', width: '100%', color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', textAlign: 'center' }}>회원가입</label>
                                    <label style={{ fontSize: '2.3rem', width: '100%', color: '#c9c9c9', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing:  isMobile ? '-0.27rem' : '-0.07rem', textAlign: 'center' }}>회원가입 시 모든 항목을 정확하게 기재하시기 바랍니다.</label>
                                    <label style={{ fontSize: '2.3rem', width: '100%', color: '#c9c9c9', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem', textAlign: 'center' }}>회원데이터는 안전한 서버에서 안전하게 보관됩니다.</label>
                                </div>
                                {/* BREAK */}
                                <div style={{ width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 0 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                    <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.6rem', height: '100%' }}>
                                        <input
                                            style={{ letterSpacing: '0' }}
                                            onFocus={(e) => setSelectedInput(0)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            placeholder="아이디"
                                        />
                                    </div>
                                </div>
                                <label style={{ marginBottom: '1.5rem', marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing:  isMobile ? '-0.27rem' : '-0.07rem' }}>영문, 숫자만 입력가능하며 최소 4자이상 입력하세요.</label>
                                {/* BREAK */}
                                <div style={{ width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 1 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                    <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                        <input
                                            onFocus={(e) => setSelectedInput(1)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="비밀번호"
                                        />
                                    </div>
                                </div>
                                <label style={{ marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '99%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing:  isMobile ? '-0.27rem' : '-0.07rem' }}>영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 </label>
                                <label style={{ marginBottom: '1.5rem', marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '99%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>입력해주세요. (특수문자 사용불가)</label>
                                {/* BREAK */}
                                <div style={{ width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 2 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                    <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                        <input
                                            style={{ letterSpacing: '0' }}
                                            onFocus={(e) => setSelectedInput(2)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            type="password"
                                            placeholder="환전 비밀번호"
                                        />
                                    </div>
                                </div>
                                <label style={{ marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem' }}>영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로</label>
                                <label style={{ marginBottom: '1.5rem', marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem' }}>입력해주세요. (특수문자 사용불가)</label>
                                {/* BREAK */}
                                <div style={{ width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 3 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                    <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                        <input
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none"
                                            onFocus={(e) => setSelectedInput(3)}
                                            onBlur={(e) => setSelectedInput(false)}
                                            placeholder="닉네임"
                                        />
                                    </div>
                                </div>
                                <label style={{ marginBottom: '1.5rem', marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem' }}>한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</label>
                                {/* BREAK */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.4rem' }} >
                                    <div className="first-dropdown">
                                        <Dropdown options={carrierOptions} isSignup={true}>
                                            <img style={{ marginRight: '20%', width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                                        </Dropdown>
                                    </div>
                                    <div style={{ marginBottom:  isMobile ? '1rem' : '1.5rem', width: '37.75rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 5 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                        <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                            <input
                                                style={{ width: '94%', letterSpacing: '-0.01rem' }}
                                                placeholder="휴대폰번호(숫자만 입력)"
                                                type='number'
                                                pattern="\d*"
                                                onFocus={(e) => setSelectedInput(5)}
                                                onBlur={(e) => setSelectedInput(false)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* BREAK */}
                                <div style={{ marginLeft: '0.4rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 61 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }} >
                                    <div style={{ position: 'relative', width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', paddingLeft: '1.8rem', height: '100%' }}>
                                        <img src={CalendarIcon} alt="" style={{ width: '3.5rem', position: 'absolute', right: '2.5rem', top: '1.5rem' }} />
                                        <DatePicker
                                            showYearDropdown
                                            yearDropdownItemNumber={100}
                                            placeholderText='생년월일'
                                            customInput={<CustomInput />}
                                            locale="ko"
                                            selected={endDate}
                                            dateFormat="yyyy-MM-dd"
                                            dateFormatCalendar="yyyy년 MM월"
                                            disabledKeyboardNavigation={true}
                                            onBlur={() => setSelectedInput(false)}
                                            popperPlacement="bottom"
                                            renderCustomHeader={({
                                                date,
                                                changeYear,
                                                changeMonth,
                                                decreaseMonth,
                                                increaseMonth,
                                                prevMonthButtonDisabled,
                                                nextMonthButtonDisabled,
                                            }) => {
                                                return (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            height: '4rem'
                                                        }}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="react-datepicker__navigation react-datepicker__navigation--next"
                                                            aria-label="Next Month"
                                                            onClick={increaseMonth}
                                                            disabled={nextMonthButtonDisabled}
                                                        >
                                                            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                                                                Next Month
                                                            </span>
                                                        </button>
                                                        <div style={{ position: 'relative' }}>
                                                            <YearButton />
                                                            <select
                                                                style={{ width: '10rem', height: '4rem', backgroundColor: '#fff', position: 'absolute', top: 0, left: 0, opacity: 0 }}
                                                                value={selectedYear}
                                                                onChange={e => {
                                                                    setSelectedYear(e.currentTarget.value)
                                                                    changeYear(e.currentTarget.value);
                                                                }}
                                                            >
                                                                {listOfYears.map(item => (
                                                                    <option key={item} value={item}>
                                                                        {item}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div style={{ position: 'relative' }}>
                                                            <MonthButton selectedMonth={selectedMonth} />
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="react-datepicker__navigation react-datepicker__navigation--previous"
                                                            aria-label="Previous Month"
                                                            onClick={decreaseMonth}
                                                            disabled={prevMonthButtonDisabled}
                                                        >
                                                            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                                                                Previous Month
                                                            </span>
                                                        </button>
                                                    </div>
                                                )
                                            }}
                                            onChange={(date) => {
                                                setEndDate(date)
                                                setSelectedYear(getYear(date));
                                                setSelectedMonth(months[getMonth(date)]);
                                            }}
                                            onMonthChange={(date) => {
                                                setSelectedMonth(months[getMonth(date)]);
                                                setSelectedYear(getYear(date));
                                            }}
                                            onYearChange={(date) => setSelectedYear(getYear(date))}
                                            popperModifiers={{
                                                flip: {
                                                    behavior: ["bottom"] // don't allow it to flip to be above
                                                },
                                                preventOverflow: {
                                                    enabled: true // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                                },
                                                hide: {
                                                    enabled: true // turn off since needs preventOverflow to be enabled
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <label style={{ marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem' }}>수기로 작성시 아이디 생성이 불가합니다.</label>
                                <label style={{ marginBottom: '1.5rem', marginLeft: '0.4rem', marginTop: '0.4rem', fontSize: '2.2rem', width: '100%', color: '#828282', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: isMobile ? '-0.27rem' : '-0.07rem' }}>(달력으로 선택해주세요.)</label>
                                {/* BREAK */}
                                <div style={{ marginBottom:  isMobile ? '1rem' : '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 6 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0.4rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }} >
                                    <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                        <input
                                            placeholder="가입코드"
                                            onFocus={(e) => setSelectedInput(6)}
                                            onBlur={(e) => setSelectedInput(false)}
                                        />
                                    </div>
                                </div>
                                {/* BREAK */}
                                <div style={{ marginBottom: '2.375rem', display: 'flex', flexDirection: 'column', alignItems: 'space-between', padding: '0 0.4rem' }}>
                                    <div style={{ marginBottom: '0', display: 'flex' }}>
                                        <div className="first-dropdown second-dropdown" >
                                            <Dropdown options={banksOptions} isSignup={true} >
                                                <img style={{ marginRight: '20%', width: '1.5625rem' }} src={DownArrowIcon} alt="arrow" />
                                            </Dropdown>
                                        </div>
                                        <div style={{ marginBottom:  isMobile ? '1rem' : '1.5rem', width:isMobile ? '29.5rem' : '28.7rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 8 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: isMobile ? '1rem' : '1.8rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                            <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                                <input
                                                    placeholder="예금주"
                                                    onFocus={(e) => setSelectedInput(8)}
                                                    onBlur={(e) => setSelectedInput(false)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '1.5rem', width: '56.25rem', height: '7.3125rem', display: 'flex', flexDirection: 'column', background: '#191817', borderBottom: selectedInput === 9 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', marginLeft: '0rem', borderRadius: '0.6rem', alignItems: 'center', justifyContent: 'center', paddingTop: '0.375rem' }}>
                                        <div style={{ width: '100%', color: '#c8c8c8', fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '2.5rem', height: '100%' }}>
                                            <input
                                                style={{ letterSpacing: '-0.02rem' }}
                                                type='number'
                                                placeholder="계좌번호(숫자만 입력)"
                                                pattern="\d*"
                                                onFocus={(e) => setSelectedInput(9)}
                                                onBlur={(e) => setSelectedInput(false)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BREAK */}
                            <div style={{ marginTop: isMobile ? '1rem' : '2.1rem' }} className={`w-full flex flex-col items-center`}>

                                <div style={{ height: '11.8125rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '2rem' }}>
                                    <button
                                        style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '2rem' }}
                                        className="hover shadow-to-box3"
                                        onClick={() => setCompletePopup(true)}
                                    >
                                        <div style={{ color: "#ffdfbd", fontSize: '3.1875rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                            <p className='mt-1'>회원가입</p>
                                        </div>
                                    </button>
                                </div>
                                <div style={{ borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem', height: '24.875rem', paddingBottom: '5.3125rem', marginTop: isMobile ? '-9.5rem' : '-6.3rem', paddingTop: '9.3125rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2 ">
                                    <div style={{ marginTop: '-1.3rem', display: 'flex', alignItems: 'center' }} className="flex items-center ml-32">
                                        <img
                                            style={{ width: '7.375rem', margin: '0 1.75rem 0 0' }}
                                            className="object-contain"
                                            src={KakaoLogo}
                                            alt="kakao-icon"
                                        />
                                        <span style={{ marginTop: '', marginLeft: '0.3rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-brown-r351a1e font-roboto text-4xl leading-snug tracking-wide">
                                            test1234
                                        </span>
                                    </div>
                                    <div style={{ height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '0.15rem', background: '#404040' }} className="bg-gray-c1cfdb" />
                                    <div style={{ marginTop: '-1.3rem', marginRight: '0.5rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                                        <img
                                            style={{ width: '7.5rem' }}
                                            className="object-contain"
                                            src={TelegramLogo}
                                            alt="kakao-icon"
                                        />
                                        <span style={{ marginTop: '', marginLeft: '1.8375rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug tracking-wide">
                                            test1234
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '100%', height: '5rem' }}></div>
                    </div>
                </div>
            )}

            {/* SIGNUP COMPLETE POPUP COMPONENTS */}
            {showCompletePopup === true && (
                <div style={{ position: 'fixed', top: '0', right: '0', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <SignedUpPopup setCompletePopup={setCompletePopup} setSignup={setSignup} isMobile={isMobile} />
                </div>
            )}
        </div >
    )
}

export default AuthenticationPage

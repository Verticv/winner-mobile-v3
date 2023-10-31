import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import DropDownInput from '../MyPage/DropDownInput'
import CalendarIcon from '../../assets/myPage/CalendarIcon-v3.png';
import { isIOS } from 'react-device-detect';
import './DatePickerTest.css'
import './_myPage.scss'
import { getMonth, getYear } from 'date-fns';
registerLocale('ko', ko)

const DateSearchBar = ({
    isLeagueSearch = false,
    hasIdSearch = false,
    has3MonthSearch = false,
    isGameResultsSearch = false,
    withBlackButton = false,
    withMargin = true,
    hasDateSuggestion = true,
    isFreeboard,
    isPoints,
    isDistributorPage,
    withArrow,
    disableRange
}) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

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
            <p style={{ textAlign: 'center', fontSize: '2.6rem', paddingTop: '0.2rem' }}>{selectedYear}년</p>
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
            <p style={{ textAlign: 'center', fontSize: '2.6rem', paddingTop: '0.2rem' }}>{selectedMonth}월</p>
        </div>
    );

    const CustomInput = (props) => {
        return (
            <input
                className="place-color-grey date-picker left-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b"
                onClick={props.onClick}
                value={props.value}
                type="text"
                readOnly={true}
            />
        )
    }
    return (
        <div style={{
            margin: withMargin ? (!isFreeboard ? '0.65rem 1.875rem 0.9rem 1.876rem' :  '1.2rem 1.875rem') : '0 3.875rem 0 0',
            width: withMargin ? '' : '73.875rem',
            background: 'linear-gradient(to right,#5e2c89,#42227e)',
            borderRadius: '1.1rem',
            paddingTop: isPoints ? '0' : '',
            marginTop: isGameResultsSearch === true ? '1.938rem' : isPoints ? '1.938rem' : '0.625rem',
            marginLeft: isGameResultsSearch === true ? '1.876rem' : "1.876rem",
            marginRight: isGameResultsSearch === true ? '1.875rem' : '1.875rem',
            marginBottom: isIOS ? '-0.3rem' : '1.938rem'
        }} className="date12">

            {isLeagueSearch === true && (
                <div className="space-x-5px inputStyle">
                    <input
                        placeholder="리그선택"
                        className="place-color-grey placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none h-42px rounded-2xl border border-gray-dddddd px-10px text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            // const menu = document.querySelector('#main-menu');
                            // menu.style.marginBottom = '0'
                        }}
                    />
                    <input
                        placeholder="팀명검색"
                        style={{ color: "yellow" }}
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {

                        }}
                    />

                </div>
            )}

            {isGameResultsSearch === true && (
                <div className="first-row">
                    <DropDownInput isBetCombination={false} withArrow />
                    <input
                        style={{ marginLeft: '2rem', marginTop: '0.225rem', color: "#666666" }}
                        placeholder="팀명검색"
                        onFocus={() => {
                            // const menu = document.querySelector('#main-menu');
                            // menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            // const menu = document.querySelector('#main-menu');
                            // menu.style.marginBottom = '0'
                        }}
                    />
                </div>
            )}

            <div style={{paddingTop: "0.375rem"}} className="second-row">
                <div className="date-picker left-date-picker" style={{ position: 'relative', marginTop: "-0.188rem" }}>
                    <DatePicker
                        showYearDropdown
                        yearDropdownItemNumber={100}
                        customInput={
                            <CustomInput />
                        }
                        locale="ko"
                        selected={startDate}
                        dateFormat="yyyy-MM-dd"
                        dateFormatCalendar="yyyy년 MM월"
                        disabledKeyboardNavigation={true}
                        onKeyDown={(e) => {
                            e.preventDefault();
                        }}
                        onChangeRaw={(e) => e.preventDefault()}
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
                            setStartDate(date)
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
                                enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                            },
                            hide: {
                                enabled: false // turn off since needs preventOverflow to be enabled
                            }
                        }}
                    />
                    <img src={CalendarIcon} alt="" style={{ width: '3.5rem' }} className="w-14 absolute right-8" />
                </div>
                {!disableRange && <span className='Signal'>~</span>}
                <div className="date-picker right-date-picker" style={{ position: 'relative', marginTop: "-0.188rem" }}>
                    {hasDateSuggestion ? (
                        <>
                            <DatePicker
                                showYearDropdown
                                yearDropdownItemNumber={100}
                                customInput={<CustomInput />}
                                locale="ko"
                                selected={endDate}
                                dateFormat="yyyy-MM-dd"
                                dateFormatCalendar="yyyy년 MM월"
                                disabledKeyboardNavigation={true}
                                onKeyDown={(e) => {
                                    e.preventDefault();
                                }}
                                onChangeRaw={(e) => e.preventDefault()}
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
                            <img style={{ right: '2rem', width: '3.5rem' }} src={CalendarIcon} alt="" className="w-14 absolute" />
                        </>
                    ) : (
                        <DropDownInput isLeagueSelection={false} />
                    )}
                </div>
            </div>

            {hasDateSuggestion ? (
                <div
                    className="buttons-container2">
                    <div className="common-button12">
                        <div className="text-con">
                            <span className="tracking-tight text-white pt-px">오늘</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="tracking-tight text-white pt-px">1주일</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="tracking-tight text-white pt-px">15일</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="tracking-tight text-white pt-px">1개월</span>
                        </div>
                    </div>

                    {has3MonthSearch && (
                        <div className="common-button12">
                            <div className="text-con">
                                <span className="tracking-tight text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                    {!hasIdSearch ? (
                        <div className="common-button12"
                            style={{ background: withBlackButton ? '' : 'linear-gradient(to top, #4f3a7a, #e597ff)' }}
                        >
                            <div className="text-con"
                                style={{ background: withBlackButton ? '' : 'linear-gradient(to top, #6b22ff, #df52ff)' }}
                            >
                                <span style={{color: withBlackButton ? "" : "#ffffff"}} className={` ${ withBlackButton ? "" : "shadow-to-text"} tracking-tight text-white pt-px`}>{withBlackButton ? "3개월" : "검색"}</span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ width: '13.25rem', height: '7.3125rem' }} className="common-button flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75">
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span className="tracking-tight text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                </div>
            ) : (<div style={{ margin: '0.45rem' }}></div>)}


            <div style={{ margin: '0.75rem 1.8rem', marginBottom: withMargin ? '1.7rem' : '1.375rem', marginTop: '0', paddingBottom: '0.1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="flex w-full h-full items-center justify-between distributor-page-btn">
                {withBlackButton && !withMargin && (
                    <div className="first-row">
                        <input
                            style={{ marginLeft: '2rem' }}
                            placeholder="아이디"
                            className="place-color-grey placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd text-15px tracking-tight text-gray-r8c8c8c"
                            onFocus={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '0'
                            }}
                        />
                    </div>
                )}
                {withBlackButton && (
                    <div style={{ minWidth: isDistributorPage ? '27.4375rem' : '70.1375rem', height: '7.25rem', background: 'linear-gradient(to top, #4f3a7a, #e597ff)', padding: '0.1875rem', margin: '-0.789rem 0.125rem 1.75rem 0.125rem', borderRadius: '1.125rem',boxShadow: "0px 0.375rem 0.75rem 0px rgba(0, 0, 0, 0.6)" }} className="hover withBlackButton">
                        <div style={{ background: 'linear-gradient(to top, #6b22ff, #df52ff)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1.125rem' }} className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span style={{ fontSize: '2.625rem', color: '#ffffff', marginTop: '0.2rem' }} className="shadow-to-text">검색</span>
                        </div>
                    </div>
                )}
            </div>


            {hasIdSearch && (
                <div className="flex space-x-5px">
                    <input
                        className="w-138px h-42px rounded-lg border border-gray-dddddd bg-white outline-none text-15px tracking-tight text-gray-r8c8c8c px-10px"
                        placeholder="아이디"
                    />
                    <div
                        style={{
                            width: "4.688rem",
                            height: "2.625rem",
                            borderRadius: "0.25em",
                        }}
                        className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                    >
                        <div
                            style={{
                                width: "4.563rem",
                                height: "2.5rem",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                            }}
                            className="flex items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                        >
                            <span style={{ fontSize: '2.625rem' }} className="tracking-tight text-14px text-white">검색</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DateSearchBar

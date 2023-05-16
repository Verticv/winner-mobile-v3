import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import DropDownInput from '../../components/DropDownInput'
import CalendarIcon from '../../assets/myPage/CalendarIcon.png';
import { isIOS } from 'react-device-detect';
import './DatePicker.css'
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
            margin: withMargin ? (!isFreeboard ? '0.9rem 1.875rem' : '1.2rem 1.875rem') : '0 3.875rem 0 0',
            width: withMargin ? '' : '73.875rem',
            background: '#2e2e2e',
            borderRadius: '1.1rem',
            paddingTop: isPoints ? '0' : '0.65rem',
            marginTop: isGameResultsSearch === true ? '1.25rem' : isPoints ? '1.25rem' : '',
            marginBottom: isIOS ? '-0.3rem' : ''
        }} className="date12">

            {isLeagueSearch === true && (
                <div className="space-x-5px">
                    <input
                        placeholder="리그선택"
                        className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />
                    <input
                        placeholder="팀명검색"
                        className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b placeholder-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />

                </div>
            )}

            {isGameResultsSearch === true && (
                <div className="first-row">
                    <DropDownInput isBetCombination={false} withArrow />
                    <input
                        style={{ marginLeft: '2rem', marginTop: '0.1rem' }}
                        placeholder="팀명검색"
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />
                </div>
            )}

            <div className="second-row">
                <div className="date-picker left-date-picker" style={{ position: 'relative' }}>
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
                <div className="date-picker right-date-picker" style={{ position: 'relative' }}>
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
                            <img style={{ top: '3.44rem', right: '2rem', width: '3.5rem' }} src={CalendarIcon} alt="" className="w-14 absolute" />
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
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">오늘</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">1주일</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">15일</span>
                        </div>
                    </div>

                    <div className="common-button12">
                        <div className="text-con">
                            <span className="font-spoqaMedium tracking-tight text-white pt-px">1개월</span>
                        </div>
                    </div>

                    {has3MonthSearch && (
                        <div className="common-button12">
                            <div className="text-con">
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                    {!hasIdSearch ? (
                        <div className="common-button12"
                            style={{ background: withBlackButton ? '' : 'linear-gradient(to top, #4d3c0a, #997947 50%, #e6b786)' }}
                        >
                            <div className="text-con"
                                style={{ background: withBlackButton ? '' : 'linear-gradient(to top, #805f3f, #936e49 50%, #a57b52)' }}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">{withBlackButton ? "3개월" : "검색"}</span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ width: '13.25rem', height: '7.3125rem' }} className="common-button flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75">
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
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
                            className="place-color-grey placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                        />
                    </div>
                )}
                {withBlackButton && (
                    <div style={{ minWidth: isDistributorPage ? '27.4375rem' : '70.1375rem', height: '7.3125rem', background: 'linear-gradient(to top, #4c3c0a, #9f7e4d 50%, #e6b786)', padding: '0.1875rem', margin: '-1.1rem 0 1.875rem 0', borderRadius: '0.5rem' }} className="shadow-to-box hover withBlackButton">
                        <div style={{ background: 'linear-gradient(to top, #80603f, #946f49 50%, #a57b52)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0.5rem' }} className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span style={{ fontSize: '2.625rem', color: '#ffdfbd', fontFamily: 'SpoqaHanSansNeoMedium', marginTop: '0.2rem' }} className="shadow-to-text">검색</span>
                        </div>
                    </div>
                )}
            </div>


            {hasIdSearch && (
                <div className="flex space-x-5px">
                    <input
                        className="w-138px h-42px rounded-lg border border-gray-dddddd bg-white outline-none text-15px font-spoqaMedium tracking-tight text-gray-r8c8c8c px-10px"
                        placeholder="아이디"
                    />
                    <div
                        style={{
                            width: "75px",
                            height: "42px",
                            borderRadius: "4px",
                        }}
                        className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                    >
                        <div
                            style={{
                                width: "73px",
                                height: "40px",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                            }}
                            className="flex items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                        >
                            <span style={{ fontSize: '2.625rem' }} className="font-spoqaMedium tracking-tight text-14px text-white">검색</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DateSearchBar

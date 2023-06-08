import React, { useState } from 'react'
import './_signUpModal.scss';
import Close from '../../../assets/images/mainPage/close-icon.png'
import DownArrowIcon from '../../../assets/images/down-arrow-popup.png'
import Dropdown from '../../Shared/Dropdown'
import TelegramIcon from '../../../assets/images/footer/telegram-icon.png'
import TalkIcon from '../../../assets/images/footer/talk-icon.png'

import CalendarIcon from '../../../assets/images/calendar-icon.png'
import DatePicker from 'react-datepicker'
import { getMonth, getYear } from 'date-fns'
import '../../DatePicker.css'

import ConfirmPopup from '../ConfirmPopup'

const SignUpModal = ({
  setSignup
}) => {

  const [toConfirmPopup, setConfirmPopup] = useState(false)

  const [selectedInput, setSelectedInput] = useState(null)
  const carrierOptions = ["통신사", "LGU+", "SKT", "KT"]
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
  const CustomInput = (props) => {
    return (
      <input
        onClick={props.onClick}
        value={props.value}
        type="text"
        readOnly={true}
        placeholder="생년월일"
      />
    )
  }
  return (
    <div className= 'modal-overlay' >
      <div className='sign-modal'>
        <div className='header'>
          <p>회원가입</p> 
            <img src={Close} alt="right" className="close"
              onClick={() => setSignup(false)} />
        </div>
        <div className='modal-body'>
          <div className='title'>
            <p>회원가입 시 모든 항목을 정확하게 기재하시기 바랍니다.</p>
            <p>회원데이터는 안전한 서버에서 안전하게 보관됩니다.</p>
          </div>
          <div className='fields'>
              <div className='field-container'
                style={{ marginBottom:'1.625rem'}}>
              <div className='input-field'>
                <input
                  type="text"
                  placeholder={"아이디"}
                  onFocus={(e) => {
                    setSelectedInput(0)
                  }}
                  onBlur={(e) => {
                    setSelectedInput(false)
                  }}
                />
                {selectedInput === 0 && (<div className='input-line'></div>)}
              </div>
              <span className='-ml-2'>영문, 숫자만 입력가능하며 최소 4자이상 입력하세요.</span>
            </div>
            <div className='field-container'
              style={{ marginBottom: '2rem' }}>
            <div className='input-field'>
              <input
              type="password"
              placeholder={"비밀번호"}
              onFocus={(e) => {
                setSelectedInput(1)
              }}
              onBlur={(e) => {
                setSelectedInput(false)
              }}
            />
              {selectedInput === 1 && (<div className='input-line'></div>)}
            </div>
            <span >영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로
              <br/>입력해주세요. (특수문자 사용불가)</span>
            </div>
            
            <div className='field-container'
              style={{ marginBottom: '2rem' }}>
            <div className='input-field'>
            <input
              type="password"
              placeholder={"환전 비밀번호"}
              onFocus={(e) => {
                setSelectedInput(2)
              }}
              onBlur={(e) => {
                setSelectedInput(false)
              }}
            />
              {selectedInput === 2 && (<div className='input-line'></div>)}
            </div>
            <span>영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로
              <br />입력해주세요. (특수문자 사용불가)</span>
            </div>
            
              <div className='field-container'
              style={{ marginBottom: '1.875rem' }}>
              <div className='input-field'>
                <input
                  placeholder={"닉네임"}
                  onFocus={(e) => {
                    setSelectedInput(3)
                  }}
                  onBlur={(e) => {
                    setSelectedInput(false)
                  }}
                />
                {selectedInput === 3 && (<div className='input-line'></div>)}
              </div>
              <span>한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</span>
            </div>
              <div className='field-container'
              style={{ marginBottom: '1.5rem' }}>
              <div className='row'>
                  <div className='input-field dropdown carrier-dropdown' style={{ width:"16.625rem"}}>
                  <Dropdown options={carrierOptions} isSignup={true}>
                    <img style={{ width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                  </Dropdown>
                </div>
                  <div className='input-field ' style={{ width: "100%" }}>
                  <input
                    type="number"
                    placeholder={"휴대폰번호(숫자만 입력)"}
                    onFocus={(e) => {
                      setSelectedInput(4)
                    }}
                    onBlur={(e) => {
                      setSelectedInput(false)
                    }}
                  />
                  {selectedInput === 4 && (<div className='input-line'></div>)}
                </div>
              </div>
            </div>
              <div className='field-container'
                style={{ marginBottom: '2rem' }}>
              <div className='input-field date-field'>
                  <img src={CalendarIcon} alt="" className='calendar-icon' />
                <DatePicker
                  showYearDropdown
                  yearDropdownItemNumber={100}
                  placeholderText='생년월일'
                  customInput={<CustomInput/>}
                  locale="ko"
                  selected={endDate}
                  dateFormat="yyyy-MM-dd"
                  dateFormatCalendar="yyyy년 MM월"
                  disabledKeyboardNavigation={true}
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
                <span>수기로 작성시 아이디 생성이 불가합니다.<br/>
                  (달력으로 선택해주세요.)</span>
            </div>
              <div className='field-container'
                style={{ marginBottom: '1.5rem' }}>
              <div className='input-field'>
              <input
                placeholder={"가입코드"}
                  onFocus={(e) => {
                    setSelectedInput(5)
                  }}
                  onBlur={(e) => {
                    setSelectedInput(false)
                  }}
                />
                {selectedInput === 5 && (<div className='input-line'></div>)}
              </div>
            </div>
              <div className='field-container'
                style={{ marginBottom: '1.5rem' }}>
              <div className='row'>
                <div className='input-field dropdown w-411'>
                  <Dropdown options={banksOptions} isSignup={true}>
                  <img style={{ width: '1.5625rem' }} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                </Dropdown>
              </div>
              <div className='input-field '>
                <input
                    placeholder={"예금주"}
                    onFocus={(e) => {
                      setSelectedInput(6)
                    }}
                    onBlur={(e) => {
                      setSelectedInput(false)
                    }}
                  />
                  {selectedInput === 6 && (<div className='input-line'></div>)}
              </div>
              </div>
            </div>
            <div className='field-container'>
              <div className='input-field'>
                <input
                type="number"
                placeholder={"계좌번호(숫자만 입력)"}
                  onFocus={(e) => {
                    setSelectedInput(7)
                  }}
                  onBlur={(e) => {
                    setSelectedInput(false)
                  }}
                />
                {selectedInput === 7 && (<div className='input-line'></div>)}
              </div>
            </div>
            
            </div>
            <div className='modal-actions'>
            <button
              onClick={() => setConfirmPopup(true)} >
                회원가입
              </button>
            </div>
            <div className='social'>
              <div>
                <img src={TalkIcon} alt="Contact" />
                <p>test1234</p>
              </div>
              <div>
                <img src={TelegramIcon} alt="Contact" />
                <p>test1234</p>
              </div>
            </div>
        </div>
        </div>
      {toConfirmPopup === true && (
        <ConfirmPopup
          setConfirmPopup={setSignup} />
      )}
    </div>
  )
}
export default SignUpModal
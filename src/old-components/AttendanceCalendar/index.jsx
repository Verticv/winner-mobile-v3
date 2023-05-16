import React from "react";
import './_attendanceCalendar.scss'
import {
    startOfWeek,
    format,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    addMonths,
    subMonths
} from 'date-fns'
import Arrow from '../../assets/attendanceCalender/chevron_right.png'
import AttendanceEmpty from '../../assets/attendanceCalender/attendance_empty.png'
import AttendanceFilled from '../../assets/attendanceCalender/attendance_filled.png'

class Calendar extends React.Component {
    state = {
        today: new Date(),
        currentMonth: new Date(),
        currendDate: new Date(),
        selectedDate: new Date(),
        isChecked: false
    };

    renderHeader() {
        const dateFormat1 = "yyyy";
        const dateFormat2 = "MM";

        return (
            <div style={{ height: '6.625rem' }} className="content_1">
                <img style={{ height: '2.125rem', width: '1.3125rem' }} className={`content_img`} onClick={this.prevMonth} src={Arrow} alt="" />
                <div style={{ fontSize: '2.625rem', margin: '0 2.6rem' }} className="content_2">
                    <div style={{ fontSize: '3.375rem' }} className="content_3">{format(this.state.currentMonth, dateFormat1)}</div>
                    <div className="content_4">년 &nbsp;</div>
                    <div style={{ fontSize: '3.375rem' }} className="content_5">{format(this.state.currentMonth, dateFormat2)}</div>
                    <div className="content_6">월</div>
                </div>
                <img style={{ height: '2.125rem', width: '1.3125rem' }} className={`${this.state.currentMonth < this.state.today ? "content_7" : "content_8"} content_9 `} onClick={this.nextMonth} src={Arrow} alt="" />

            </div>
        );
    }

    renderDays() {
        return (
            <div style={{ height: '5.625rem', fontSize: '2.25rem' }} className="renderDays_Container">
                <div className="renderDays_Content">일</div>
                <div className="renderDays_SameContent">월</div>
                <div className="renderDays_SameContent">화</div>
                <div className="renderDays_SameContent">수</div>
                <div className="renderDays_SameContent">목</div>
                <div className="renderDays_SameContent">금</div>
                <div className="renderDays_SameContent">토</div>
            </div>
        )
    }

    renderCells() {
        const { currentMonth, currendDate, isChecked } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const dateFormat1 = "MM/dd";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        let formattedDate1 = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                formattedDate1 = format(day, dateFormat1);
                days.push(
                    <div
                        style={{ height: "9.9rem", width: '9.9375rem' }}
                        className="Days_Content"
                        key={day}
                    >
                        <div
                            // style={{ marginLeft: '1.1rem', marginTop: '1rem' }}
                            className={`${i === 0
                                ? "Red_Content"
                                : "Gray_Content"} 
                            Day_Content`}
                        >
                            <p style={{ fontSize: '2.0625rem', margin: '0', fontFamily: 'RobotoBold', letterSpacing: '-0.07rem', width: '3.3rem', textAlign: 'center' }}>{isSameMonth(day, monthStart) && formattedDate}</p>
                        </div>
                        {isSameMonth(day, monthStart) && (
                            <img className="Day_Content2" src={isChecked && format(currendDate, dateFormat1) === formattedDate1 ? AttendanceFilled : AttendanceEmpty} alt="" />
                        )}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="Rows_Content" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div style={{ height: "", width: "1112px" }} className="renderCells_Container">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };

    nextMonth = () => {
        if (this.state.currentMonth < this.state.today) {
            this.setState({
                currentMonth: addMonths(this.state.currentMonth, 1)
            });
        }

    };

    prevMonth = () => {
        this.setState({
            currentMonth: subMonths(this.state.currentMonth, 1)
        });

    };

    checkAttendance = () => {
        this.setState({
            isChecked: true
        })
    }

    render() {
        return (
            <div className="Container">
                {this.renderHeader()}
                <div style={{
                    background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)',
                    padding: '0.1875rem', marginTop: '1.7rem'
                }}
                    className="calendar_container shadow-to-box">
                    <div
                        style={{
                            background: '#323232',
                            padding: '5.5rem 1.9rem 0px', borderRadius: '1.3rem', width: '100%', height: '100%'
                        }}
                    >
                        <div className="calender_content">
                            {this.renderDays()}
                            {this.renderCells()}
                        </div>

                        <div style={{ height: '5.5rem', fontSize: '2.25rem' }} className="calender_content1">
                            2021년 07월은 총
                            <p className="calender_content2">7일</p>
                            출석 하였습니다.
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '26.3125rem',
                        height: '7.3125rem',
                        padding: '0.1875rem',
                        background: 'linear-gradient(to top, #3d4a8d, #88d9e8)',
                        marginTop: '3.7rem',
                        marginBottom: '17.8875rem',
                        borderRadius: '0.5rem'
                    }}
                    className='shadow-to-box hover'
                >
                    <button
                        className="Button_Style"
                        onClick={this.checkAttendance}
                    >
                        <div className="button-content">
                            <span className="span_style shadow-to-text">출석체크하기</span>
                        </div>
                    </button>
                </div>

            </div>
        );
    }
}

export default Calendar;

import Header from "../Header";
import HomePageTopBanner from "../HomePageTopBanner";
import React from "react";
import AttendanceCalendar from "../AttendanceCalendar";
import NavBottom from "../NavBottom";
import './_attendPage.scss';



const AttendPage = ({ isAuthenticated, setAuthenticated }) => {
    return (
        <div
            style={{ maxWidth: "1242px" }}
            className="container"
        >
            <div className="header">
                <Header />
                {/* <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} /> */}
                <HomePageTopBanner pageTitle="출석부" toPath="/main" />
            </div>
            <div
                style={{ padding: "0 1.875rem" }}
                className="contents"
            >
                <div className="content_1">
                    <AttendanceCalendar />
                </div>
            </div>
            <NavBottom />
        </div>
    );
};

export default AttendPage;

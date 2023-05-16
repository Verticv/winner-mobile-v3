import React from "react";
// import img from '../../img7.png'
// import HomePageTopBanner from "../HomePageTopBanner";
import ContactView from '../ContactView';

export default function ContactViewPage() {
    return (
        <>
            {/* <img src={img} alt='' style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
            <div className="w-full z-30 flex flex-col items-center">
                {/* <NoticeBanner /> */}
                {/* <Navbar
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuthenticated}
                /> */}
                {/* <HomePageTopBanner
                    pageTitle="문의하기"
                    toPath="/cscenter/all/contact/all"
                /> */}
            </div>
            <ContactView />
        </>
    )
} 
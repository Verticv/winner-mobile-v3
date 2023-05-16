import React, { useState } from "react";
import AllCards from "../Card/AllCards";
// import Header from "../Header";
import Jackpot from "../Jackpot";
import NavBottom from "../NavBottom";
import NavButtons from "../NavButtons/NavButtons";
import NoticeBanner from "../NoticeBanner";
import Slider from "../SliderImgs/Slider";

function MainPage() {
    const [btnActive, setBtnActive] = useState('0');
    return (
        <>
            {/* <Header /> */}
            <Slider />
            <NoticeBanner />
            <Jackpot />
            <div style={{ display: 'flex', paddingBottom: '12rem', justifyContent: '', alignItems: 'start' }}>
                <NavButtons btnActive={btnActive} setBtnActive={setBtnActive} />
                <AllCards btnActive={btnActive} setBtnActive={setBtnActive} />
            </div>
            <NavBottom />
        </>
    );
}

export default MainPage;
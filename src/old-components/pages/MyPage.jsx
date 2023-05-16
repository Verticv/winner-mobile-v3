import React from "react";
import FreeBoardMain from "../FreeBoardMain";
import HomePageTopBanner from "../HomePageTopBanner";

export default function MyPage() {
    return (
        <>
            <HomePageTopBanner pageTitle='게시판' toPath={window.location.pathname.includes('/mypage') ? '/mypage' : '/main'} isFreeboard={true} />
            <FreeBoardMain activeButton='' setActiveButton='' />
        </>
    )
}

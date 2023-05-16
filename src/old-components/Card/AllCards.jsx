import React, { useState } from "react";
import Card from './index';


import bg1 from '../../assets/mainPage/inactive-bg1-card.png'
import bga1 from '../../assets/mainPage/active-bg1-card.png'

import bg2 from '../../assets/mainPage/inactive-bg2-card.png';
import bga2 from '../../assets/mainPage/active-bg2-card.png';

import bg3 from '../../assets/mainPage/inactive-bg3-card.png';
import bga3 from '../../assets/mainPage/active-bg3-card.png';

import bg4 from '../../assets/mainPage/inactive-bg4-card.png';
import bga4 from '../../assets/mainPage/active-bg4-card.png';

import bg5 from '../../assets/mainPage/inactive-bg5-card.png';
import bga5 from '../../assets/mainPage/active-bg5-card.png';

import bg6 from '../../assets/mainPage/inactive-bg6-card.png';
import bga6 from '../../assets/mainPage/active-bg6-card.png';

import bg7 from '../../assets/mainPage/inactive-bg7-card.png';
import bga7 from '../../assets/mainPage/active-bg7-card.png';

import bg71 from '../../assets/mainPage/inactive-bg71-card.png';
import bga71 from '../../assets/mainPage/active-bg71-card.png';

import bg72 from '../../assets/mainPage/inactive-bg72-card.png';
import bga72 from '../../assets/mainPage/active-bg72-card.png';

import bg73 from '../../assets/mainPage/inactive-bg73-card.png';
import bga73 from '../../assets/mainPage/active-bg73-card.png';

import bg8 from '../../assets/mainPage/inactive-bg8-card.png';
import bga8 from '../../assets/mainPage/active-bg8-card.png';

import bg9 from '../../assets/mainPage/inactive-bg9-card.png';
import bga9 from '../../assets/mainPage/active-bg9-card.png';

import bg10 from '../../assets/mainPage/inactive-bg10-card.png';
import bga10 from '../../assets/mainPage/active-bg10-card.png';

import bg11 from '../../assets/mainPage/inactive-bg11-card.png';
import bga11 from '../../assets/mainPage/active-bg11-card.png';

import bg12 from '../../assets/mainPage/inactive-bg12-card.png';
import bga12 from '../../assets/mainPage/active-bg12-card.png';

import bg13 from '../../assets/mainPage/inactive-bg13-card.png';
import bga13 from '../../assets/mainPage/active-bg13-card.png';

import bg14 from '../../assets/mainPage/inactive-bg14-card.png';
import bga14 from '../../assets/mainPage/active-bg14-card.png';

import bg15 from '../../assets/mainPage/inactive-bg15-card.png';
import bga15 from '../../assets/mainPage/active-bg15-card.png';

import bg16 from '../../assets/mainPage/inactive-bg16-card.png';
import bga16 from '../../assets/mainPage/active-bg16-card.png';

import bg17 from '../../assets/mainPage/inactive-bg17-card.png';
import bga17 from '../../assets/mainPage/active-bg17-card.png';

import bg18 from '../../assets/mainPage/inactive-bg18-card.png';
import bga18 from '../../assets/mainPage/active-bg18-card.png';

import bg19 from '../../assets/mainPage/inactive-bg19-card.png';
import bga19 from '../../assets/mainPage/active-bg19-card.png';

import bg20 from '../../assets/mainPage/inactive-bg20-card.png';
import bga20 from '../../assets/mainPage/active-bg20-card.png';

import bg21 from '../../assets/mainPage/inactive-bg21-card.png';
import bga21 from '../../assets/mainPage/active-bg21-card.png';

import bg22 from '../../assets/mainPage/inactive-bg22-card.png';
import bga22 from '../../assets/mainPage/active-bg22-card.png';

import bg221 from '../../assets/mainPage/inactive-bg221-card.png';
// import bga221 from '../../assets/mainPage/active-bg221-card.png';

import bg23 from '../../assets/mainPage/inactive-bg23-card.png';
import bga23 from '../../assets/mainPage/active-bg23-card.png';
import bg24 from '../../assets/mainPage/inactive-bg24-card.png';
import bga24 from '../../assets/mainPage/active-bg24-card.png';
import bg25 from '../../assets/mainPage/inactive-bg25-card.png';
import bga25 from '../../assets/mainPage/active-bg25-card.png';
import bg26 from '../../assets/mainPage/inactive-bg26-card.png';
import bga26 from '../../assets/mainPage/active-bg26-card.png';
import bg27 from '../../assets/mainPage/inactive-bg27-card.png';
import bga27 from '../../assets/mainPage/active-bg27-card.png';
import bg28 from '../../assets/mainPage/inactive-bg28-card.png';
import bga28 from '../../assets/mainPage/active-bg28-card.png';
const cardInfo = [
    {
        id: 2,
        inactivBackground: bg2,
        activeBackground: bga2,
        icon: true,
        text: '프레그메틱플레이',
        isActive: false,
        // path: '/live-casino',
        group: '1',
        best: true
    },
    {
        id: 1,
        inactivBackground: bg1,
        activeBackground: bga1,
        icon: true,
        text: '에볼루션',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 3,
        inactivBackground: bg3,
        activeBackground: bga3,
        icon: true,
        text: '로얄지',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 4,
        inactivBackground: bg4,
        activeBackground: bga4,
        icon: true,
        text: '아시아게이밍',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 5,
        inactivBackground: bg5,
        activeBackground: bga5,
        icon: true,
        text: '드림게이밍',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 6,
        inactivBackground: bg6,
        activeBackground: bga6,
        icon: true,
        text: '섹시게이밍',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 7,
        inactivBackground: bg7,
        activeBackground: bga7,
        icon: true,
        text: '빅게이밍',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 71,
        inactivBackground: bg71,
        activeBackground: bga71,
        icon: true,
        text: '오리엔탈게임',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 72,
        inactivBackground: bg72,
        activeBackground: bga72,
        icon: true,
        text: '이주기',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 73,
        inactivBackground: bg73,
        activeBackground: bga73,
        icon: true,
        text: '마이크로게이밍',
        isActive: false,
        // path: '/live-casino',
        group: '1'
    },
    {
        id: 8,
        inactivBackground: bg8,
        activeBackground: bga8,
        icon: true,
        text: '케이플레이슬롯',
        isActive: false,
        group: '2'
    },
    {
        id: 9,
        inactivBackground: bg9,
        activeBackground: bga9,
        icon: false,
        text: '라이브베팅',
        isActive: false,
        group: '3'
    },
    {
        id: 10,
        inactivBackground: bg10,
        activeBackground: bga10,
        icon: false,
        text: '조합베팅',
        isActive: false,
        path: '/bet-combination',
        group: '3'
    },
    {
        id: 11,
        inactivBackground: bg11,
        activeBackground: bga11,
        icon: false,
        text: '스페셜베팅',
        isActive: false,
        path: '/bet-combination',
        group: '3'
    },    
    // {
    //     id: 22,
    //     inactivBackground: bg22,
    //     activeBackground: bga22,
    //     icon: true,
    //     text: '두윈카지노',
    //     isActive: false,
    //     group: '4',
    //     // disable: 'true',
    //     // extra: 'true'
    //     main: true
    // },
    {
        id: 2232,
        inactivBackground: bg22,
        activeBackground: bga22,
        icon: true,
        text: '두윈카지노',
        isActive: false,
        group: '4',
        // disable: 'true',
        // extra: 'true'
    }, 
    {
        id: 221,
        inactivBackground: bg221,
        // activeBackground: bga221,
        activeBackground: bg221,
        icon: true,
        text: '이용가이드',
        isActive: false,
        group: '4',
        disable: 'true',
        extra: 'true'
    }, 
    {
        id: 12,
        inactivBackground: bg12,
        activeBackground: bga12,
        icon: true,
        text: '보타카지노',
        isActive: false,
        group: '4'
    },
    {
        id: 13,
        inactivBackground: bg13,
        activeBackground: bga13,
        icon: true,
        text: 'e-스포츠',
        isActive: false,
        group: '5'
    },
    {
        id: 14,
        inactivBackground: bg14,
        activeBackground: bga14,
        icon: false,
        text: '파워볼',
        isActive: false,
        path: '/minigame/powerball',
        group: '6'
    },
    {
        id: 15,
        inactivBackground: bg15,
        activeBackground: bga15,
        icon: false,
        text: '파워사다리',
        isActive: false,
        path: '/minigame/powerladder',
        group: '6'
    },
    {
        id: 16,
        inactivBackground: bg16,
        activeBackground: bga16,
        icon: false,
        text: '스피드키노',
        isActive: false,
        path: '/minigame/speedkino',
        group: '6'
    },
    {
        id: 17,
        inactivBackground: bg17,
        activeBackground: bga17,
        icon: false,
        text: '키노사다리',
        isActive: false,
        path: '/minigame/kinoladder',
        group: '6'
    },
    {
        id: 18,
        inactivBackground: bg18,
        activeBackground: bga18,
        icon: true,
        text: '키론가상게임',
        isActive: false,
        group: '7'
    },
    {
        id: 19,
        inactivBackground: bg19,
        activeBackground: bga19,
        icon: true,
        text: '케이플레이피싱',
        isActive: false,
        group: '8'
    },
    {
        id: 20,
        inactivBackground: bg20,
        activeBackground: bga20,
        icon: true,
        text: '티비벳',
        isActive: false,
        group: '9'
    },
    {
        id: 21,
        inactivBackground: bg21,
        activeBackground: bga21,
        icon: true,
        text: '이용가이드',
        isActive: false,
        group: '4',
        path: '/hotelcasino/structure',
        extra: 'true'
    },

    {
        id: 23,
        inactivBackground: bg23,
        activeBackground: bga23,
        icon: true,
        text: '호텔카지노',
        isActive: false,
        group: '4',
        disable: 'true',
        extra: 'true'
    }, {
        id: 24,
        inactivBackground: bg24,
        activeBackground: bga24,
        icon: true,
        text: '화면구성설명',
        isActive: false,
        group: '5',
        extra: 'true',
        path: '/esports/structure'
    }, {
        id: 25,
        inactivBackground: bg25,
        activeBackground: bga25,
        icon: true,
        text: '단폴더베팅방법',
        isActive: false,
        group: '5',
        extra: 'true',
        path: '/esports/single'
    }, {
        id: 26,
        inactivBackground: bg26,
        activeBackground: bga26,
        icon: true,
        text: '다폴더베팅방법',
        isActive: false,
        group: '5',
        extra: 'true',
        path: '/esports/multi'
    }, {
        id: 27,
        inactivBackground: bg27,
        activeBackground: bga27,
        icon: true,
        text: '화면구성설명',
        isActive: false,
        group: '9',
        extra: 'true',
        path: '/tvbet/structure'
    }, {
        id: 28,
        inactivBackground: bg28,
        activeBackground: bga28,
        icon: true,
        text: '베팅방법',
        isActive: false,
        group: '9',
        extra: 'true',
        path: '/tvbet/info'
    },

]

export default function AllCards({ btnActive, setBtnActive }) {
    const [cardActive, setCardActive] = useState('');
    return (

        <div className="cards" style={{position:'relative'}} >

            {btnActive === '0' ? cardInfo.filter((a) => !a.extra).map(({ id, inactivBackground, activeBackground, icon, text, isActive, path, group, best }) => (
                <Card key={id} id={id} inactivBackground={inactivBackground} activeBackground={activeBackground}
                    icon={icon} text={text} isActive={isActive} cardActive={cardActive} setCardActive={setCardActive} path={path} best={best}
                />
            ))
                : <>
                    {true ? cardInfo.filter((a) => (a.group === btnActive) && !a.main).map(({ id, inactivBackground, activeBackground, icon, text, isActive, path, group, disable, extra, best }) => (
                        <Card key={id} id={id} inactivBackground={inactivBackground} activeBackground={activeBackground}
                            icon={icon} text={text} isActive={isActive} cardActive={cardActive} setCardActive={setCardActive} path={path} disable={disable} group={group} extra={extra} best={best}
                        />
                    ))
                        : <></>}
                </>}
        </div>
    )
}

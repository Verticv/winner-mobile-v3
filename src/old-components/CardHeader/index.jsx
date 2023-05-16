import React from 'react';
import FootballIcon from '../../assets/myPage/sports/football.png'
import USFlagIcon from '../../assets/myPage/sports/usaFlag.png'
import UKFlagIcon from '../../assets/myPage/sports/englandFlag.png'
import SpainFlagIcon from '../../assets/flag.png'
import ClockIcon from '../../assets/myPage/sports/clock.png'
import Icon3 from '../../assets/gameresults/mini-icon1.png'

import Icon4 from '../../assets/gameresults/mini-icon2.png'
import Icon5 from '../../assets/minigameResults/3.png'
import Icon6 from '../../assets/minigameResults/4.png'

const CardHeader = ({ flag = 'us', name = 'MLS', date = '2021-06-29 15:45', isMinigame = false, minigameType = "powerball", smallCard, width6 }) => {
    const flags = {
        us: USFlagIcon,
        uk: UKFlagIcon,
        spain: SpainFlagIcon
    }
    const headerFlag = flags[flag]

    if (isMinigame === true) return (
        <div style={{ height: '7.2rem', paddingLeft: "1.4rem", background: 'linear-gradient(to right, #6c553e, #473b35)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '' }} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd pr-7">
            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: minigameType === "powerladder" ? width6 ? '6.5rem' : '6.3rem' :  width6 ? '6rem' :'7rem', height: 'auto', marginTop: minigameType === "powerladder" ? '-0.44rem' : '-0.34rem', marginLeft: '' }} className='object-contain' src={minigameType === "powerladder" ? Icon4 : minigameType === "kinoladder" ? Icon6 : minigameType === "powerball" ? Icon3 : Icon5} alt="" />
                <span style={{ fontSize: '2.625rem', paddingBottom: '0.2rem', marginLeft: '0.7rem', color: '#ffdfbd', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white">{minigameType === "powerladder" ? "파워사다리" : minigameType === "kinoladder" ? "키노사다리" : minigameType === "powerball" ? "파워볼" : "스피드키노"}</span>
            </div>
            {minigameType !== "powerball" && (
                <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', letterSpacing: '-0.1rem', marginRight: '1.5rem', marginTop: '-0.4rem' }}>
                    <img style={{ width: '2.374375rem', height: '2.374375rem' }} src={ClockIcon} alt="" />
                    <span
                        style={{ color: "#ffdfbd", fontSize: '2.625rem', marginLeft: '0.5625rem', marginTop: '0.125rem', fontFamily: 'RobotoMedium', marginRight: '' }}
                        className="font-spoqa text-16px tracking-tight text-white"
                    >
                        {date}
                    </span>
                </div>
            )}

        </div>
    )

    else return (
        <div style={{ height: '7.1rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: smallCard ? '0 1.6rem' : '0px 1.75rem 0 1.6rem', background: 'linear-gradient(to right, #6b543e, #5a483a 50%, #473b35)', borderRadius: 0 }} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <img style={{ width: '3.9375rem', height: '3.9375rem', marginTop: '-0.3rem' }} src={FootballIcon} alt="" />
                <img style={{ width: '5.625', height: '3.3125rem', marginLeft: '1.0625rem', marginTop: '-0.3rem' }} src={headerFlag} alt="" />
                <span style={{ fontSize: '2.624375rem', paddingTop: '0.1875rem', marginLeft: '0.85rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffdfbd', marginTop: '-0.3rem',
                    whiteSpace: 'nowrap', maxWidth: '31rem', overflow: 'hidden', textOverflow: 'ellipsis'
            }} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white">{name}</span>
            </div>
            <div className="flex items-center" style={{ display: 'flex' }}>
                <img style={{ width: '2.375rem', height: '2.375rem', marginTop: '0.3rem' }} src={ClockIcon} alt="" />
                <span
                    style={{ color: "#ffdfbd", fontSize: '2.624375rem', marginLeft: '0.5rem', marginTop: '-0.1rem', fontFamily: 'RobotoMedium', marginRight: '-0.2rem', letterSpacing: '-0.11rem' }}
                    className="font-spoqa text-16px tracking-tight text-white"
                >
                    {date}
                </span>
            </div>
        </div>
    )
}

export default CardHeader;

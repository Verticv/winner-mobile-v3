import React, { useState } from 'react'

import LeftIcon from '../../assets/myPage/Pagination-Icon/nav-left-arrow-v3.png';
import RightIcon from '../../assets/myPage/Pagination-Icon/nav-right-arrow-v3.png';
import DoubleLeftIcon from '../../assets/myPage/Pagination-Icon/two-left-arrow-v3.png';
import DoubleRightIcon from '../../assets/myPage/Pagination-Icon/two-right-arrow-v3.png';
import BetHistoryLeftIcon from '../../assets/myPage/bet-history/left.png';
import BetHistoryRightIcon from '../../assets/myPage/bet-history/right.png';
import BetHistoryDoubleLeftIcon from '../../assets/myPage/bet-history/double_left.png';
import BetHistoryDoubleRightIcon from '../../assets/myPage/bet-history/double_right.png';

import bg from '../../assets/myPage/Pagination-Icon/background-v3.png';

const Pagination = ({ page, setPage, withMarginBottom = true, isBetHistoryPopup = false }) => {

    const LeftArrow = () => (
        <button
            style={{ backgroundColor: selectedPage !== 1 && "#fff", width: '2.125rem', height: '2.125rem', marginRight: '3.1875rem', background: 'bottom', filter: isBetHistoryPopup ? 'brightness(1) invert(0.7)' : '' }}
            className='hover'
            onClick={() => selectedPage !== 1 && setSelectedPage(selectedPage - 1)}
        >
            <img style={{
                width: '1.3125rem', height: '2.1875rem',
                marginLeft: '1rem', marginTop: '-1rem'
            }} className="cursor-pointer object-contain max-w-none ddddddddddddd" src={isBetHistoryPopup ? BetHistoryLeftIcon : LeftIcon} alt="arrow" />
        </button>
    )
    const RightArrow = () => (
        <button
            style={{ backgroundColor: selectedPage !== 1 && "#fff", width: '2.125rem', height: '2.125rem', marginLeft: '3.1875rem', background: 'bottom', filter: isBetHistoryPopup ? 'brightness(1) invert(0.7)' : '' }}
            className='hover'
            onClick={() => selectedPage !== 5 && setSelectedPage(selectedPage + 1)}
        >
            <img style={{ width: '1.3125rem', height: '2.1875rem', marginLeft: '0.9rem', marginTop: '-1rem' }} className="cursor-pointer max-w-none object-contain" src={isBetHistoryPopup ? BetHistoryRightIcon : RightIcon} alt="arrow" />
        </button>
    )

    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <div style={{ marginBottom: withMarginBottom ? '16.25rem' : '0', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3.8rem' }}>
            <button
                style={{ width: '2.125rem', height: '2.125rem', marginRight: '5rem', background: 'bottom' }}
                className='hover'
                onClick={() => setSelectedPage(1)}
            >
                <img style={{ width: '2.125rem', height: '2.125rem', marginLeft: '0.1rem', marginTop: '-1rem', filter: isBetHistoryPopup ? 'brightness(1) invert(0.7)' : '' }} className="cursor-pointer object-contain max-w-none" src={isBetHistoryPopup ? BetHistoryDoubleLeftIcon : DoubleLeftIcon} alt="" />
            </button>
            <LeftArrow />
            <div className="space-x-px flex items-center buttons-container">
                <button
                    style={{ background: selectedPage !== 1 ? "bottom" : `url(${bg}) round`, borderRadius: '0.6rem', width: '7.3125rem', height: '7.3125rem', marginRight: '0.188rem' }}
                    className='hover'
                    onClick={() => setSelectedPage(1)}
                >
                    <div style={{ marginTop: '-0.5rem' }}>
                        <span style={{ fontSize: '2.4375rem', color: isBetHistoryPopup ? "#444444" : selectedPage === 1 ? "#594e6a" : '#eeeeee' }}>1</span>
                    </div>
                </button>
                <button
                    style={{ background: selectedPage !== 2 ? "bottom" : `url(${bg}) round`, borderRadius: '0.6rem', width: '7.3125rem', height: '7.3125rem', marginRight: '0.188rem' }}
                    className='hover'
                    onClick={() => setSelectedPage(2)}
                >
                    <div style={{ marginTop: '-0.5rem' }}>
                        <span style={{ fontSize: '2.4375rem', color: isBetHistoryPopup ? "#444444" : selectedPage === 2 ? "#594e6a" : '#eeeeee' }} className={`${selectedPage === 2 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>2</span>
                    </div>
                </button>
                <button
                    style={{ background: selectedPage !== 3 ? "bottom" : `url(${bg}) round`, borderRadius: '0.6rem', width: '7.3125rem', height: '7.3125rem', marginRight: '0.188rem' }}
                    className='hover'
                    onClick={() => setSelectedPage(3)}
                >
                    <div style={{ marginTop: '-0.5rem' }}>
                        <span style={{ fontSize: '2.4375rem', color: isBetHistoryPopup ? "#444444" : selectedPage === 3 ? "#594e6a" : '#eeeeee' }} className={`${selectedPage === 3 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>3</span>
                    </div>
                </button>
                <button
                    style={{ background: selectedPage !== 4 ? "bottom" : `url(${bg}) round`, borderRadius: '0.6rem', width: '7.3125rem', height: '7.3125rem', marginRight: '0.188rem' }}
                    className='hover'
                    onClick={() => setSelectedPage(4)}
                >
                    <div style={{ marginTop: '-0.5rem' }}>
                        <span style={{ fontSize: '2.4375rem', color: isBetHistoryPopup ? "#444444" : selectedPage === 4 ? "#594e6a" : '#eeeeee' }} className={`${selectedPage === 4 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>4</span>
                    </div>
                </button>
                <button
                    style={{ background: selectedPage !== 5 ? "bottom" : `url(${bg}) round`, borderRadius: '0.6rem', width: '7.3125rem', height: '7.3125rem', padding: '0.188rem' }}
                    className='hover'
                    onClick={() => setSelectedPage(5)}
                >
                    <div style={{ marginTop: '-1rem' }}>
                        <span style={{ fontSize: '2.4375rem', color: isBetHistoryPopup ? "#444444" : selectedPage === 5 ? "#594e6a" : '#eeeeee' }} className={`${selectedPage === 5 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>5</span>
                    </div>
                </button>
            </div>


            <RightArrow />
            <button
                style={{ width: '2.125rem', height: '2.125rem', marginLeft: '5.8125rem', background: 'bottom' }}
                className='hover'
                onClick={() => setSelectedPage(5)}
            >
                <img style={{ width: '2.125rem', height: '2.125rem', marginTop: '-1rem', filter: isBetHistoryPopup ? 'brightness(1) invert(0.7)' : '' }} className=" cursor-pointer object-contain max-w-none" src={isBetHistoryPopup ? BetHistoryDoubleRightIcon : DoubleRightIcon} alt="" />
            </button>
        </div>
    )
}

export default Pagination

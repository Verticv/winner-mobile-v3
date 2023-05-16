import React from 'react'
import DownArrowIcon from '../../assets/myPage/search/search-arrow-down.png'
import SearchIcon from '../../assets/myPage/search/search-icon.png'
import Dropdown from '../Dropdown';

const Search = () => {

    const carrierOptions = ["제목", "본문", "작성자"]

    const InboxSearch = (
        <div
            style={{ padding: '1.75rem 1.625rem', paddingBottom: '1.5625rem', height: '10.4375rem', borderWidth: '0.1875rem', display: 'flex' }}
            // className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center"
            className='options-div'
        >
            <div
                style={{ width: '15rem', height: '6.75rem', borderWidth: '0.1875rem', paddingTop: '1rem' }}
                // className="flex h-full bg-white rounded-2xl border border-gray-dddddd group"
                className='left-div-options'
            >
                <div
                    style={{ width: '15rem' }}
                    // className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight"
                    className='content'
                >
                    <Dropdown ddda labelStyle={{ marginLeft: '1.6875rem', color: '#ccc2b6', fontSize: '2.8125rem' }} options={carrierOptions} isSignup={true} labelClasses="pt-1">
                        <img style={{ width: '1.5625rem', height: '1rem', marginRight: '1.5625rem', marginTop: '-1.3rem' }} className="object-contain" src={DownArrowIcon} alt="arrow" />
                    </Dropdown>
                </div>
            </div>

            <div style={{ borderWidth: '0.1875rem', marginLeft: '0.6875rem', width: '51.7rem', display: 'flex', justifyContent: 'start', height: '6.8rem', marginTop: '0.1rem' }} className="flex w-full h-full bg-white rounded-2xl border border-gray-dddddd">
                <input
                    style={{
                        fontSize: '2.80625rem', paddingLeft: '1.3rem', outline: 'none', fontFamily: 'SpoqaHanSansNeoMedium', color: '#b4b4b4', letterSpacing: '-0.05rem', border: '0.1875rem solid #404040', borderRight: 0,
                        borderRadius: '0.7rem', paddingTop: '0.1rem', width: '48rem', borderTopRightRadius: 0, borderBottomRightRadius: 0, background: '#1a1a1a',
                    }}
                    className="rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요."
                    onFocus={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '-14.075rem'
                    }}
                    onBlur={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '0'
                    }}
                />
                <button style={{
                    border: 0, width: '6.75rem', height: '6.85rem', marginTop: '-0.2875rem', marginRight: '-0.1875rem', position: 'absolute', right: '0.1rem', top: '2.1rem', padding: '0.1875rem',
                    background: 'linear-gradient(to top, #4c3c0a, #a07e4d 50%, #e6b786 )', borderRadius: '0.5rem'
                }}
                    className='hover'
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, #80603f, #926d48 50%, #a57b51 )',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '0.5rem',
                        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)'

                    }}>
                        <img style={{ width: '2.6rem', height: '2.6rem' }} src={SearchIcon} alt="" />
                    </div>
                </button>
            </div>
        </div>
    )


    return (
        <div className='search-container'>
            {InboxSearch}
        </div>
    )
}

export default Search

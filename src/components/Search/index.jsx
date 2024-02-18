import React from 'react'
import DownArrowIcon from '../../assets/myPage/search/search-arrow-down.png'
import SearchIcon from '../../assets/myPage/search/search-icon.png'
import Dropdown from '../MyPage/Dropdown';
import './_search.scss';

const Search = () => {

    const carrierOptions = ["제목", "본문", "작성자"]

    const InboxSearch = (
        <div
            style={{ padding: '1.75rem 1.625rem', paddingBottom: '1.5625rem', height: '10.4375rem', borderWidth: '0.1875rem', display: 'flex' }}
            // className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center"
            className='options-div'
        >
            <div
                style={{ width: '15rem', height: '6.75rem', borderWidth: '0.1875rem'}}
                // className="flex h-full bg-white rounded-2xl border border-gray-dddddd group"
                className='left-div-options'
            >
                <div
                    style={{ width: '15rem' }}
                    // className="flex w-full text-gray-r393e41  outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight"
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
                        height: '6.75rem', marginTop: '0.05rem',
                        // fontSize: '2.80625rem', paddingLeft: '1.3rem', outline: 'none', color: '#b4b4b4', letterSpacing: '-0.05rem', border: '0.1875rem solid #404040', borderRight: 0,
                        fontSize: '2.80625rem', paddingLeft: '1.3rem', outline: 'none', color: '#444444', letterSpacing: '-0.05rem', border: '0.1875rem solid #404040', borderRight: 0,
                        borderRadius: '0.7rem', paddingTop: '0.1rem', width: '50rem', borderTopRightRadius: 0, borderBottomRightRadius: 0, background: '#ffffff',
                    }}
                    className="rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41  outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요."
                    onFocus={() => {
                        // const menu = document.querySelector('#main-menu');
                        // menu.style.marginBottom = '-14.075rem'
                    }}
                    onBlur={() => {
                        // const menu = document.querySelector('#main-menu');
                        // menu.style.marginBottom = '0'
                    }}
                />
                <button style={{
                    border: 0, width: '6.75rem', height: '6.7rem', marginTop: '-0.2rem', marginRight: '-0.1875rem', position: 'absolute', right: '0.1rem', top: '2.1rem', padding: '0.1875rem',
                    background: 'linear-gradient(to top, rgb(79, 58, 122), rgb(229, 151, 255))', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0.375rem 0.75rem 0px'
                }}
                    className='hover'
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgb(107, 34, 255), rgb(223, 82, 255))',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '1rem'

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

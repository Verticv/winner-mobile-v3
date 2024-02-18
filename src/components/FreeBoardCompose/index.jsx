import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import BoardViewPanel from '../MyPage/BoardViewPanel';
import BetHistoryPopup from '../BetHistoryPopup';
import PopupControls from '../popups/PopupControls';

import './_freeBoardCompose.scss';

const FreeBoardCompose = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [attachedArray, setAttachedArray] = useState([]);

    const AttachButton = (
        <button
            className='popup-btn hover'
        >
            베팅내역첨부
        </button>
    )

    return (
        <div
            className='write'
        // style={{ padding: '1.875rem' }}
        >

            <div
                className='div-border'
            // style={{background: 'yellow', padding: '0.1875rem'}}
            >
                <div
                    className='write-content'
                // className="w-full rounded-2xl shadow-subNavbar overflow-hidden"
                >

                    <div
                        // style={{ height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.6875rem' }}
                        // className="w-full text-5xl bg-gray-fafafa border-b border-gray-ededed"
                        className='input-div'
                    >
                        <input
                            placeholder="제목을 입력하세요."
                            // style={{color:'#666666'}}
                            style={{color:'rgb(247, 247, 247)'}}
                            onFocus={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '0'
                            }}
                        />
                    </div>

                    <div style={{ height: '9.1875rem', paddingLeft: '2.625rem', borderBottomWidth: '0.1875rem', background: '#f7f7f7', borderBottom: '0.1875rem solid #dddddd', display: 'flex', justifyContent: 'start' }} className="w-full bg-gray-fafafa border-b border-gray-dddddd flex items-center">

                        <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                            <BetHistoryPopup setPopupOpen={setPopupOpen} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                        </PopupControls>

                    </div>


                    <BoardViewPanel isAttached={true} attachedArray={attachedArray} setAttachedArray={setAttachedArray} isSportsAndLiveSports={true} />

                    <div style={{ height: '0.2rem', marginTop: '4rem', backgroundColor: '#e5e7eb', }}></div>

                    <div style={{ height: "70.25rem", paddingTop: '2.4rem', paddingLeft: '2.4875rem', fontSize: '2.8125rem', background: '#ffffff', borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem' }} className="placeholder-white">
                        <textarea
                            className='textarea'
                            placeholder="욕설 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제 되며 사이트 이용에 제한을 받을 수 있습니다."
                            style={{color:'#444444'}}
                            onFocus={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                // const menu = document.querySelector('#main-menu');
                                // menu.style.marginBottom = '0'
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="two-buttons-container">
                {/* <button style={{ height: '7.3125rem' }} onClick={() => navigate("/mypage/freeboard")} className='shadow-box-myPage hover'> */}
                    {/* <div style={{ width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}> */}
                <button style={{ background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', height: '7.3125rem', padding: '', fontSize: '2.8125rem' }} onClick={() => navigate("/mypage/freeboard")} className='shadow-box-myPage hover'>
                    <div style={{ background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, rgb(21, 207, 238), rgb(49, 151, 229))', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span className="shadow-text-myPage" style={{ color: '#ffffff' }}>작성하기</span>
                        </div>
                    </div>
                </button>
                <button style={{ background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', height: '7.3125rem', padding: '', fontSize: '2.8125rem' }} onClick={() => navigate("/mypage/freeboard")} className='shadow-box-myPage hover'>
                    <div style={{ background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, rgb(255, 119, 96), rgb(241, 74, 83))', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span className="shadow-text-myPage" style={{ color: '#ffffff' }}>취소하기</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FreeBoardCompose;

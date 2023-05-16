import BoardViewPanel from '../BoardViewPanel';
import BetHistoryPopup from '../BetHistoryPopup';
import PopupControls from '../popups/PopupControls';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FreeBoardCompose = () => {

    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [attachedArray, setAttachedArray] = useState([]);

    const AttachButton = (
        <button
            // style={{ width: "19.3125rem", height: "6.75rem", fontSize: '2.4375rem', borderRadius: '0.5rem', backgroundColor: "#826140", color: '#ffdfbd', marginTop: '1.125rem' }}
            // className="flex items-center justify-center rounded-2xl text-white tracking-tight font-spoqaMedium pt-1"
            className='popup-btn hover'
        >
            베팅내역첨부
        </button>
    )

    return (
        <div
            className='작성하기'
        // style={{ padding: '1.875rem' }}
        >

            <div
                className='div-border'
            // style={{background: 'yellow', padding: '0.1875rem'}}
            >
                <div
                    className='작성하기-content'
                // className="w-full rounded-2xl shadow-subNavbar overflow-hidden"
                >

                    <div
                        // style={{ height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.6875rem' }}
                        // className="w-full text-5xl bg-gray-fafafa border-b border-gray-ededed"
                        className='input-div'
                    >
                        <input
                            placeholder="제목을 입력하세요."
                            style={{color:'#c8c8c8'}}
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                        />
                    </div>

                    <div style={{ height: '9.1875rem', paddingLeft: '2.625rem', borderBottomWidth: '0.1875rem', background: '#2e2e2e', borderBottom: '0.1875rem solid #252525', display: 'flex', justifyContent: 'start' }} className="w-full bg-gray-fafafa border-b border-gray-dddddd flex items-center">

                        <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                            <BetHistoryPopup setPopupOpen={setPopupOpen} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                        </PopupControls>

                    </div>


                    <BoardViewPanel isAttached={true} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />


                    <div style={{ height: "70.25rem", paddingTop: '2.4rem', paddingLeft: '2.4875rem', fontSize: '2.8125rem', background: '#323232', borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem' }} className="placeholder-white">
                        <textarea
                            className='textarea'
                            placeholder="욕설 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제 되며 사이트 이용에 제한을 받을 수 있습니다."
                            style={{color:'#c8c8c8'}}
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="two-buttons-container">
                <button style={{ height: '7.3125rem' }} onClick={() => navigate("/freeboard")} className='shadow-to-box hover'>
                    <div style={{ width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #3a6287, #4777ab 50%, #518bcb)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: '#d6f3ff' }}>작성하기</span>
                        </div>
                    </div>
                </button>
                <button style={{ background: 'linear-gradient(to top, #4e3d0b, #a3814f 50%, #e7b887)', height: '7.3125rem', padding: '', fontSize: '2.8125rem' }} onClick={() => navigate("/freeboard")} className='shadow-to-box hover'>
                    <div style={{ background: 'linear-gradient(to top, #4e3d0b, #a3814f 50%, #e7b887)', width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                        <div
                            style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e49 50%, #a57b51)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <span style={{ color: '#ffdfbd' }}>취소하기</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FreeBoardCompose;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/myInfo/close-popup.png'
import LoginIcon from '../../assets/myInfo/login.png'
import userName from '../../assets/myInfo/userName.png'
import password from '../../assets/myInfo/password.png'

// import img from '../../img20.png'

const ReauthenticatePopup = ({ setPopupOpen, setSelectedTab }) => {

    const navigate = useNavigate();
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            // background: `url(${img})`,
            opacity: '1',
            width: '100vw',
            // width: '77.625rem',
            height: '100%',
            transform: 'translate(-50%)',
            left: '50%',
            position: 'fixed',
            top: '0',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <div style={{
                width: '72.75rem', height: '60.625rem', position: 'relative', top: '',
                background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)',
                marginTop: '-1.7rem', padding: '0.1875rem', borderRadius: '2rem'
            }} className="relative bg-white rounded-xl shadow-popup">
                <div style={{ background: '#323232', width: '100%', height: '100%', borderRadius: '2rem' }}>
                    <button style={{ margin: '2.3125rem', position: 'absolute', top: '0.2rem', right: '0.2rem', zIndex: '20', background: 'bottom' }} className="absolute top-0 right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                        <img style={{ width: '3.24875rem', height: '', }} className='object-contain' src={CloseIcon} alt="close_icon" onClick={() => setPopupOpen(false)} />
                    </button>
                    <div style={{ width: '71rem', position: 'absolute', display: 'flex', justifyContent: 'center' }} className="absolute flex justify-center">
                        <div className="flex items-center justify-center">
                            <img style={{ height: '', width: '19rem', marginTop: '-9.5rem', marginLeft: '1.4rem' }} src={LoginIcon} alt="login_icon" />
                        </div>
                    </div>
                    {/* BREAK */}
                    <div style={{ padding: '11.75rem 0', paddingBottom: '8.4375rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="w-full h-full flex flex-col items-center">

                        <div style={{ fontSize: '2.625rem', marginBottom: '2.7rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.01rem' }} className="flex text-gray-text flex-col items-center justify-center font-spoqaMedium">
                            <div className="flex items-center h-14" style={{ display: 'flex', alignItems: 'center', marginTop: '0.35rem', marginLeft: '' }}>
                                <span className="text-blue-gradLight font-spoqaBold" style={{
                                    fontFamily: 'SpoqaHanSansNeoBold', color: '#ad9e8c',
                                    whiteSpace: 'nowrap',
                                    maxWidth: '22.5rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}>louie3</span>
                                <span style={{ marginLeft: '0.6rem' }}> 님의 회원정보를 수정합니다.</span>
                            </div>
                            <div className="flex items-center h-14" style={{ marginTop: '0.4rem' }}>비밀번호를 다시 입력해 주세요.</div>
                        </div>

                        <div style={{ width: '54rem', marginBottom: '3.3125rem', background: '#191817', height: '7.3125rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', borderBottom: selectedInput !== 1 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', paddingTop: '0.5rem' }}>
                            <img src={userName} alt='' style={{ width: '3.62375rem', margin: '0 2.5rem 0 2.8rem' }} />
                            <div
                                style={{ paddingTop: '0.6rem', width: '100%', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '3rem' }}
                                className="w-full text-5xl text-center text-gray-text outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe tracking-mimus05"
                                onFocus={(e) => {
                                    e.target.placeholder = ""
                                    setSelectedInput(0)
                                }}
                                onBlur={(e) => {
                                    e.target.placeholder = "아이디"
                                    setSelectedInput(false)
                                }}
                            >louie3</div>
                            <div className='h-1.5'>
                                <div className={`${selectedInput !== 1 ? "bg-gray-bebebe h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                            </div>
                        </div>
                        <div style={{ width: '54rem', marginBottom: '3.6875rem', display: 'flex', alignItems: 'center', background: '#191817', height: '7.3125rem', borderBottom: selectedInput === 1 ? '0.375rem solid #a67c52' : '0.375rem solid #191817', borderRadius: '0.5rem', paddingTop: '0.5rem' }}>
                            <img src={password} alt="" style={{ width: '2.9375rem', margin: '0px 2.6rem 0px 3.1rem' }} />
                            <input
                                style={{ paddingTop: '0.6rem', color: '#948d81', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '3rem' }}
                                className="w-full text-5xl text-center outline-none font-spoqaMedium tracking-tight place-color-grey-2 placeholder-gray-bebebe tracking-mimus05"
                                placeholder={"비밀번호"}
                                type="password"
                                onFocus={(e) => {
                                    e.target.placeholder = ""
                                    setSelectedInput(1)
                                }}
                                onBlur={(e) => {
                                    e.target.placeholder = "비밀번호"
                                    setSelectedInput(false)
                                }}
                            />
                            <div className='h-1.5'>
                                <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                            </div>
                        </div>
                        <div style={{ width: '54rem' }}>
                            {/* <button
                                style={{ height: '8.4375rem', fontSize: '3rem', borderRadius: '0.5625rem' }}
                                className="w-full rounded-2xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark font-spoqaMedium text-white hover:opacity-75"
                                onClick={() => {
                                    navigate("/mypage/edit-info")
                                    setSelectedTab("/mypage/edit-info")
                                }}
                            >
                                <span className='block mt-1.5'>확인</span>
                            </button> */}
                            <button style={{
                                background: 'linear-gradient(to top, #4b3b09, #e8b888)',
                                // background: 'bottom',
                                height: '8.6rem', width: '100%', padding: '0.1875rem', fontSize: '2.8125rem', borderRadius: '1rem'
                            }}
                                onClick={() => {
                                    navigate("/mypage/edit-info")
                                    setSelectedTab("/mypage/edit-info")
                                }}
                                className="shadow-to-box3 flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d hover">
                                <div style={{ width: '100%', height: '100%', borderRadius: '1rem' }}>
                                    <div
                                        style={{
                                            width: '100%', height: '100%',
                                            background: 'linear-gradient(to top, #7f5f3f, #a67c52)',
                                            borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }}
                                    >
                                        <span className='shadow-to-text' style={{ color: '#ffdfbd', marginTop: '', fontFamily: 'SpoqaHanSansNeoMedium' }}>확인</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReauthenticatePopup

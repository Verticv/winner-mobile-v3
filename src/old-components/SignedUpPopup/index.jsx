import React from 'react'
import SignedUpIcon from '../../assets/myInfo/signed_up_icon.png'
import img1 from '../../assets/myInfo/signed_up_1.png'
import img2 from '../../assets/myInfo/signed_up_2.png'
import img3 from '../../assets/myInfo/signed_up_3.png'
import { useNavigate } from 'react-router-dom'

const SignedUpPopup = ({ setCompletePopup, setSignup,isMobile }) => {

    const navigate = useNavigate()

    return (
        <div style={{ width: '72.9rem', borderRadius: "2.25rem", height: isMobile ? '97rem' : '88.625rem', padding: "0.1875rem", background: 'linear-gradient(to top, #1f1f1e, #4a4a4a)', marginLeft: '0.2rem', boxShadow: '0 0rem 2.75rem 0 rgb(0 0 0 / 60%)' }} className="relative bg-white rounded-xl shadow-popup">
            <div style={{ paddingBottom: "", background: '#323232', width: '100%', height: '100%', borderRadius: "2.25rem" }} >

                <div style={{ width: '72.75rem', position: 'absolute', display: 'flex', justifyContent: 'center' }} className="absolute flex justify-center">
                    <div className="flex items-center justify-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ height: '', width: '18.99875rem', marginTop: '-9.2rem' }} src={SignedUpIcon} alt="login_icon" />
                    </div>
                </div>

                {/* BREAK */}
                <div style={{ marginTop: "", display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }} className="w-full h-full flex flex-col items-center">
                    {/* BREAK */}
                    <div className="flex flex-col items-center justify-center -space-y-3" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '8.8rem', marginLeft: '-0.3rem' }}>
                        <label style={{ fontSize: '3rem', marginTop: "3rem", color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoBold', letterSpacing: '-0.02rem' }} className="text-gray-r393e41 font-spoqaBold">가입 신청이 완료 되었습니다.</label>
                        <div style={{ fontSize: '3rem', display: 'flex', fontFamily: 'SpoqaHanSansNeoMedium', color: '#c8c8c8', }} className="flex text-gray-r393e41 font-spoqaMedium space-x-2">
                            <label>관리자</label>
                            <label style={{ color: '#1ca7ec', fontFamily: 'SpoqaHanSansNeoBold' }} className="font-spoqaBold">&nbsp;승인 대기중</label>
                            <label>입니다.</label>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div style={{ fontSize: '2.625rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.015rem' }}>
                        <span style={{ fontSize: '2.625rem' }}>관리자 승인 후 로그인 하시면</span>
                        <span style={{ fontSize: '2.625rem', marginTop: '-0.15rem' }} className='-mt-3'>정상적으로 서비스 이용이 가능합니다.</span>
                        <span style={{ fontSize: '2.625rem', marginTop: '3rem' }} className="mt-10 text-center">당사 사이트는 깨끗하고 안전한 운영을 자랑합니다. </span>
                    </div>
                    {/* BREAK */}
                    <div style={{ paddingLeft: "3rem", paddingRight: "3rem", display: 'flex', position: 'relative', width: '100%', color: '#c8c8c8', fontSize: '1.875rem', fontFamily: 'SpoqaHanSansNeoMedium', textAlign: 'center', marginTop: '5.6rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22.3125rem', height: isMobile ? '31rem' : '22.4375rem', background: '#272726', borderRadius: '0.5rem', marginRight: '0.5rem' }}>
                            <img className="h-26px object-contain" src={img1} alt="" style={{ marginTop: '2.4rem', marginLeft: '-0.6rem', marginBottom: '3rem', width: '6.125rem' }} />
                            <div className="w-full text-center mt-20px" style={{ letterSpacing: '-0.027em', marginTop: '-0.1rem' }}>
                                <div style={{ wordBreak: "keep-all" }}>회원님의 모든 데이터는</div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.1rem' }}>암호화되어 안전하게 </div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.15rem' }}>보관됩니다.</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22.3125rem', height: isMobile ? '31rem' : '22.4375rem', background: '#272726', borderRadius: '0.5rem', marginRight: '0.5rem' }}>
                            <img className="h-26px object-contain" src={img2} alt="" style={{ marginTop: '2.7rem', marginLeft: '-0.3rem', marginBottom: '3.3rem', width: '3.6875rem' }} />
                            <div className="w-full text-center mt-20px" style={{ letterSpacing: '-0.027em', marginTop: '-0.1rem', marginLeft: '-0.1rem' }}>
                                <div style={{ wordBreak: "keep-all", }}>아이디/비밀번호를</div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.15rem' }}>분실되지 않도록 보안에 </div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.15rem' }}>신경 써 주세요.</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22.3125rem', height: isMobile ? '31rem' : '22.4375rem', background: '#272726', borderRadius: '0.5rem', marginRight: '' }}>
                            <img className="h-26px object-contain" src={img3} alt="" style={{ marginTop: '3.1rem', marginLeft: '-0.6rem', marginBottom: '3.6rem', width: '3.875rem' }} />
                            <div className="w-full text-center mt-20px" style={{ letterSpacing: '-0.027em', marginTop: '-0.1rem', marginLeft: '-0.5rem' }}>
                                <div style={{ wordBreak: "keep-all" }}>회원 탈퇴 후</div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.15rem' }}>회원님의 정보는 </div>
                                <div style={{ wordBreak: "keep-all", marginTop: '-0.15rem' }}>완전히 삭제됩니다.</div>
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}

                    <div style={{ marginTop: '6.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={`w-full flex flex-col items-center`}>

                        <div className='shadow-to-box3' style={{ height: '8.456875rem', width: '56.476875rem', marginBottom: '4.0625rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '1.6rem' }}>
                            <button
                                style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '1.6rem' }}
                                className="hover "
                                onClick={() => {
                                    navigate('/')
                                    setCompletePopup(false)
                                    setSignup(false)
                                }}
                            >
                                <div style={{ color: "#ffdfbd", fontSize: '3rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                    <p className='mt-1' style={{ margin: '0.2rem 0 0 0', letterSpacing: '-0.07rem' }}>로그인</p>
                                </div>
                            </button>
                        </div>
                        {/* <div style={{ marginBottom: '11.25rem', marginRight: '-2.8125rem' }} className="flex w-full justify-between items-center h-28">
                                    <div style={{ marginLeft: '-3.25rem', display: 'flex', alignItems: 'center' }} className="flex items-center space-x-2px pr-10px">
                                        <img className="w-40 object-contain" src={KakaoLogo} alt="kakao-icon" />
                                        <span className="text-brown-r351a1e font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                                    </div>
                                    <div style={{ marginRight: '1.0625rem' }} className="h-full w-0.5 bg-gray-404040" />
                                    <div className="flex items-center space-x-2px">
                                        <img className="w-40 object-contain" src={TelegramLogo} alt="kakao-icon" />
                                        <span className="text-blue-r2aa1d5 font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                                    </div>
                                </div> */}
                        {/* <div style={{ borderBottomRightRadius: '1.1rem', borderBottomLeftRadius: '1.1rem', height: '18.875rem', marginTop: '-6.3rem', paddingTop: '9.3125rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2 ">
                            <div style={{ marginTop: '-1.3rem', display: 'flex', alignItems: 'center' }} className="flex items-center ml-32">
                                <img
                                    style={{ width: '7.375rem', margin: '0 1.75rem 0 0' }}
                                    className="object-contain"
                                    src={KakaoLogo}
                                    alt="kakao-icon"
                                />
                                <span style={{ marginTop: '', marginLeft: '0.3rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-brown-r351a1e font-roboto text-4xl leading-snug tracking-wide">
                                    test1234
                                </span>
                            </div>
                            <div style={{ height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '0.15rem', background: '#404040' }} className="bg-gray-c1cfdb" />
                            <div style={{ marginTop: '-1.3rem', marginRight: '0.5rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                                <img
                                    style={{ width: '7.5rem' }}
                                    className="object-contain"
                                    src={TelegramLogo}
                                    alt="kakao-icon"
                                />
                                <span style={{ marginTop: '', marginLeft: '1.8375rem', fontSize: '2.875rem', fontFamily: 'RobotoMedium', color: '#ad9e8c', letterSpacing: '0.05rem' }} className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug tracking-wide">
                                    test1234
                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignedUpPopup

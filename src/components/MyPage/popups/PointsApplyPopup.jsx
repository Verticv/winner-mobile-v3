import React, { useEffect, useState } from 'react'
import CloseIcon from '../../../assets/mainPage/points/close-btn-v3.png'
import { useNavigate } from 'react-router-dom'
import WarningMessage from '../WarningMessage'
import '../_myPage.scss'

const PointsApplyPopup = ({ setPopupOpen }) => {
    const getIsMobile = () => window.innerWidth <= 305;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    const navigate = useNavigate()
    var nf = new Intl.NumberFormat();
    const [inputValue, setInputValue] = useState(null)

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return (
        <div style={{ height: '100vh', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '72.125rem', maxWidth: '1154px', borderRadius: '3.75rem', background: '#dfdbfa', height: '78.1875rem' }}>

                <div style={{ height: '9.3125rem', background: "linear-gradient(to right, #9d3bbb, #5423a0)", borderTopLeftRadius: '3.75rem', borderTopRightRadius: '3.75rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                    <label style={{ fontSize: '3.75rem', color: '#ffffff', marginTop: '0.7rem', letterSpacing: '-0.1rem', marginLeft: '-0.4rem' }} className=" text-white tracking-tight">포인트 전환 신청</label>
                    <button style={{ marginRight: '4.4375rem', position: 'absolute', right: '0', background: 'bottom', marginTop: '0.6rem' }} className="absolute right-0 cursor-pointer z-20 hover:opacity-75" onClick={() => setPopupOpen(false)}>
                        <img style={{ width: '3.1875rem', height: '3.1875rem' }} className="hover" src={CloseIcon} alt="close_icon" />
                    </button>
                </div>

                <div style={{ padding: '2.1rem 1.875rem' }} className="w-full h-full bg-white">

                    <WarningMessage
                        title='확인 / 필독사항'
                        message1='포인트 전환 시 보유머니로 충전됩니다.'
                        mr1='13.5rem'
                        message2='최소 10,000P 이상 신청 가능합니다.'
                        mr2='6.875rem'
                        message3='자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.'
                        isExchange
                    />

                    <div style={{ margin: '1.6rem 0px 1.4rem -1.1rem', fontSize: '2.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666666', letterSpacing: '-0.2rem', marginLeft: '-1.1rem' }} className="flex items-center justify-center  text-gray-r7c7c7c tracking-tight">
                        <span>사용 가능한 포인트: </span>
                        <span className="text-blue-r0056a6 ml-2px -mt-1 font-robotoBold" style={{ color: '#f04281', fontWeight: 'bold' }}> &nbsp; 278</span>
                        <span className="text-black -mt-1" style={{ color: '#666666' }}>P</span>
                    </div>

                    {/* <div style={{ padding: '0.1875rem', background: 'green' }} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex flex-wrap flex-col items-center justify-center"> */}
                    <div style={{ padding: "5.4rem 0", background: '#5e399a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '1.3rem', letterSpacing: '-0.08rem' }} >
                        <div style={{ display: 'flex',  justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ fontSize: '2.811875rem', color: '#ffffff' }} className="tracking-tight  text-gray-r454545">전환 포인트 입력</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.2rem', color: '#c8c8c8' }}>
                            <input
                                placeholder="0"
                                style={{ height: '6.625rem', width: '36.437rem', fontSize: '2.8125rem', padding: '0 1.7rem', background: '#ffffff', outline: 'none', borderRadius: '0.625rem', border: '0.1875rem solid #ffffff', color: '#444444' }}
                                className="flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd  tracking-tight text-gray-r8c8c8c"
                                value={inputValue !== null ? nf.format(inputValue) : ""}
                                type="tel"
                                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                    </div>


                    {/* </div> */}
                    <div style={{ display: 'flex', marginTop: isMobile ? '3rem' : '4rem' }}>
                        <div
                            // style={{ width: "36.4375rem", height: '7.3125rem', marginRight: '1rem', borderRadius: '3.625rem', marginBottom: '', marginTop: '', boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.3)" }}>
                            style={{ width: "36.4375rem", height: '7.3125rem', marginRight: '1rem', borderRadius: '3.625rem', marginBottom: '', marginTop: '', boxShadow: "0px 0.563rem 0.938rem 0px rgba(0, 0, 0, 0.3)" }}>
                            <button
                                style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: 'linear-gradient(to right, #df52ff, #6b22ff)', borderRadius: '3.625rem' }}
                                className="hover"
                            >
                                {/* <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer"> */}
                                <div style={{ borderColor: "#ff8f63", display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    {/* <span style={{ fontSize: '2.8125rem', color: '#ffffff', display: 'inline-block', letterSpacing: '-0.07rem', marginTop: '0.5rem', marginLeft: '0.2rem' }} >포인트전환</span> */}
                                    <span style={{ fontSize: '2.8125rem', color: '#ffffff', display: 'inline-block', letterSpacing: '-0.07rem' }} >포인트전환</span>
                                </div>
                            </button>
                        </div>
                        <div
                            // style={{ width: "36.4375rem", height: '7.3125rem', marginLeft: '', borderRadius: '3.625rem', marginBottom: '', marginTop: '', boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.3)" }}>
                            style={{ width: "36.4375rem", height: '7.3125rem', marginLeft: '', borderRadius: '3.625rem', marginBottom: '', marginTop: '', boxShadow: "0px 0.563rem 0.938rem 0px rgba(0, 0, 0, 0.3)" }}>
                            <button
                                style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: '#9d3bbb', borderRadius: '3.625rem' }}
                                className="hover"
                                onClick={() => navigate('/mypage/points/all/points-transaction-history')}
                            >
                                {/* <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer"> */}
                                <div style={{ borderColor: "#ff8f63", display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    {/* <span style={{ fontSize: '2.8125rem', color: '#ffffff', display: 'inline-block', letterSpacing: '-0.07rem', marginTop: '0.5rem', marginLeft: '0.2rem' }}>상세내역</span> */}
                                    <span style={{ fontSize: '2.8125rem', color: '#ffffff', display: 'inline-block', letterSpacing: '-0.07rem' }}>상세내역</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PointsApplyPopup

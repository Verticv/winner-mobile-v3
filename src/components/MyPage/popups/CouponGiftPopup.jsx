import CouponGiftPopupTable from '../CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../../assets/coupon/close-btn-v3.png'
import Step1 from '../../../assets/coupon/step-1-v3.png'
import Step2 from '../../../assets/coupon/step-2-v3.png'
import searchIcon from '../../../assets/coupon/searchIcon-v3.png'
import './Scrollbars.css'
import '../BoardComposeViewPanel/RadioButton.css'

const CouponGiftPopup = ({ setPopupOpen }) => {
    return (
        // <div style={{ height: "84vh", width: '77.625rem', borderTopLeftRadius: '3.75rem', borderTopRightRadius: '3.75rem', background: 'linear-gradient(to right, #ba76d0, #8865bd)', boxShadow: "0px 0px 3.125rem 0px rgba(0, 0, 0, 0.6),inset 0px 0.375rem 0px 0px rgba(255, 255, 255, 0.3)", paddingTop: '0.375rem', position: '', zIndex: '201', overflowY: 'scroll' }}>
        <div style={{ height: "105vh", marginTop:'15rem', width: '77.625rem', borderTopLeftRadius: '3.75rem', borderTopRightRadius: '3.75rem', background: 'linear-gradient(to right, #ba76d0, #8865bd)', boxShadow: "0px 0px 3.125rem 0px rgba(0, 0, 0, 0.6),inset 0px 0.375rem 0px 0px rgba(255, 255, 255, 0.3)", paddingTop: '0.375rem', position: '', zIndex: '201' }}>
            <div style={{ width: '100%', height: '100%', borderTopLeftRadius: '3.75rem', borderTopRightRadius: '3.75rem', background: '#dfdbfa', marginTop: '' }} className="flex flex-col rounded-lg overflow-hidden">
                <div style={{ height: '9.3rem', background: 'linear-gradient(to right, #9d3bbb, #5423a0)', borderTopLeftRadius: '3.75rem', borderTopRightRadius: '3.75rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                    <label style={{ fontSize: '3.75rem', color: '#ffffff', letterSpacing: '-0.07rem', marginLeft: '0.65rem', marginTop: '-0.1rem' }} className=" text-white tracking-tight">쿠폰 선물하기</label>
                    <button style={{ marginRight: '4rem', position: 'absolute', right: '0', background: 'bottom' }} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                        <img className='hover' style={{ width: '3.1875rem', height: '3.1875rem' }} src={CloseIcon} alt="close_icon" />
                    </button>
                </div>

                <div style={{ padding: '0px 1.5rem 0 1.875rem' }} className="w-full h-full bg-white flex flex-col justify-end ">
                    <div style={{ marginTop: '3.325rem', marginBottom: '1.425rem', display: 'flex', alignItems: 'center' }} className="flex items-start">
                        <img style={{ width: '7.9375rem', height: 'auto', marginLeft: '0.4375rem', marginRight: '1.8rem', marginTop: '-0.3rem' }} src={Step1} alt="" />
                        <span style={{ fontSize: '2.625rem', color: '#666666', letterSpacing: '-0.07rem', marginTop: '0.4rem', }} className=" tracking-tight text-gray-r7c7c7c">선물로 보낼 쿠폰을 확인하세요.</span>
                    </div>

                    <div style={{ height: '10.4375rem', fontSize: '2.8125rem', marginBottom: '7.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#5e399a', borderRadius: '1.3rem', letterSpacing: '-0.07rem' }} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center justify-center  tracking-tight py-6">
                        <span className="text-gray-r454545" style={{ color: '#ffffff', marginTop: '0.4rem' }}>선물할 쿠폰</span>
                        {/* <div style={{ height: '7.1rem', width: '41.8125rem', marginLeft: '1.66rem', background: '#eeeeee', border: '0.1875rem solid #a088d7', marginTop: '0.3rem', borderRadius: '0.65rem' }} className="bg-white border border-gray-dddddd rounded-2xl flex items-center">
                            <span style={{ paddingLeft: '1.5625rem', display: 'flex', paddingTop: '1.6rem', color: '#666666' }} className="text-gray-r8c8c8c">쿠폰테스트</span>
                        </div> */}
                        <div style={{ height: '7.1rem', width: '41.8125rem', marginLeft: '1.66rem', display: 'flex', justifyItems: 'center', background: '#eeeeee', border: '0.1875rem solid #a088d7', marginTop: '0.3rem', borderRadius: '0.65rem' }} className="bg-white border border-gray-dddddd rounded-2xl flex items-center">
                            <span style={{ display: 'flex', alignItems: 'center', paddingTop: '0.2rem', paddingLeft: '1.5625rem', color: '#666666' }} className="text-gray-r8c8c8c">쿠폰테스트</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.45rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                        <img style={{ width: '7.9375rem', height: 'auto', marginLeft: '0.45375rem', marginRight: '1.875rem', marginTop: '-0.5rem' }} src={Step2} alt="" />
                        <span style={{ fontSize: '2.625rem', color: '#666666', letterSpacing: '-0.07rem', marginTop: '0.4rem', }} className=" tracking-tight text-gray-r7c7c7c">쿠폰받을 회원을 선택하세요.</span>
                    </div>

                    {/* <div style={{ height: '10.4375rem', fontSize: '2.8125rem', marginBottom: '1.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#5e399a', borderRadius: '1.3rem', letterSpacing: '-0.07rem' }} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center justify-center  tracking-tight py-6"> */}
                    <div style={{ height: '10.4375rem', fontSize: '2.8125rem', marginBottom: '1.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#772fad', borderRadius: '1.3rem', letterSpacing: '-0.07rem' }} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center justify-center  tracking-tight py-6">
                        <span className="text-gray-r454545" style={{ color: '#ffffff', marginTop: '0.4rem' }}>쿠폰받을 회원</span>
                        <div style={{ display: "flex", justifyContent: "space-between", height: '6.813rem', width: '41.8125rem', marginLeft: '1.66rem', background: '#eeeeee', marginTop: '0.3rem', borderRadius: '0.65rem' }} className="bg-white border border-gray-dddddd rounded-2xl flex items-center">
                            {/* <span style={{ paddingLeft: '1.5625rem', display: 'flex', paddingTop: '1.6rem', color: '#aaaaaa' }} className="text-gray-r8c8c8c">아이디를 입력해주세요.</span> */}
                            <input style={{ paddingLeft: '1.5625rem', display: 'flex', color: '#aaaaaa' }} className="text-gray-r8c8c8c" placeholder='아이디를 입력해주세요.' />
                            <div style={{position: "absolute", marginLeft: "35.438rem", padding: "0.188rem", height: '6.813rem', width: "6.75rem", display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #4f3a7a, #e597ff)', borderRadius: '1.125rem', boxShadow: "0px 0.375rem 0.938rem 0px rgba(0, 0, 0, 0.6)"}}>
                                <div style={{height: '100%', width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #6b22ff, #df52ff)', borderRadius: '1.125rem'}}>
                                    <img style={{width: "2.625rem", height: "2.625rem"}} src={searchIcon} alt='icon' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderRadius: "1.2rem", background: 'linear-gradient(to top, #ededeb, #cb78e6)', padding: '0.188rem'}} className="w-full rounded-2xl shadow-subNavbar">
                        <CouponGiftPopupTable />
                    </div>

                    <div className='button-class-div shadow-to-box' style={{ padding: '0' }}>
                        <button className='button-class hover'>
                            <div style={{ marginTop: '0.2rem' }}>
                                <span>쿠폰발송</span>
                            </div>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default CouponGiftPopup

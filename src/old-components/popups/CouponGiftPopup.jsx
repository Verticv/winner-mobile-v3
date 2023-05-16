import CouponGiftPopupTable from '../CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../assets/coupon/close-btn.png'
import Step1 from '../../assets/coupon/step-1.png'
import Step2 from '../../assets/coupon/step-2.png'
import './Scrollbars.css'
import '../BoardComposeViewPanel/RadioButton.css'

const CouponGiftPopup = ({ setPopupOpen }) => {
    return (
        <div style={{ height: "100vh", width: '77.625rem', borderTopLeftRadius: '2.8rem', borderTopRightRadius: '2.8rem', background: 'linear-gradient(to top, #1f1f1e, #2c2c2b 80% , #343434)', padding: '0.1875rem', position: '', zIndex: '201', overflowY: 'scroll' }}>
            <div style={{ width: '100%', height: '100%', borderTopLeftRadius: '2.8rem', borderTopRightRadius: '2.8rem', background: '#323231', marginTop: '' }} className="flex flex-col rounded-lg overflow-hidden">
                <div style={{ height: '9.3rem', background: '#272726', borderTopLeftRadius: '2.8rem', borderTopRightRadius: '2.8rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                    <label style={{ fontSize: '3.75rem', color: '#ad9e8c', fontFamily: 'SpoqaHanSansNeoBold', letterSpacing: '-0.07rem', marginLeft: '0.65rem', marginTop: '-0.1rem' }} className="font-spoqaBold text-white tracking-tight">쿠폰 선물하기</label>
                    <button style={{ marginRight: '4rem', position: 'absolute', right: '0', background: 'bottom' }} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                        <img className='hover' style={{ width: '3.1875rem', height: '3.1875rem' }} src={CloseIcon} alt="close_icon" />
                    </button>
                </div>

                <div style={{ padding: '0px 1.5rem 0 1.875rem' }} className="w-full h-full bg-white flex flex-col justify-end ">
                    <div style={{ marginTop: '3.325rem', marginBottom: '1.425rem', display: 'flex', alignItems: 'center' }} className="flex items-start">
                        <img style={{ width: '7.9375rem', height: 'auto', marginLeft: '0.4375rem', marginRight: '1.8rem', marginTop: '-0.3rem' }} src={Step1} alt="" />
                        <span style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.4rem', }} className="font-spoqaMedium tracking-tight text-gray-r7c7c7c">선물로 보낼 쿠폰을 확인하세요.</span>
                    </div>

                    <div style={{ height: '10.4375rem', fontSize: '2.8125rem', marginBottom: '7.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#252525', borderRadius: '1.3rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center justify-center font-spoqaMedium tracking-tight py-6">
                        <span className="text-gray-r454545" style={{ color: '#ccc2b6', marginTop: '0.4rem' }}>선물할 쿠폰</span>
                        <div style={{ height: '7.1rem', width: '41.8125rem', marginLeft: '1.66rem', background: '#1a1a1a', border: '0.1875rem solid #404040', marginTop: '0.3rem', borderRadius: '0.65rem' }} className="bg-white border border-gray-dddddd rounded-2xl flex items-center">
                            <span style={{ paddingLeft: '1.5625rem', display: 'flex', paddingTop: '1.6rem', color: '#828282' }} className="text-gray-r8c8c8c">쿠폰테스트</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.45rem', display: 'flex', alignItems: 'center' }} className="flex items-center">
                        <img style={{ width: '7.9375rem', height: 'auto', marginLeft: '0.45375rem', marginRight: '1.875rem', marginTop: '-0.5rem' }} src={Step2} alt="" />
                        <span style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.4rem', }} className="font-spoqaMedium tracking-tight text-gray-r7c7c7c">쿠폰받을 회원을 선택하세요.</span>
                    </div>

                    <div style={{ borderRadius: "1.2rem", background: 'linear-gradient(to top, #1f1f1e, #393938 50%, #4a4a4a)', padding: '0.1875rem'}} className="w-full rounded-2xl shadow-subNavbar">
                        <CouponGiftPopupTable />
                    </div>

                    <div className='button-class-div shadow-to-box'>
                        <button className='button-class hover'>
                            <div style={{ marginTop: '0.2rem' }}>
                                <span className='shadow-to-text'>쿠폰발송</span>
                            </div>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default CouponGiftPopup

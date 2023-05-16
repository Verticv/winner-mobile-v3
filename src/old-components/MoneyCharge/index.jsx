import React, { useState, useEffect } from 'react'
import Step1 from '../../assets/mainPage/icons/step-1.png'
import Step2 from '../../assets/mainPage/icons/step-2.png'
import Step3 from '../../assets/mainPage/icons/step-3.png'
import BankTable from '../BankTable'
import WarningMessage from '../WarningMessage'
import info from '../../assets/mainPage/icons/info.png';
import AlertIcon from '../../assets/mainPage/icons/warning.png'
import { useNavigate } from 'react-router-dom'

const MoneyCharge = ({ subActiveButton, setSubActiveButton }) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/money')
                setSubActiveButton('/mypage/money/charge')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/money/charge')
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    const [radioValue, setRadioValue] = useState("1")
    var nf = new Intl.NumberFormat();

    const Title = ({ text }) => (
        <div style={{ width: "21rem", marginRight: '1.7rem', background: '#272726', flexShrink: '0', borderRadius: '0.5rem' }} className="form-Title">
            <div style={{ fontSize: '2.8125rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', padding: '1.6rem 0 0 1.1rem', letterSpacing: '-0.25rem' }} className="text-gray-r454545 font-spoqaMedium">{text}</div>
        </div>
    )




    return (
        <div style={{ padding: '1.875rem', paddingTop: '0.9rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>

            <WarningMessage
                title='확인 / 필독사항'
                message1='입금 시 반드시 회원님의 성함으로 입금 바랍니다.'
                message2='입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다.'
                message3='입금계좌는 수시로 변경되오니 반드시 계좌번호 문의 신청을 통해 계좌번호를 확인 후 입금하여 주시기 바랍니다.'
                message4='자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.'
            />

            <div style={{
                padding: '0.1875rem', paddingBottom: '2.0625rem', marginTop: '1.975rem',
                background: 'linear-gradient(to top, #1f1f1e, #3e3e3e 50%, #4a4a4a)',
                borderRadius: '1.3rem', letterSpacing: '-0.07rem'
            }} className="w-full rounded-2xl shadow-subNavbar">
                <div style={{ padding: '0.7375rem 0.89rem', background: '#323232', borderRadius: '1.3rem' }}>
                    <div style={{ padding: '1.43rem 1.9rem 1rem 1.82rem', background: '#252525', borderRadius: '0.5rem', border: '0.1875rem solid #404040' }} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                        <div
                            style={{ fontSize: '2.8125rem', color: '#ffdfbd', marginLeft: '-0.2rem' }}
                            className="font-spoqaMedium tracking-tight text-gray-r393e41 flex items-center"
                        >
                            입금 계좌 정보 확인
                        </div>
                        <div style={{ fontSize: '2.625rem', color: '#c8c8c8', marginTop: '0.8rem', lineHeight: '1.42', marginLeft: '-0.2rem', letterSpacing: '-0.07rem', marginRight: '3rem' }} >
                            입금 계좌번호는 쪽지로 발송되며, 발송된 계좌번호로 선입금 바랍니다.
                        </div>
                        <div style={{ height: '0.1875rem', margin: '1.16rem 0rem 1.89rem', background: '#494745' }} className="w-full bg-gray-bebebe my-5" />

                        <div className='shadow-to-box' style={{ width: "36.4375rem", height: '7.3125rem', marginLeft: '15.7rem', borderRadius: '1rem', padding: '0.1875rem', marginBottom: '1.6rem', background: 'linear-gradient(to top, #4d3c0a, #b08b5a 50%, #e7b786)' }}>
                            <button
                                style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: "linear-gradient(to top, #80603f, #96704a 50%, #a57b52)", borderRadius: '1rem' }}
                                className="m-auto flex items-center justify-center rounded-2xl hover:opacity-75 hover"
                            >
                                <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer">
                                    <span style={{ fontSize: '2.8125rem', color: '#ffdfbd', display: 'inline-block', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.2rem' }} className="shadow-to-text font-spoqaMedium tracking-tight text-white">계좌번호 신청</span>
                                </div>
                            </button>

                        </div>

                        <div style={{ fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8', letterSpacing: '-0.07rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', lineHeight: '1.45' }}>
                                <div style={{ minWidth: '9.7rem', marginTop: '-3.6rem', marginLeft: '-0.1rem' }}>
                                    <img style={{ width: '7.9375rem' }} src={Step1} alt="" />
                                </div>
                                <div style={{ fontFamily: 'SpoqaHanSansNeo', color: '#c8c8c8', marginRight: '2rem' }}>
                                    위 <span className="font-spoqaBold text-gray-r454545 ml-3px" style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd' }}>계좌번호 신청</span>버튼을 누르시면 계좌번호가 쪽지로 발송됩니다.
                                </div>
                            </div>
                            <div style={{ marginTop: '0.6875rem', display: 'flex', alignItems: 'center', lineHeight: '1.45' }}>
                                <div style={{ minWidth: '9.7rem', marginTop: '', marginLeft: '-0.1rem' }}>
                                    <img style={{ width: '7.9375rem', height: 'auto' }} src={Step2} alt="" />
                                </div>
                                <div className="font-spoqa" style={{ marginTop: '-0.2rem' }}>안내받은 계좌번호로 선입금 해주세요.</div>
                            </div>
                            <div style={{ marginTop: '0.6875rem', display: 'flex', alignItems: 'center' }}>
                                <div style={{ minWidth: '9.7rem', marginTop: '-4.1rem', marginLeft: '-0.1rem' }}>
                                    <img style={{ width: '7.9375rem', height: 'auto' }} src={Step3} alt="" />
                                </div>
                                <div style={{ lineHeight: '1.45', marginTop: '-0.1rem' }} className="font-spoqa">
                                    <span style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd' }}>충전금액 입력</span>
                                    란에 실제 입금하신 금액과 동일한 금액을 입력하고
                                    <span style={{ fontFamily: 'SpoqaHanSansNeoBold', color: '#ffdfbd' }}> 신청하기 </span>
                                    버튼을 눌러주세요.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '1.8rem',
                        padding: '0 1rem'
                    }}>
                        <div className="form-section">
                            <Title text="현재 보유머니" />
                            <div className="lable-or-input" style={{ backgroundColor: '#191817' }}>
                                <div style={{ fontSize: '2.625rem' }}>
                                    <span className="font-robotoBold text-red-e9441d" style={{ color: '#e9441d', fontFamily: 'RobotoBold' }}>487,240</span>
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem' }}></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.6rem' }} className="form-section">
                            <Title text="충전금액 입력" />
                            <div className="lable-or-input" style={{ backgroundColor: '#191817' }}>
                                <input
                                    style={{ fontSize: '2.625rem', marginBottom: '0.9375rem', letterSpacing: '-0.1rem' }}
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !== null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    onFocus={() => {
                                        const menu = document.querySelector('#main-menu');
                                        menu.style.marginBottom = '-14.075rem'
                                        setInputClicked(true)
                                    }}
                                    onBlur={() => {
                                        const menu = document.querySelector('#main-menu');
                                        menu.style.marginBottom = '0'
                                        setInputClicked(false)
                                    }}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    type="tel"
                                />
                                <div style={{ height: '0.1875rem' }} className={`${inputClicked ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="range-btn">
                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 10000)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text'>1만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 30000)}
                                >
                                    <div className="s-div" >
                                        <span className='shadow-to-text'>3만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 50000)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text'>5만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 100000)}
                                >
                                    <div className="s-div" >
                                        <span style={{ fontSize: '2.625rem' }} className='shadow-to-text'>10만원</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 300000)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text'>30만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 500000)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text'>50만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 1000000)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text'>100만원</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border' style={{ background: 'linear-gradient(to top, #4d3c0a, #b08b5a 50%, #e7b786)' }}>
                                <button
                                    className="hover"
                                    style={{ background: 'linear-gradient(to top, #80603f, #956f4a 50%, #a57b52)' }}
                                    onClick={() => setInputValue(0)}
                                >
                                    <div className="s-div" >
                                        <span style={{ paddingRight: '0' }} className='shadow-to-text'>정정</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column' }} className="flex flex-col">
                        <div className="form-section">
                            <Title text="보너스 금액" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem' }}>
                                    <span style={{ color: '#4c98ff', fontFamily: 'RobotoBold', letterSpacing: '-0.03rem' }}>100,000,000</span>
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem' }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.45rem' }} className="form-section">
                            <Title text="보너스 혜택" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2.2rem', marginBottom: '1.9rem' }}>
                            <div style={{ width: '3.6rem', marginTop: '-3rem', marginRight: '1rem' }}>
                                <img src={info} alt="" style={{ width: '2.8125rem' }} />
                            </div>
                            <p style={{ margin: '0', color: '#828282', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem', marginRight: '1rem' }}>
                                첫 충전 보너스 머니를 받으실 경우 아래 버튼을 <span style={{ color: '#4c98ff' }}>선택</span>해 주세요.
                                보너스를 받지 않을 경우 <span style={{ color: '#e65454' }}>받지않기 </span>버튼을 선택하세요.</p>
                        </div>
                        <div style={{ marginLeft: '', display: 'flex' }} className="flex w-full h-full">
                            <div
                                className='shadow-to-box'
                                style={{ height: '7.3125rem', width: '22.6rem', padding: '0.1875rem', marginRight: '', background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )', borderRadius: '0.6rem' }}
                            >
                                <button
                                    style={{ width: '100%', height: '100%', borderRadius: '0.6rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', paddingTop: '', display: 'flex', alignItems: 'center' }}
                                    onClick={() => setRadioValue("1")}
                                    className="hover"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                                        <div style={{ paddingLeft: '1.7875rem', width: '8.9rem' }}>
                                            <label style={{ marginTop: '0.4rem', marginRight: '4.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input
                                                    className='w-12 h-12'
                                                    type="checkbox"
                                                    checked={radioValue === "1"}
                                                    name="gender"
                                                />
                                            </label>
                                        </div>
                                        <span className='shadow-to-text' style={{ fontSize: '2.625rem', color: '#d6f3ff', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.3rem' }}>슬롯게임</span>
                                    </div>
                                </button>

                            </div>
                            <div
                                className='shadow-to-box'
                                style={{
                                    height: '7.3125rem', width: '22.6rem', padding: '0.1875rem',
                                    background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )', borderRadius: '0.6rem',
                                    marginLeft: '0.9rem',
                                }}
                            >
                                <button
                                    style={{ width: '100%', height: '100%', borderRadius: '0.6rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', paddingTop: '' }}
                                    onClick={() => setRadioValue("2")}
                                    className="hover"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                                        <div style={{ paddingLeft: '1.7875rem', width: '9.9rem' }}>
                                            <label style={{ marginTop: '0.4rem', marginRight: '4.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input
                                                    className='w-12 h-12'
                                                    type="checkbox"
                                                    checked={radioValue === "2"}
                                                    name="gender"
                                                />
                                            </label>
                                        </div>
                                        <span className='shadow-to-text' style={{ fontSize: '2.625rem', color: '#d6f3ff', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.3rem' }}>스포츠</span>
                                    </div>
                                </button>

                            </div>
                            <div
                                className='shadow-to-box'
                                style={{ height: '7.3125rem', width: '22.6rem', padding: '0.1875rem', marginLeft: '0.8rem', background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )', borderRadius: '0.6rem' }}
                            >
                                <button
                                    style={{ width: '100%', height: '100%', borderRadius: '0.6rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', paddingTop: '' }}
                                    onClick={() => setRadioValue("3")}
                                    className="hover"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                                        <div style={{ paddingLeft: '1.7875rem', width: '5.9rem' }}>
                                            <label style={{ marginTop: '0.4rem', marginRight: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input
                                                    className='w-12 h-12'
                                                    type="checkbox"
                                                    checked={radioValue === "3"}
                                                    name="gender"
                                                />
                                            </label>
                                        </div>
                                        <span className='shadow-to-text' style={{ fontSize: '2.625rem', color: '#d6f3ff', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.3rem' }}>키론가상게임</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div style={{ marginLeft: '', display: 'flex', marginTop: '1rem' }} className="flex w-full h-full">
                            <div
                                className='shadow-to-box'
                                style={{ height: '7.3125rem', width: '22.6rem', padding: '0.1875rem', marginRight: '', background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )', borderRadius: '0.6rem' }}
                            >
                                <button
                                    style={{ width: '100%', height: '100%', borderRadius: '0.6rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', paddingTop: '' }}
                                    onClick={() => setRadioValue("4")}
                                    className="hover"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                                        <div style={{ paddingLeft: '1.7875rem', width: '8.9rem' }}>
                                            <label style={{ marginTop: '0.4rem', marginRight: '4.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input
                                                    className='w-12 h-12'
                                                    type="checkbox"
                                                    checked={radioValue === "4"}
                                                    name="gender"
                                                />
                                            </label>
                                        </div>
                                        <span className='shadow-to-text' style={{ fontSize: '2.625rem', color: '#d6f3ff', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.3rem' }}>피싱게임</span>
                                    </div>
                                </button>

                            </div>
                            <div
                                className='shadow-to-box'
                                style={{
                                    height: '7.3125rem', width: '22.6rem', padding: '0.1875rem',
                                    background: 'linear-gradient(to top, #4d0a25, #a34f63 50%, #e78694 )', borderRadius: '0.6rem',
                                    marginLeft: '0.9rem',
                                }}
                            >
                                <button
                                    style={{ width: '100%', height: '100%', borderRadius: '0.6rem', background: 'linear-gradient(to top, #98351e, #bd4d33 50%, #df6345)', paddingTop: '' }}
                                    onClick={() => setRadioValue("5")}
                                    className="hover"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                                        <div style={{ paddingLeft: '1.7875rem', width: '8.8rem' }}>
                                            <label style={{ marginTop: '0.4rem', marginRight: '4.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <input
                                                    className='w-12 h-12'
                                                    type="checkbox"
                                                    checked={radioValue === "5"}
                                                    name="gender"
                                                />
                                            </label>
                                        </div>
                                        <span className='shadow-to-text' style={{ fontSize: '2.625rem', color: '#ffd2d2', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.3rem' }}>받지않기</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>


                    <div className='warning-message'>
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <img src={AlertIcon} alt="" style={{ margin: '-0.2rem 1rem 0 0.8rem', width: '3.375rem' }} />
                            <div>
                                <span style={{ color: '#e65454', fontSize: '2.8125rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>알아두세요</span>
                            </div>
                        </div>
                        <div style={{ alignItems: 'flex-start', marginRight: '3.5rem', color: 'rgb(204, 194, 182)', fontSize: '2.625rem', lineHeight: '1.3', display: 'flex', marginTop: '2rem' }} >
                            <span style={{ marginRight: ' 0.6rem', marginLeft: '0.2rem' }}>✓</span>
                            <span style={{ marginRight: ' 0.6rem', marginLeft: '0.2rem' }}>첫충전을 받으신 경우 선택하신 게임에서 롤링을 먼저 충족하셔야 합니다.</span>
                        </div>
                        <div style={{ alignItems: 'flex-start', marginRight: '7.6rem', color: 'rgb(204, 194, 182)', fontSize: '2.625rem', lineHeight: '1.3', display: 'flex', marginTop: '1.6rem' }} >
                            <span style={{ marginRight: ' 0.6rem', marginLeft: '0.2rem' }}>✓</span>
                            <span style={{ marginRight: ' 0.6rem', marginLeft: '0.2rem' }}>타게임을 이용하시면서 첫충을 받으시는 경우 전액 몰수 될 수 있으니 주의 바랍니다.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '1.6rem', height: '7.3125rem', marginTop: '1.8rem' }}>
                <div className='shadow-to-box' style={{ width: "36.4375rem", height: '7.3125rem', borderRadius: '1rem', padding: '0.1875rem', background: 'linear-gradient(to top, #3e4c8e, #679ac0 50%, #87d8e7 )' }}>
                    <button
                        style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: 'linear-gradient(to top, #3a6186, #4676a8 50%, #518aca)', borderRadius: '1rem' }}
                        className="hover"
                    >
                        <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer">
                            <span style={{ fontSize: '2.8125rem', color: '#d6f3ff', display: 'inline-block', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className='shadow-to-text'>신청하기</span>
                        </div>
                    </button>
                </div>
            </div>
            <div style={{ marginTop: '4.75rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <button style={{ background: '#272726', width: '52rem', height: '6.5rem', borderRadius: '3.3rem', paddingTop: '0.15rem' }} className="">
                    <span className='' style={{ color: '#ad9e8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>은행점검시간</span>
                </button>
            </div>


            <BankTable />

        </div >
    )
}

export default MoneyCharge
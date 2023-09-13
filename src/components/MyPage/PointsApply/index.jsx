import React, { useState, useEffect } from 'react'
import PopupControls from '../popups/PopupControls';
import PointsApplyPopup from '../popups/PointsApplyPopup';
import WarningMessage from '../WarningMessage'
import { useNavigate } from 'react-router-dom';
// import img18 from '../../img16.png'

const PointsApply = ({ subActiveButton, setSubActiveButton }) => {
    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)
    var nf = new Intl.NumberFormat();
    
    console.log(setInputClicked)

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/mypage/points')
                setSubActiveButton('/mypage/points/all');
            }, 0)
        }
        return (() => {
            setSubActiveButton('/mypage/points/all');
        })
    }, [setSubActiveButton, subActiveButton, navigate]);

    const detailButton = (
        <div
            style={{ width: "36.4375rem", height: '7.3125rem', marginLeft: '18.7rem', borderRadius: '1.125rem', marginBottom: '1.6rem', marginTop: '3.6rem', boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.3)" }}>
            <button

                style={{ width: "100%", height: '100%', marginBottom: '1.5625rem', background: 'linear-gradient(to right, #15cfee,  #3197e5)', borderRadius: '1.125rem' }}
                className="hover"
            >
                <div style={{ borderColor: "#ff8f63" }} className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer">
                    <span style={{ fontSize: '2.8125rem', color: '#d6f3ff', display: 'inline-block', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', marginTop: '0.2rem', marginLeft: '' }} className='shadow-to-text'>신청하기</span>
                </div>
            </button>
        </div>
    )

    const Title = ({ text }) => (
        <div style={{ width: "22.9rem", marginRight: '1.8rem', background: '#9b6bd4', flexShrink: '0', borderRadius: '0.625rem' }} className="form-Title">
            <div style={{ fontSize: '2.8125rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoMedium', padding: '1.6rem 0px 0px 1.2rem', letterSpacing: '-0.25rem' }} className="text-gray-r454545 font-spoqaMedium">{text}</div>
            {/* <div style={{ height: '0.1875rem', marginTop: '1.1875rem' }} className="w-full bg-gray-bebebe"></div> */}
        </div>
    )

    return (
        <div style={{ padding: '1.875rem', paddingTop: '1rem' }} className="flex flex-col items-center">

            <WarningMessage
                title='확인 / 필독사항'
                message1='포인트 전환 시 보유머니로 충전됩니다.'
                mr1='13.5rem'
                message2='최소 10,000P 이상 신청 가능합니다.'
                mr2='6.875rem'
                message3='자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.'
            />
            <div style={{ padding: '0.1875rem', paddingBottom: '0.1875rem', marginTop: '1.875rem', background: 'linear-gradient(to top, #ededeb, #cb78e6)', borderRadius: '1.125rem', boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.8)" }}>
                <div style={{ padding: '0.9rem 1rem 0 0.8rem', background: '#ffffff', borderRadius: '1.125rem' }} className="w-full rounded-2xl shadow-subNavbar">
                    <div style={{ padding: '1.4rem 2.0625rem 1.2rem', background: 'linear-gradient(to right, #9d3bbb, #5423a0)', borderRadius: '0.625rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', }} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                        <div
                            style={{ fontSize: '2.8125rem', color: '#ffffff', marginLeft: '-0.4rem' }}
                            className="font-spoqaMedium tracking-tight text-gray-r393e41 flex items-center"
                        >
                            전환 포인트 입력
                        </div>
                        <div
                            style={{ fontSize: '2.625rem', marginRight: '4rem', marginTop: '0.8rem', marginLeft: '-0.4rem' }}
                            className="font-spoqa tracking-tight text-gray-r7c7c7c flex items-center"
                        >
                            <span style={{ fontFamily: 'SpoqaHanSansNeo', color: '#ffffff', lineHeight: '1.4' }}>현재 포인트가 보유머니로 전환되며, 최소<span style={{ color: '#fee300', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '0' }}> 10,000</span>P부터 신청 가능합니다.</span>
                        </div>

                    </div>

                    <div style={{ marginTop: '1.7rem', padding: '0px 1rem', letterSpacing: '-0.25rem' }} className="flex flex-col">
                        <div className="form-section">
                            <Title text="현재 잔여 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#444444', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ color: '#f04281', fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>278</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem', background: "#e2e2e2" }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 예정 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#444444', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>0</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem', background: "#e2e2e2" }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 후 잔여 포인트" />
                            <div className="lable-or-input">
                                <div style={{ fontSize: '2.625rem', color: '#444444', fontFamily: 'SpoqaHanSansNeoMedium' }} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858">
                                    <span style={{ fontSize: '2.624375rem', fontFamily: 'SpoqaHanSansNeoBold' }}>0</span>P
                                </div>
                                <div style={{ height: '0.1875rem', marginTop: '0.9375rem', background: "#e2e2e2" }} className="w-full bg-gray-bebebe"></div>
                            </div>
                        </div>
                        <div style={{ marginTop: '2.55rem' }} className="form-section">
                            <Title text="전환 포인트 입력" />
                            <div className="lable-or-input" style={{ paddingLeft: '1rem', paddingTop: '1.8rem' }}>
                                <input
                                    className="w-full font-spoqa text-gray-r585858 outline-none placeholder-gray-bebebe"
                                    style={{ fontSize: '2.625rem', marginBottom: '0.9375rem', letterSpacing: '-0.1rem',
                                    // padding: '0.4rem 2.2rem 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: "0px solid",
                                    outline: "none"
                                }}
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !== null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    // onFocus={() => {
                                    //     const menu = document.querySelector('#main-menu');
                                    //     menu.style.marginBottom = '-14.075rem'
                                    //     setInputClicked(true)
                                    // }}
                                    // onBlur={() => {
                                    //     const menu = document.querySelector('#main-menu');
                                    //     menu.style.marginBottom = '0'
                                    //     setInputClicked(false)
                                    // }}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    type="tel"
                                />
                                <div style={{ height: '0.1875rem', background: "#e2e2e2" }} className={`${inputClicked ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="range-btn">
                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 1000)}
                                >
                                    <div className="s-div">
                                        <span>1천P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 5000)}
                                >
                                    <div className="s-div" >
                                        <span>5천P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 10000)}
                                >
                                    <div className="s-div">
                                        <span>1만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 50000)}
                                >
                                    <div className="s-div" >
                                        <span style={{ fontSize: '2.625rem' }}>5만P</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="f-div">
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 100000)}
                                >
                                    <div className="s-div">
                                        <span>10만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button
                                    className="hover"
                                    onClick={() => setInputValue(inputValue + 500000)}
                                >
                                    <div className="s-div">
                                        <span>50만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border'>
                                <button className="hover" onClick={() => setInputValue(inputValue + 1000000)}>
                                    <div className="s-div">
                                        <span>100만P</span>
                                    </div>
                                </button>
                            </div>
                            <div className='div-range-border' style={{ background: 'linear-gradient(to top, #4f3a7a, #e597ff)' }}>
                                <button
                                    className="hover"
                                    style={{ background: 'linear-gradient(to top, #6b22ff, #df52ff)' }}
                                    onClick={() => setInputValue(0)}
                                >
                                    <div className="s-div">
                                        <span className='shadow-to-text' style={{ paddingRight: '0', color:"#ffffff" }}>정정</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {/* use PupUp here */}
            <div className='pop-up' style={{ paddingBottom: '15rem' }}>
                <PopupControls isNotFullScreen buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <div style={{
                        background: '#000000cc', width: '100vw', height: '100vh', transform: 'translate(-50%)', left: '50%',
                        position: 'fixed', margin: 'auto', display: 'flex', justifyContent: 'center', top: '-1rem'
                    }}>
                        <PointsApplyPopup setPopupOpen={setPopupOpen} />
                    </div>

                </PopupControls>
            </div>

        </div >
    )
}

// background: red;
// width: 100vw;
// height: 100vh;
// transform: translate(-50 %);
// left: 86 %;
// position: fixed;
// margin: auto;
// /* top: 0; */
// right: 50 %;
// display: flex;
// justify - content: center;
// .BG {
//     background-image: url("BG.png");
//     opacity: 0.8;
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 1242px;
//     height: 2528px;
//     z-index: 117;
//   }

export default PointsApply

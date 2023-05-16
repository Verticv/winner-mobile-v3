import React from 'react'
import DownArrowIcon from '../../assets/down-arrow.png';
import Dropdown from '../Dropdown';
// import HomePageTopBanner from '../HomePageTopBanner';
// import img from '../../img8.png';

const ContactCompose = () => {

    const carrierOptions = ["라이브카지노", "슬롯게임", "스포츠", "호텔카지노", "e-스포츠", "미니게임", "키론가상게임 ", "피싱게임", "티비벳", "충전/환전", "베팅관련", "기타"]
    return (
        <>
            {/* <img src={img} alt="" style={{ position: 'absolute', top: '0', opacity: '0.5' }} /> */}
            {/* <HomePageTopBanner
                pageTitle="문의하기"
                toPath="/cscenter/all/contact/all"
            /> */}
            <div style={{ margin: '0.0625rem 1.875rem' }} className='contact-compose'>

                <div style={{ background: 'linear-gradient(to top,#1f1f1e, #353534 50%,#4a4a4a)', padding: '0.1875rem', borderRadius: '1rem', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }}>
                    <div className="w-full rounded-2xl shadow-subNavbar overflow-hidden" style={{ background: '#323232', borderRadius: '1rem' }}>

                        <div style={{ height: '9.1875rem', paddingLeft: '2.625rem', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', background: '#2e2e2e', borderBottom: '0.1875rem solid #252525', paddingTop: '1.1rem', position: 'relative' }} className="w-full bg-gray-fafafa border-b border-gray-ededed flex items-center">

                            <div style={{
                                width: '26.25rem', height: '6.6875rem', borderWidth: '0.1875rem', background: '#1a1a1a', border: '0.1875rem solid #404040', borderRadius: '0.7rem'
                            }} className="flex h-full bg-white rounded-2xl border border-gray-dddddd group">
                                <div
                                    style={{ width: '26.25rem' }}
                                    className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight dddd"
                                >
                                    <Dropdown labelClasses="group-hover:text-black" labelStyle={{ marginLeft: '1.6875rem', fontSize: '2.8125rem' }} options={carrierOptions} isContact={true}>
                                        <img style={{ width: '1.5625rem', height: '1rem', marginTop: '-0.3rem' }} className="w-10px h-6px object-contain" src={DownArrowIcon} alt="arrow" />
                                    </Dropdown>
                                </div>
                            </div>

                        </div>

                        <div style={{ height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.4875rem', borderBottom: '0.1875rem solid #252525' }} className="w-full text-5xl bg-white border-b border-gray-dddddd">
                            <input
                                className="bg-white outline-none w-full h-full font-spoqa tracking-tight place-color-grey-1"
                                placeholder="제목을 입력하세요."
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




                        <div className="textarea-container">
                            <textarea
                                style={{ resize: "none", wordBreak: "keep-all" }}
                                className="outline-none w-full h-full font-spoqa tracking-tight placeholder-gray-r454545 place-color-grey-1"
                                placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제 되며 사이트 이용에 제한을 받을 수 있습니다."
                            />
                        </div>
                    </div>
                </div>


                {/* <div style={{ marginTop: '3.75rem', marginBottom: '14rem', fontSize: '2.8125rem' }} className="flex w-full items-center justify-center">
                    <button style={{ height: '7.3125rem', padding: '1px' }} className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9">
                        <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">신청하기</span>
                        </div>
                    </button>
                    <button style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }} className="flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
                        <div className="flex items-center justify-center w-full h-full rounded-2xl border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">취소하기</span>
                        </div>
                    </button>
                </div> */}
                <div className="two-buttons-container">
                    <button style={{ height: '7.3125rem' }}
                        // onClick={() => navigate("/freeboard")} 
                        className="shadow-to-box hover flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9">
                        <div style={{ width: '100%', height: '100%', borderRadius: '1rem', padding: '0.1875rem' }}>
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #3a6287, #4777ab 50%, #518bcb)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ color: '#d6f3ff' }}>신청하기</span>
                            </div>
                        </div>
                    </button>
                    <button style={{ background: 'linear-gradient(to top, #4e3d0b, #a3814f 50%, #e7b887)', height: '7.3125rem', fontSize: '2.8125rem' }}
                        // onClick={() => navigate("/freeboard")} 
                        className="shadow-to-box hover flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
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
        </>
    )
}

export default ContactCompose

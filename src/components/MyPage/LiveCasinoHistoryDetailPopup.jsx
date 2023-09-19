import React from 'react'
import CloseIcon from '../../assets/mainPage/points/close-btn-v3.png'
import Sample1 from '../../assets/sample1.png'
import Sample2 from '../../assets/sample2.png'
import './_myPage.scss';

const LiveCasinoHistoryDetailPopup = ({ setPopupOpen }) => {
    return (
        <div className='LiveCasinoHistoryDetailPopup'>
            <div
                style={{ height: "120.9rem", width: "71.8rem", background: 'linear-gradient(to top, rgb(237, 237, 235), rgb(203, 120, 230))', marginTop: '8.7rem', borderRadius: "2.7rem", padding: '0.1875rem' }}
            >

                <div
                    style={{ height: "100%", width: "100%", borderRadius: "2.7rem", background: '#ffffff', overflow: '' }}
                    className="bg-white overflow-hidden mb-64"
                >
                    <div className="거래-상세-내역-popup">
                        <label>거래 상세 내역</label>
                        <button className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen((prev) => !prev)}>
                            <img className='hover' src={CloseIcon} alt="close_icon" />
                        </button>
                    </div>

                    <div style={{ padding: '0 2.0625rem', paddingBottom: '2.0625rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="h-full bg-white flex flex-col items-center text-gray-r454545">
                        <div style={{}} className='WINlouie3-div2 flex flex-col items-center'>
                            <div style={{
                                marginBottom: '1.0625rem', display: 'flex', alignItems: 'center',
                                marginLeft: '-0.1rem'
                                // letterSpacing: '-0.1rem',
                                // background: 'red', width: '41.3rem' 
                            }} className="tracking-tight flex items-center">
                                <p className="font-spoqaMedium" style={{ margin: '0', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.2rem', color: '#ffd98b' }}>플레이어 이름 :</p>
                                <p className="font-spoqaBold text-blue-r0056a6" style={{
                                    margin: '0', fontFamily: 'SpoqaHanSansNeoBold', letterSpacing: '-0.2rem', marginLeft: '0.4rem', color: '#eeeeee', whiteSpace: 'nowrap', maxWidth: '21.5rem', overflow: 'hidden ', textOverflow: 'ellipsis'
                                }}> WINlouie3</p>
                            </div>
                            {/* <div style={{ backgroundColor: "#868686", height: '0.1875rem', minHeight: '0.1875rem', marginBottom: '44px', width: '45.4375rem' }} className=""></div> */}
                        </div>
                        <div
                            style={{ height: "", backgroundColor: "#6852a7", fontSize: '2.625rem', width: '68.3rem', overflow: 'hidden', borderRadius: '1.4rem', padding: '0.1875rem' }}
                            className="w-full rounded-2xl shadow-subNavbar overflow-hidden"
                        >

                            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div
                                    style={{
                                        backgroundColor: "#6852a7", height: '5.375rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.053rem', justifyContent: 'center', paddingTop: '', color: '#ffffff'
                                        // , borderBottom: '0.1875rem solid #000'
                                    }}
                                    className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                                >
                                    바카라 On 2021-08-09 18:26:27
                                </div>

                                <div className="flex" style={{ display: 'flex' }}>
                                    <div
                                        style={{ backgroundColor: "#ffffff", display: 'flex', flexDirection: 'column', width: '50%', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className="flex flex-col w-full border-r border-gray-dddddd font-spoqaMedium tracking-tight text-gray-r585858"
                                    >
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            게임
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            테이블아이디
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            게임상태
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            종료시간
                                        </div>

                                        <div
                                            style={{ backgroundColor: "#6852a7", color: '#ffffff', height: '5.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                                        >
                                            뱅커 핸드
                                        </div>

                                        <div
                                            style={{ height: "18.375rem", background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className=" border-b border-gray-dddddd flex items-center justify-center bg-white"
                                        >
                                            <img style={{ width: '23.4375rem', height: '' }} src={Sample1} alt="" />
                                        </div>


                                    </div>

                                    <div
                                        style={{ backgroundColor: "#ffffff", display: 'flex', flexDirection: 'column', width: '50%', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem' }}
                                        className="flex flex-col w-full border-r border-gray-dddddd font-robotoRegular tracking-tight text-gray-r585858"
                                    >
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem',
                                                fontFamily: 'RobotoRegular',
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            28
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem',
                                                fontFamily: 'RobotoRegular',
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            10103
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center font-spoqa"
                                        >
                                            처리됨
                                        </div>
                                        <div
                                            style={{
                                                height: "5.57rem", display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontFamily: 'RobotoRegular',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem'
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            2021-08-09 18:26:47
                                        </div>

                                        <div
                                            style={{ backgroundColor: "#6852a7", color: '#ffffff', height: '5.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                                        >
                                            플레이어 핸드
                                        </div>

                                        <div
                                            style={{ height: "18.375rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            className=" border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            <img style={{ width: '23.4375rem', height: '' }} src={Sample2} alt="" />
                                        </div>


                                    </div>
                                </div>

                                <div style={{ height: "5.875rem", width: '100%', display: 'flex', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffffff' }} className="flex W-FULL border-b border-gray-dddddd">
                                    <div
                                        style={{ backgroundColor: "", display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        베팅
                                    </div>
                                    <div
                                        style={{ backgroundColor: "", display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        금액
                                    </div>
                                    <div
                                        style={{ backgroundColor: "", display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center' }}
                                        className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white"
                                    >
                                        회원승패
                                    </div>
                                </div>

                                <div style={{ height: "5.3rem", display: 'flex', fontFamily: 'RobotoRegular', background: '#ffffff' }} className="flex font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                                    <div
                                        style={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem', borderRight: '0.1875rem solid #bbbbbb', fontFamily: 'SpoqaHanSansNeo' }}
                                        className=" flex flex-1 items-center justify-center tracking-tight text- border-r"
                                    >
                                        player
                                    </div>
                                    <div
                                        style={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className=" flex flex-1 items-center justify-center tracking-tight text- border-r"
                                    >
                                        50,000.00
                                    </div>
                                    <div
                                        style={{ display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem' }}
                                        className=" flex flex-1 items-center justify-center tracking-tight text-"
                                    >
                                        10,000.00
                                    </div>
                                </div>

                                <div style={{ height: "5.7rem", display: 'flex', width: '100%', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffffff' }} className="flex w-full border-b border-gray-dddddd">
                                    <div
                                        style={{ backgroundColor: "", display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        거래아이디
                                    </div>
                                    <div
                                        style={{ backgroundColor: "", display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem' }}
                                        className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        베팅시간
                                    </div>
                                </div>


                                <div style={{ display: 'flex', width: '100%', fontFamily: 'RobotoRegular', background: '#ffffff' }} className="flex w-full font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                                    <div
                                        style={{ height: '5.35rem', display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem', borderRight: '0.1875rem solid #bbbbbb' }}
                                        className=" flex flex-1 items-center justify-center tracking-tight border-r"
                                    >
                                        85040508001
                                    </div>
                                    <div
                                        style={{ height: '5.35rem', display: 'flex', flex: '1', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem' }}
                                        className=" flex flex-1 flex-col items-center justify-center tracking-tight"
                                    >
                                        <p>2021-08-09 18:25:27</p>
                                    </div>
                                </div>


                                <div
                                    style={{ color: "#ffffff", height: '5.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium' }}
                                    className="flex items-center justify-center font-spoqaMedium tracking-tight text-white border-b border-gray-dddddd"
                                >
                                    게임요약
                                </div>


                                <div className="flex" style={{ display: 'flex' }}>
                                    <div
                                        style={{
                                            backgroundColor: "#ffffff", display: 'flex', width: '50%', flexDirection: 'column', borderRight: '0.1875rem solid #bbbbbb', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem',
                                            borderBottomLeftRadius: '1.1rem'
                                        }}
                                        className="flex flex-col w-full border-r border-gray-dddddd font-spoqaMedium tracking-tight text-gray-r585858"
                                    >
                                        <div
                                            style={{
                                                height: "5.6rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem',
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            총 베팅금액
                                        </div>
                                        <div
                                            style={{
                                                height: "5.6rem", display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '0.1875rem solid #bbbbbb',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem',
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            총 지불금액
                                        </div>
                                        <div
                                            style={{
                                                height: "5.4rem", display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                paddingTop: '0.3rem', paddingLeft: '0.1rem',
                                            }}
                                            className="border-b border-gray-dddddd flex items-center justify-center"
                                        >
                                            총 회원승패
                                        </div>
                                    </div>
                                    <div
                                        style={{ backgroundColor: "#ffffff", borderBottomRightRadius: '1.1rem', display: 'flex', flexDirection: 'column', width: '50%', fontFamily: 'RobotoRegular', letterSpacing: '-0.07rem' }}
                                        className="flex flex-col w-full border-r border-gray-dddddd font-robotoRegular tracking-tight text-gray-r585858"
                                    >
                                        <div
                                            style={{ height: "5.6rem", paddingRight: '1.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'end', borderBottom: '0.1875rem solid #bbbbbb', paddingTop: '0.3rem', paddingLeft: '0.1rem' }}
                                            className="border-b border-gray-dddddd flex items-center justify-end"
                                        >
                                            5,000.00
                                        </div>
                                        <div
                                            style={{ height: "5.6rem", paddingRight: '1.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'end', borderBottom: '0.1875rem solid #bbbbbb', paddingTop: '0.3rem', paddingLeft: '0.1rem' }}
                                            className="border-b border-gray-dddddd flex items-center justify-end"
                                        >
                                            10,000.00
                                        </div>
                                        <div
                                            style={{ height: "5.4rem", paddingRight: '1.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'end', paddingTop: '0.3rem', paddingLeft: '0.1rem' }}
                                            className="border-b border-gray-dddddd flex items-center justify-end"
                                        >
                                            5,000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LiveCasinoHistoryDetailPopup

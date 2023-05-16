import React, { useState, useEffect } from 'react'
import HomePageTopBanner from '../HomePageTopBanner'

const EditInfo = ({ activeButton, setActiveButton }) => {

    const [selectedInput, setSelectedInput] = useState();
    const getIsMobile = () => window.innerWidth <= 305;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setActiveButton('/mypage/edit-info')
    }, [setActiveButton]);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }


    const Title = ({ text }) => (
        <div style={{ width: "24rem", marginRight: '2.7rem', background: '#272726', flexShrink: '0', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2.8125rem', color: text === '레벨' ? '#ccc2b6' : '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', padding: '1.9rem 0 0 1.25rem', letterSpacing: '-0.07rem' }}>{text}</div>
        </div>
    )

    return (
        <div className="edit-info">
            <HomePageTopBanner pageTitle='회원정보수정' />

            <div className="edit-info-content" >

                <div style={{ fontSize: '2.625rem' }} className="edit-info-text">
                    <div className="flex items-center h-14">
                        <span style={{ textOverflow: 'ellipsis', maxWidth: '25rem', overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-flex' }} className="input-with-text">{truncate('louie3', 10, 16)}</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <span className="flex items-center h-14" style={{ margin: '0.5rem 0 0 0.5rem' }}>아이디와 비밀번호 보안에 신경써주십시오.</span>
                </div>

                <div className='edit-info-form'>
                    <div className="border">
                        <div className="form-section">
                            <Title text="아이디" />
                            <div className="lable-or-input"
                                style={{ borderBottom: selectedInput === 0 ? '0.375rem solid #191817' : '0.375rem solid #191817', overflow: 'hidden' }}
                                onClick={() => setSelectedInput(0)}
                            >
                                <label className="text-gray-r585858 font-spoqa" disabled>louie3</label>
                                <div style={{ height: '0.1875rem' }}></div>
                            </div>
                        </div>


                        {/* BREAK */}
                        <div style={{ marginTop: '1.5rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="비밀번호" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 1 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(1)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(0)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 0 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                            <span style={{ letterSpacing: isMobile && "-0.31rem" }} className="text-under-input">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요.</span>
                            <span style={{ letterSpacing: isMobile && "-0.31rem" }} className="text-under-input1">(특수문자 사용불가)</span>
                        </div>



                        {/* BREAK */}

                        <div style={{ marginTop: '1.2rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="비밀번호 확인" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 2 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(2)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(1)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(true)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 1 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                        </div>



                        {/* BREAK */}

                        <div style={{ marginTop: '1.5rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="환전비밀번호" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 3 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(3)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(2)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 2 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                            <span style={{ letterSpacing: isMobile && "-0.31rem" }} className="text-under-input">영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요.</span>
                            <span style={{ letterSpacing: isMobile && "-0.31rem" }} className="text-under-input1">(특수문자 사용불가)</span>
                        </div>

                        {/* BREAK */}

                        <div style={{ marginTop: '1rem' }} className="flex flex-wrap">
                            <div className='form-section'>
                                <Title text="환전 비밀번호 확인" />
                                <div className="lable-or-input"
                                    style={{ borderBottom: selectedInput === 4 ? '0.375rem solid rgb(110, 84, 58)' : '0.375rem solid #191817' }}
                                    onClick={() => setSelectedInput(4)}
                                >
                                    <input
                                        className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                        style={{ fontSize: '2.625rem' }}
                                        onFocus={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '-14.075rem'
                                            setSelectedInput(3)
                                        }}
                                        onBlur={(e) => {
                                            const menu = document.querySelector('#main-menu');
                                            menu.style.marginBottom = '0'
                                            setSelectedInput(false)
                                        }}
                                        type="password"
                                    />
                                    <div style={{ height: '0.1875rem' }} className={`${selectedInput === 3 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                                </div>
                            </div>
                        </div>


                        <div style={{ marginTop: '5.125rem' }} className="w-full">


                            <div className="form-section">
                                <div style={{ width: "24rem", marginRight: '2.7rem', background: '#272726', flexShrink: '0', borderRadius: '0.5rem', height: '10rem', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ fontSize: '2.8125rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', padding: '0 0 0 1.25rem', letterSpacing: '-0.07rem' }}>레벨</div>
                                </div>
                                <div className="lable-or-input" style={{ height: '10rem', padding: '1.5rem 1.4rem' }}>
                                    <label style={{ letterSpacing: '-0.02rem' }}>
                                        레벨 LV.1 (점수: 0) /
                                        <br />
                                        다음레벨 LV.2 (점수: 20)</label>
                                    <div style={{ height: '0.1875rem' }}></div>
                                </div>
                            </div>



                            <div style={{ marginTop: '4.1rem' }} className="form-section">
                                <Title text="스포츠" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }}></div>
                                </div>
                            </div>


                            <div style={{ marginTop: '1.3rem' }} className="form-section">
                                <Title text="카지노" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }}></div>
                                </div>
                            </div>


                            <div style={{ marginTop: '1.6rem' }} className="form-section">
                                <Title text="슬롯" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }}></div>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.6rem' }} className="form-section">
                                <Title text="미니게임" />
                                <div className="lable-or-input" style={{ paddingLeft: '1.4rem' }}>
                                    <label className="text-gray-r585858 font-spoqa">Bronze</label>
                                    <div style={{ height: '0.1875rem' }}></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='button-class-div shadow-to-box hover'>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} className='button-class'>
                        <div style={{ marginTop: isMobile ? '-0.4rem' : '0' }}>
                            <p style={{
                                fontSize: '2.80625rem',
                                color: '#ffd2d2',
                                fontFamily: "SpoqaHanSansNeoMedium",
                                marginRight: '-0.19rem',
                                letterSpacing: '-0.06rem',
                                textAlign: 'center',
                                width: ' 36.4375rem',
                            }} className='shadow-to-text'>수정하기</p>
                        </div>
                    </button>
                </div>
            </div >

        </div >
    )
}

export default EditInfo

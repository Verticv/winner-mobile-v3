import React from 'react'
import { useNavigate } from 'react-router-dom';
import Rank1 from '../../assets/myPage/freeboard/1.png';
import Rank2 from '../../assets/myPage/freeboard/2.png';
import Rank3 from '../../assets/myPage/freeboard/3.png';
import Rank4 from '../../assets/myPage/freeboard/4.png';
import Rank5 from '../../assets/myPage/freeboard/5.png';
import ReplyArrow from '../../assets/myPage/freeboard/reply.png'
import FreeBoardPanel from '../FreeBoardPanel'

const FreeBoardView2 = () => {

    const navigate = useNavigate();
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) : str;
    }

    const SendMessage = ({ placeholder, buttonText }) => {
        return (
            <div style={{ height: "17.4375rem", borderRadius: "1.625rem", marginTop: '-0.4rem', fontSize: '2.8125rem', borderWidth: '0.1875rem', display: 'flex', position: 'relative' }} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                <textarea
                    style={{ border: '0', width: "60.9375rem", padding: '3.3rem 4rem 3.5625rem 3.89rem', resize: "none", lineHeight: '1.32', WebkitTextStroke: "0.2px", borderRadius: '0.7rem', background: '#272726', fontSize: '2.811875rem', color: '#b4b4b4', fontFamily: 'SpoqaHanSansNeo' }}
                    className="place-color-grey overflow-hidden outline-none w-full font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                    placeholder={placeholder}
                    onFocus={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '-14.075rem'
                    }}
                    onBlur={() => {
                        const menu = document.querySelector('#main-menu');
                        menu.style.marginBottom = '0'
                    }}
                />

                <button style={{ borderRadius: "0.625rem", width: '10.5625rem', padding: '0.1875rem', position: 'absolute', right: '0', height: '99%', background: 'linear-gradient(to top, #223349, #415a77 50%, #5e7fa4 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }} className="hover">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #27415e, #305176 50%, #305176)', borderRadius: "0.625rem", color: '#d6f3ff', fontSize: '2.811875rem', fontFamily: 'SpoqaHanSansNeoMedium', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ borderRadius: "1.625rem" }} className="flex items-center justify-center h-full w-full bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text">{buttonText}</span>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null,
        isOneButton = false
    }) => (
        <div style={{ paddingTop: '0.451rem' }} className="w-full">
            <div style={{ minHeight: '5.8rem', display: 'flex', alignItems: 'flex-start', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>
                <img style={{ width: '2.25625rem', height: '2.25625rem', marginRight: '1.65rem', marginLeft: '-0.2rem', marginTop: '3.1rem' }} src={ReplyArrow} alt="" />
                <img style={{ width: '3.825rem', height: '4.6375rem', marginRight: '0.6125rem', marginTop: '2rem' }} src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5} alt="" />
                <p style={{ fontSize: '2.624375rem', color: '#ccc2b6' }}>{username}</p>
                <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', marginTop: '3.3rem', background: '#555555' }}></div>
                <p style={{ fontSize: '2.25rem', color: '#929292', marginTop: '2.7rem', flexShrink: 0 }}>2021.06.28 15:36</p>
            </div>
            <div style={{ marginLeft: '3.8rem', minHeight: '8.625rem', borderRadius: '0.8rem', width: '66.15rem', background: '#272726' }} className="">
                <div style={{ borderRadius: "1.625rem", fontSize: '2.8125rem', paddingLeft: '3.6625rem', paddingRight: '3.6625rem', borderWidth: '0.1875rem', display: 'flex', paddingBottom: '2rem', }} className="h-full w-full bg-white border border-gray-dddddd flex items-center justify-between">
                    <div className="flex font-spoqa" style={{ display: '', marginTop: '2.2rem' }}>
                        {tag && (<span style={{ fontSize: '2.8125rem', color: '#4c98ff', marginRight: '0.8rem', flexShrink: '0', }} className="text-blue-r0056a6 font-spoqa mr-4">@{truncate(tag, 6, 6)}</span>)}
                        {text}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '1.1rem', marginLeft: '3.8rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                <button style={{ borderRadius: "0.8rem", width: '9.2rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', color: isOneButton ? '#ccc2b6' : '#ff6945', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid #454545' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                    <div className={`${isOneButton ? "text-gray-r7b7b7b" : "text-red-d52e2e"} font-spoqaMedium flex items-center justify-center mt-2`}>{isOneButton ? "답글" : "수정"}</div>
                </button>
                {!isOneButton && (
                    <div style={{ borderRadius: "0.8rem", width: '9.26rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid #454545' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                        <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5" style={{ color: '#ff6945', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>삭제</div>
                    </div>
                )}
            </div>
        </div>
    )
    return (
        <div style={{ padding: '0 1.875rem' }} className="free-board-view2">
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', padding: '0.1875rem', borderRadius: '1.2rem', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }}>
                <div style={{ borderRadius: "1.1rem" }} className="title-div">
                    <div className="title">
                        <div className="text font-spoqaMedium tracking-tight text-5xl text-gray-r454545">이벤트 신청합니다.</div>
                    </div>

                    <div style={{ minHeight: '7.3rem', padding: '1.4375rem 1.875rem', borderBottomWidth: '0.1875rem', marginBottom: '5.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.1875rem solid #252525', background: '#2e2e2e' }} className="bg-gray-fafafa border-b border-gray-dddddd flex justify-between items-center">
                        <div className="w-full flex items-center justify-between">

                            <div className="flex items-center" style={{
                                display: 'flex', alignItems: 'flex-start', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.3rem',
                                letterSpacing: '-0.07rem'
                            }}>
                                <img style={{ width: '3.450625rem', height: '4.436875rem', marginRight: '0.8rem', marginLeft: '-0.3rem' }} className='object-contain' src={Rank1} alt="" />
                                <p style={{

                                    fontSize: '2.624375rem', color: '#929292 ',
                                    maxWidth: '53rem',
                                    margin: '0',
                                    marginTop: '0.5rem'
                                }} className="font-spoqaMedium tracking-tight text-gray-r585858">하이도1207
                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1rem auto 1.16rem', background: '#555555', display: 'inline-block' }} className='bg-gray-c5c5c5'></div>
                                    <p style={{ fontSize: '2.25rem', color: '#7b7b7b', marginTop: '2.2rem', fontFamily: 'SpoqaHanSansNeo', display: 'inline-block', margin: '0' }} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:49</p>
                                </p>
                            </div>
                        </div>
                        <div style={{
                            padding: '0 1.5rem',
                            height: '4.4375rem',
                            fontSize: '2.4375rem',
                            display: 'flex',
                            marginRight: '-0.4rem',
                            marginLeft: '-3.9rem',
                            borderRadius: '2.4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "SpoqaHanSansNeoMedium",
                            border: '0.1875rem solid #454545',
                            marginTop: '0.2rem',
                            background: '#2e2e2e'
                        }} className='flex justify-center mt-3 align-center rounded-full border-b border-gray-b7b7b7'>
                            <div style={{ marginRight: '0.8rem', marginTop: '0.1rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b mt-1">댓글</div>
                            <div style={{ marginTop: '0.1rem', color: '#ff6945', marginLeft: '-0.35rem' }}>2</div>
                        </div>

                    </div>

                    <div style={{ marginBottom: '5.625rem', background: '', padding: '', margin: '1.6rem', borderRadius: '1.3rem' }} className="w-full h-full">
                        <div className="" style={{ background: '', borderRadius: '1.3rem' }}>
                            <FreeBoardPanel />
                        </div>
                    </div>

                    <div style={{ minHeight: "28.1875rem", WebkitTextStroke: "", borderTopWidth: '0.1875rem', padding: '2.2rem 1.85rem', fontSize: '2.811875rem', color: '#c8c8c8', fontFamily: 'SpoqaHanSansNeo', background: '#323232', marginTop: '5.4rem', borderTop: '0.1875rem solid #252525', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', letterSpacing: '-0.07rem' }} className=" bg-white border-b border-gray-dddddd  font-spoqa tracking-tight text-gray-r585858">
                        베팅기록 올려봅니다.
                    </div>
                </div>
            </div>

            {/* TWO EDIT BUTTONS */}
            <div className="two-buttons">
                <button
                    className='hover shadow-to-box shadow-to-text'
                    style={{ background: 'linear-gradient(to top, #4d0a25, #a34f63 50%, #e78694 )' }}>
                    <div className='div-border'
                        style={{ background: 'linear-gradient(to top, #97351d, #bb4c32 50%, #df6345)' }}
                    >
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">수정하기</span>
                        </div>
                    </div>
                </button>
                <button
                    className='hover shadow-to-box shadow-to-text'
                    style={{ background: 'linear-gradient(to top, #4d3c0a, #a3814f 50%, #e7b786 )' }}>
                    <div className='div-border' style={{ background: 'linear-gradient(to top, #80603f, #96704a 50%, #a57b52 )', color: '#ffdfbd' }}>
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">삭제하기</span>
                        </div>
                    </div>
                </button>
            </div>

            {/* COMPOSE COMMENT */}
            <div style={{ borderRadius: "1.1875rem", padding: '0.1875rem', background: 'linear-gradient(to top, #1f1f1e, #313130 50%, #4a4a4a)', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }} className="w-full bg-gray-fafafa shadow-subNavbar shadow-to-box">
                <div style={{ background: '#323232', padding: '0 1.5rem 1.6rem', width: '100%', height: '100%', borderRadius: "1.1875rem" }}>
                    <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '0.6rem' }}>
                        <p style={{ fontSize: '2.624375rem', color: '#ccc2b6', marginTop: '2.8rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }} className="font-spoqaMedium tracking-tight text-gray-r454545">댓글 작성하기</p>
                        <div style={{
                            padding: '0 1.5rem',
                            height: '4.4375rem',
                            fontSize: '2.4375rem',
                            display: 'flex',
                            marginRight: '-0.4rem',
                            marginLeft: '-3.9rem',
                            borderRadius: '2.4rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "SpoqaHanSansNeoMedium",
                            border: '0.1875rem solid #454545',
                            marginTop: '0.3rem',
                            background: '#2e2e2e'
                        }} className='flex justify-center mt-3 align-center rounded-full border-b border-gray-b7b7b7'>
                            <div style={{ marginRight: '0.8rem', marginTop: '0.1rem', color: '#ccc2b6' }} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b mt-1">댓글</div>
                            <div style={{ marginTop: '0.1rem', color: '#ff6945', marginLeft: '-0.35rem' }}>2</div>
                        </div>
                    </div>

                    <div style={{ paddingTop: '0.625rem' }}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>

            {/* COMMENT SECTION */}
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '0.1875rem', background: 'linear-gradient(to top,#1f1f1e, #383838 50%, #4a4a4a )' }} className="w-full bg-gray-fafafa shadow-subNavbar shadow-to-box ">
                <div style={{ width: '100%', height: '100%', background: '#323232', borderRadius: '1.1875rem', paddingBottom: '1.8rem' }}>
                    <div style={{ padding: '0 1.7rem', borderBottomWidth: '0.1875rem', background: '#323232', borderTopLeftRadius: "1.1875rem", borderTopRightRadius: "1.1875rem", borderBottom: '0.1875rem solid #252525' }} className="border-b border-gray-dddddd">
                        <div style={{ display: 'flex', alignItems: 'flex-start', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.3rem', minHeight: '9rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', height: '4.436875rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '2.6rem' }} src={Rank2} alt="" />
                            <p style={{ fontSize: '2.624375rem', color: '#ccc2b6', paddingTop: '0.4rem' }}>신풍사우나</p>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', marginTop: '3.7rem', background: '#555555' }}></div>
                            <p style={{ fontSize: '2.25rem', color: '#929292', fontFamily: 'SpoqaHanSansNeo', marginTop: '3.2rem', flexShrink: 0 }}>2021.06.28 15:36</p>
                        </div>

                        <div style={{ borderRadius: "0.8rem", WebkitTextStroke: "0.2px", minHeight: '8.5625rem', paddingBottom: '0.01rem', marginTop: '-2.85rem', marginBottom: '1rem', borderWidth: '0.1875rem', background: '#272726' }} className="w-full h-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{ fontSize: '2.8125rem', paddingLeft: '3.6875rem', paddingRight: '3.6875rem', paddingTop: '2.6rem' }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: '#272726', border: '0.1875rem solid #454545', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>수정</div>
                            </button>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: '#272726', border: '0.1875rem solid #454545', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>삭제</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.875rem' }}>
                        <ReplyCell rank={5} isOneButton={true} />
                        <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="쇼유쇼유쇼유쇼유쇼유" />
                    </div>
                </div>
            </div>
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.75rem', padding: '0.1875rem', background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }}>
                <div style={{ borderRadius: "1.1875rem", marginTop: '', padding: '0.1875rem', paddingTop: '2.07rem', background: '#323232' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                    <div style={{ padding: '0 1.5rem', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525' }}>

                        <div style={{ display: 'flex', alignItems: 'flex-start', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.3rem', minHeight: '4.8rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '0.2rem' }} src={Rank2} alt="" />
                            <span style={{ fontSize: '2.624375rem', color: '#ccc2b6', marginTop: '0.8rem' }}>신풍사우나</span>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', background: '#555', marginTop: '1.4rem' }}></div>
                            <span style={{ fontSize: '2.25rem', color: '#929292', fontFamily: 'SpoqaHanSansNeo', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span>
                        </div>

                        <div style={{ borderRadius: "0.625rem", WebkitTextStroke: "0.2px", minHeight: '8.6rem', marginTop: '2.03rem', marginBottom: '0.95rem', borderWidth: '0.1875rem', display: 'flex', background: '#272726' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginLeft: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.39rem', marginBottom: '0.95rem', background: '#272726', border: '0.1875rem solid #454545', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>수정</div>
                            </button>
                            <button style={{ borderRadius: "0.8rem", width: '9.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', background: '#272726', border: '0.1875rem solid #454545', color: '#ff6945', fontFamily: 'SpoqaHanSansNeoMedium' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-2" style={{ paddingLeft: '0.2rem', paddingTop: '0.2rem' }}>삭제</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.5rem', marginTop: '2.3rem', marginBottom: '1.35rem' }}>
                        <SendMessage placeholder='두개의 이벤트 모두 참여하였습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>
            <div style={{ borderRadius: "1.1875rem", marginTop: '3.9rem', padding: '0.1875rem', background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)' }}>
                <div style={{ borderRadius: "1.1875rem", marginTop: '', padding: '0.1875rem', paddingTop: '', background: '#323232' }} className="w-full bg-gray-fafafa shadow-subNavbar">
                    <div style={{ padding: '2.1rem 1.5rem 0', borderBottomWidth: '0.1875rem', borderBottom: '0.1875rem solid #252525' }} className="border-b border-gray-dddddd">
                        <div style={{ display: 'flex', alignItems: 'flex-start', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '0.3rem', minHeight: '4.8rem', letterSpacing: '-0.07rem' }}>
                            <img style={{ width: '3.450625rem', marginRight: '0.5625rem', marginLeft: '-0.3rem', marginTop: '0.2rem' }} src={Rank2} alt="" />
                            <span style={{ fontSize: '2.624375rem', color: '#ccc2b6', marginTop: '0.8rem' }}>신풍사우나</span>
                            <div style={{ height: '1.75rem', width: '0.1875rem', marginLeft: '1.1rem', marginRight: '1.1rem', background: '#555', marginTop: '1.4rem' }}></div>
                            <span style={{ fontSize: '2.25rem', color: '#929292', fontFamily: 'SpoqaHanSansNeo', marginTop: '1rem', flexShrink: 0 }}>2021.06.28 15:36</span>
                        </div>


                        <div style={{ borderRadius: "0.625rem", WebkitTextStroke: "0.2px", minHeight: '8.5625rem', marginTop: '2.06rem', marginBottom: '1.1rem', borderWidth: '0.1875rem', display: 'flex', background: '#272726' }} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{ marginLeft: '3.6875rem', paddingRight: '3.6875rem', marginTop: '2.5rem', fontSize: '2.811875rem', color: '', fontFamily: 'SpoqaHanSansNeo' }} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{ marginTop: '-0.1rem', marginLeft: '-0.2rem', display: 'flex', marginBottom: '-0.2rem' }} className='flex'>
                            <button style={{ borderRadius: "0.8rem", width: '9.4rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.55rem', background: '#2e2e2e', color: '#ccc2b6', paddingTop: '0.2rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', border: '0.1875rem solid #454545', marginBottom: '1.1rem' }} className='hover flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div>답글</div>
                            </button>
                        </div>
                    </div>

                    <div style={{ padding: '0 1.5rem', marginTop: '2.4rem', marginBottom: '1.2rem' }}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
                </div>
            </div>


            {/* FOOTER BUTTONS */}
            <div style={{ marginTop: '3.9rem', paddingBottom: '19.625rem' }} className="w-full flex items-start justify-between">
                <button onClick={() => navigate("/freeboard/view/0")} style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="shadow-to-box shadow-to-box flex hover items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.2rem'
                            }}>이전</span>
                        </div>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="shadow-to-box shadow-to-box hover flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                            onClick={() => navigate('/freeboard')}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.2rem'
                            }}>목록보기</span>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => navigate('/freeboard/view2')}
                    style={{ height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', width: '24.125rem', background: 'linear-gradient(to top, #4d3c0a, #9c7b4a 50%, #e7b786)', borderRadius: '1rem' }} className="shadow-to-box hover flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to top, #80603f, #936e48 50%, #a57b52)', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <div
                            style={{
                                // background: 'linear gradient(to top, #80603f, #936e48 50%, #a57b52)'
                            }}
                            onClick={() => navigate('/freeboard/view2')}
                            className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white shadow-to-text" style={{
                                color: '#ffdfbd', marginLeft: '0.2rem'
                            }}>다음</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FreeBoardView2

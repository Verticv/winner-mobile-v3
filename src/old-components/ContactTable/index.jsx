import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import MailIcon from '../../assets/myPage/mail.png'
import MailOpenedIcon from '../../assets/myPage/mail_opened.png'
import Delete from '../../assets/myPage/delete.png'
import DeleteDark from '../../assets/myPage/delete-dark.png'


const ContactTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) : str;
    }

    useEffect(() => {
        if (location?.state?.from === '/main') {
            window.onpopstate = () => {
                navigate('/main')
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function InboxList({ items }) {

        return items.map(item => {

            const type = item.isRead === true ? "답변완료" : "답변대기"
            return (
                <div
                    key={item.id}
                    onClick={() => navigate(item.path, {state: {from: location?.state?.from === '/main' ? '/main' :  ''}})}
                    style={{ background: item.isRead === false ? '#3d3934' : item.id % 2 === 0 ? '#323232' : '#2e2e2e' }}
                    className={`${item.isRead === false
                        ? "bg-gray-e8eff6" :
                        item.id % 2 === 0
                            ? "bg-gray-fdfdfd"
                            : "bg-gray-f8f9fb"
                        } flex contact-card`}
                >
                    <div style={{ width: '9.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="flex justify-start items-center cursor-pointer" >
                        <img className='hover' style={{ width: '4.875rem', height: item.isRead === true ? '4.72625' : '2.945' }} src={item.isRead === true ? MailOpenedIcon : MailIcon} alt="" />
                    </div>
                    <div
                        style={{
                            maxWidth: '56.25rem',
                            padding: '0.75rem 2.2rem',
                            paddingLeft: '0',
                            paddingBottom: "1.5rem",
                        }}
                        className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-0.3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', height: '5.4rem' }} >
                                <div
                                    style={{
                                        marginRight: '1rem', fontSize: '2.4375rem',
                                        padding: '0rem 1.35rem',
                                        fontFamily: 'SpoqaHanSansNeoMedium',
                                        paddingBottom: '0',
                                        backgroundColor: item.isRead === true ? "#494745" : "#7e7564", 
                                        color: item.isRead === true ? "#c8c8c8" : "#f1e7d5",
                                        borderRadius: '2rem',
                                        height: '4.1rem',
                                        marginTop: '0.3rem',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: '0.02rem',
                                        maxWidth: '16rem',
                                        overflow: 'hidden',
                                        lineHeight: '3.4rem'
                                    }}
                                >
                                    <p style={{ marginTop: '0.45rem', letterSpacing: '-0.05rem' }}>{truncate(type, 6, 6)}</p>
                                </div>
                                <p style={{
                                    textOverflow: 'ellipsis', maxWidth: '37rem', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '3rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium',
                                    color: item.isRead === true ? '#a0a0a0' : '#eeeeee', marginTop: '0.5rem'
                                }}>{item.text}</p>
                                {item.isRead === false && (
                                    <div className="n-div">
                                        N
                                    </div>
                                )}
                            </div>

                            <div
                                className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} style={{ display: 'flex' }}>
                                <div style={{ marginTop: '0.125rem', display: 'flex', alignItems: 'center' }} className="w-full flex align-center">
                                    <p className='flex items-center text-gray-r7b7b7b' style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>{item.category}</p>
                                    <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1rem auto 0.9rem', background: '#555555' }} className='bg-gray-c5c5c5'></div>
                                    <div style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem' }} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className='absolute right-0 ' style={{ position: 'absolute', right: '4.5rem', background: 'bottom', zIndex: 5 }} onClick={e => e.stopPropagation()}>
                        <img className='hover' style={{ width: '4rem', height: '4.375rem' }} src={item.isRead ? DeleteDark : Delete} alt="" />
                    </button>
                </div>
            )
        });
    }

    return (
        <div className="contact-table">
            <InboxList items={array} />
        </div>
    )
}

export default ContactTable

import React from 'react'
import { useNavigate } from 'react-router-dom';
import MailIcon from '../../assets/myPage/mail.png'
import MailOpenedIcon from '../../assets/myPage/mail_opened.png'
import Delete from '../../assets/myPage/delete.png'
import DeleteDark from '../../assets/myPage/delete-dark.png'

const InboxTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const navigate = useNavigate();

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) : str;
    }

    function InboxList({ items }) {
        return items.map(item => (
            <div
                key={item.id}
                onClick={() => navigate(item.path)}
                style={{ background: item.isRead === false ? '#3d3934' : item.id % 2 === 0 ? '#323232' : '#2e2e2e' }}
                // style={{ height: '11.625rem', borderBottomWidth: '0.1875rem' }}
                className={`${item.isRead === false
                    ? "bg-gray-e8eff6" :
                    item.id % 2 === 0
                        ? "bg-gray-fdfdfd"
                        : "bg-gray-f8f9fb"
                    } flex contact-card`}
            >
                <div style={{ width: '7.875rem', display: 'flex', justifyContent: 'center' }} className="flex justify-center items-center">
                    <label className="form-control">
                        <input
                            style={{ width: '3rem', height: '3rem', marginLeft: '0.1rem', marginTop: '0.2rem' }}
                            type="checkbox"
                            checked={checkedState[item.id]}
                            onChange={() => handleOnChange(item.id)}
                        />
                    </label>
                </div>
                <div style={{ width: '5.9rem', marginRight: '2.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="flex justify-start items-center cursor-pointer" onClick={() => navigate(item.path)}>
                    <img style={{ width: '4.875rem', height: item.isRead === true ? '4.72625' : '2.945' }} src={item.isRead === true ? MailOpenedIcon : MailIcon} alt="" />
                </div>
                <div
                    style={{
                        maxWidth: '56.25rem',
                        padding: '0.9rem 2.2rem',
                        paddingLeft: '0',
                        paddingBottom: "1.5rem",
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >

                    <div className='w-full h-full flex flex-wrap' style={{ display: 'flex', flexDirection: 'column', marginTop: '-0.3rem' }}>
                        <div
                            className={`${item.isRead === true
                                ? "text-gray-r7b7b7b font-spoqaMedium"
                                : "text-gray-r454545 font-spoqaMedium"
                                } flex items-center cursor-pointer`}
                            onClick={() => navigate(item.path)}
                            style={{ display: 'flex', alignItems: 'center', height: '5.4rem' }}
                        >
                            {
                                item.type === "공지"
                                    ? <div style={{
                                        // marginTop: '-1.1rem',
                                        fontSize: '2.4375rem',
                                        padding: '0.6rem 1.7rem 0.4rem',
                                        borderRadius: '2rem',
                                        color: '#fff',
                                        fontFamily: "SpoqaHanSansNeoMedium",
                                        background: '#0469a3',
                                        marginTop: '0.5rem',
                                        marginLeft: '0.1rem',
                                        marginRight: '0.9rem',
                                        maxWidth: '17.5rem',
                                        overflow: 'hidden',
                                        lineHeight: '3.3rem',
                                        height:'4.2rem',
                                        flexShrink:0
                                    }} className="w-max rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white mr-4 mb-2"

                                    ><span>{truncate(item.category, 6, 6)}</span></div>
                                    : item.type === "이벤트"
                                        ? <div style={{
                                            // marginTop: '-1.1rem',
                                            fontSize: '2.4375rem',
                                            padding: '0.56rem 1.5rem 0.45rem',
                                            borderRadius: '2rem',
                                            color: '#fff',
                                            fontFamily: "SpoqaHanSansNeoMedium",
                                            background: '#c08029',
                                            marginTop: '0.53rem',
                                            marginLeft: '0.1rem',
                                            marginRight: '0.9rem',
                                            maxWidth: '17.5rem',
                                            overflow: 'hidden',
                                            lineHeight: '3.3rem',
                                            height:'4.2rem'
                                        }}
                                            className="w-max rounded-full bg-yellow-ffab39 flex items-center justify-center text-white mr-4 mb-2"><span className='-mb-1'><span className='mt-1 block'>{truncate('이벤트', 6, 6)}</span></span></div>
                                        : <div></div>
                            }
                            <p style={{
                                textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: item.type === '이벤트' ? '31rem' : item.type === "공지" ? '39rem' : !item.isRead ? '44rem' : '47rem', fontSize: '3rem', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium',
                                color: item.isRead !== true ? '#eeeeee' : '#a0a0a0', marginTop: '0.5rem',
                            }} className="group-hover:text-gray-r585858 text-5xl text-ellipsis overflow-hidden whitespace-nowrap">{item.text}</p>
                            {item.isRead === false && (
                                <div
                                    style={{ marginLeft: '0.9rem' }}
                                    className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 font-roboto n-div">
                                    N
                                </div>
                            )}
                        </div>

                        {/* <div
                            className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} style={{ display: 'flex' }}>
                            <div className="w-full flex space-x-2px align-center">
                                <div style={{ fontSize: '2.625rem' }} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                    {item.time}
                                </div>

                            </div>
                        </div> */}

                        <div
                            className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} style={{ display: 'flex' }}>
                            <div style={{ marginTop: '0.2rem', display: 'flex', alignItems: 'center' }} className="w-full flex align-center">
                                {/* <p className='flex items-center text-gray-r7b7b7b' style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem' }}>{item.category}</p> */}
                                {/* <div style={{ height: '1.75rem', width: '0.1875rem', margin: 'auto 1rem auto 0.9rem', background: '#929292' }} className='bg-gray-c5c5c5'></div> */}
                                <div style={{ fontSize: '2.625rem', color: '#929292', fontFamily: 'SpoqaHanSansNeo', letterSpacing: '-0.07rem' }} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className='absolute right-0' style={{ position: 'absolute', right: '4.55rem', background: 'bottom' }} onClick={e => e.stopPropagation()}>
                    <img className='hover' style={{ width: '4rem', height: '4.375rem', marginTop: '0.3rem' }} src={item.isRead ? DeleteDark : Delete} alt="" />
                </button>
            </div>
        ));
    }

    return (
        <div className="contact-table">
            <InboxList items={array} />
        </div>
    )
}

export default InboxTable

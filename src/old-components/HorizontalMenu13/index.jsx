import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';


const HorizontalMenu13 = ({
    itemsArray,
    setSelectedTab,
    isState = 0,
    setSelectedSubTab = null,
    width,
    withoutFirst = true,
    imageWidth,
    hasNumber = true,
    withoutMargin
    // subInactive,
    // subActive,
}) => {

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper2')
        }
    }, [itemsArray, withoutFirst])

    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover);

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button
                id={`t-sub${index}`}
                key={item.id}
                style={{
                    background: `url(${pathname === item.path || isState === item.id ? item.subActive : item.subInactive}) round`,
                    borderRadius: "0",
                    width: '14.1rem',
                    height: '14.4rem',
                    marginRight: '-0.2rem',
                    border: '0',
                    flexShrink: '0'
                }}
                className={`${pathname === item.path || isState === item.id
                    ? "bg-blue-r58baf7"
                    : "bg-white"
                    } overflow-hidden flex items-end`}

                onPointerDown={() => setHover(item.id)}
                onPointerUp={() => {
                    setHover(null)
                    navigate(item.path)
                    setSelectedTab(item.id)
                    horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper2', index)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onPointerOut={() => setHover(null)}
                onPointerCancel={() => setHover(null)}
            >

                <div style={{
                    marginTop: '-1.5rem',
                    marginLeft: '-0.6rem'
                }}>
                    <div className='changeMargin' style={{ marginTop: '1.5rem', height: '5.9rem' }}>
                        <img style={{ width: item.width ? item.width : imageWidth ? imageWidth : withoutMargin ? '6.0625rem' : '5.0625rem', marginTop: '1.1rem', marginLeft: '0.4375rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className={`${hasNumber ? "mt-2" : "mt-5"}  object-contain`} src={item.icon} alt="" />

                    </div>
                    <p
                        style={{ margin: '0', marginTop: `${imageWidth ? '0.0625rem' : '0.7rem'}`, fontSize: '2.25rem', color: pathname === item.path || isState === item.id ? '#252525' : '#ccc2b6', marginLeft: '0.6rem', fontFamily: 'SpoqaHanSansNeoMedium' }}
                        className={`${pathname === item.path || isState === item.id
                            ? "text-white"
                            : "text-gray-r616161"
                            } text-4xl font-spoqaMedium tracking-tight mt-0 paragraph`}
                    >{item.text}</p>
                    {hasNumber && (
                        <div
                            style={{
                                width: '6.19rem', height: '2.785rem', marginTop: imageWidth ? '0.0625rem' : '', marginBottom: '2.1rem', marginLeft: '4.6rem', fontFamily: 'RobotoMedium', background: 'rgb(0 0 0 / 50%)', borderRadius: '2rem',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                            className={`hasNumber ${pathname === item.path || isState === item.id
                                ? "bg-blue-r1b4372"
                                : "bg-gray-r8c8c8c"
                                } rounded-full flex items-center justify-center`}>
                            <p style={{ margin: '0', fontSize: '2rem', marginLeft: '-0.2rem' }} className=" font-roboto text-white">{item.number}</p>
                        </div>
                    )}
                </div>
            </button>
        ));
    }

    return (
        <>
            <div id="container" className="HorizontalMenu flex justify-start items-start">
                <TabsList items={itemsArray} />
            </div>
        </>
    )
}

export default HorizontalMenu13
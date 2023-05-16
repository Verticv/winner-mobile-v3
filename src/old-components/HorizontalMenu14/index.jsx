import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';

const HorizontalMenu14 = ({
    itemsArray,
    setSelectedTab,
    isState = 0,
    setSelectedSubTab = null,
    width,
    withoutFirst = true,
    imageWidth,
    hasNumber = true,
    withoutMargin
}) => {

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper')
        }
    }, [itemsArray, withoutFirst])

    const navigate = useNavigate();
    const [isHover, setHover] = useState(null)
    console.log(isHover);

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button
                id={`t-sub${index}`}
                key={item.id}
                style={{
                    background: `url(${isState === item.id || (typeof (isState) !== 'number' && item.id === 0) ? item.subActive : item.subInactive}) round`,
                    borderRadius: "0",
                    width: '14.1rem',
                    height: '14.4rem',
                    marginRight: '-0.2rem',
                    border: '0',
                    flexShrink: '0'
                }}
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
                <div style={{ marginTop: '-1.5rem', marginLeft: '-0.6rem' }}>
                    <div className='changeMargin' style={{ marginTop: '1.5rem', height: '5.9rem' }}>
                        <img style={{ width: item.width ? item.width : imageWidth ? imageWidth : withoutMargin ? '6.0625rem' : '5.0625rem', marginTop: '1.1rem', marginLeft: '0.4375rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} src={item.icon} alt="" />
                    </div>
                    <p
                        style={{ margin: '0', marginTop: `${imageWidth ? '0.0625rem' : '0.7rem'}`, fontSize: '2.5rem', color: isState === item.id || (typeof (isState) !== 'number' && item.id === 0) ? '#252525' : '#ccc2b6', marginLeft: '0.6rem', fontFamily: 'SpoqaHanSansNeoMedium' }}
                        className="paragraph"
                    >{item.text}</p>
                    {hasNumber && (
                        <div
                            style={{
                                width: '6.19rem', height: '2.785rem', marginTop: imageWidth ? '0.0625rem' : '', marginBottom: '2.1rem', marginLeft: '4.6rem', fontFamily: 'RobotoMedium', background: 'rgb(0 0 0 / 50%)', borderRadius: '2rem',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                            className="hasNumber"
                        >
                            <p style={{ margin: '0', fontSize: '2rem', marginLeft: '-0.2rem', color: '#ccc2b6', fontFamily: 'RobotoMedium' }}>{item.number}</p>
                        </div>
                    )}
                </div>
            </button>
        ));
    }

    return (
        <>
            <div id="container" className="HorizontalMenu">
                <div style={{ width: '0.4rem', height: '10rem', flexShrink: 0 }}></div>
                <TabsList items={itemsArray} />
                <div style={{ width: '1.6rem', height: '10rem', flexShrink: 0 }}></div>
                <div style={{ height: '14.4rem' }} className="nav-shadow" />
            </div>
        </>
    )
}

export default HorizontalMenu14;
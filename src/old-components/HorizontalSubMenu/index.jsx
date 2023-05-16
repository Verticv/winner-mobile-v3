import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import horizontalsScroll from '../../utils/horizontalsScroll';

const HorizontalSubMenu = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null,
    isSameWidth = false,
    withoutFirst = true
}) => {

    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [, setHover] = useState(null)

    useEffect(() => {
        if (withoutFirst && pathname !== '/cscenter/all/contact/all/other' && pathname !== '/cscenter/all/contact/all/ar-game' && pathname !== '/cscenter/all/contact/all/ar-game1' && pathname !== '/cscenter/all/announcement/ar-game' && pathname !== '/cscenter/all/announcement/other' && pathname !== '/cscenter/all/faq/ar-game' && pathname !== '/cscenter/all/faq/other') {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper12')
        }
    }, [itemsArray, pathname, withoutFirst])

    useEffect(() => {
        if (withoutFirst && pathname === '/cscenter/all/contact/all/other' && pathname === '/cscenter/all/contact/all/ar-game' && pathname === '/cscenter/all/contact/all/ar-game1' && pathname === '/cscenter/all/announcement/ar-game' && pathname === '/cscenter/all/announcement/other' && pathname === '/cscenter/all/faq/ar-game' && pathname === '/cscenter/all/faq/other') {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper12')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function TabsList({ items }) {
        return items.map((item, index) => (
            <>
                <button className='btn'
                    id={`t${index}`}
                    style={{
                        color: pathname === item.path ? '#ffdfbd' : '#ccc2b6',
                        minWidth: item?.width ? item.width : 'fit-content',
                        background: pathname === item.path ? '#826140' : '#1e1e1e',
                        border: `${pathname !== item.path ? '0.1875rem solid #555555' : ''}`
                    }}
                    key={item.id}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        if (pathname !== item.path) {
                            horizontalsScroll(itemsArray, 't', 'scroll-wrapper12', index, items.length -1 === index ? 200 : null, item.additionLeftScroll || 0)
                            navigate(item.path)
                            setSelectedTab(item.id)
                            if (setSelectedSubTab !== null) {
                                setSelectedSubTab(0)
                            }
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div style={{ margin: item?.width ? '0' : '0 2.6875rem' }} >
                        <div>
                            <span>{item.text}</span>
                        </div>
                    </div>
                </button>
                {items?.length - 1 === index && (
                    <div style={{ minWidth: '0.8rem', height: '' }}></div>
                )}
            </>
        ));
    }

    return (
        <div id="container" className="horizontal-btns">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalSubMenu

/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import horizontalsScroll from '../../utils/horizontalsScroll';
// import Botton from '../NavButtons';

const HorizontalMenu = ({
    itemsArray,
    selectedSubTab,
    setSelectedSubTab = null,
    withoutFirst = true,
    setSelectedTab,
    popup
}) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isHover, setHover] = useState(null)

    console.log('selectedSubTab', selectedSubTab);

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
        }
    }, [itemsArray])

    function TabsList({ items }) {
        return items.map((item, index) => {
            const isActive = selectedSubTab === item.id
            let isSameLink = pathname === item.path


            if (item.hasSameParent) {
                const pagePath = window.location.pathname.split('/')
                pagePath?.pop()
                const parentPath = item.path.split('/')
                if (parentPath.join('/') === pagePath.join('/')) {
                    isSameLink = true
                }
            }

            if (window.location.pathname.includes('/mypage/bet-history/all/minigame') && item.path.includes('/mypage/bet-history/all/minigame')) {
                isSameLink = true
            }
            return (
                <div className={`nav-button ${(isActive && popup) || (isSameLink && !popup) ? 'active' : ''}`}
                    id={`t${index}`}
                    key={item.id}
                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                        navigate(item.path)
                        setSelectedSubTab(item.id)
                        setSelectedTab(item.id)
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <button
                        id={`t${index}`}
                        key={item.id}
                        style={{
                        }}
                    >
                        <div style={{ width: '100%', textAlign: 'center', height: '6.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: item.marginIcon ? item.marginIcon : '' }}>
                            <img id={item.id} className='icon' src={((isActive && popup) || (isSameLink && !popup)) ? (item.activeIcon ? item.activeIcon : item.icon) : item.icon} alt='' style={{ width: item.width || '7.875rem', height: item.height, marginTop: item.marginTop }} />
                        </div>
                        <div style={{ width: '100%', textAlign: 'center', height: '4.97rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span
                                id={item.id}
                                style={{ marginTop: item.marginTop, marginLeft: item.textMargin, fontFamily:'SpoqaHanSansNeoBold' }}
                                className='text'>{item.text}</span>
                        </div>
                    </button>
                </div>
            )
        });
    }

    return (
        <div id="container" className="HorizontalMenu flex justify-start items-start">
            <TabsList items={itemsArray} />
            <div style={{ width: '1.6rem', height: '10rem', flexShrink: 0 }}></div>
        </div>
    )
}

export default HorizontalMenu

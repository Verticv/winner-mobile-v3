/* eslint-disable */
import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import horizontalsScroll from '../../utils/horizontalsScroll';
import inactive from '../../assets/inactive-bg.png';

const HorizontalSubMenu = ({
    itemsArray,
    selectedSubTab,
    setSelectedSubTab = null,
    withoutFirst = true,
    setSelectedTab,
    popup
}) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper1')
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
                <div className={`nav-button ${(isActive && popup) || (isSameLink && !popup) || window.location.pathname === item.path ? 'active' : ''}`}
                    id={`t-sub${index}`}
                    key={item.id}
                    onPointerUp={() => {
                        horizontalsScroll(itemsArray, 't-sub', 'scroll-wrapper1', index)
                        navigate(item.path)
                        setSelectedSubTab(item.id)
                        setSelectedTab(item.id)
                    }}
                >
                    <button
                        id={`t-sub${index}`}
                        key={item.id}
                        style={{
                            background: `url(${inactive})`,
                            backgroundRepeat: 'round',
                            width: '20.9rem',
                            height: '11.18rem',
                            marginLeft: '0',
                            paddingTop: '0'
                        }}
                    >

                        <div style={{ width: '100%', textAlign: 'center', height: '6.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: item.marginIcon ? item.marginIcon : '0.6rem' }}>
                            <img id={item.id} className='icon' src={((isActive && popup) || (isSameLink && !popup)) ? (item.activeIcon ? item.activeIcon : item.icon) : item.icon} alt='' style={{ width: item.width || '7.875rem', height: item.height, marginTop: item.marginTop }} />
                        </div>
                        <div style={{ width: '100%', textAlign: 'center', height: '4.97rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <span
                                id={item.id}
                                style={{ marginTop: '0rem', marginLeft: item.textMargin }}
                                className='text'>{item.text}</span>
                        </div>
                    </button>
                </div>
            )
        });
    }

    return (
        <div id="container" className="HorizontalMenu" >
            <div style={{ width: '0.6rem', height: '10rem', flexShrink: 0 }}></div>
            <TabsList items={itemsArray} />
            <div style={{ width: '1rem', height: '10rem', flexShrink: 0 }}></div>

        </div>
    )
}

export default HorizontalSubMenu

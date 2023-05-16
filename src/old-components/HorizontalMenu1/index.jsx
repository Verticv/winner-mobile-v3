/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';
import inactive from '../../assets/inactive-bg1.png';
import activeBG from '../../assets/cscenter/leftMenu/active-btn.png'
import moneyActive from '../../assets/mainPage/icons/active-bg.png';
import moneyInactive from '../../assets/mainPage/icons/inactive-bg.png';

const HorizontalMenu1 = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null,
    withSmallMarginTop = false,
    isMoneyPage,
    isCouponPage,
    inActiveBG,
}) => {

    const navigate = useNavigate();
    let pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    const Image = React.memo(function Image({ icon, activeIcon, width, marginLeft, isSameLink }) {
        return <img style={{ width: width, marginLeft: marginLeft, WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className="mt-5 object-contain select-none" src={isSameLink ? activeIcon : icon} alt="" />
    });

    useEffect(() => {
        horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
    }, [itemsArray])

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isSameLink = pathname === item.path

            if (item.hasSameParent) {
                const pagePath = window.location.pathname.split('/')
                pagePath?.pop()
                const parentPath = item.path.split('/')
                if (parentPath.join('/') === pagePath.join('/')) {
                    isSameLink = true
                }
            }

            if (window.location.pathname.includes('/cscenter/all/policy/') && item.path.includes('/cscenter/all/policy/')) {
                isSameLink = true
            }

            if (window.location.pathname.includes('/mypage/gameresults/minigame/') && item.path.includes('/mypage/gameresults/minigame/')) {
                isSameLink = true
            }

            return (
                <button
                    id={`t${index}`}
                    key={item.id}
                    style={{
                        background: !isMoneyPage ? `url(${isSameLink ? (item.activeBG ? item.activeBG : activeBG) : (item.inActiveBG ? item.inActiveBG : inactive)}) round` : `url(${isSameLink ? moneyActive : moneyInactive}) round`,
                        backgroundSize: 'cover',
                        marginRight: index === 0 ? '0.1rem' : ''
                    }}
                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div className='btn-content' >
                        <div className='img'>
                            <Image icon={item.icon} activeIcon={item.activeIcon} width={item.width} marginLeft={item.marginLeft} isSameLink={isSameLink} />
                        </div>
                        <div className='text'>
                            <span style={{ color: isSameLink ? '#252525' : '#ccc2b6', fontFamily: 'SpoqaHanSansNeoBold' }}>{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div id="container">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu1

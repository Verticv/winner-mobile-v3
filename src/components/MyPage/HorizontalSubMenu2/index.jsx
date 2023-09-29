import React, { useState } from 'react'


const HorizontalSubMenu = ({
    setSelectedSubTab = null,
    isSameWidth = false,
}) => {

    const tabsSubArray = [
        { text: "승무패", id: 0, path: "/mypage/gameresults/all" },
        { text: "핸디캡", id: 1, path: "/mypage/gameresults/all1" },
        { text: "언오버", id: 2, path: "/mypage/gameresults/all2" },
        { text: "스페셜", id: 3, path: "/mypage/gameresults/all3" },
    ];
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    const [selectedTab, setSelectedTab] = useState(0)
    console.log(`isHover`, isHover)


    function TabsList({ items }) {
        return items.map((item, index) => {
            const activeButton = selectedTab === item.id
            return (
                <>  
                   <div style={{
                            height: '6.375rem', width: isSameWidth ? '17.625rem' : '',
                            minWidth: item?.width ? item.width : 'fit-content',
                            fontSize: '2.8125rem',
                            marginRight: '1.125rem',
                            borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`,
                            background: activeButton ? 'linear-gradient(to top, #4f3a7a, #cb78e6)' : 'linear-gradient(to top, #4f3a7a, #f0d3ff)',
                            borderRadius: "3.2rem",
                            padding: "0.1875rem",
                            // boxShadow: "0px 0.375rem 0.375rem 0px rgba(0, 0, 0, 0.6)"
                        }}>
                    <button
                        style={{
                            height: '100%', width: isSameWidth ? '100%' : '',
                            fontSize: '2.8125rem',
                            marginRight: '1.125rem',
                            color: activeButton ? '#ffffff' : '#2d2834',
                            background: activeButton ? 'linear-gradient(to top, #491f9c, #9e3cbc)' : 'linear-gradient(to top, #ccc4ff, #ffd9f5)',
                            borderRadius: "3.2rem"
                        }}
                        key={item.id}
                        onPointerDown={() => setHover(item.id)}
                        onPointerUp={() => {
                            setSelectedTab(item.id)
                            if (setSelectedSubTab !== null) {
                                setSelectedSubTab(item.id)
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
                    </div>
                    {items?.length - 1 === index && (
                        <div style={{ minWidth: '0.8rem', height: '6.375rem' }}></div>
                    )}
                </>
            )
        });
    }

    return (
        <div id="container" className="flex justify-start items-start mr-8">
            <TabsList items={tabsSubArray} />
        </div>
    )
}

export default HorizontalSubMenu

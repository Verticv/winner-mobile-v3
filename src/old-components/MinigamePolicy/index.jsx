import React, { useState } from 'react'
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import HorizontalSubMenu1 from '../HorizontalSubMenu1'
// import Icon1 from '../../images/cscenter/minigame/1.png'
// import Icon2 from '../../images/cscenter/minigame/2.png'
// import Icon3 from '../../images/cscenter/minigame/3.png'
// import Icon4 from '../../images/cscenter/minigame/4.png'
import PowerballPolicy from '../../assets/cscenter/minigame/powerball_policy.png';
import PowerladderPolicy from '../../assets/cscenter/minigame/powerladder_policy.png'
import SpeedKinoPolicy from '../../assets/cscenter/minigame/speedkino_policy.png';
// import HomePageTopBanner from '../HomePageTopBanner';
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
// import img from '../../img11.png';


// const HistoryMenu = ({
//     itemsArray,
//     setSelectedTab,
//     setSelectedSubTab = null
// }) => {
//     const navigate = useNavigate();
//     const pathname = window.location.pathname
//     const [isHover, setHover] = useState(null)
//     console.log(isHover)

//     function TabsList({ items }) {


//         return items.map((item, index) => {
//             let isActive = pathname === item.path
//             if (item.path.includes('/cscenter/all/policy/minigame')) {
//                 isActive = true
//             }
//             return (
//                 <button
//                     className={`${isActive
//                         ? "bg-blue-r0056a6"
//                         : "bg-white border border-gray-b7b7b7"
//                         } w-1/2 rounded-full font-spoqaMedium`}
//                     style={{ height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : ''}`, borderWidth: `${pathname !== item.path && !isActive ? '0.1875rem' : ''}` }}
//                     key={item.id}

//                     onPointerDown={() => setHover(item.id)}
//                     onPointerUp={() => {
//                         navigate(item.path)
//                         setSelectedTab(item.id)
//                         if (setSelectedSubTab !== null) {
//                             setSelectedSubTab(0)
//                         }
//                     }}
//                     onPointerOut={() => setHover(null)}
//                     onPointerCancel={() => setHover(null)}
//                 >
//                     <div >
//                         <div>
//                             <span
//                                 className={`${isActive
//                                     ? "text-white"
//                                     : "text-gray-r7b7b7b"
//                                     } font-spoqaMedium`}
//                             >{item.text}</span>
//                         </div>
//                     </div>
//                 </button>
//             )
//         });
//     }

//     return (
//         <div className="flex w-full font-spoqaMedium">
//             <TabsList items={itemsArray} />
//         </div>
//     )
// }

const HistoryMenu = ({
    itemsArray,
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/minigame')) {
                isActive = true
            }
            return (
                <button
                    className={`${isActive
                        ? "bg-blue-r0056a6"
                        : "bg-white border border-gray-b7b7b7"
                        } w-1/2 rounded-full font-spoqaMedium`}
                    style={{ background: isActive ? '#826140' : '#1e1e1e', fontFamily: 'SpoqaHanSansNeoMedium', color: isActive ? '#ffdfbd' : '#ccc2b6', width: '49.2%', borderRadius: '4rem', marginTop: '1rem', height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '1.15rem' : ''}`, border: `${pathname !== item.path && !isActive ? '0.1875rem solid #555555' : ''}`, letterSpacing: '-0.07rem' }}
                    key={item.id}

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        navigate(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div className='mt-2' style={{ marginRight: '-0.2rem', paddingTop: '0.3rem' }}>
                            <span
                                className={`${isActive
                                    ? "text-white"
                                    : "text-gray-r7b7b7b"
                                    }`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}

const MinigamePolicy = () => {

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(selectedSubTab, selectedTab)
    const tabsArray = [
        { text: "파워볼", id: 0, path: "/cscenter/all/policy/minigame/powerball" },
        { text: "파워사다리", id: 1, path: "/cscenter/all/policy/minigame/powerladder" },
        { text: "스피드키노", id: 2, path: "/cscenter/all/policy/minigame/speedkino" },
        { text: "키노사다리", id: 3, path: "/cscenter/all/policy/minigame/kinoladder" },
    ];

    const historyTabsArray = [
        { text: "스포츠게임", id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
        { text: "미니게임", id: 1, path: "/cscenter/all/policy/minigame/powerball" },
    ]

    return (
        <div style={{ overflow: 'hidden'}}>
            <div style={{ margin: '1.875rem', marginTop: '0', marginBottom: '2.1rem' }}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <div className="w-full relative top-0">
                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>
                <div className="">
                    <div style={{ marginLeft: '4.8rem' }} className=" flex flex-shrink-0 w-full font-spoqaMedium">
                        <HorizontalSubMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                    </div>
                </div>
            </div>



            <div style={{ paddingTop: '0.7rem', paddingBottom: '6.3rem' }} className="flex justify-center">
                <Routes>
                    <Route path="/powerball"
                        element={
                            <div style={{ marginLeft: '1rem' }}>
                                <img src={PowerballPolicy} alt="" style={{ width: '76rem' }} />
                            </div>
                        }
                    >
                    </Route>

                    <Route path="/powerladder"
                        element={
                            <div style={{ marginLeft: '1rem' }}>

                                <img src={PowerladderPolicy} alt="" style={{ width: '76rem' }} />
                            </div>
                        }
                    >
                    </Route>
                    <Route path="/speedkino"
                        element={
                            <div style={{ marginLeft: '1rem' }}>
                                <img src={SpeedKinoPolicy} alt="" style={{ width: '76rem' }} />
                            </div>
                        }
                    >
                    </Route>
                    <Route path="/kinoladder"
                        element={
                            <div style={{ marginLeft: '1rem' }}>
                                <img src={PowerladderPolicy} alt="" style={{ width: '76rem' }} />
                            </div>
                        }
                    >
                    </Route>
                </Routes>


            </div>

            <div style={{ marginBottom: '14rem' }} />

            {/* <BottomNavbar /> */}

        </div>
    )
}

export default MinigamePolicy

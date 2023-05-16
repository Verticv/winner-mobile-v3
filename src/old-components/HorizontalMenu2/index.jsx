// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router';
// import horizontalsScroll from '../../utils/horizontalsScroll';

// const HorizontalMenu = ({
//     itemsArray,
//     setSelectedTab,
//     isState = 0,
//     setSelectedSubTab = null,
//     width,
//     imageWidth,
//     hasNumber = true
// }) => {

//     useEffect(() => {
//         horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
//     }, [itemsArray])

//     const navigate = useNavigate();
//     const pathname = window.location.pathname
//     const [isHover, setHover] = useState(null)

//     function TabsList({ items }) {
//         return items.map((item, index) => (
//             <button
//                 id={`t${index}`}
//                 key={item.id}
//                 style={{
//                     background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
//                     borderRadius: "1.625rem",
//                     width: `${width ? width : '18.69'}`,
//                     height: '13.18rem',
//                     marginRight: items.length - 1 === index ? '1.875rem' : '0.1875rem',
//                     padding: '1px'
//                 }}
//                 className={`${pathname === item.path || isState === item.id
//                     ? "bg-blue-r58baf7"
//                     : "bg-white"
//                     } overflow-hidden flex items-end`}

//                 onPointerDown={() => setHover(item.id)}
//                 onPointerUp={() => {
//                     setHover(null)
//                     navigate(item.path)
//                     setSelectedTab(item.id)
//                     horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
//                     if (setSelectedSubTab !== null) {
//                         setSelectedSubTab(0)
//                     }
//                 }}
//                 onPointerOut={() => setHover(null)}
//                 onPointerCancel={() => setHover(null)}
//             >
//                 <div
//                     style={{
//                         // height:"78px",
//                         width: "100%",
//                         borderRadius: "1.625rem",
//                         paddingTop: '0.5rem'
//                     }}
//                     className={`flex w-full justify-end h-full items-end bg-white ${pathname === item.path || isState === item.id
//                         ? "bg-blue-r58baf7"
//                         : "bg-white"
//                         }`}
//                 >
//                     <div
//                         style={{
//                             background: pathname === item.path || isState === item.id
//                                 ? "linear-gradient(to bottom, #2087f0, #1873cf)"
//                                 : isHover === item.id
//                                     ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
//                                     : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
//                             borderRadius: "1.625rem",
//                             borderTopLeftRadius: "1.625rem 1.3rem",
//                             borderTopRightRadius: "1.625rem 1.3rem",
//                             borderColor: pathname === item.path || isState === item.id ? "#1a73ce" : "#d6dfe8",
//                             boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
//                         }}
//                         className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
//                     >
//                         <img style={{ width: imageWidth ? imageWidth : '4.9375rem', marginTop: !hasNumber ? 'rem' : imageWidth ? '0.4375rem' : '', marginLeft: '0.4375rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className={`${hasNumber ? "mt-2" : "mt-5"}  object-contain`} src={item.icon} alt="" />
//                         <span
//                             style={{ marginTop: `${imageWidth ? '0.0625rem' : ''}` }}
//                             className={`${pathname === item.path || isState === item.id
//                                 ? "text-white"
//                                 : "text-gray-r616161"
//                                 } text-4xl font-spoqaMedium tracking-tight mt-0`}
//                         >{item.text}</span>
//                         {hasNumber && (
//                             <div
//                                 style={{ width: '6.1875rem', height: '2.785rem', marginTop: imageWidth ? '0.0625rem' : '' }}
//                                 className={`${pathname === item.path || isState === item.id
//                                     ? "bg-blue-r1b4372"
//                                     : "bg-gray-r8c8c8c"
//                                     } rounded-full flex items-center justify-center`}>
//                                 <p style={{ fontSize: '2rem' }} className=" font-roboto text-white">{item.number}</p>
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </button>
//         ));
//     }

//     return (
//         <div id="container" className="flex justify-start items-start">
//             <TabsList items={itemsArray} />
//         </div>
//     )
// }

// export default HorizontalMenu

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';


const HorizontalMenu = ({
    itemsArray,
    setSelectedTab,
    isState = 0,
    setSelectedSubTab = null,
    width,
    imageWidth,
    hasNumber = true,
    // subInactive,
    // subActive,
}) => {

    useEffect(() => {
        horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
    }, [itemsArray])

    const navigate = useNavigate();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button
                id={`t${index}`}
                key={item.id}
                style={{
                    // background: items.length - 1 === index ? subActive : `url(${subInactive})`,
                    background: `url(${pathname === item.path || isState === item.id ? item.subActive : item.subInactive}) round`,
                    borderRadius: "0",
                    width: '18.3rem',
                    height: '14.4rem',
                    marginRight: '0.4rem',
                    // marginRight: items.length - 1 === index ? '1.875rem' : '0.1875rem',
                    // padding: '1rem',
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
                    horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onPointerOut={() => setHover(null)}
                onPointerCancel={() => setHover(null)}
            >
                {/* <div
                    style={{
                        // height:"78px",
                        width: "100%",
                        borderRadius: "1.625rem",
                        height: '100%',
                        paddingTop: '0.1875rem',
                        // background: 'red'
                    }}
                    className={`flex w-full justify-end h-full items-end bg-white ${pathname === item.path || isState === item.id
                        ? "bg-blue-r58baf7"
                        : "bg-white"
                        }`}
                > */}
                {/* <div
                        style={{
                            background: pathname === item.path || isState === item.id
                                ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                                : isHover === item.id
                                    ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                                    : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            height: '100%', width: '100%',
                            borderRadius: "1.625rem",
                            borderTopLeftRadius: "1.625rem 1.3rem",
                            borderTopRightRadius: "1.625rem 1.3rem",
                            borderColor: pathname === item.path || isState === item.id ? "#1a73ce" : "#d6dfe8",
                            boxShadow: 'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                        }}
                        className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                    > */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginTop: '-1.5rem',
                    marginLeft: '-0.6rem'
                }}>
                    <div style={{ marginTop: '1.5rem', height: '5.9rem', width: '17rem', textAlign: 'center' }}>
                        <img style={{ width: imageWidth ? imageWidth : '', marginTop: '0', marginLeft: '0.4375rem', WebkitUserDrag: "none", MozUserDrag: "none", userDrag: "none" }} className={`${hasNumber ? "mt-2" : "mt-5"}  object-contain`} src={item.icon} alt="" />

                    </div>
                    <p
                        style={{ margin: '0', marginTop: `${imageWidth ? '0.0625rem' : '0.7rem'}`, marginBottom: '1.2rem', letterSpacing: '-0.07rem', fontSize: '2.25rem', color: pathname === item.path || isState === item.id ? '#252525' : '#ccc2b6', marginLeft: '0.4rem' }}
                        className={`${pathname === item.path || isState === item.id
                            ? "text-white"
                            : "text-gray-r616161"
                            } text-4xl font-spoqaMedium tracking-tight mt-0`}
                    >{item.text}</p>
                    {hasNumber && (
                        <div
                            style={{
                                width: '6.19rem', height: '2.785rem', marginTop: imageWidth ? '0.0625rem' : '', marginBottom: '2.1rem', marginLeft: '4.6rem', fontFamily: 'RobotoMedium', background: 'rgb(0 0 0 / 50%)', borderRadius: '2rem',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                            className={`${pathname === item.path || isState === item.id
                                ? "bg-blue-r1b4372"
                                : "bg-gray-r8c8c8c"
                                } rounded-full flex items-center justify-center`}>
                            <p style={{ margin: '0', fontSize: '2rem', marginLeft: '-0.2rem' }} className=" font-roboto text-white">{item.number}</p>
                        </div>
                    )}

                </div>

                {/* </div> */}
                {/* </div> */}
            </button>
        ));
    }

    return (
        <div id="container" className="flex justify-start items-start" style={{
            marginLeft: '1.6rem',
        }}>
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu;
import React, { useState } from 'react'
import '../FixedMenu/_fixedMenu.scss';
import MenuIcon from '../../assets/images/mainPage/menu-icon.png'
import MenuIcon0 from '../../assets/images/bottom-nav/menu-icon.png'

import MenuIcon_0 from '../../assets/images/bottom-nav/menu-icon-on.png'



import Menu1 from '../../assets/images/bottom-nav/menu1.png'
import Menu2 from '../../assets/images/bottom-nav/menu2.png'
import Menu3 from '../../assets/images/bottom-nav/menu3.png'
import Menu4 from '../../assets/images/bottom-nav/menu4.png'
import Menu5 from '../../assets/images/bottom-nav/menu5.png'
import Menu6 from '../../assets/images/bottom-nav/menu6.png'
import Menu7 from '../../assets/images/bottom-nav/menu7.png'
import Menu8 from '../../assets/images/bottom-nav/menu8.png'
import Menu9 from '../../assets/images/bottom-nav/menu9.png'
import Menu10 from '../../assets/images/bottom-nav/menu10.png'
import Menu11 from '../../assets/images/bottom-nav/menu11.png'

import MenuOn1 from '../../assets/images/bottom-nav/menu-on1.png'
import MenuOn2 from '../../assets/images/bottom-nav/menu-on2.png'
import MenuOn3 from '../../assets/images/bottom-nav/menu-on3.png'
import MenuOn4 from '../../assets/images/bottom-nav/menu-on4.png'
import MenuOn5 from '../../assets/images/bottom-nav/menu-on5.png'
import MenuOn6 from '../../assets/images/bottom-nav/menu-on6.png'
import MenuOn7 from '../../assets/images/bottom-nav/menu-on7.png'
import MenuOn8 from '../../assets/images/bottom-nav/menu-on8.png'
import MenuOn9 from '../../assets/images/bottom-nav/menu-on9.png'
import MenuOn10 from '../../assets/images/bottom-nav/menu-on10.png'
import MenuOn11 from '../../assets/images/bottom-nav/menu-on11.png'

import MenuIcon_1 from '../../assets/images/mainPage/menu1.png'
import MenuIcon_2 from '../../assets/images/mainPage/menu2.png'
import MenuIcon_3 from '../../assets/images/mainPage/menu3.png'
import MenuIcon_4 from '../../assets/images/mainPage/menu4.png'
import MenuIcon_5 from '../../assets/images/mainPage/menu5.png'
import MenuIcon_6 from '../../assets/images/mainPage/menu6.png'
import MenuIcon_7 from '../../assets/images/mainPage/menu7.png'
import MenuIcon_8 from '../../assets/images/mainPage/menu8.png'
import MenuIcon_9 from '../../assets/images/mainPage/menu9.png'
import MenuIcon_10 from '../../assets/images/mainPage/menu10.png'
import MenuIcon_11 from '../../assets/images/mainPage/menu11.png'

import horizontalsScroll from '../../utils/horizontalsScroll';
import MenuList from '../Shared/MenuList'

import { useNavigate } from "react-router-dom";
const FixedMenu = ({
  setSelectedTab,
  selectedTab,
  setSelectedSection,
  isMyPage = false,
}) => {

  const [isOpen, setOpen] = useState(false)

 

  const Items = [
    {
      id: 0,
      icon: MenuIcon0,
      icon2: MenuIcon_0,
      OnIcon: MenuIcon_0,
      title: '홈',
      section: null
    },
    {
      id: 1,
      icon: Menu1,
      icon2: MenuIcon_1,
      OnIcon: MenuOn1,
      title: '라이브카지노',
      section: 'live-casino'
    },
    {
      id: 2,
      icon: Menu2,
      icon2: MenuIcon_2,
      OnIcon: MenuOn2,
      title: '스포츠',
      section: 'sports'
    },

    {
      id: 3,
      icon: Menu3,
      icon2: MenuIcon_3,
      OnIcon: MenuOn3,
      title: '라이브스포츠',
      section: 'live-sports'
    },
    {
      id: 4,
      icon: Menu4,
      icon2: MenuIcon_4,
      OnIcon: MenuOn4,
      title: '슬롯게임',
      section: 'slot-game'
    },
    {
      id: 5,
      icon: Menu5,
      icon2: MenuIcon_5,
      OnIcon: MenuOn5,
      title: '호텔카지노',
      section: 'hotel-casino'
    },
    {
      id: 11,
      icon: Menu11,
      icon2: MenuIcon_11,
      OnIcon: MenuOn11,
      title: '홀덤게임',
      section: 'holdem-game'
    },
    {
      id: 6,
      icon: Menu6,
      icon2: MenuIcon_6,
      OnIcon: MenuOn6,
      title: 'e-스포츠',
      section: 'e-sports'
    },
    {
      id: 7,
      icon: Menu7,
      icon2: MenuIcon_7,
      OnIcon: MenuOn7,
      title: '미니게임',
      section: 'mini-game'
    },
    {
      id: 8,
      icon: Menu8,
      icon2: MenuIcon_8,
      OnIcon: MenuOn8,
      title: '키론가상게임',
      section: 'virtual-game'
    },

    {
      id: 9,
      icon: Menu9,
      icon2: MenuIcon_9,
      OnIcon: MenuOn9,
      title: '피싱게임',
      section: 'fishing-game'
    },
    {
      id: 10,
      icon: Menu10,
      icon2: MenuIcon_10,
      OnIcon: MenuOn10,
      title: '티비벳',
      section: 'tibet'
    }
  ]
  const subItems = Items.filter(item => item.id !== 0)
  
  const setActiveTab = ({ index, item }) => {
    horizontalsScroll(Items, 't-sub', 'scroll-wrapper', index)
    //setSelectedSection(item.section)
    setSelectedTab(item.id)
  }
  
  const navigate = useNavigate();

  return (
    <>
      <div className='fixed-nav'>
        <div className='nav-list' id='scroll-wrapper'>
          {
            Items.map((item, index) => (
              
              <button
                className={`nav-item1 ${selectedTab === item.id ? 'active' : ''}`}
                key={item.id}
                id={`t-sub${index}`}
                onPointerUp={() => {
                  if (isMyPage) navigate("/main"); //!- on myPage, go to /main
                  else setActiveTab({index,item})
                }}>
                { selectedTab !== item.id && (<img src={item.icon} alt="right" className="ml-10px object-none" />)}
                { selectedTab === item.id && (<img src={item.OnIcon} alt="right" className="ml-10px object-none" />)}
                <p>
                  {item.title}
                </p>
              </button>
            ))
          }
   
        </div>
        <div className='fixed-btn'>
          <button onClick={() => setOpen(true)}>
            <img src={MenuIcon} alt="right" className="ml-10px object-none" />
            <p>
              더보기
            </p>
          </button>
        </div>
       
      </div>
      {isOpen === true && (
        <MenuList
          key={0}
          items={subItems}
          selectedTab={selectedTab}
          setOpen={setOpen}
          setSelectedTab={setActiveTab} />
      )}
    </>
  )

}
export default FixedMenu
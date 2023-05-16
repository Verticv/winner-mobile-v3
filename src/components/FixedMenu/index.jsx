import React, { useState } from 'react'
import '../FixedMenu/_fixedMenu.scss';
import MenuIcon from '../../assets/images/mainPage/menu-icon.png'
import MenuIcon_0 from '../../assets/images/mainPage/m-icon0.png'


import Logo from '../../assets/images/mainPage/light-log.png'
import Close from '../../assets/images/mainPage/close-icon.png'

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
// import MenuIcon_11 from '../../assets/images/mainPage/menu11.png'
import horizontalsScroll from '../../utils/horizontalsScroll';

const FixedMenu = ({
  setSelectedTab,
  selectedTab
}) => {

  const [isOpen, setOpen] = useState(false)

 

  const Items = [
    {
      id: 0,
      icon: MenuIcon_0,
      icon2: MenuIcon_0,
      title: '홈'
    },
    {
      id: 1,
      icon: MenuIcon_1,
      icon2: MenuIcon_1,
      title: '라이브카지노'
    },
    {
      id: 2,
      icon: MenuIcon_2,
      icon2: MenuIcon_2,
      title: '스포츠'
    },

    {
      id: 3,
      icon: MenuIcon_3,
      icon2: MenuIcon_3,
      title: '실시간스포츠'
    },
    {
      id: 4,
      icon: MenuIcon_4,
      icon2: MenuIcon_4,
      title: '슬롯게임'
    },
    {
      id: 5,
      icon: MenuIcon_5,
      icon2: MenuIcon_5,
      title: '호텔카지노'
    },
    {
      id: 6,
      icon: MenuIcon_6,
      icon2: MenuIcon_6,
      title: 'e-스포츠'
    },
    {
      id: 7,
      icon: MenuIcon_7,
      icon2: MenuIcon_7,
      title: '미니게임'
    },
    {
      id: 8,
      icon: MenuIcon_8,
      icon2: MenuIcon_8,
      title: '키론가상게임'
    },

    {
      id: 9,
      icon: MenuIcon_9,
      icon2: MenuIcon_9,
      title: '피싱게임'
    },
    {
      id: 10,
      icon: MenuIcon_10,
      icon2: MenuIcon_10,
      title: '티비벳'
    }
  ]
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
                  horizontalsScroll(Items, 't-sub', 'scroll-wrapper', index)
                  setSelectedTab(item.id)
                }}>
                <img src={item.icon} alt="right" className="ml-10px object-none" />
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
              더보기 {isOpen}
            </p>
          </button>
        </div>
       
      </div>
      {isOpen === true && (
        <div className='menu-modal'>
          <div className='menu-modal-header'>
            <img src={Logo} alt="right" className="ml-10px object-none" />
            <img src={Close} alt="right" className="close" onClick={() => setOpen(false)} />
          </div>
          <div className='menu-modal-body'>
            <div className='menu-list'>

              {
                Items.map((item, index) => (
                  <button
                    className={`menu-item ${selectedTab===item.id?'active':''}`}
                    onClick={() => {
                      setOpen(false)
                      horizontalsScroll(Items, 't-sub', 'scroll-wrapper', index)
                      setSelectedTab(item.id)
                    }
                    }>
                    <div className='menu-item1'>
                      <div className='menu-item-logo'>
                        <img src={item.icon2} alt="right" className="ml-10px object-none" />
                      </div>
                      <div className='menu-item-title'>
                        {item.title}
                      </div>
                    </div>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </>
  )

}
export default FixedMenu
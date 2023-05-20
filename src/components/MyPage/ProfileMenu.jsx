import React, { useState } from 'react'
import MenuIcon_1 from '../../assets/images/menu/menu1.png'
import MenuIcon_2 from '../../assets/images/menu/menu2.png'
import MenuIcon_3 from '../../assets/images/menu/menu3.png'
import MenuIcon_4 from '../../assets/images/menu/menu4.png'
import MenuIcon_5 from '../../assets/images/menu/menu5.png'
import MenuIcon_6 from '../../assets/images/menu/menu6.png'
import MenuIcon_7 from '../../assets/images/menu/menu7.png'
import MenuIcon_8 from '../../assets/images/menu/menu8.png'
import MenuIcon_9 from '../../assets/images/menu/menu9.png'
import MenuIcon_10 from '../../assets/images/menu/menu10.png'
import MenuIcon_11 from '../../assets/images/menu/menu11.png'
import MenuIcon_12 from '../../assets/images/menu/menu12.png'
import MenuIcon_13 from '../../assets/images/menu/menu13.png'
import MenuIcon_14 from '../../assets/images/menu/menu14.png'


import MenuIcon_Light_1 from '../../assets/images/menu/menu-light1.png'
import MenuIcon_Light_2 from '../../assets/images/menu/menu-light2.png'
import MenuIcon_Light_3 from '../../assets/images/menu/menu-light3.png'
import MenuIcon_Light_4 from '../../assets/images/menu/menu-light4.png'
import MenuIcon_Light_5 from '../../assets/images/menu/menu-light5.png'
import MenuIcon_Light_6 from '../../assets/images/menu/menu-light6.png'
import MenuIcon_Light_7 from '../../assets/images/menu/menu-light7.png'
import MenuIcon_Light_8 from '../../assets/images/menu/menu-light8.png'
import MenuIcon_Light_9 from '../../assets/images/menu/menu-light9.png'
import MenuIcon_Light_10 from '../../assets/images/menu/menu-light10.png'
import MenuIcon_Light_11 from '../../assets/images/menu/menu-light11.png'
import MenuIcon_Light_12 from '../../assets/images/menu/menu-light12.png'
import MenuIcon_Light_13 from '../../assets/images/menu/menu-light13.png'
import MenuIcon_Light_14 from '../../assets/images/menu/menu-light14.png'
import DarkArrow from '../../assets/images/menu/dark-arrow.png'
import LightArrow from '../../assets/images/menu/light-arrow.png'
const ProfileMenu = () => {
 
  const Items = [
    {
      id: 1,
      icon: MenuIcon_1,
      icon2: MenuIcon_Light_1,
      title: '베팅내역',
      hasList: true
    },
    {
      id: 2,
      icon: MenuIcon_2,
      icon2: MenuIcon_Light_2,
      title: '머니충전',
      hasList: true
    },

    {
      id: 3,
      icon: MenuIcon_3,
      icon2: MenuIcon_Light_3,
      title: '머니환전',
      hasList: true
    },
    {
      id: 4,
      icon: MenuIcon_4,
      icon2: MenuIcon_Light_4,
      title: '포인트전환',
      hasList: true
    },
    {
      id: 5,
      icon: MenuIcon_5,
      icon2: MenuIcon_Light_5,
      title: '총판페이지',
      hasList: false
    },
    {
      id: 6,
      icon: MenuIcon_6,
      icon2: MenuIcon_Light_6,
      title: 'e-윈루즈정산',
      hasList: false
    },
    {
      id: 7,
      icon: MenuIcon_7,
      icon2: MenuIcon_Light_7,
      title: '라이브영상',
      hasList: false
    },
    {
      id: 8,
      icon: MenuIcon_8,
      icon2: MenuIcon_Light_8,
      title: '경기결과',
      hasList: true
    },

    {
      id: 9,
      icon: MenuIcon_9,
      icon2: MenuIcon_Light_9,
      title: '게시판',
      hasList: false
    },
    {
      id: 10,
      icon: MenuIcon_10,
      icon2: MenuIcon_Light_10,
      title: '쿠폰관리',
      hasList: true
    },
    {
      id: 11,
      icon: MenuIcon_11,
      icon2: MenuIcon_Light_11,
      title: '쿠폰관리',
      hasList: false
    },
    {
      id: 12,
      icon: MenuIcon_12,
      icon2: MenuIcon_Light_12,
      title: '고객센터',
      hasList: false
    },
    {
      id: 13,
      icon: MenuIcon_13,
      icon2: MenuIcon_Light_13,
      title: '계좌문의',
      hasList: false
    },
    {
      id: 14,
      icon: MenuIcon_14,
      icon2: MenuIcon_Light_14,
      title: '회원정보수정',
      hasList: false
    },
    
  ]
  const [selectedTab, setSelectedTab] = useState(false)
  return (
    
    <div className='menu-list'>

      {
        Items.map((item, index) => (
          <button
            className={`menu-item ${selectedTab === item.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedTab(item.id)
            }
            }>
            <div className='menu-item1'>
              {item.hasList && (<div className='menu-item-arrow'>
                {selectedTab === item.id && (<img src={LightArrow} alt="right" className="ml-10px object-none" />)}
                {selectedTab !== item.id && (<img src={DarkArrow} alt="right" className="ml-10px object-none" />)}
              </div>)}
              <div className='menu-item-logo'>
                {selectedTab === item.id && (<img src={item.icon2} alt="right" className="ml-10px object-none" />)}
                {selectedTab !== item.id && (<img src={item.icon} alt="right" className="ml-10px object-none" />)}
              </div>
              <div className='menu-item-title'>
                {item.title}
              </div>
            </div>
          </button>
        ))
      }
    </div>
  )
}
export default ProfileMenu;
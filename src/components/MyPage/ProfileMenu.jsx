import React, { useState } from 'react'
import MenuIcon_1 from '../../assets/images/menu2/menu1.png'
import MenuIcon_2 from '../../assets/images/menu2/menu2.png'
import MenuIcon_3 from '../../assets/images/menu2/menu3.png'
import MenuIcon_4 from '../../assets/images/menu2/menu4.png'
import MenuIcon_5 from '../../assets/images/menu2/menu5.png'
import MenuIcon_6 from '../../assets/images/menu2/menu6.png'
import MenuIcon_7 from '../../assets/images/menu2/menu7.png'
import MenuIcon_8 from '../../assets/images/menu2/menu8.png'
import MenuIcon_9 from '../../assets/images/menu2/menu9.png'
import MenuIcon_10 from '../../assets/images/menu2/menu10.png'
import MenuIcon_11 from '../../assets/images/menu2/menu11.png'
import MenuIcon_12 from '../../assets/images/menu2/menu12.png'
import MenuIcon_13 from '../../assets/images/menu2/menu13.png'
import MenuIcon_14 from '../../assets/images/menu2/menu14.png'


import MenuIcon_Light_1 from '../../assets/images/menu2/menu-light1.png'
import MenuIcon_Light_2 from '../../assets/images/menu2/menu-light2.png'
import MenuIcon_Light_3 from '../../assets/images/menu2/menu-light3.png'
import MenuIcon_Light_4 from '../../assets/images/menu2/menu-light4.png'
import MenuIcon_Light_5 from '../../assets/images/menu2/menu-light5.png'
import MenuIcon_Light_6 from '../../assets/images/menu2/menu-light6.png'
import MenuIcon_Light_7 from '../../assets/images/menu2/menu-light7.png'
import MenuIcon_Light_8 from '../../assets/images/menu2/menu-light8.png'
import MenuIcon_Light_9 from '../../assets/images/menu2/menu-light9.png'
import MenuIcon_Light_10 from '../../assets/images/menu2/menu-light10.png'
import MenuIcon_Light_11 from '../../assets/images/menu2/menu-light11.png'
import MenuIcon_Light_12 from '../../assets/images/menu2/menu-light12.png'
import MenuIcon_Light_13 from '../../assets/images/menu2/menu-light13.png'
import MenuIcon_Light_14 from '../../assets/images/menu2/menu-light14.png'
import DarkArrow from '../../assets/images/menu/dark-arrow.png'
import LightArrow from '../../assets/images/menu/light-arrow.png'

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

import MenuIcon_1_1 from '../../assets/images/mainPage/menu1.png'
import MenuIcon_1_2 from '../../assets/images/mainPage/menu2.png'
import MenuIcon_1_3 from '../../assets/images/mainPage/menu3.png'
import MenuIcon_1_4 from '../../assets/images/mainPage/menu4.png'
import MenuIcon_1_5 from '../../assets/images/mainPage/menu5.png'
import MenuIcon_1_6 from '../../assets/images/mainPage/menu6.png'
import MenuIcon_1_7 from '../../assets/images/mainPage/menu7.png'
import MenuIcon_1_8 from '../../assets/images/mainPage/menu8.png'
import MenuIcon_1_9 from '../../assets/images/mainPage/menu9.png'
import MenuIcon_1_10 from '../../assets/images/mainPage/menu10.png'
import MenuIcon_1_11 from '../../assets/images/mainPage/menu11.png'

import Icon1 from '../../assets/mainPage/icons/icon1.png';
import Icon2 from '../../assets/mainPage/icons/icon2.png';

import Icon_1 from '../../assets/mainPage/icons/icon-1-v3.png';
import Icon_2 from '../../assets/mainPage/icons/charging-history-v3.png';

import icon1 from '../../assets/mainPage/points/1_v3.png';
import icon2 from '../../assets/mainPage/points/2_v3.png';
import icon3 from '../../assets/mainPage/points/3_v3.png';

import MenuList from '../Shared/MenuList'
import { useNavigate } from 'react-router-dom'

const ProfileMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(false)
  const [subItems, setSubItems] = useState([])
  const [selectedSubTab, setSelectedSubTab] = useState([])
  const navigate = useNavigate();
  
  const Items = [
    {
      id: 1,
      icon: MenuIcon_1,
      icon2: MenuIcon_Light_1,
      title: '베팅내역',
      hasList: true,
      hasBadge: false,
      // path: '/mypage/bet-history',
      subItems: [
        {
          id: 1,
          icon2: MenuIcon_1_1,
          OnIcon: MenuOn1,
          title: '라이브카지노',
          path: '/mypage/bet-history/all/live-casino'
        },
        {
          id: 2,
          icon2: MenuIcon_1_2,
          title: '스포츠',
          OnIcon: MenuOn2,
          path: '/mypage/bet-history/all/sports'
        },

        {
          id: 3,
          icon2: MenuIcon_1_3,
          title: '실시간스포츠',
          OnIcon: MenuOn3,
          path: '/mypage/bet-history/all/sports'
        },
        {
          id: 4,
          icon2: MenuIcon_1_4,
          title: '슬롯게임',
          OnIcon: MenuOn4,
          path: '/mypage/bet-history/all/slot-game'
        },
        {
          id: 5,
          icon2: MenuIcon_1_5,
          title: '호텔카지노',
          OnIcon: MenuOn5,
          path: '/mypage/bet-history/all/hotel-casino'
        },
        {
          id: 11,
          icon2: MenuIcon_1_11,
          title: '홀덤게임',
          OnIcon: MenuOn11,
          path: '/mypage/bet-history/all/hotel-casino'
        },
        {
          id: 6,
          icon2: MenuIcon_1_6,
          title: 'e-스포츠',
          OnIcon: MenuOn6,
          path: '/mypage/bet-history/all/hotel-casino'
        },
        {
          id: 7,
          icon2: MenuIcon_1_7,
          title: '미니게임',
          OnIcon: MenuOn7,
          path: '/mypage/bet-history/all/e-sports'
        },
        {
          id: 8,
          icon2: MenuIcon_1_8,
          title: '키론가상게임',
          OnIcon: MenuOn8,
          path: '/mypage/bet-history/all/minigame'
        },

        {
          id: 9,
          icon2: MenuIcon_1_9,
          title: '피싱게임',
          OnIcon: MenuOn9,
          path: '/mypage/bet-history/all/ar-game'
        },
        {
          id: 10,
          icon2: MenuIcon_1_10,
          title: '티비벳',
          OnIcon: MenuOn10,
          path: '/mypage/bet-history/all/fishing-game'
        }
      ]
    },
    {
      id: 2,
      icon: MenuIcon_2,
      icon2: MenuIcon_Light_2,
      title: '머니충전',
      hasBadge: false,
      hasList: true,
      // path: '/mypage/money'
      subItems: [
        {
          id: 1,
          icon2: Icon1,
          OnIcon: MenuOn1,
          title: '충전신청',
          path: '/mypage/money/charge'
        },
        {
          id: 2,
          icon2: Icon2,
          title: '충전내역',
          OnIcon: MenuOn2,
          path: '/mypage/money/charge/history'
        },]
    },

    {
      id: 3,
      icon: MenuIcon_3,
      icon2: MenuIcon_Light_3,
      title: '머니환전',
      hasBadge: false,
      hasList: true,
      subItems: [
        {
          id: 1,
          icon2: Icon_1,
          OnIcon: MenuOn1,
          title: '환전신청',
          path: '/mypage/money/exchange/currency'
        },
        {
          id: 2,
          icon2: Icon_2,
          title: '환전내역',
          OnIcon: MenuOn2,
          path: '/mypage/money/exchange/currency/history'
        },]
    },
    {
      id: 4,
      icon: MenuIcon_4,
      icon2: MenuIcon_Light_4,
      title: '포인트전환',
      hasBadge: false,
      hasList: true,
      subItems: [
        {
          id: 1,
          icon2: icon1,
          OnIcon: MenuOn1,
          title: '포인트전환신청',
          path: '/mypage/points/all'
        },
        {
          id: 2,
          icon2: icon2,
          title: '포인트적립내역',
          OnIcon: MenuOn2,
          path: '/mypage/points/all/points-accumulate-history'
        },
        {
          id: 2,
          icon2: icon3,
          title: '포인트전환내역',
          OnIcon: MenuOn2,
          path: '/mypage/points/all/points-transaction-history'
        },
      ]
    },
    {
      id: 5,
      icon: MenuIcon_5,
      icon2: MenuIcon_Light_5,
      title: '총판페이지',
      hasBadge: false,
      hasList: false,
      path: '/distributor-page'
    },
    {
      id: 6,
      icon: MenuIcon_6,
      icon2: MenuIcon_Light_6,
      title: 'e-윈루즈정산',
      hasBadge: false,
      hasList: false
    },
    {
      id: 7,
      icon: MenuIcon_7,
      icon2: MenuIcon_Light_7,
      title: '라이브영상',
      hasBadge: false,
      hasList: false
    },
    {
      id: 8,
      icon: MenuIcon_8,
      icon2: MenuIcon_Light_8,
      title: '경기결과',
      hasBadge: false,
      hasList: true,
      subItems: [
        {
          id: 1,
          icon2: Icon_1,
          OnIcon: MenuOn1,
          title: '스포츠',
          path: '/mypage/gameresults/all'
        },
        {
          id: 2,
          icon2: Icon_2,
          title: '미니게임',
          OnIcon: MenuOn2,
          path: '/mypage/gameresults/minigame/powerball'
        },]
    },

    {
      id: 9,
      icon: MenuIcon_9,
      icon2: MenuIcon_Light_9,
      title: '게시판',
      hasBadge: false,
      hasList: false
    },
    {
      id: 10,
      icon: MenuIcon_10,
      icon2: MenuIcon_Light_10,
      title: '쿠폰관리',
      hasList: true,
      hasBadge: true,
      badge_num: 1,
    },
    {
      id: 11,
      icon: MenuIcon_11,
      icon2: MenuIcon_Light_11,
      title: '쿠폰관리',
      hasList: false,
      hasBadge: true,
      badge_num: 5,
    },
    {
      id: 12,
      icon: MenuIcon_12,
      icon2: MenuIcon_Light_12,
      title: '고객센터',
      hasBadge: false,
      hasList: false
    },
    {
      id: 13,
      icon: MenuIcon_13,
      icon2: MenuIcon_Light_13,
      title: '계좌문의',
      hasBadge: false,
      hasList: false
    },
    {
      id: 14,
      icon: MenuIcon_14,
      icon2: MenuIcon_Light_14,
      title: '회원정보수정',
      hasBadge: false,
      hasList: false
    },
    
  ]
  const setActiveTab = ({ index, item }) => {
    setSelectedSubTab(item.id)
  }
  return (
    <>
    <div className='profile-menu menu-list'>
      {
        Items.map((item, index) => (
          <button
            key={index}
            className={`menu-item ${selectedTab === item.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedTab(item.id)
              if (item.subItems) {
                setOpen(true)
                setSubItems(item.subItems)
                navigate(item?.path)
              }
            }
            }>
            <div className='menu-item1'>
              {item.hasList && (<div className='menu-item-arrow'>
                {selectedTab === item.id && (<img src={LightArrow} alt="right"  className="ml-10px object-none" />)}
                {selectedTab !== item.id && (<img src={DarkArrow} alt="right"  className="ml-10px object-none" />)}
              </div>)}
              <div className='menu-item-logo'>
                {selectedTab === item.id && (<img src={item.icon2} alt="right"  className="ml-10px object-none" />)}
                {selectedTab !== item.id && (<img src={item.icon} alt="right" className="ml-10px object-none" />)}
              </div>
              <div className='menu-item-title'>
                <p>{item.title}</p>
                {item.hasBadge && (<span className="badge badge--red badge--l">
                  <span>{item.badge_num}</span>
                </span>)}
              </div>
            </div>
          </button>
        ))
      }
    </div>
    { isOpen === true && (
      <MenuList
        key={0}
        items={subItems}
        selectedTab={selectedSubTab}
        setOpen={setOpen}
        setSelectedTab={setActiveTab} />
    )}
    </>
  )
}
export default ProfileMenu;
//!-- this component was made because ProfileMenu.jsx has wrong structure.
//!-- It's popup and show submenu on the other page.
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMyPageSelectedMainMenuId,
  setMyPageSelectedSubMenuId,
  // resetMyPageSelectedMainMenuId,
} from '../../counterSlice';

import MenuIcon_0 from '../../assets/images/menu2/menu0.png';
import MenuIcon_1 from '../../assets/images/menu2/menu1.png';
import MenuIcon_2 from '../../assets/images/menu2/menu2.png';
import MenuIcon_3 from '../../assets/images/menu2/menu3.png';
import MenuIcon_4 from '../../assets/images/menu2/menu4.png';
import MenuIcon_5 from '../../assets/images/menu2/menu5.png';
import MenuIcon_6 from '../../assets/images/menu2/menu6.png';
import MenuIcon_7 from '../../assets/images/menu2/menu7.png';
import MenuIcon_8 from '../../assets/images/menu2/menu8.png';
import MenuIcon_9 from '../../assets/images/menu2/menu9.png';
import MenuIcon_10 from '../../assets/images/menu2/menu10.png';
import MenuIcon_11 from '../../assets/images/menu2/menu11.png';
import MenuIcon_12 from '../../assets/images/menu2/menu12.png';
import MenuIcon_13 from '../../assets/images/menu2/menu13.png';
import MenuIcon_14 from '../../assets/images/menu2/menu14.png';

import MenuIcon_Light_0 from '../../assets/images/menu2/menu-light0.png';
import MenuIcon_Light_1 from '../../assets/images/menu2/menu-light1.png';
import MenuIcon_Light_2 from '../../assets/images/menu2/menu-light2.png';
import MenuIcon_Light_3 from '../../assets/images/menu2/menu-light3.png';
import MenuIcon_Light_4 from '../../assets/images/menu2/menu-light4.png';
import MenuIcon_Light_5 from '../../assets/images/menu2/menu-light5.png';
import MenuIcon_Light_6 from '../../assets/images/menu2/menu-light6.png';
import MenuIcon_Light_7 from '../../assets/images/menu2/menu-light7.png';
import MenuIcon_Light_8 from '../../assets/images/menu2/menu-light8.png';
import MenuIcon_Light_9 from '../../assets/images/menu2/menu-light9.png';
import MenuIcon_Light_10 from '../../assets/images/menu2/menu-light10.png';
import MenuIcon_Light_11 from '../../assets/images/menu2/menu-light11.png';
import MenuIcon_Light_12 from '../../assets/images/menu2/menu-light12.png';
import MenuIcon_Light_13 from '../../assets/images/menu2/menu-light13.png';
import MenuIcon_Light_14 from '../../assets/images/menu2/menu-light14.png';
import DarkArrow from '../../assets/images/menu/dark-arrow.png';
import LightArrow from '../../assets/images/menu/light-arrow.png';

import MenuOn1 from '../../assets/images/mainPage/menu-on1.png';
import MenuOn2 from '../../assets/images/mainPage/menu-on2.png';
import MenuOn3 from '../../assets/images/mainPage/menu-on3.png';
import MenuOn4 from '../../assets/images/mainPage/menu-on4.png';
import MenuOn5 from '../../assets/images/mainPage/menu-on5.png';
import MenuOn6 from '../../assets/images/mainPage/menu-on6.png';
import MenuOn7 from '../../assets/images/mainPage/menu-on7.png';
import MenuOn8 from '../../assets/images/mainPage/menu-on8.png';
import MenuOn9 from '../../assets/images/mainPage/menu-on9.png';
import MenuOn10 from '../../assets/images/mainPage/menu-on10.png';
import MenuOn11 from '../../assets/images/mainPage/menu-on11.png';

import MenuIcon_1_1 from '../../assets/images/mainPage/menu1.png';
import MenuIcon_1_2 from '../../assets/images/mainPage/menu2.png';
import MenuIcon_1_3 from '../../assets/images/mainPage/menu3.png';
import MenuIcon_1_4 from '../../assets/images/mainPage/menu4.png';
import MenuIcon_1_5 from '../../assets/images/mainPage/menu5.png';
import MenuIcon_1_6 from '../../assets/images/mainPage/menu6.png';
import MenuIcon_1_7 from '../../assets/images/mainPage/menu7.png';
import MenuIcon_1_8 from '../../assets/images/mainPage/menu8.png';
import MenuIcon_1_9 from '../../assets/images/mainPage/menu9.png';
import MenuIcon_1_10 from '../../assets/images/mainPage/menu10.png';
import MenuIcon_1_11 from '../../assets/images/mainPage/menu11.png';

// import Icon1 from '../../assets/mainPage/icons/Icon1.png';
// import Icon2 from '../../assets/mainPage/icons/icon2.png';

// import Icon_1 from '../../assets/mainPage/icons/icon-1-v3.png';
// import Icon_2 from '../../assets/mainPage/icons/charging-history-v3.png';

// import icon1 from '../../assets/mainPage/points/1_v3.png';
// import icon2 from '../../assets/mainPage/points/2_v3.png';
// import icon3 from '../../assets/mainPage/points/3_v3.png';

// import icon_1 from '../../assets/gameresults/sport-1-v3.png';
// import icon_2 from '../../assets/gameresults/sport-2-v3.png';

// import Icon__1 from '../../assets/coupon/coupon1-v3.png';
// import Icon__2 from '../../assets/coupon/coupon2-v3.png';
// import Icon__3 from '../../assets/coupon/coupon3-v3.png';

import MoneyChargeIcon_1 from '../../assets/images/menu2/moneyChargeIcon_1.png';
import MoneyChargeIcon_2 from '../../assets/images/menu2/moneyChargeIcon_2.png';

import MoneyExchangeIcon_1 from '../../assets/images/menu2/moneyExchangeIcon_1.png';
import MoneyExchangeIcon_2 from '../../assets/images/menu2/moneyExchangeIcon_2.png';

import PointChangeIcon_1 from '../../assets/images/menu2/pointChangeIcon_1.png';
import PointChangeIcon_2 from '../../assets/images/menu2/pointChangeIcon_2.png';
import PointChangeIcon_3 from '../../assets/images/menu2/pointChangeIcon_3.png';

import CouponManageIcon_1 from '../../assets/images/menu2/couponManageIcon_1.png';
import CouponManageIcon_2 from '../../assets/images/menu2/couponManageIcon_2.png';
import CouponManageIcon_3 from '../../assets/images/menu2/couponManageIcon_3.png';

import CsCenterIcon_1 from '../../assets/images/menu2/csCenterIcon_1.png';
import CsCenterIcon_2 from '../../assets/images/menu2/csCenterIcon_2.png';
import CsCenterIcon_3 from '../../assets/images/menu2/csCenterIcon_3.png';
import CsCenterIcon_4 from '../../assets/images/menu2/csCenterIcon_4.png';
// import CsCenterIcon_5 from '../../assets/images/menu2/csCenterIcon_4.png';

import MenuOnMoneyChargeIcon_1 from '../../assets/images/menu2/moneyChargeIcon_1-active.png';
import MenuOnMoneyChargeIcon_2 from '../../assets/images/menu2/moneyChargeIcon_2-active.png';

import MenuOnMoneyExchangeIcon_1 from '../../assets/images/menu2/moneyExchangeIcon_1-active.png';
import MenuOnMoneyExchangeIcon_2 from '../../assets/images/menu2/moneyExchangeIcon_2-active.png';

import MenuOnPointChangeIcon_1 from '../../assets/images/menu2/pointChangeIcon_1-active.png';
import MenuOnPointChangeIcon_2 from '../../assets/images/menu2/pointChangeIcon_2-active.png';
import MenuOnPointChangeIcon_3 from '../../assets/images/menu2/pointChangeIcon_3-active.png';

import MenuOnCouponManageIcon_1 from '../../assets/images/menu2/couponManageIcon_1-active.png';
import MenuOnCouponManageIcon_2 from '../../assets/images/menu2/couponManageIcon_2-active.png';
import MenuOnCouponManageIcon_3 from '../../assets/images/menu2/couponManageIcon_3-active.png';

import MenuOnCsCenterIcon_1 from '../../assets/images/menu2/csCenterIcon_1-active.png';
import MenuOnCsCenterIcon_2 from '../../assets/images/menu2/csCenterIcon_2-active.png';
import MenuOnCsCenterIcon_3 from '../../assets/images/menu2/csCenterIcon_3-active.png';
import MenuOnCsCenterIcon_4 from '../../assets/images/menu2/csCenterIcon_4-active.png';
// import MenuOnCsCenterIcon_5 from '../../assets/images/menu2/csCenterIcon_5-active.png';

import Logo from '../../assets/images/footer/footer-log.png';
import ReauthenticatePopup from '../../components/ReauthenticatePopup';

// const ProfileMenu = ({ isOpen, setOpen }) => {
const ProfileMenu2 = ({ showSubMenu, setShowSubMenu }) => {
  const Items = [
    {
      id: 0,
      icon: MenuIcon_0,
      icon2: MenuIcon_Light_0,
      title: '전체보기',
      hasBadge: false,
      hasList: false,
      path: '/mypage/bet-history/all',
      blank: false,
    },
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
          path: '/mypage/bet-history/all/live-casino',
        },
        {
          id: 2,
          icon2: MenuIcon_1_2,
          title: '스포츠',
          OnIcon: MenuOn2,
          path: '/mypage/bet-history/all/sports',
        },

        {
          id: 3,
          icon2: MenuIcon_1_3,
          title: '라이브스포츠',
          OnIcon: MenuOn3,
          path: '/mypage/bet-history/all/sports',
        },
        {
          id: 4,
          icon2: MenuIcon_1_4,
          title: '슬롯게임',
          OnIcon: MenuOn4,
          path: '/mypage/bet-history/all/slot-game',
        },
        {
          id: 5,
          icon2: MenuIcon_1_5,
          title: '호텔카지노',
          OnIcon: MenuOn5,
          path: '/mypage/bet-history/all/hotel-casino',
        },
        {
          id: 11,
          icon2: MenuIcon_1_6,
          title: '홀덤게임',
          OnIcon: MenuOn6,
          path: '/mypage/bet-history/all/hotel-casino',
        },
        {
          id: 6,
          icon2: MenuIcon_1_7,
          title: 'e-스포츠',
          OnIcon: MenuOn7,
          path: '/mypage/bet-history/all/hotel-casino',
        },
        {
          id: 7,
          icon2: MenuIcon_1_8,
          title: '미니게임',
          OnIcon: MenuOn8,
          path: '/mypage/bet-history/all/e-sports',
        },
        {
          id: 8,
          icon2: MenuIcon_1_9,
          title: '키론가상게임',
          OnIcon: MenuOn9,
          path: '/mypage/bet-history/all/minigame',
        },

        {
          id: 9,
          icon2: MenuIcon_1_10,
          title: '피싱게임',
          OnIcon: MenuOn10,
          path: '/mypage/bet-history/all/ar-game',
        },
        {
          id: 10,
          icon2: MenuIcon_1_11,
          title: '티비벳',
          OnIcon: MenuOn11,
          path: '/mypage/bet-history/all/fishing-game',
        },
      ],
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
          icon2: MoneyChargeIcon_1,
          OnIcon: MenuOnMoneyChargeIcon_1,
          title: '충전신청',
          path: '/mypage/money/charge',
        },
        {
          id: 2,
          icon2: MoneyChargeIcon_2,
          OnIcon: MenuOnMoneyChargeIcon_2,
          title: '충전내역',
          path: '/mypage/money/charge/history',
        },
      ],
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
          icon2: MoneyExchangeIcon_1,
          OnIcon: MenuOnMoneyExchangeIcon_1,
          title: '환전신청',
          path: '/mypage/money/exchange/currency',
        },
        {
          id: 2,
          icon2: MoneyExchangeIcon_2,
          title: '환전내역',
          OnIcon: MenuOnMoneyExchangeIcon_2,
          path: '/mypage/money/exchange/currency/history',
        },
      ],
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
          icon2: PointChangeIcon_1,
          OnIcon: MenuOnPointChangeIcon_1,
          title: '포인트전환신청',
          path: '/mypage/points/all',
        },
        {
          id: 2,
          icon2: PointChangeIcon_2,
          title: '포인트적립내역',
          OnIcon: MenuOnPointChangeIcon_2,
          path: '/mypage/points/all/points-accumulate-history',
        },
        {
          id: 3,
          icon2: PointChangeIcon_3,
          title: '포인트전환내역',
          OnIcon: MenuOnPointChangeIcon_3,
          path: '/mypage/points/all/points-transaction-history',
        },
      ],
    },
    {
      id: 5,
      icon: MenuIcon_5,
      icon2: MenuIcon_Light_5,
      title: '총판페이지',
      hasBadge: false,
      hasList: false,
      path: '/mypage/distributor-page',
      blank: true,
    },
    {
      id: 6,
      icon: MenuIcon_6,
      icon2: MenuIcon_Light_6,
      title: '윈루즈정산',
      hasBadge: false,
      hasList: false,
      path: '/mypage/win-lose-settlement',
      blank: false,
    },
    {
      id: 7,
      icon: MenuIcon_7,
      icon2: MenuIcon_Light_7,
      title: '라이브영상',
      hasBadge: false,
      hasList: false,
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
          icon2: MenuIcon_1_2,
          OnIcon: MenuOn2,
          title: '스포츠',
          path: '/mypage/gameresults/all',
        },
        {
          id: 2,
          icon2: MenuIcon_1_8,
          title: '미니게임',
          OnIcon: MenuOn8,
          path: '/mypage/gameresults/minigame/powerball',
        },
      ],
    },

    {
      id: 9,
      icon: MenuIcon_9,
      icon2: MenuIcon_Light_9,
      title: '게시판',
      hasBadge: false,
      hasList: false,
      path: '/mypage/freeboard',
    },
    {
      id: 10,
      icon: MenuIcon_10,
      icon2: MenuIcon_Light_10,
      title: '쿠폰관리',
      hasList: true,
      hasBadge: true,
      badge_num: 1,
      subItems: [
        {
          id: 1,
          icon2: CouponManageIcon_1,
          OnIcon: MenuOnCouponManageIcon_1,
          title: '쿠폰사용',
          path: '/mypage/coupon/all',
        },
        {
          id: 2,
          icon2: CouponManageIcon_2,
          title: '쿠폰선물',
          OnIcon: MenuOnCouponManageIcon_2,
          path: '/mypage/coupon/all/coupon-gift',
        },
        {
          id: 3,
          icon2: CouponManageIcon_3,
          title: '쿠폰내역',
          OnIcon: MenuOnCouponManageIcon_3,
          path: '/mypage/coupon/all/coupon-history',
        },
      ],
    },
    {
      id: 11,
      icon: MenuIcon_11,
      icon2: MenuIcon_Light_11,
      title: '쪽지관리',
      hasList: false,
      hasBadge: true,
      badge_num: 5,
      path: '/mypage/inbox',
    },
    {
      id: 12,
      icon: MenuIcon_12,
      icon2: MenuIcon_Light_12,
      title: '고객센터',
      hasBadge: false,
      hasList: true,
      subItems: [
        {
          id: 1,
          icon2: CsCenterIcon_1,
          OnIcon: MenuOnCsCenterIcon_1,
          title: '문의하기',
          path: '/cscenter/all/contact/all',
        },
        {
          id: 2,
          icon2: CsCenterIcon_2,
          title: '공지사항',
          OnIcon: MenuOnCsCenterIcon_2,
          path: '/cscenter/all/announcement',
        },
        {
          id: 3,
          icon2: CsCenterIcon_3,
          title: '자주묻는질문',
          OnIcon: MenuOnCsCenterIcon_3,
          path: '/cscenter/all/faq',
        },
        {
          id: 4,
          icon2: CsCenterIcon_4,
          title: '베팅규정',
          OnIcon: MenuOnCsCenterIcon_4,
          path: '/cscenter/all/policy/sportsgame/soccer',
        },
      ],
    },
    {
      id: 13,
      icon: MenuIcon_13,
      icon2: MenuIcon_Light_13,
      title: '계좌문의',
      hasBadge: false,
      hasList: false,
    },
    {
      id: 14,
      icon: MenuIcon_14,
      icon2: MenuIcon_Light_14,
      title: '회원정보수정',
      hasBadge: false,
      hasList: false,
      hasPopup: true,
    },
  ];

  const [isPopupOpen, setReauthPopupOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(false); //!-- initial value: -1, onClick: item.id => 100ms later: -1
  const [subItems, setSubItems] = useState([]);
  const navigate = useNavigate();
  // const [showSubMenu, setShowSubMenu] = useState(false);
  // const [selectedSubTab, setSelectedSubTab] = useState([]);
  // const setActiveTab = ({ index, item }) => {
  //   setSelectedSubTab(item.id);
  // };

  const selectedMainMenuId = useSelector(
    (state) => state.counter.myPageSelectedMainMenuId
  );
  const selectedSubMenuId = useSelector(
    (state) => state.counter.myPageSelectedSubMenuId
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if(selectedMainMenuId !== -1) {
      const selectedMainMenu =  Items.find((item) => item.id === selectedMainMenuId);
      setSubItems(selectedMainMenu.subItems);
      if(selectedMainMenu.subItems) setShowSubMenu(true);
    } else setShowSubMenu(false);
    console.log(selectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <div className="profile-menu menu-list">
        {/* if clicking main menu, shows sub menu on the same space */}
        {!showSubMenu
          ? Items.map(
              (
                item,
                index //!- main menu
              ) => (
                <button
                  key={index}
                  className={`menu-item ${
                    // selectedTab === item.id ? 'active' : ''
                    selectedMainMenuId === item.id ? 'active' : ''
                  }`}
                  onClick={() => {
                    // setSelectedTab(item.id);
                    dispatch(setMyPageSelectedMainMenuId(item.id));
                    // console.log(selectedMainMenuId);
                    // setTimeout(() => {
                      // setSelectedTab(-1);
                      if (item.subItems) {
                        setSubItems(item.subItems);
                        setShowSubMenu(true);
                        // navigate(item?.path);
                      } else {
                        item.blank
                          ? window.open(item?.path)
                          : navigate(item?.path);
                      }
                      if (item.title === '회원정보수정') {
                        setReauthPopupOpen(true);
                      }
                    // }, 100);
                  }}
                >
                  <div className="menu-item1">
                    {item.hasList && (
                      <div className="menu-item-arrow">
                        {/* {selectedTab === item.id && ( */}
                        {selectedMainMenuId === item.id && (
                          <img
                            src={LightArrow}
                            alt="right"
                            className="ml-10px object-none"
                          />
                        )}
                        {/* {selectedTab !== item.id && ( */}
                        {selectedMainMenuId !== item.id && (
                          <img
                            src={DarkArrow}
                            alt="right"
                            className="ml-10px object-none"
                          />
                        )}
                      </div>
                    )}
                    <div className="menu-item-logo">
                      {/* {selectedTab === item.id && ( */}
                      {selectedMainMenuId === item.id && (
                        <img
                          src={item.icon2}
                          alt="right"
                          className="ml-10px object-none"
                        />
                      )}
                      {/* {selectedTab !== item.id && ( */}
                      {selectedMainMenuId !== item.id && (
                        <img
                          src={item.icon}
                          alt="right"
                          className="ml-10px object-none"
                        />
                      )}
                    </div>
                    <div className="menu-item-title">
                      <p>{item.title}</p>
                      {item.hasBadge && (
                        <span className="badge badge--red badge--l">
                          <span>{item.badge_num}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              )
            )
          : subItems.map(
              (
                item,
                index //!- sub menu
              ) => (
                <button
                  key={index}
                  className={`menu-item ${
                    // selectedTab === item.id ? 'active' : ''
                    selectedSubMenuId === item.id ? 'active' : ''
                  }`}
                  onClick={() => {
                    // setOpen(false)
                    // setSelectedTab({ index: item.id, item: item });
                    dispatch(setMyPageSelectedSubMenuId(item.id));
                    navigate(item?.path);
                  }}
                >
                  <div className="menu-item1">
                    <div className="menu-item-logo">
                      {/* <img src={item.icon2} alt="right" className="ml-10px object-none" /> */}
                      {/* {selectedTab !== item.id && ( */}
                      {selectedSubMenuId !== item.id && (
                        <img
                          src={item.icon2}
                          alt="right"
                          className="ml-10px object-none"
                        />
                      )}
                      {/* {selectedTab === item.id && ( */}
                      {selectedSubMenuId === item.id && (
                        <img
                          src={item.OnIcon}
                          alt="right"
                          className="ml-10px object-none"
                        />
                      )}
                    </div>
                    <div className="menu-item-title">{item.title}</div>
                  </div>
                </button>
              )
            )}
            <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30rem',
          }}
        >
          <img
            src={Logo}
            alt=""
            style={{ height: '5rem', filter: 'brightness(40%)' }}
          />
        </div>
        {
            isPopupOpen && (
              <ReauthenticatePopup 
                setPopupOpen={setReauthPopupOpen}
                setSelectedTab={setSelectedTab}
              />
            )
          }
      </div>
    </>
  );
};

export default ProfileMenu2;

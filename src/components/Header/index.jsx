import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/header/logo.png";
import ProfileIcon from "../../assets/images/header/profile.png";
import SupportIcon from "../../assets/images/header/support.png";
import ExchangeIcon from "../../assets/images/header/exchange.png";
import MyPage from '../../pages/MyPage';

function Header({setOpen, isOpen}) {
 // const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate();
  console.log('isOpen',isOpen)
  return (
    <>
    <div className="header">
      <div className="header__image">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="header__navbar">
        <div className="navbar__list">
          <div className="navbar__item"
            onClick={() => setOpen(true)}>
            <img
              className="icon1"
              src={ProfileIcon}
              alt="profile"
            />
            
            <span className="badge badge--red">
              <span>5</span>
            </span>
          </div>
          <div className="navbar__item">
            <img
              className="icon2"
              src={SupportIcon}
              alt="Support"
            />
          </div>
          <div className="navbar__item">
            <img
              className="icon3"
              src={ExchangeIcon}
              alt="Exchange"
            />
          </div>
        </div>
        </div>
    </div>
      {
        isOpen && (
          < div className='menu-modal'>
            <MyPage
              setOpen={setOpen} />
          </div>
        )
      }
    </>
  );
}

export default Header;

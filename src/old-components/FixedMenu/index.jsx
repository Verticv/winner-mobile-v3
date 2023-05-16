import React, { useEffect, useState } from 'react'
import '..//FixedMenu/_fixedMenu.scss';
import MenuIcon from '../../assets/images/mainPage/menu-icon.png'
import MenuIcon1 from '../../assets/images/mainPage/m-icon1.png'
import MenuIcon2 from '../../assets/images/mainPage/m-icon2.png'
import MenuIcon3 from '../../assets/images/mainPage/m-icon3.png'
import MenuIcon4 from '../../assets/images/mainPage/m-icon4.png'
import Logo from '../../assets/images/mainPage/light-log.png'
import Close from '../../assets/images/mainPage/close-icon.png'
import MenuIcon_2 from '../../assets/images/mainPage/m-icon-2.png'

const FixedMenu = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className='fixed-nav'>
        <div className='nav-list'>
          <div className='nav-item1'>
            <img src={MenuIcon1} alt="right" className="ml-10px object-none" />
            <p>
              홈 
            </p>
          </div>
          <div className='nav-item1'>
            <img src={MenuIcon2} alt="right" className="ml-10px object-none" />
            <p>
              라이브카지노
            </p>
          </div>
          <div className='nav-item1'>
            <img src={MenuIcon3} alt="right" className="ml-10px object-none" />
            <p>
              스포츠
            </p>
          </div>
          <div className='nav-item1'>
            <img src={MenuIcon4} alt="right" className="ml-10px object-none" />
            <p>
              실시간스포츠
            </p>
          </div>
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
              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>
              
              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>
              <div className='menu-item' onClick={() => setOpen(false)}>
                <div className='menu-item1'>
                  <div className='menu-item-logo'>
                    <img src={MenuIcon_2} alt="right" className="ml-10px object-none" />
                  </div>
                  <div className='menu-item-title'>
                    라이브카지노
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )

}
export default FixedMenu
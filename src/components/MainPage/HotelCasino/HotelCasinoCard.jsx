
import CardMenu from '../../../assets/images/mainPage/hotel-casino/card-menu.png'
import React, { useState } from 'react'

const HotelCasinoCard = ({ id, title, sub_title = null, img, icon, onClick, logoClass, disable }) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div 
      className={`hotel-casino-card ${logoClass} ${hoverEffect ? 'hover' : ''}`}
      >
      <img src={img} alt="HotelCasinoCard" className='casino-img' />
      <div className='logo-section'>
        <img src={icon} alt="Logo1" />
        <p>{title}
          {sub_title && (<span className='sub-title'>{sub_title}</span>)}
        </p>

      </div>
      {!disable && (
        <img
          onClick={() => setHoverEffect(!hoverEffect)}
          src={CardMenu} alt="Menu" className='card-menu' />
      )}
      {!disable && (<div className='card-hover'>
       
        <div className='buttons'>
          <button>
            <p>게임시작</p>
          </button>
          <button>
            <p>이용가이드</p>
          </button>
        </div>

      </div>)}
    </div>
  );
};
export default HotelCasinoCard
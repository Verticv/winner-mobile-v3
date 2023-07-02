import BestIcon from '../../../assets/images/mainPage/live-casino/best-icon.png'
import React from 'react'
//import { useNavigate } from 'react-router-dom';

const LiveCasinoCard = ({ id, title, img, is_best = false, is_coming_soon = false, setClickEffect, clickEffect, path, onClick}) => {
  

  //const navigate = useNavigate();
  return (
    <div 
      className={`live-casino-card ${clickEffect === id ? 'hover' : ''}`}
      onClick= {
        (e) => {
          setClickEffect(id)
        }
      }
     >
      {is_coming_soon && <p className='title coming-soon'>{title}</p>}
      {!is_coming_soon && <p className='title'>{title}</p>}
      <img src={img} alt="LiveCasinoImage1" className='casino-img' />
      <button className={`${is_coming_soon ? 'coming-soon-btn' : ''}`} >
        <p >
        {is_coming_soon && ('준비중')}
          {!is_coming_soon && ('게임시작')}
          </p>
      </button>
      {is_best && (<img src={BestIcon} alt="BestIcon" className='best-icon' />)}
    </div>
  );
};
export default LiveCasinoCard
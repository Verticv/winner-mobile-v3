import React, { useState } from 'react';
import './_style.scss';
import LeftArrow from '../../../assets/images/nonLiveBet/leftArrow.png'
import RightArrow from '../../../assets/images/nonLiveBet/rightArrow.png'

import Icon1 from '../../../assets/images/nonLiveBet/slider/icon1.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/icon2.png'
import Icon3 from '../../../assets/images/nonLiveBet/slider/icon3.png'
import Icon4 from '../../../assets/images/nonLiveBet/slider/icon4.png'
import Icon5 from '../../../assets/images/nonLiveBet/slider/icon5.png'
import Icon6 from '../../../assets/images/nonLiveBet/slider/icon6.png'
import Icon7 from '../../../assets/images/nonLiveBet/slider/icon7.png'
import Icon8 from '../../../assets/images/nonLiveBet/slider/icon8.png'
import Icon9 from '../../../assets/images/nonLiveBet/slider/icon9.png'
import Icon10 from '../../../assets/images/nonLiveBet/slider/icon10.png'

import Icon1On from '../../../assets/images/nonLiveBet/slider/icon1-on.png'
import Icon2On from '../../../assets/images/nonLiveBet/slider/icon2-on.png'
import Icon3On from '../../../assets/images/nonLiveBet/slider/icon3-on.png'
import Icon4On from '../../../assets/images/nonLiveBet/slider/icon4-on.png'
import Icon5On from '../../../assets/images/nonLiveBet/slider/icon5-on.png'
import Icon6On from '../../../assets/images/nonLiveBet/slider/icon6-on.png'
import Icon7On from '../../../assets/images/nonLiveBet/slider/icon7-on.png'
import Icon8On from '../../../assets/images/nonLiveBet/slider/icon8-on.png'
import Icon9On from '../../../assets/images/nonLiveBet/slider/icon9-on.png'
import Icon10On from '../../../assets/images/nonLiveBet/slider/icon10-on.png'
const HorizontalSlider = () => {
  const [isActive, setActive] = useState(0);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 321;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 321;
  };

  const tabs = [
    {
      id: 1,
      title: '전체',
      icon: Icon1,
      iconOn: Icon1On,
      count: '854'
    },
    {
      id: 2,
      title: '축구',
      icon: Icon2,
      iconOn: Icon2On,
      count: '567'
    },
    {
      id: 3,
      title: '농구',
      icon: Icon3,
      iconOn: Icon3On,
      count: '227'
    },
    {
      id: 4,
      title: '전체',
      icon: Icon4,
      iconOn: Icon4On,
      count: '567'
    },
    {
      id: 5,
      title: '배구',
      icon: Icon5,
      iconOn: Icon5On,
      count: '0'
    },
    {
      id: 6,
      title: '테니스',
      icon: Icon6,
      iconOn: Icon6On,
      count: '0'
    },
    {
      id: 7,
      title: '배드민턴',
      icon: Icon7,
      iconOn: Icon7On,
      count: '0'
    },
    {
      id: 8,
      title: '하키',
      icon: Icon8,
      iconOn: Icon8On,
      count: '0'
    },
    {
      id: 9,
      title: '미식축구',
      icon: Icon9,
      iconOn: Icon9On,
      count: '0'
    },
    {
      id: 10,
      title: '격투기',
      icon: Icon10,
      iconOn: Icon10On,
      count: '0'
    }
  ]

  return (
    <div className='tabs-container d-flex'>
      <button className='slide-button slide-left'
        onClick={slideLeft}>
        <img src={LeftArrow} alt="right" />
      </button>
      <div className='tabs-slider d-flex' id='slider'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${isActive === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActive(tab.id)
            }}>
            <div>
              <img src={isActive !== tab.id ? tab.icon : tab.iconOn} alt="right" />
              <p>{tab.title}</p>
              <span className='badge'>{tab.count}</span>
            </div>
          </button>
        ))}
      </div>
      <button className='slide-button slide-right'
        onClick={slideRight}>
        <img src={RightArrow} alt="right" />
      </button>
    </div>
  )
}
export default HorizontalSlider;
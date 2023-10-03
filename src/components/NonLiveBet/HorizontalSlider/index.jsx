import React, { useState } from 'react';
import './_horizontalSlider.scss';
import LeftArrow from '../../../assets/images/nonLiveBet/leftArrow.png'
import RightArrow from '../../../assets/images/nonLiveBet/rightArrow.png'

import Icon1 from '../../../assets/images/nonLiveBet/slider/Icon1.png'
import Icon2 from '../../../assets/images/nonLiveBet/slider/Icon2.png'
import Icon3 from '../../../assets/images/nonLiveBet/slider/Icon3.png'
import Icon4 from '../../../assets/images/nonLiveBet/slider/Icon4.png'
import Icon1_on from '../../../assets/images/nonLiveBet/slider/Icon1_on.png'
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
      iconOn: Icon1_on,
      count: '854',
      style: {},
      imgWidth: '73rem',
      pStyle: {}
    },
    {
      id: 2,
      title: '축구',
      icon: Icon2,
      iconOn: Icon2,
      count: '567',
      style: { paddingLeft: '2.063rem' },
      pStyle: { marginLeft: '0.438rem',marginRight:'0.188rem'}
    },
    {
      id: 3,
      title: '농구',
      icon: Icon3,
      iconOn: Icon3,
      count: '227',
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 4,
      title: '전체',
      icon: Icon4,
      iconOn: Icon4,
      count: '567',
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    }
  ]

  return (
    <div className='tabs-container flex'>
      <button className='slide-button slide-left'
        onClick={slideLeft}>
        <img src={LeftArrow} alt="right" />
      </button>
      <div className='tabs-slider flex' id='slider'>
        {tabs.map((tab, index) => (
          <button
            className={`tab-btn ${isActive === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActive(tab.id)
            }}>
            <div style={tab.style}>
              <img src={isActive !== tab.id ? tab.icon:tab.iconOn} alt="right" width={tab.imgWidth}/>
              <p style={tab.pStyle}>{tab.title}</p>
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
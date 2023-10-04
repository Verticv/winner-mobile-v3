import React, { useState } from 'react';
import './_style.scss';
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
      imgStyle: { width: '4.563rem' },
      pStyle: {}
    },
    {
      id: 2,
      title: '축구',
      icon: Icon2,
      iconOn: Icon2,
      count: '567',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: '2.063rem' },
      pStyle: { marginLeft: '0.438rem', marginRight: '0.188rem' }
    },
    {
      id: 3,
      title: '농구',
      icon: Icon3,
      iconOn: Icon3,
      count: '227',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 4,
      title: '전체',
      icon: Icon4,
      iconOn: Icon4,
      count: '567',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 5,
      title: '배구',
      icon: Icon1,
      iconOn: Icon1_on,
      count: '0',
      style: {},
      imgStyle: { width: '4.563rem' },
      pStyle: {}
    },
    {
      id: 6,
      title: '테니스',
      icon: Icon2,
      iconOn: Icon2,
      count: '0',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: '2.063rem' },
      pStyle: { marginLeft: '0.438rem', marginRight: '0.188rem' }
    },
    {
      id: 7,
      title: '배드민턴',
      icon: Icon3,
      iconOn: Icon3,
      count: '0',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 8,
      title: '하키',
      icon: Icon4,
      iconOn: Icon4,
      count: '0',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 9,
      title: '미식축구',
      icon: Icon3,
      iconOn: Icon3,
      count: '0',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
    },
    {
      id: 10,
      title: '격투기',
      icon: Icon4,
      iconOn: Icon4,
      count: '0',
      imgStyle: { width: '3.75rem' },
      style: { paddingLeft: "2.25rem" },
      pStyle: { marginLeft: '0.438rem' }
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
            <div style={tab.style}>
              <img src={isActive !== tab.id ? tab.icon : tab.iconOn} alt="right" style={tab.imgStyle} />
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
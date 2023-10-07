import './_style.scss'
import React, { useEffect, useState } from 'react'
import arrow from '../../assets/images/top-arrow.png'

const ScrollToTop = () => {
  const [showUpButton, setShowUpButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 75) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }

    });
  })
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return showUpButton &&
    <div className='scroll-btn'
      onClick={scrollHandler}>
      <img src={arrow} alt="right" style={{ width: '3.5rem' }} />
    </div>
  
}
export default ScrollToTop
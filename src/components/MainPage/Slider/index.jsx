import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './_slider.scss';
import SliderImage from '../../../assets/images/mainPage/slider.png';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)
  const dataSlider = [
    {
      id: 0,
      image: SliderImage
    },
    {
      id: 1,
      image: SliderImage
    },
    {
      id: 2,
      image: SliderImage
    },
    {
      id: 3,
      image: SliderImage
    },
    {
      id: 4,
      image: SliderImage
    }
  ];
  const moveDot = index => {
    setSlideIndex(index)
  }

  const navigate = useNavigate();

  return (
    <div className="slider-container">
      {dataSlider.map((obj, index) => {
        return (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${obj.image})` }}
              onClick={() => navigate('/bet-combination')}
            >
            </div>
        )
      })}

      <div className="slider__dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Slider/_slider.scss';
import slider from '../../../assets/images/mainPage/slider.png';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)
  const dataSlider = [
    {
      id: 0,
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: 1,
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: 2,
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: 3,
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: 4,
      title: "Lorem ipsum",
      subTitle: "Lorem"
    }
  ];
  const moveDot = index => {
    setSlideIndex(index)
  }
  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => {
  //       if (slideIndex === 1) {
  //         setSlideIndex(2)
  //       } else {
  //         setSlideIndex(1)
  //       }
  //     }, 5000);
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   },
  //   [slideIndex]
  // );

  const navigate = useNavigate();

  return (
    <div className="slider-container">
      {dataSlider.map((obj, index) => {
        return (
          <>

            <div
              key={obj.id}
              className="slide"
              style={{ backgroundImage: `url(${slider})` }}
              onClick={() => navigate('/bet-combination')}
            >

            </div>



          </>
        )
      })}

      <div className="container-dots">
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
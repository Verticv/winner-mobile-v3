import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/Holdem-game.png'
import Image2 from '../../../assets/images/mainPage/Holdem-game2.png'
import HoldemGameIcon from '../../../assets/images/mainPage/sectionTitle/HoldemGameIcon.png'

const HoldemGameSection = () => {

  const Items = [
    {
      id: 0,
      title: 'K-홀덤',
      img: Image1,
      btn: '게임시작'
    },
    {
      id: 1,
      title: '이용가이드',
      img: Image2,
      btn: '설명보기',
      path: '/holdem/guide'
    },
  ]
  const [clickEffect, setClickEffect] = useState(null);
  return (
    <div className='filter-content holdem-section'>
      <SectionHeader
        icon={HoldemGameIcon}
        title={'홀덤게임'} />
      <div className='cont'>
        {Items.map((card, index) => (
          <SharedCard
            id={card.id}
            key={index}
            title={card.title}
            img={card.img}
            btn={card.btn}
            path={card.path}
            clickEffect={clickEffect}
            setClickEffect={setClickEffect}
          />
        ))
        }
      </div>
    </div>
  )
}

export default HoldemGameSection
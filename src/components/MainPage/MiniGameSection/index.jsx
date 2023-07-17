

import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/miniGames/mini-game1.png'
import Image2 from '../../../assets/images/mainPage/miniGames/mini-game2.png'
import Image3 from '../../../assets/images/mainPage/miniGames/mini-game3.png'
import Image4 from '../../../assets/images/mainPage/miniGames/mini-game4.png'
import MiniGameIcon from '../../../assets/images/mainPage/sectionTitle/icon7-1.png'

const MiniGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '파워볼',
      img: Image1
    },
    {
      id: 1,
      title: '파워사다리',
      img: Image2
    },
    {
      id: 2,
      title: '스피드키노',
      img: Image3
    },
    {
      id: 3,
      title: '키노사다리',
      img: Image4
    },
  ]

  const [clickEffect, setClickEffect] = useState(null);
  return (
    <div className='filter-content mini-games-section'>
      <SectionHeader
        icon={MiniGameIcon}
        title={'미니게임'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <SharedCard
          id={card.id}
          key={card.id}
          title={card.title}
          img={card.img}
          clickEffect={clickEffect}
          setClickEffect={setClickEffect}/>
          ))
        }</div>
    </div>
  )
}

export default MiniGameSection
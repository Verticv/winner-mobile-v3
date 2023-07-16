import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";

import Image1 from '../../../assets/images/mainPage/sport-game1.png'
import Image2 from '../../../assets/images/mainPage/sport-game2.png'
import SportIcon from '../../../assets/images/mainPage/sectionTitle/icon22.png'
import '../SportsSection/_sportsSection.scss';

const SportsSection = () => {

  const Items = [
    {
      id: 0,
      title: '조합베팅',
      img: Image1
    },
    {
      id: 1,
      title: '스페셜베팅',
      img: Image2
    },
  ]
  const [clickEffect, setClickEffect] = useState(null);
  
  return (
    <div className='filter-content sport-section'>
      <SectionHeader
        icon={SportIcon}
        title={'스포츠'} />
      <div className='cont'>
        {Items.map((card, index) => (
          <SharedCard
          key={index}
          id={card.id}
          title={card.title}
          img={card.img}
          clickEffect={clickEffect}
          setClickEffect={setClickEffect}/>
        ))
        }
      </div>
    </div>
  )
}

export default SportsSection
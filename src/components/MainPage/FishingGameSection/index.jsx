import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/fishing-game.png'
import FishingGameIcon from '../../../assets/images/mainPage/sectionTitle/icon91.png'

const FishingGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '케이플레이피싱',
      img: Image1
    },

  ]

  const [clickEffect, setClickEffect] = useState(null);


  return (
    <div className='filter-content fishing-section'>
      <SectionHeader
        icon={FishingGameIcon}
        title={'피싱게임'} />
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
        }
      </div>
    </div>
  )
}

export default FishingGameSection

import React, { useState } from 'react'
import VirtualGameIcon from '../../../assets/images/mainPage/sectionTitle/icon81.png'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/virtual-game1.png'

const VirtualGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '키론가상게임',
      img: Image1
    },
   
  ]
  const [clickEffect, setClickEffect] = useState(null);

  return (
    <div className='filter-content virtual-games-section'>
      <SectionHeader
        icon={VirtualGameIcon}
        title={'키론가상게임'} />
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

export default VirtualGameSection
import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/live-sport-game1.png'
import LiveSportIcon from '../../../assets/images/mainPage/sectionTitle/icon31.png'

const LiveSportsSection = () => {

  const Items = [
    {
      id: 0,
      title: '실시간스포츠',
      img: Image1
    },

  ]
  const [clickEffect, setClickEffect] = useState(null);

  return (
    <div className='filter-content live-sport-section'>
      <SectionHeader
        icon={LiveSportIcon}
        title={'실시간스포츠'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <SharedCard
          key={card.id}
          id={card.id}
          title={card.title}
          img={card.img}
          clickEffect={clickEffect}
          setClickEffect={setClickEffect}/>
      ))
        }</div>
    </div>
  )
}

export default LiveSportsSection
import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/live-sport-game1.png'
import Image2 from '../../../assets/images/mainPage/live-sport-game2.png'
import Image3 from '../../../assets/images/mainPage/live-sport-game3.png'
import LiveSportIcon from '../../../assets/images/mainPage/sectionTitle/icon31.png'

const LiveSportsSection = () => {

  const Items = [
    {
      id: 0,
      title: '라이브스포츠',
      img: Image1
    },
    {
      id: 1,
      title: '화면구성설명',
      img: Image2,
      path: '/liveSports/guide'
    },
    {
      id: 2,
      title: '베팅방법',
      img: Image3,
      path: '/liveSports/guide'
    },

  ]
  const [clickEffect, setClickEffect] = useState(null);

  return (
    <div className='filter-content live-sport-section'>
      <SectionHeader
        icon={LiveSportIcon}
        title={'라이브스포츠'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <SharedCard
          key={card.id}
          id={card.id}
          title={card.title}
          img={card.img}
          path={card.path}
          clickEffect={clickEffect}
          btn={(card.id === 1 || card.id === 2) ? "설명보기" : "게임시작"}
          setClickEffect={setClickEffect}/>
      ))
        }</div>
    </div>
  )
}

export default LiveSportsSection
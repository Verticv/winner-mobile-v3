
//import TibetIcon from '../../../assets/images/mainPage/tibet-icon.png'
import TibetIcon from '../../../assets/images/mainPage/sectionTitle/icon101.png'
import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/tibet-game1.png'
import Image2 from '../../../assets/images/mainPage/tibet-game2.png'
import Image3 from '../../../assets/images/mainPage/tibet-game3.png'

const TibetSection = () => {

  const Items = [
    {
      id: 0,
      title: '티비벳',
      img: Image1,
      btnText: '게임시작'
    },
    {
      id: 1,
      title: '화면구성설명',
      img: Image2,
      btnText: '설명보기',
      path: '/tvbet/structure'
    },
    {
      id: 2,
      title: '베팅방법',
      img: Image3,
      btnText: '설명보기',
      path: '/tvbet/info'
    },
  ] 

  const [clickEffect, setClickEffect] = useState(null);

  return (
    <div className='filter-content tibet-section'>
      <SectionHeader
        icon={TibetIcon}
        title={'티비벳'} />
      <div className='cont'>
      {Items.map((card, index) => (
        <SharedCard
          id={card.id}
          key={card.id}
          title={card.title}
          img={card.img}
          btn={card.btnText}
          path={card.path}
          clickEffect={clickEffect}
          setClickEffect={setClickEffect}/>
      ))
        }</div>
    </div>
  )
}

export default TibetSection
import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";

import Image1 from '../../../assets/images/mainPage/esports-games/e-sports-game1.png'
import Image2 from '../../../assets/images/mainPage/esports-games/e-sports-game2.png'
import Image3 from '../../../assets/images/mainPage/esports-games/e-sports-game3.png'
import Image4 from '../../../assets/images/mainPage/esports-games/e-sports-game4.png'
import EsportsIcon from '../../../assets/images/mainPage/sectionTitle/icon61.png'

const EsportsSection = () => {

  const Items = [
    {
      id: 0,
      title: 'e-스포츠',
      img: Image1,
      btnText: '게임시작'
    },
    {
      id: 1,
      title: '화면구성설명',
      img: Image2,
      btnText: '설명보기'
    },
    {
      id: 2,
      title: '단폴더베팅방법',
      img: Image3,
      btnText: '설명보기'
    },
    {
      id: 4,
      title: '다폴더베팅방법',
      img: Image4,
      btnText: '설명보기'
    },
  ]
  const [clickEffect, setClickEffect] = useState(null);
 
  return (
    <div className='filter-content e-sport-section'>
      <SectionHeader
        icon={EsportsIcon}
        title={'e-스포츠'} />
      <div className='cont'>
        {Items.map((card, index) => (
          <SharedCard
          id={card.id}
          key={card.id}
          title={card.title}
          img={card.img}
          btn={card.btnText}
          clickEffect={clickEffect}
          setClickEffect={setClickEffect}/>
        ))}
      </div>   
    </div>
  )
}

export default EsportsSection
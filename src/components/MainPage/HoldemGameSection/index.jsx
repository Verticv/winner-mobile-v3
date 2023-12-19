import React, { useState } from 'react'
import SectionHeader from "../../Shared/SectionHeader";
import SharedCard from "../../Shared/SharedCard";
import Image1 from '../../../assets/images/mainPage/Holdem-game.png'
import Image2 from '../../../assets/images/mainPage/Holdem-game2.png'
import Image3 from '../../../assets/images/mainPage/Holdem-game3.png'
import Image4 from '../../../assets/images/mainPage/Holdem-game4.png'
import HoldemGameIcon from '../../../assets/images/mainPage/sectionTitle/HoldemGameIcon.png'

const HoldemGameSection = () => {

  const Items = [
    {
      id: 0,
      title: '히든포커',
      img: Image1,
      btn: '게임시작'
    },
    {
      id: 1,
      title: '게임종류안내',
      img: Image2,
      btn: '설명보기',
      path: '/holdem/type'
    },
    {
      id: 2,
      title: '로비화면구성',
      img: Image3,
      btn: '설명보기',
      path: '/holdem/structure'
    },
    {
      id: 3,
      title: '게임화면구성',
      img: Image4,
      btn: '설명보기',
      path: '/holdem/game'
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
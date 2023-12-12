import React, { useState } from 'react';

import SectionHeader from '../../Shared/SectionHeader';
import SharedCard from '../../Shared/SharedCard';
import Image1 from '../../../assets/images/mainPage/miniGames/mini-game1.png';
import Image2 from '../../../assets/images/mainPage/miniGames/mini-game2.png';
import Image3 from '../../../assets/images/mainPage/miniGames/mini-game3.png';
import Image4 from '../../../assets/images/mainPage/miniGames/mini-game4.png';
import MiniGameIcon from '../../../assets/images/mainPage/sectionTitle/icon7-1.png';

import '../../../components/MinigamesPage/IframeStyle.scss';

const MiniGameSection = () => {
  const Items = [
    {
      id: 0,
      title: '파워볼',
      img: Image1,
      path: '/minigame/powerball',
      routePath: '/powerball/*',
    },
    {
      id: 1,
      title: '파워사다리',
      img: Image2,
      path: '/minigame/powerladder',
      routePath: '/powerladder/*',
    },
    {
      id: 2,
      title: '스피드키노',
      img: Image3,
      path: '/minigame/speedkino',
      routePath: '/speedkino/*',
    },
    {
      id: 3,
      title: '키노사다리',
      img: Image4,
      path: '/minigame/kinoladder',
      routePath: '/kinoladder/*',
    },
  ];

  const [clickEffect, setClickEffect] = useState(null);
  return (
    <>
      <div className="filter-content mini-games-section">
        <SectionHeader icon={MiniGameIcon} title={'미니게임'} />
        <div className="cont">
          <div className="content1" style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1.6rem' }}>
              {Items.map((card, index) => (
                <SharedCard
                  id={card.id}
                  path={card.path}
                  key={card.id}
                  title={card.title}
                  img={card.img}
                  clickEffect={clickEffect}
                  setClickEffect={setClickEffect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniGameSection;

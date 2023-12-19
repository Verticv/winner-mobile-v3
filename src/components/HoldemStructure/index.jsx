import React, { useState } from 'react';

import HorizontalMenu9 from '../HorizontalMenu9';

import Image4 from '../../assets/holdem/holdem_guide2.png';

const HoldemStructure = () => {
  const MenuArray = [
    { text: '게임종류안내', id: 0, path: '/holdem/type' },
    { text: '로비화면구성', id: 1, path: '/holdem/structure' },
    { text: '게임화면구성', id: 2, path: '/holdem/game', lastOne: true },
  ];

  const [, setSelectedTab] = useState(0);

  return (
    <div style={{ borderRadius: '1em' }}>
      <HorizontalMenu9
        itemsArray={MenuArray}
        setSelectedTab={setSelectedTab}
        isFlex
      />

      <div
        style={{
          background: '#dfdbfa',
          height: 'auto',
          padding: '2rem',
          margin: '1.65rem 1.65rem 17rem 1.65rem',
          borderRadius: '1rem',
        }}
      >
        <img
          className="object-none"
          src={Image4}
          alt=""
          style={{ width: '70rem' }}
        />
      </div>
    </div>
  );
};

export default HoldemStructure;

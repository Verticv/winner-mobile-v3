import React, { useState } from 'react';

import HorizontalMenu9 from '../HorizontalMenu9';

import Image1 from '../../assets/kiron/kiron_user_guide01.png';
import Image2 from '../../assets/kiron/kiron_user_guide02.png';
import Image3 from '../../assets/kiron/kiron_user_guide03.png';

const KironGuide = () => {
  const MenuArray = [{ text: '이용가이드', id: 0, path: '/kiron/guide' }];

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
          src={Image1}
          alt=""
          style={{ width: '70rem' }}
        />

        <div
          style={{
            width: '100%',
            backgroundColor: '#aaaaaa',
            margin: '4rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '0.2rem',
          }}
        />

        <img
          className="object-none"
          src={Image2}
          alt=""
          style={{ width: '70rem' }}
        />

        <div
          style={{
            width: '100%',
            backgroundColor: '#aaaaaa',
            margin: '4rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '0.2rem',
          }}
        />
        <img
          className="object-none"
          src={Image3}
          alt=""
          style={{ width: '70rem' }}
        />
      </div>
    </div>
  );
};

export default KironGuide;

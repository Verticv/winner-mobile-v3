import React from 'react';

const SportsTableHeader = ({
  smallCard = false,
  isMinigame = false,
  middleText = '무',
  isFreeboard,
  isCompose,
}) => {
  if (isMinigame === true)
    return (
      <div
        style={{
          background: 'linear-gradient(to right,#9d3bbb, #5423a0 )',
          borderTopLeftRadius: '1.125rem',
          borderTopRightRadius: '1.125rem',
          paddingTop: '1.688rem',
          paddingBottom: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          letterSpacing: '-0.07rem',
          color: '#eeeeee',
          marginBottom: '0.3rem',
        }}
        className="flex w-full pb-8  text-14px tracking-tight text-gray-r454545"
      >
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '11rem' : '',
            flexShrink: 0,
          }}
        >
          회차
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '13.5rem' : '11.5rem',
            flexShrink: 0,
          }}
        >
          승(홈)
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '12.25rem' : '14rem',
            flexShrink: 0,
          }}
        >
          VS
        </div>
        <div
          style={{
            fontSize: '2.625rem',
            marginLeft: smallCard ? '9rem' : '13rem',
            flexShrink: 0,
          }}
        >
          패(원정)
        </div>
      </div>
    );
  else
    return (
      <div
        style={{
          background: 'linear-gradient(to right,#9d3bbb, #5423a0 )',
          borderTopLeftRadius: '1.875rem',
          borderTopRightRadius: '1.875rem',
          paddingTop: smallCard ? '1.69rem' : '1.688rem',
          // paddingBottom: '1.438rem',
          paddingBottom: '1.0rem',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          paddingRight: isCompose
            ? '2.4rem'
            : isFreeboard
            ? '2.2rem'
            : smallCard
            ? '1.8rem'
            // : '2rem',
            : '1.7rem',
          // letterSpacing: '-0.07rem',
          letterSpacing : '-.015em',
          color: 'rgb(204, 194, 182)',
          marginBottom: smallCard ? '' : '0.3rem',
        }}
        className="flex w-full pb-8 text-14px tracking-tight text-gray-r454545 small-radius"
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: isCompose
              ? '2rem'
              : isFreeboard
              ? '2rem'
              : smallCard
              ? ''
              : '',
            fontWeight: 'bold',
          }}
          className="h-full flex items-center justify-end"
        >
          승(홈)
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: isCompose
              ? '13.7rem'
              : isFreeboard
              ? '13.5rem'
              : smallCard
              ? '13.5rem'
              : middleText === 'VS'
              ? '13.75rem'
              : '14.0rem',
            fontWeight: 'bold',
          }}
          className="h-full flex items-center justify-end"
        >
          {middleText}
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: isCompose
              ? '12.5rem'
              : isFreeboard
              ? '12.2rem'
              : smallCard
              ? '13.2rem'
              : '13.2rem',
            fontWeight: 'bold',
          }}
          className="h-full flex items-center justify-end"
        >
          패(원정)
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '2.625rem',
            marginLeft: isCompose
              ? '9rem'
              : isFreeboard
              ? '8.8rem'
              : smallCard
              ? '10rem'
              // : '10rem',
              : '9.5rem',
            marginRight: '0.5rem',
            fontWeight: 'bold',
          }}
          className="h-full flex items-center justify-end"
        >
          결과
        </div>
      </div>
    );
};

export default SportsTableHeader;

import React, { useState, useEffect } from 'react';

import HorizontalMenu9 from '../HorizontalMenu9';

import Image1 from '../../assets/liveSports/ls_guide1.png';
import Image2 from '../../assets/liveSports/ls_guide2.png';
import Image3 from '../../assets/liveSports/ls_guide3.png';
import Image4 from '../../assets/liveSports/ls_guide4.png';
import icon from '../../assets/sports/Icon.png';

const LiveSportsGuide = () => {
  const MenuArray = [
    { text: '화면구성설명', id: 0, path: '/liveSports/guide' },
    { text: '베팅방법', id: 0, path: '', lastOne: true },
  ];

  const [, setSelectedTab] = useState(0);

  //!- to show(scroll to) top when showing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const TitleText = ({ number = '01', titleText = '화면구성', noNumber }) => (
    <div
      className="flex items-center"
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '3.41188rem',
        paddingTop: '2rem',
        paddingBottom: '1.8rem',
      }}
    >
      <img
        src={icon}
        alt=""
        style={{
          marginLeft: '1.6rem',
          marginRight: '1rem',
          width: '1.5rem',
          height: '3rem',
        }}
      />
      <div
        style={{
          background: 'linear-gradient(120deg, #2087f0, #1873cf',
          borderRadius: '3px',
        }}
        className="w-8px h-20px"
      ></div>
      <span
        className="text-22px tracking-tight text-gray-r585858 ml-3px h-22px flex items-center"
        style={{
          // letterSpacing: '-0.07rem',
          letterSpacing: '-0.025em',
          marginTop: '0.1rem',
          marginRight: '0.5rem',
          color: '#444444',
        }}
      >
        {titleText}
      </span>
      <div
        style={{
          backgroundColor: '#682aa7',
          borderRadius: '100%',
          padding: '0.5rem 1rem',
          color: '#ffffff',
          fontWeight: '700',
          border: '0.5rem solid #f1e7cd',
          boxShadow: '0.375rem 0.375rem 0.375rem rgba(0,0,0,.2)',
          visibility: noNumber ? 'hidden' : 'visible',
        }}
        className="w-36px h-36px ml-3px flex items-center justify-center text-white text-22px font-roboto"
      >
        {number}
      </div>
    </div>
  );

  const Item = ({
    number = '1.',
    title = '게임종류선택',
    text = '다양한 게임을 선택할 수 있습니다.',
    marginTop,
    text2 = null,
    text3 = null,
    color1 = null,
    color2 = null,
    color3 = null,
    isflex,
    withoutP,
  }) => (
    <div
      style={{
        lineHeight: '1.4',
        marginTop: marginTop,
      }}
    >
      <div style={{ fontSize: '2.825rem' }}>
        <span
          style={{ color: '#682aa7', marginRight: '0.4rem', fontWeight: '700' }}
        >
          {number}
        </span>
        <span style={{ color: '#444444', fontWeight: '700' }}>{title}</span>
      </div>
      <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
        {text}{' '}
        <span
          style={{
            color: '#666666',
            marginLeft: '0.5rem',
            marginRight: '0.2rem',
          }}
        >
          {color1}
        </span>
        <span style={{ color: '#666666', marginRight: '0.5rem' }}>
          {color2}
        </span>
        <span style={{ margin: isflex || withoutP ? '0' : '' }}>{color3}</span>
      </p>
      {text2 && (
        <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
          {text2}
        </p>
      )}
      {text3 && <p style={{ color: '#666666', margin: 0 }}>{text3}</p>}
    </div>
  );

  const LongItem = ({
    number = '4.',
    title = '메뉴',
    marginTop,
    text = '',
    text2 = '',
    text3 = '',
    text4 = '',
    text5,
    text6,
  }) => (
    <div
      style={{
        lineHeight: '1.4',
        marginTop: marginTop,
        fontSize: '2.625rem',
      }}
    >
      <div style={{ fontSize: '2.825rem', marginTop: marginTop }}>
        <span
          style={{ color: '#682aa7', marginRight: '0.4rem', fontWeight: '700' }}
        >
          {number}
        </span>
        <span style={{ color: '#444444', fontWeight: '700' }}>{title}</span>
      </div>
      <div style={{ marginTop: '-0.2rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
          • {text}
        </p>
      </div>
      {text2 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
            • {text2}
          </p>
        </div>
      )}
      {text6 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: '#666666', fontSize: '2.625rem', margin: '0 0 3rem 0.5rem' }}>
            - {text6}
          </p>
        </div>
      )}
      {text3 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
            • {text3}
          </p>
        </div>
      )}
      {text4 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
            • {text4}
          </p>
        </div>
      )}
      {text5 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
            • {text5}
          </p>
        </div>
      )}
    </div>
  );

  const ShortItem = ({
    marginTop,
    text = '',
  }) => (
    <div
      style={{
        lineHeight: '1.4',
        marginTop: marginTop,
        fontSize: '2.625rem',
      }}
    >
      <div style={{ marginTop: '-0.2rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: '#666666', fontSize: '2.625rem', margin: 0 }}>
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ borderRadius: '1em' }}>
      <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />

      <div
        className="shadow-box-myPage"
        style={{
          margin: '1.65rem 1.65rem 17rem 1.65rem',
          padding: '0.1875rem',
          background: 'linear-gradient(to top, #ecebeb, #dbb0e8 50%, #cb78e6)',
          borderRadius: '1rem',
        }}
      >
        <div
          style={{
            background: '#dfdbfa',
            height: 'auto',
            padding: '2rem',
            borderRadius: '1rem',
          }}
        >
          <div
            className="flex space-x-20px items-start"
            style={{ padding: '0rem 0 0.5rem' }}
          >
            <img
              className="object-none"
              src={Image1}
              alt=""
              style={{ width: '70rem' }}
            />
            <div
              style={{
                backgroundColor: '#ffffff',
                height: '',
                marginTop: '1.5rem',
                borderRadius: '0.5rem',
                border: '0.1rem solid #cccccc',
              }}
              className="w-full h-full rounded-xl p-20px"
            >
              <TitleText number="01" titleText="화면구성" />
              <div
                style={{
                  background: '#cccccc',
                  height: '0.1875rem',
                  width: '94.5%',
                  margin: 'auto',
                }}
              />
              <div
                className="pt-20px space-y-23px"
                // style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}
                style={{ padding: '1.8rem', letterSpacing: '-0.025em' }}
              >
                <Item
                  number="1."
                  title="경기종목"
                  text="즐겨찾기 및 다양한 경기종목 선택 가능"
                  marginTop="1.5rem"
                />
                <LongItem
                  number="2."
                  title="경기리스트"
                  text="다양한 실시간 경기정보 제공"
                  text2="배당, 영상, 통계 등 다양한 정보 제공"
                  marginTop="1.5rem"
                />
                <LongItem
                  number="3."
                  title="경기영상 및 통계 제공"
                  text="실시간으로 경기영상 표시"
                  text2="매치, 통계 등 다양한 경기정보 표시"
                  marginTop="1.5rem"
                />
                <Item
                  number="4."
                  title="상세배당"
                  text="다양한 상세 배당 제공 및 선택 가능"
                  marginTop="1.5rem"
                />
              </div>
            </div>
          </div>
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
              backgroundColor: '#ffffff',
              height: '',
              marginTop: '1.5rem',
              borderRadius: '0.5rem',
              border: '0.1rem solid #cccccc',
            }}
            className="w-full h-full rounded-xl p-20px"
          >
            <TitleText number="02" titleText="화면구성" />
            <div
              style={{
                background: '#cccccc',
                height: '0.1875rem',
                width: '94.5%',
                margin: 'auto',
              }}
            />
            <div
              className="pt-20px space-y-23px"
              // style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}
              style={{ padding: '1.8rem', letterSpacing: '-0.025em' }}
            >
              <LongItem
                number="1."
                title="버튼"
                text="리그선택:선택한 리그별 정렬 가능"
                text2="정렬기능:시간순/리그순 경기 정렬 가능"
                text3="진행중과 예정경기 정렬 가능"
                text4="배당률 새로고침 가능"
                marginTop="1.5rem"
              />
              <LongItem
                number="2."
                title="상태표시"
                text="실시간 경기영상 제공상태 표시(ON/OFF)"
                text2="통계 및 경기정보 제공상태 표시(ON/OFF)"
                marginTop="1.5rem"
              />
              <ShortItem
                text="※ 각 아이콘을 누르면 ⑤ 화면에서 확인 가능"
                marginTop="1.5rem"
              />
              <Item
                number="3."
                title="상세 배당 개수"
                text="배당항목 개수가 표시되며 해당 버튼을"
                text2="누르면 상세 배당 확인 및 선택 가능"
                marginTop="1.5rem"
              />
              <Item
                number="4."
                title="배당률 업데이트"
                text="배당률 변경(업/다운) 시 화살표 아이콘 표시"
                marginTop="1.5rem"
              />
            </div>
          </div>

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
          <div
            style={{
              backgroundColor: '#ffffff',
              height: '',
              marginTop: '1.5rem',
              borderRadius: '0.5rem',
              border: '0.1rem solid #cccccc',
            }}
            className="w-full h-full rounded-xl p-20px"
          >
            <TitleText number="03" titleText="화면구성" />
            <div
              style={{
                background: '#cccccc',
                height: '0.1875rem',
                width: '94.5%',
                margin: 'auto',
              }}
            />
            <div
              className="pt-20px space-y-23px"
              // style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}
              style={{ padding: '1.8rem', letterSpacing: '-0.025em' }}
            >
              <Item
                number="1."
                title="경기 즐겨찾기"
                text="즐겨찾기 및 다양한 경기종목 선택 가능"
                marginTop="1.5rem"
              />
              <Item
                number="2."
                title="배당 즐겨찾기"
                text="클릭 시 해당 배당 즐겨찾기 추가 및 확인 가능"
                marginTop="1.5rem"
              />
              <Item
                number="3."
                title="배당 숨김 및 보기"
                text="클릭시 해당 배당항목 숨김 및 보기 가능"
                marginTop="1.5rem"
              />
              <Item
                number="4."
                title="베팅내역 버튼"
                text="나의 베팅내역 화면 이동 가능"
                marginTop="1.5rem"
              />
            </div>
          </div>

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
            src={Image4}
            alt=""
            style={{ width: '70rem' }}
          />
          <div
            style={{
              backgroundColor: '#ffffff',
              height: '',
              marginTop: '1.5rem',
              borderRadius: '0.5rem',
              border: '0.1rem solid #cccccc',
            }}
            className="w-full h-full rounded-xl p-20px"
          >
            <TitleText number="04" titleText="화면구성" />
            <div
              style={{
                background: '#cccccc',
                height: '0.1875rem',
                width: '94.5%',
                margin: 'auto',
              }}
            />
            <div
              className="pt-20px space-y-23px"
              // style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}
              style={{ padding: '1.8rem', letterSpacing: '-0.025em' }}
            >
              <LongItem
                number="1."
                title="베팅슬립"
                text="선택한 베팅정보 확인 및 삭제 가능"
                text2="싱글과 멀티베팅 선택 가능"
                text6="선택한 베팅정보 확인 및 삭제 가능"
                text3="베팅금액 입력 가능"
                text4="[베팅하기] 버튼을 누르면 베팅완료"
                marginTop="1.5rem"
              />
              <LongItem
                number="2."
                title="베팅내역"
                text="나의 베팅내역 확인 가능"
                text2="수락 및 대기중 등 베팅상태 확인 가능"
                marginTop="1.5rem"
              />
              <Item
                number="3."
                title="전체보기"
                text="베팅내역 및 베팅결과 등 확인 가능"
                marginTop="1.5rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSportsGuide;

import React from 'react';
import Image3 from '../../assets/sports/3.png';
import Image4 from '../../assets/sports/4.png';
import Image5 from '../../assets/sports/5.png';
import Image6 from '../../assets/sports/6.png';
import Image7 from '../../assets/sports/7.png';

const EsportsSingle = () => {
  const Item = ({
    number = '1.',
    title = '보유머니',
    text = '본인의 보유머니가 표시됩니다.',
    text2 = null,
    text3 = null,
    color1 = null,
    color2 = null,
    color3 = null,
    withoutP,
  }) => (
    <div style={{ lineHeight: '1.4', letterSpacing: '-0.04rem' }}>
      <div style={{ fontSize: '2.825rem' }}>
        <span
          style={{ color: '#682aa7', marginRight: '0.4rem', fontWeight: '700' }}
        >
          {number}
        </span>
        <span style={{ color: '#444444', fontWeight: '700' }}>{title}</span>
      </div>
      <span style={{ color: '#828282', fontSize: '2.625rem' }}>
        {text}{' '}
        <span
          style={{
            color: '#828282',
            marginLeft: '0.5rem',
            marginRight: '0.2rem',
          }}
        >
          {color1}
        </span>
        <span style={{ color: '#828282', marginRight: '0.5rem' }}>
          {color2}
        </span>
        <p style={{ margin: withoutP ? '0' : '' }}>{color3}</p>
      </span>
      {text2 && (
        <span
          style={{
            color: '#828282',
            fontSize: '2.625rem',
            marginTop: '-0.3rem',
          }}
        >
          {text2}
        </span>
      )}
      {text3 && <span style={{ color: '#828282' }}>{text3}</span>}
    </div>
  );

  return (
    <div style={{ borderRadius: '1em', marginTop: '-0.3rem' }}>
      <div>
        <img src={Image3} alt="" style={{ width: '70rem' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '',
            padding: '2.15rem 1.8rem',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            border: '0.1rem solid #cccccc',
          }}
        >
          <div style={{ lineHeight: '1.4', letterSpacing: '-0.04rem' }}>
            <div style={{ fontSize: '2.825rem' }}>
              <span
                style={{
                  color: '#682aa7',
                  marginRight: '0.4rem',
                  fontWeight: '700',
                }}
              >
                1.
              </span>
              <span style={{ color: '#444444', fontWeight: '700'}}>종목 및 경기선택</span>
            </div>
            <p style={{ color: '#828282', fontSize: '2.625rem', margin: 0 }}>
              가. ① 게임종류를 선택합니다.
            </p>
            <p
              style={{
                color: '#828282',
                fontSize: '2.625rem',
                marginTop: '-0.3rem',
                margin: 0,
              }}
            >
              나. ② 경기를 선택합니다.
            </p>
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

      <div>
        <img src={Image4} alt="" style={{ width: '70rem' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '',
            padding: '2.15rem 1.8rem',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            border: '0.1rem solid #cccccc',
          }}
        >
          <Item
            number="2."
            title="배당항목 선택"
            text="원하는 ① 배당을 선택합니다."
            withoutP
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

      <div style={{}}>
        <img src={Image5} alt="" style={{ width: '70rem' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '',
            padding: '2.15rem 1.8rem',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            border: '0.1rem solid #cccccc',
          }}
        >
          <Item
            number="3."
            title="베팅금액 입력"
            text="가. ① 베팅금액을 입력합니다."
            text2="나. ② [확인] 버튼을 누르면 베팅이 완료됩니다."
            withoutP
          />
          <div
            style={{
              width: '15.8rem',
              flexShrink: 0,
              paddingTop: '0.2rem',
              paddingBottom: '0.2rem',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '3.2rem',
              backgroundColor: '#f45400',
              fontSize: '2.825rem',
              color: '#ffffff',
              marginLeft: '0.1rem',
              letterSpacing: '-0.03rem',
            }}
          >
            알아두세요!
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <p style={{ color: '#828282', fontSize: '2.625rem', margin: 0 }}>
              • 1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅
            </p>
          </div>
          <div style={{ marginTop: '0.1rem' }}>
            <p style={{ color: '#828282', fontSize: '2.625rem', margin: 0 }}>
              • 1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅
            </p>
          </div>
          <div style={{ marginTop: '0.2rem' }}>
            <p style={{ color: '#828282', fontSize: '2.625rem', margin: 0 }}>
              • 1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅
            </p>
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

      <div>
        <img src={Image6} alt="" style={{ width: '70rem' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '',
            padding: '2.15rem 1.8rem',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            border: '0.1rem solid #cccccc',
          }}
        >
          <Item
            number="4."
            title="베팅완료"
            text="베팅이 완료되면 ① 베팅내역 화면이 나타나며"
            text2="상세 베팅내역을 확인할 수 있습니다."
            withoutP
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

      <div>
        <img src={Image7} alt="" style={{ width: '70rem' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            height: '',
            padding: '2.15rem 1.8rem',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            border: '0.1rem solid #cccccc',
          }}
        >
          <Item
            number="5."
            title="베팅내역확인"
            text="가. ① [내 베팅] 메뉴를 선택합니다."
            text2="나. ② 베팅내역을 확인할 수 있습니다."
            withoutP
          />
        </div>
      </div>
    </div>
  );
};

export default EsportsSingle;

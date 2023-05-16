import React from 'react'
import Image1 from '../../assets/tvBet/tv1_1.png'
import Image2 from '../../assets/tvBet/tv1_2.png'
import Image3 from '../../assets/tvBet/tv1_3.png'
import icon from '../../assets/sports/Icon.png'

const TvBetStructure = () => {

  const TitleText = ({ number = "01", titleText = "화면구성", noNumber }) => (
    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '3.41188rem', paddingTop: '2rem', paddingBottom: '1.8rem' }}>
      <img src={icon} alt="" style={{ marginLeft: '1.6rem', marginRight: '0.2rem', width: '2.5rem' }} />
      <div style={{ background: "linear-gradient(120deg, #2087f0, #1873cf", borderRadius: "3px" }} className="w-8px h-20px"></div>
      <span className="text-22px font-spoqaBold tracking-tight text-gray-r585858 ml-3px h-22px flex items-center" style={{ letterSpacing: '-0.07rem', marginTop: '0.1rem', marginRight: '1rem', color: '#ccc2b6' }}>{titleText}</span>
      <div style={{ backgroundColor: "#494745", borderRadius: "100%", fontFamily: 'RobotoBold', padding: '0.4rem 0.5rem', color: '#ccc2b6', visibility: noNumber ? "hidden" : "visible" }} className="w-36px h-36px ml-3px flex items-center justify-center text-white text-22px font-roboto">
        {number}
      </div>
    </div>
  )

  const Item = ({ number = "1.", title = "게임종류선택", text = "다양한 게임을 선택할 수 있습니다.", marginTop, text2 = null, text3 = null, text4 = null, color1 = null, color2 = null, color3 = null, isflex, withoutP }) => (
    <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop }}>
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text} <span className="ml-2px text-blue-r0056a6" style={{ color: '#4c98ff', marginLeft: '0.5rem', marginRight: '0.2rem' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem' }} className="mr-2px">{color2}</span><span style={{ margin: isflex || withoutP ? '0' : '' }}>{color3}</span></p>
      {text2 && (
        <p style={{ color: "#8c8c8c", margin: 0, fontSize: '2.625rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</p>
      )}
      {text3 && (
        <p style={{ color: "#8c8c8c", margin: 0, fontSize: '2.625rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</p>
      )}
      {text4 && (
        <p style={{ color: "#8c8c8c", margin: 0, fontSize: '2.625rem' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text4}</p>
      )}
    </div>
  )

  const LongItem = ({ number = "4.", title = "메뉴", marginTop, text = "결과 : 경기결과 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3 = "내베팅 : 상세한 베팅내역 확인 가능  ", text4 = "베팅규정 : 베팅규정 확인 가능", text5 }) => (
    <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem' }}>
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <div className="flex" style={{ marginTop: '-0.2rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text}</p>
      </div>
      <div className="flex" style={{ marginTop: '-0rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text2}</p>
      </div>
      <div className="flex" style={{ marginTop: '-0rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text3}</p>
      </div>
      <div className="flex" style={{ marginTop: '-0rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text4}</p>
      </div>
      {text5 && (
        <div className="flex" style={{ marginTop: '-0rem' }}>
          <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text5}</p>
        </div>
      )}
    </div>
  )
  const LongItem2 = ({ number = "8.", title = "메뉴", marginTop, text = "내베팅 : 상세한 베팅내역 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3, text1_1, marginBottom }) => (
    <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem', marginBottom: marginBottom }}>
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <div className="flex" style={{ marginTop: '-0.2rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text}</p>
      </div>
      {text1_1 && (
        <div className="flex" style={{ marginTop: '-0.2rem' }}>
          <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text1_1}</p>
        </div>
      )}
      <div className="flex" style={{ marginTop: '-0rem' }}>
        <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text2}</p>
      </div>
      {text3 && (
        <div className="flex" style={{ marginTop: '-0rem' }}>
          <p style={{ color: "#8c8c8c", margin: 0 }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">• {text3}</p>
        </div>
      )}
    </div>
  )

  return (
    <div style={{ borderRadius: "1em", }} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

      <div className="flex space-x-20px items-start" style={{ marginTop: '-0.3rem' }}>
        <img className="object-none" src={Image1} alt="" style={{ width: '70rem' }} />
        <div style={{ backgroundColor: "#2b2b2a", height: "", marginTop: '1.5rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
          <TitleText titleText='화면구성' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <LongItem number='1.' text='로비 : 전체 게임리스트 확인 및 게임선택 가능' text2='플레이방법 : 게임별 이용방법 및 규정 확인 가능' text3='게임 : 딜러영상 및 배당판을 제공하며 실제 베팅 가능' text4='베팅기록 : 상세 베팅내역 확인 가능' text5='결과 : 상세 경기결과 확인 가능' marginTop='-0.5rem' />
            <Item number='2.' title="보유머니" text="본인의 보유머니가 표시됩니다." marginTop='1.5rem' />
            <Item number="3." title="게임종류선택" text="다양한 게임을 선택할 수 있습니다." marginTop='1.5rem' />
            <Item number="4." title="라이브영상" text="각 게임별 라이브영상을 제공합니다." marginTop='1.5rem' />
            <Item number="5." title="설정" text="영상 내에 표시되는 배당정보설정, 음향설정," text2="전체/기본화면설정, 영상화질설정 등 제공합니다." marginTop='1.5rem' />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-dddddd" />
      <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
      <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
        <img className="object-none" src={Image2} alt="" style={{ width: '70rem' }} />
        <div style={{
          backgroundColor: "#2b2b2a", height: "",
          marginTop: '1.5rem', borderRadius: '0.5rem'
        }} className="w-full h-full rounded-xl p-20px">
          <TitleText number="02" titleText='화면구성' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <Item title="배당버튼" text="카드 아래에 표시되는 각 배당 버튼을" text2="누르면 베팅이 가능합니다." isflex />
            <Item number="2." title="다양한 베팅종류 제공" text="다양한 베팅 종류가 표시되며 배당 선택 시" text2='베팅이 가능합니다.' marginTop='1.5rem' isflex />
            <Item number="3." title="이벤트정보" text="현재 라이브 중인 게임과 예정된 게임이벤트를" text2="확인할 수 있습니다. 원하는 이벤트를 선택하면" text3='배당판이 활성화되며 배당을 선택하면' text4='베팅이 가능합니다.' marginTop='1.5rem' isflex />
            <Item number="4." title="베팅기록" text="진행중인 베팅 및 베팅 결과를 확인할 수 있습니다." marginTop='1.5rem' />
            <Item number="5." title="최근결과" text="최근 게임 결과정보를 확인할 수 있습니다." marginTop='1.5rem' />
            <Item number="6." title="최근우승" text="최근 게임 우승자의 승리금액을 확인할 수 있습니다." marginTop='1.5rem' />
            <Item number="7." title="베팅슬립 버튼" text="버튼을 누르면 베팅슬립이 나타납니다." marginTop='1.5rem' />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-dddddd" />
      <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
      <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
        <img className="object-none" src={Image3} alt="" style={{ width: '70rem' }} />
        <div style={{
          backgroundColor: "#2b2b2a", height: "",
          marginTop: '1.5rem', borderRadius: '0.5rem'
        }} className="w-full h-full rounded-xl p-20px">
          <TitleText number="03" titleText='화면구성' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <LongItem2 number="1." title='베팅슬립' text='선택한 베팅정보 확인 및 삭제 가능' text2='베팅금액 입력 가능' text3='[베팅하기] 버튼을 누르면 베팅완료' marginBottom='0.7rem' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TvBetStructure

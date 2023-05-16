import React from 'react'
import Image1 from '../../assets/hotelCasino/bota1_g01m.png'
import Image2 from '../../assets/hotelCasino/bota1_g02m.png'
import Image3 from '../../assets/hotelCasino/bota1_g03m.png'
import Image4 from '../../assets/hotelCasino/bota1_g04m.png'
import Image5 from '../../assets/hotelCasino/bota1_g05m.png'
import icon from '../../assets/sports/Icon.png'

const HotelCasinoStructure = () => {

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

  const Item = ({ number = "1.", title = "게임종류선택", text = "다양한 게임을 선택할 수 있습니다.", marginTop, text2 = null, text3 = null, color1 = null, color2 = null, color3 = null, isflex, withoutP }) => (
    <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop }}>
      <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>{text} <span style={{ color: '#4c98ff', marginLeft: '0.5rem', marginRight: '0.2rem' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem' }}>{color2}</span><span style={{ margin: isflex || withoutP ? '0' : '' }}>{color3}</span></p>
      {text2 && (
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>{text2}</p>
      )}
      {text3 && (
        <p style={{ color: "#8c8c8c", margin: 0 }}>{text3}</p>
      )}
    </div>
  )

  const LongItem = ({ number = "4.", title = "메뉴", marginTop, text = "결과 : 경기결과 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3 = "내베팅 : 상세한 베팅내역 확인 가능  ", text4 = "베팅규정 : 베팅규정 확인 가능", text5 }) => (
    <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem' }}>
      <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <div style={{ marginTop: '-0.2rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>• {text}</p>
      </div>
      <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>• {text2}</p>
      </div>
      <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>• {text3}</p>
      </div>
      <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>• {text4}</p>
      </div>
      {text5 && (
        <div style={{ marginTop: '-0rem', margin: 0, fontSize: '2.625rem' }}>
          <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>• {text5}</p>
        </div>
      )}
    </div>
  )
  const LongItem2 = ({ number = "8.", title = "메뉴", marginTop, text = "내베팅 : 상세한 베팅내역 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text1_1, marginBottom }) => (
    <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, marginBottom: marginBottom }}>
      <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
        <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
        <span style={{ color: '#ccc2b6' }}>{title}</span>
      </div>
      <p style={{ color: "#8c8c8c", fontSize: '2.625rem', marginTop: '-0.2rem', margin: 0 }}>• {text}</p>
      {text1_1 && (
        <p style={{ color: "#8c8c8c", fontSize: '2.625rem', marginTop: '-0.2rem', margin: 0 }}><span style={{opacity:0}}>•</span> {text1_1}</p>
      )}
      <p style={{ color: "#8c8c8c", fontSize: '2.625rem', marginTop: '-0rem', margin: 0 }}>• {text2}</p>
    </div>
  )

  return (
    <div style={{ borderRadius: "1em" }}>

      <div style={{ marginTop: '-0.3rem' }}>
        <img src={Image1} alt="" style={{ width: '70rem' }} />
        <div style={{ backgroundColor: "#2b2b2a", marginTop: '1.5rem', borderRadius: '0.5rem' }}>
          <TitleText titleText='로비화면' noNumber />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <Item title="아이디&보유머니" text="본인의 아이디와 보유머니 표시" />
            <Item number="2." title="언어설정" text="한국어, 중국어, 영어, 일본어 설정 가능" marginTop='1.4rem' />
            <LongItem2 number='3.' text='화면설정 : 전체화면/축소화면 설정 가능' text2='메인으로 : 메인으로 이동 가능' marginTop='1.4rem' />
            <Item number="4." title="업체별 정렬" text="카지노 업체별 테이블 정렬 가능" marginTop='1.5rem' />
            <Item number="5." title="베팅한도" text="테이블의 ▼ 버튼을 누르면" text2="해당 테이블의 상세 베팅한도 확인 가능" isflex marginTop='1.4rem' />
            <Item number="6." title="게임입장" text="원하는 테이블의 [입장]버튼을 누르면" text2="게임테이블로 이동됩니다." isflex marginTop='1.4rem' />
            <div style={{ width: "15.8rem", flexShrink: 0, paddingTop: '0.2rem', paddingBottom: '0.2rem', display: 'flex', justifyContent: 'center', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }}>
              알아두세요!
            </div>
            <div style={{ marginTop: '0.35rem' }}>
              <p style={{ color: "#8c8c8c", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', margin: 0 }}>
                ※ 스피드게임 : 45초 베팅시간 제공
              </p>
            </div>
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
          <TitleText number="01" titleText='게임화면' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <Item title="테이블정보" text="카지노업체, 게임회차, 베팅한도 등" text2="다양한 게임정보가 표시됩니다." isflex />
            <Item number="2." title="라이브 딜러영상" text="실제 호텔카지노의 라이브영상 제공" marginTop='1.5rem' />
            <Item number="3." title="금액표시" text="베팅금액/이긴금액/보유금액 표시" text2="" marginTop='1.5rem' />
            <Item number="4." title="슈통계" text="현재 슈를 토대로 한 다음 통계 표시" marginTop='1.5rem' />
            <Item number="5." title="로드탐구표" text="다음 라운드에서 뱅커 또는 플레이어가 이길 경우" text2="세 개의 중국점에 추가되는 아이콘 표시" marginTop='1.5rem' isflex />
            <Item number="6." title="스코어보드" text="6매, 본매, 중국점(1군~3군) 등 다양한 종류 제공"  marginTop='1.5rem' isflex />
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
          <TitleText number="02" titleText='게임화면' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <Item title="베팅구역" text="플레이어, 뱅커, 타이, 플레이어페어, 뱅커페어 등" text2="각 베팅구역을 누르면 베팅이 가능합니다." isflex />
            <Item number="2." title="베팅시간" text="베팅 가능한 시간을 표시합니다." marginTop='1.5rem' />
            <p style={{ color: "#f45400", fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium', margin: 0 }}>
              ※ 45초 베팅시간 제공
            </p>
            <Item number="3." title="베팅칩" text="베팅 시 칩을 선택할 수 있습니다." text2="" marginTop='1.5rem' />
            <LongItem2 number="4." title='버튼' text='베팅하기 : ① 베팅구역에 베팅한 후' text1_1='해당 버튼을 누르면 베팅이 완료됩니다.' text2='베팅취소 : 베팅을 취소할 수 있습니다.' marginTop='1.5rem' />
            <Item number="5." title="칩설정" text="테이블에 표시되는 ③ 칩을 설정할 수 있습니다." marginTop='1.5rem' />
            <Item number="6." title="테이블이동" text="다른 테이블로 이동 가능합니다." marginTop='1.5rem' isflex />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-dddddd" />
      <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
      <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
        <img className="object-none" src={Image4} alt="" style={{ width: '70rem' }} />
        <div style={{
          backgroundColor: "#2b2b2a", height: "",
          marginTop: '1.5rem', borderRadius: '0.5rem'
        }} className="w-full h-full rounded-xl p-20px">
          <TitleText number="03" titleText='게임화면' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>

            <LongItem number="1." title='메뉴' text='테이블이동 : 다른 테이블로 이동 가능' text2='화면설정 : 전체화면/축소화면 설정 가능' text3='베팅내역 : 상세 베팅내역 확인 가능' text4='로비이동 : 로비로 이동 가능' text5='새로고침 : 현재 화면 새로고침 가능' marginBottom='0.7rem' />
            <Item number="2." title="음향설정" text="게임 음향 ON/OFF 설정 가능" marginTop='1.5rem' />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-dddddd" />
      <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
      <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
        <img className="object-none" src={Image5} alt="" style={{ width: '70rem' }} />
        <div style={{
          backgroundColor: "#2b2b2a", height: "",
          marginTop: '1.5rem', borderRadius: '0.5rem'
        }} className="w-full h-full rounded-xl p-20px">
          <TitleText number="04" titleText='게임화면' />
          <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
          <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
              <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>간편 베팅기능 사용방법</span>
            </div>
            <Item title="설정버튼" text="게임설정 버튼을 선택합니다." marginTop='3rem' />
            <Item number="2." title="[S]버튼" text="[S]버튼을 선택합니다." marginTop='1.5rem' />
            <Item number="3." title="환경설정" text="각 항목에 원하는 금액을 설정합니다." text2="- 1번~5번 항목 금액입력(③ 예시화면 참조)" marginTop='1.5rem' isflex />
            <Item number="4." title="확인버튼" text="[확인] 버튼을 누릅니다." marginTop='1.5rem' />
            <Item number="5." title="베팅하기" text="숫자(1~5)버튼 선택 시 베팅이 가능합니다." text2='- 예) 1번 버튼 선택 시 플레이어 10,000 베팅' marginTop='1.5rem' isflex />
          </div>
        </div>
      </div>



    </div>
  )
}

export default HotelCasinoStructure

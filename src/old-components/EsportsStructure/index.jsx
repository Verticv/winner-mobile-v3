import React from 'react'
import Image1 from '../../assets/sports/1.png'
import Image2 from '../../assets/sports/2.png'
import icon from '../../assets/sports/Icon.png'

const EsportsStructure = () => {

    const TitleText = ({ number = "01" }) => (
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '3.41188rem', paddingTop: '2rem', paddingBottom: '1.8rem' }}>
            <img src={icon} alt="" style={{ marginLeft: '1.6rem', marginRight: '0.2rem', width: '2.5rem' }} />
            <div style={{ background: "linear-gradient(120deg, #2087f0, #1873cf", borderRadius: "3px" }}></div>
            <span style={{ letterSpacing: '-0.07rem', marginTop: '0.1rem', marginRight: '1rem', color: '#ccc2b6' }}>화면구성</span>
            <div style={{ backgroundColor: "#494745", borderRadius: "100%", fontFamily: 'RobotoBold', padding: '0.4rem 0.5rem', color: '#ccc2b6' }}>
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
            <p style={{ color: "#828282", fontSize: '2.625rem', marginTop:0, marginBottom:0 }}>{text} <span style={{ color: '#4c98ff', marginLeft: '0.5rem', marginRight: '0.2rem' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem' }}>{color2}</span><span style={{ margin: isflex || withoutP ? '0' : '' }}>{color3}</span></p>
            {text2 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', marginTop: isflex ? '-0.2rem' : '', margin: 0 }}>{text2}</p>
            )}
            {text3 && (
                <p style={{ color: "#8c8c8c", margin: 0 }}>{text3}</p>
            )}
        </div>
    )

    const LongItem = ({ number = "4.", title = "메뉴", marginTop, text = "결과 : 경기결과 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3 = "내베팅 : 상세한 베팅내역 확인 가능  ", text4 = "베팅규정 : 베팅규정 확인 가능" }) => (
        <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem' }}>
            <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
                <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <div style={{ marginTop: '-0.2rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text}</p>
            </div>
            <div style={{ marginTop: '-0rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text2}</p>
            </div>
            <div style={{ marginTop: '-0rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text3}</p>
            </div>
            <div style={{ marginTop: '-0rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text4}</p>
            </div>
        </div>
    )
    const LongItem2 = ({ number = "8.", title = "메뉴", marginTop, text = "내베팅 : 상세한 베팅내역 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", marginBottom }) => (
        <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.625rem', marginBottom: marginBottom }}>
            <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
                <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <div style={{ marginTop: '-0.2rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text}</p>

            </div>
            <div style={{ marginTop: '-0rem', fontSize: '2.625rem' }}>
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• {text2}</p>
            </div>
        </div>
    )

    return (
        <div style={{ borderRadius: "1em" }}>

            <div style={{ marginTop: '-0.3rem' }}>
                <img src={Image1} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", height: "", marginTop: '1.5rem', borderRadius: '0.5rem' }}>
                    <TitleText />
                    <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
                    <div style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
                        <Item />
                        <Item number="2." title="보유머니" text="본인의 보유머니가 표시됩니다." marginTop='1.5rem' />
                        <Item number="3." title="경기리스트" text="경기리스트를 확인할 수 있습니다." marginTop='1.5rem' />
                        <LongItem marginTop='1.5rem' />
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
            <div style={{ padding: '0rem 0 0.5rem' }}>
                <img src={Image2} alt="" style={{ width: '70rem' }} />
                <div style={{
                    backgroundColor: "#2b2b2a", height: "",
                    marginTop: '1.5rem', borderRadius: '0.5rem'
                }}>
                    <TitleText number="02" />

                    <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />

                    <div style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
                        <Item title="메인(초기)화면" text="메인화면으로 이동됩니다." />
                        <Item number="2." title="베팅타입 정렬" text="베팅타입 별로 배당판이 정렬됩니다." marginTop='1.5rem' />
                        <Item number="3." title="라이브 배당률" text="경기가 시작되면 라이브 배당률을 확인할 수 있습니다." text2="" marginTop='1.5rem' />
                        <Item number="4." title="배당판" text="다양한 배당정보가 표시됩니다." marginTop='1.5rem' />
                        <Item number="5." title="+버튼" text="각 팀의 좌/우 가장자리에 있는" color1="[+]" color2="[-]" color3="버튼을 누르면" text2="선택한 경기가 팔레이(다폴더) 리스트에 추가됩니다." marginTop='1.5rem' />
                        <Item number="6." title="경기영상" text="라이브경기는 실시간으로 경기영상을 제공하며" text2="대기중인 경기는 경기정보가 표시됩니다." marginTop='1.5rem' withoutP='true' />
                        <Item number="7." title="통계" text="경기플레이어, 게임통계, 팀순위 등" text2="다양한 경기정보를 제공합니다." withoutP marginTop='1.4rem' />
                        <LongItem2 marginTop='1.3rem' marginBottom='0.7rem' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EsportsStructure

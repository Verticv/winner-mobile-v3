import React from 'react'
import Image8 from '../../assets/sports/8.png'
import Image9 from '../../assets/sports/9.png'
import Image10 from '../../assets/sports/10.png'
import Image11 from '../../assets/sports/11.png'
import Image12 from '../../assets/sports/12.png'

const EsportsMulti = () => {

    const Item = ({ number = "1.", title = "보유머니", text = null, text1 = null, text2 = null, text3 = null, text4 = null, text5 = null, text6 = null, text7 = null, color1 = null, color2 = null, color3 = null, withoutP }) => (
        <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', letterSpacing: '-0.05rem', fontSize: '2.625rem' }}>
            <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
                <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            {text && (
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>{text} <span style={{ color: '#4c98ff', marginLeft: '0.1rem', marginRight: '0.2rem', fontWeight: '600' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem', fontWeight: '600' }}>{color2}</span><span style={{ margin: '0' }}>{color3}</span></p>
            )}
            {text1 && (
                <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0, marginTop: '-0.3rem' }}>{text1}</p>
            )}
            {text2 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0, marginTop: '-0.3rem' }}>{text2}</p>
            )}
            {text3 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0, marginTop: '-0.3rem' }}>{text3}</p>
            )}
            {text4 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>{text4}</p>
            )}
            {text5 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: '-0.25rem 0 0 0.4rem' }}>{text5}</p>
            )}
            {text6 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0, marginTop: '-0.3rem' }}>{text6}</p>
            )}
            {text7 && (
                <p style={{ color: "#8c8c8c", fontSize: '2.625rem', margin: 0 }}>{text7}</p>
            )}
        </div>
    )

    return (
        <div style={{ borderRadius: "1em", marginTop: '-0.3rem' }}>

            <div>
                <img src={Image8} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.3rem', borderRadius: '0.5rem' }}>

                    <div style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', letterSpacing: '-0.05rem', fontSize: '2.625rem' }}>
                        <div style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.825rem' }}>
                            <span style={{ color: '#a67c52', marginRight: '0.4rem' }}>1.</span>
                            <span style={{ color: '#ccc2b6' }}>종목 및 경기선택</span>
                        </div>
                        <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>가. ① 게임종류를 선택합니다.</p>
                        <span style={{ color: "#828282", fontSize: '2.625rem', marginTop: '-0.3rem', margin: 0 }}>나. ② 경기를 선택합니다.</span>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.6rem auto 3.7rem' }} />

            <div>
                <img src={Image9} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '2.4rem', borderRadius: '0.5rem', letterSpacing: '-0.05rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                    <Item
                        number="2."
                        title="배당항목선택"
                        text="가. ①"
                        color1="[+]"
                        color2="[-]"
                        color3="버튼을 눌러서 원하는 배당을 선택합니다."
                        text3="나. 선택한 경기(배당)가 ② 팔레이 리스트에 추가됩니다."
                        text5="-최소 2개 이상 각각 다른 경기를 &nbsp;추가하세요."
                        text6="다. 2경기 이상 추가되면 ② 팔레이 버튼을 누릅니다."
                    />

                    <div style={{ width: "15.8rem", flexShrink: 0, paddingTop: '0.2rem', paddingBottom: '0.2rem', display: 'flex', justifyContent: 'center', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }}>
                        알아두세요!
                    </div>
                    <div style={{ alignItems: 'center', marginTop: '0.35rem' }}>
                        <p style={{ color: "#8c8c8c", margin: 0, fontSize: '2.625rem' }}>※ 각 팀의 좌/우 가장자리에 있는 ①<span style={{ margin: '0 0.5rem 0 0', color: '#4c98ff', fontWeight: '600' }}>[+]</span><span style={{ color: "#e65454", margin: '0 0.5rem 0 0', fontWeight: '600' }}>[-]</span> 버튼을 누르면</p>
                    </div>
                    <div style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <p style={{ color: "#8c8c8c", margin: 0 }}> 선택한 경기(배당)가 ②팔레이 리스트에 추가됩니다.</p>
                    </div>
                    <div style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <p style={{ color: "#8c8c8c", margin: 0 }}>※ 팔레이베팅은 최소 2개 이상 각각 다른 경기를 조합하여 </p>
                    </div>
                    <div style={{ color: '#8c8c8c', fontSize: '2.625rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                        <p style={{ color: "#8c8c8c", margin: 0 }}>베팅할 수 있습니다. (같은 게임 팔레이베팅 불가) </p>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.3rem auto 3.7rem' }} />

            <div style={{}}>
                <img src={Image10} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem', letterSpacing: '-0.05rem', fontFamily: 'SpoqaHanSansNeoMedium' }}>
                    <Item number="3." title="베팅금액 입력" text="가. ① 베팅금액을 입력합니다." text2="나. ② [확인] 버튼을 누르면 베팅이 완료됩니다." withoutP />
                    <div style={{ width: "15.8rem", flexShrink: 0, paddingTop: '0.2rem', paddingBottom: '0.2rem', display: 'flex', justifyContent: 'center', marginTop: "3.2rem", backgroundColor: "#f45400", fontSize: '2.825rem', color: '#ffffff', fontFamily: 'SpoqaHanSansNeoBold', marginLeft: '0.1rem', letterSpacing: '-0.03rem' }}>
                        알아두세요!
                    </div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• 1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅</p>
                    </div>
                    <div style={{ marginTop: '0.1rem' }}>
                        <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• 1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅</p>
                    </div>
                    <div style={{ marginTop: '0.2rem' }}>
                        <p style={{ color: "#828282", fontSize: '2.625rem', margin: 0 }}>• 1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅 </p>
                    </div>
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.8rem auto 3.7rem' }} />

            <div>
                <img src={Image11} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.15rem 1.8rem", marginTop: '1.7rem', borderRadius: '0.5rem' }}>
                    <Item number="4." title="베팅완료" text="베팅이 완료되면 ① 베팅내역 화면이 나타나며" text2="상세 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

            <div style={{ background: '#494745', height: '0.1875rem', width: '100%', margin: '3.7rem auto 3.7rem' }} />

            <div>
                <img src={Image12} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", padding: "2.1rem 1.8rem", marginTop: '2.2rem', borderRadius: '0.5rem' }}>
                    <Item number="5." title="베팅내역확인" text="가. ① [내 베팅] 메뉴를 선택합니다." text2="나. ② 베팅내역을 확인할 수 있습니다." withoutP />
                </div>
            </div>

        </div>
    )
}

export default EsportsMulti
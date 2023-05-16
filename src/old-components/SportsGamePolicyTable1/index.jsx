import React from 'react'
import parse from 'html-react-parser';


const SportsGamePolicyTable1 = ({ array }) => {

    const Cell = ({
        type,
        typeColor,
        overtime,
        ruleText,
        ruleText2 = null,
        ruleText3 = null,
        ruleText4 = null,
        hasMargin,
        rows
    }) => (
        <tr style={{ borderBottom: "0.1875rem solid #252525", textAlign: 'center' }} className={`bg-gray-fefefe font-spoqa tracking-tight text-gray-r585858  w-full border-b border-gray-dddddd`}>
            <td style={{ width: "14.8125rem", paddingLeft: '0rem', paddingRight: '0rem', color: typeColor, textAlign: 'center', lineHeight: '1.1' }} className="font-spoqaMedium text-center">
                {type.split('\n').map((item, i) =>
                    <p style={{ marginRight: '-1.2rem', marginTop: '0.2rem' }} key={i}>{item}</p>
                )}
            </td>
            <td style={{ width: "14.1875rem", color: overtime === null ? "#e65454" : overtime === true ? "#ffcc00" : "#929292" }} className="font-spoqaMedium text-center">
                <p style={{ marginTop: '0.5rem', marginLeft: hasMargin ? '' : '' }}>{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</p>
            </td>
            <td style={{ wordBreak:'break-word', WebkitTextStroke: "0.2px", textAlign: 'start', padding: rows === '2' ? '1.529rem 0 1.317rem' : (rows === '3' ? '1.25rem 0px 1.009rem' : (rows === '4' ? '1.2rem 0px 0.7rem' : (rows === '1' ? '1.8rem 0 1.6rem' : (rows === '5' ? '0.767rem 0px 0.45rem' : (rows === 'ss' ? '0.9rem 0px 0.75rem' : '0'))))) }} className=''>
                <p>{parse(ruleText)}</p>
                <p>{ruleText2}</p>
                <p>{ruleText3}</p>
                <p>{ruleText4}</p>
            </td>
        </tr>
    )

    function Cells({ items }) {
        return items.map(item => (
            <Cell type={item.type} typeColor={item.typeColor} overtime={item.overtime} ruleText={item.ruleText} ruleText2={item.ruleText2} ruleText3={item.ruleText3} ruleText4={item.ruleText4} hasMargin={item.hasMargin} rows={item.rows} />
        )
        )
    }


    return (
        <div style={{ background: 'linear-gradient(to top, #1f1f1e, #3e3e3d 50%, #4a4a4a)', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', margin: '0 1.875rem', borderRadius: "1.2rem", }}>
            <table style={{ borderRadius: "1.2rem", fontSize: '2.8125rem', background: '#323232', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', borderCollapse: 'collapse', width:'100%' }} className="shadow-subNavbar overflow-hidden">
                <thead style={{ borderBottomWidth: "0.1875rem", background: '#2e2e2e', borderBottom: '0.1875rem solid #252525', borderTopLeftRadius: '1.3rem', borderTopRightRadius: '1.3rem' }} className="bg-gray-fafafa font-spoqaMedium tracking-tight text-gray-r454545 border-b border-gray-dddddd">
                    <tr style={{ height: '9.1rem', background: '', borderTopLeftRadius: '1.3rem', }}>
                        <td style={{ width: "14.8125rem", color: '#c8c8c8', textAlign: 'center', borderTopLeftRadius: '1.3rem', }} className="text-center"><p style={{ margin: '-0.1rem 0 0 1.3rem ' }}>베팅타입</p></td>
                        <td style={{ width: "14.1875rem", color: '#c8c8c8', textAlign: 'center' }} className="text-center"><p style={{ margin: '-0.1rem 0 0 0rem ' }}>적용시간</p></td>
                        <td className="text-center" style={{ color: '#c8c8c8', textAlign: 'center', borderTopRightRadius: '1.3rem' }}><p style={{ margin: '-0.1rem 0 0 -1.8rem ' }}>베팅룰</p></td>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '2.625rem', color: '#c8c8c8' }} className="w-full text-585858 tracking-tight font-spoqa">

                    <Cells items={array} />

                </tbody>
            </table>

        </div>
    )
}

export default SportsGamePolicyTable1;

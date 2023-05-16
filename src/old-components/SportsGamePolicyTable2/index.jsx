import React from 'react'
import parse from 'html-react-parser';

const SportsGamePolicyTable2 = ({ array }) => {

    function Cells({ items }) {
        return items.map((item, index) => (
            <tr style={{ borderBottomWidth: `${items.length - 1 !== index ? "0.1875rem" : ""}`, fontFamily: 'SpoqaHanSansNeoMedium', borderBottom: "0.1875rem solid #252525", textAlign: 'center' }}>
                <td style={{ padding: '0.875rem 0', width: "29.375rem", paddingLeft: '2.5rem', paddingRight: '1.5rem' }}>
                    <span style={{ color: item.color, marginLeft: item.isFirst ? '' : '-0.6rem' }}>{item.title}</span>
                    {item.title2 && (
                        <span style={{ marginLeft: '5.0125rem' }}>{item.title2}</span>
                    )}
                </td>
                <td style={{ padding: '1.2rem 0px 1.1rem 0rem', WebkitTextStroke: "0.2px", textAlign: 'start' }} className="">
                    <p>{parse(item.text)}</p>
                    <p>{item.text2}</p>
                    <p>{item.text3}</p>
                </td>
            </tr>
        )
        )
    }

    return (
        <div style={{ background: 'linear-gradient(to top, #1f1f1e, #3e3e3d 50%, #4a4a4a)', padding: '0.1875rem', margin: '2.5rem 1.875rem', borderRadius: "1.2rem", }}>
            <table style={{ borderRadius: "1.2rem", fontSize: '2.8125rem', background: '#323232', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', borderCollapse: 'collapse', width: '100%' }} className="shadow-subNavbar">
                <thead style={{ borderBottomWidth: "0.1875rem", background: '#2e2e2e', borderBottom: '0.1875rem solid #252525', borderTopLeftRadius: '1.3rem', borderTopRightRadius: '1.3rem' }}>
                    <tr style={{ height: '9.1rem', background: '', borderTopLeftRadius: '1.3rem', }}>
                        <td style={{ width: "14.8125rem", color: '#c8c8c8', textAlign: 'center', borderTopLeftRadius: '1.3rem' }}><p style={{ margin: '-0.1rem 0px 0px 0.1rem', letterSpacing: '-0.07rem' }}>타입 및 경기시간</p></td>
                        <td className="text-center" style={{ color: '#c8c8c8', textAlign: 'center', borderTopRightRadius: '1.3rem' }}><p style={{ margin: '-0.1rem 0 0 -2.2rem ' }}>결과적용기준</p></td>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '2.625rem', color: '#c8c8c8' }}>
                    <Cells items={array} />
                </tbody>
            </table>

        </div>
    )
}

export default SportsGamePolicyTable2

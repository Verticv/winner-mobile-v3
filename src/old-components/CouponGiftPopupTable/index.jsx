import React, { useState } from 'react'

const CouponGiftPopupTable = () => {
    const [isChecked, setChecked] = useState(null)

    const RadioButton = ({ id }) => (
        <label className="form-control">
            <input
                className="radio"
                type="radio"
                name="radio"
                checked={isChecked === id}
                onChange={() => setChecked(id)}
            />
        </label>
    )
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }

    return (
        <div style={{ borderRadius: "1.2rem", overflowY: 'scroll', background: '#2e2e2e', boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.6)', height: 'calc(100vh - 58rem)' }} className="shadow-subNavbar overflow-y-scroll h-full">
            <div style={{ height: '7rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', paddingTop: '1.7rem', paddingRight: '' }}>
                <div style={{ fontSize: '2.625rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '2.9rem' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>선택</td>
                    <td style={{ width: '23.8125rem', textAlign: 'center' }}>아이디</td>
                    <td style={{ width: '26rem', textAlign: 'center' }}>별명</td>
                </div>
            </div>
            <div style={{ color: '#c8c8c8', flex: 1 }}>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={0} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{truncate('louie32louie32louie32louie32louie32louie32louie32louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'
                    }}>{truncate('위너테스트2위너테스트2위너테스트2위너테스트2위너테스트2위너테스트2위너테스트2위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={2} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={3} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={4} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={5} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={6} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={7} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={8} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={9} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={10} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#2e2e2e' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={11} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeo', borderTop: '0.1875rem solid #252525', letterSpacing: '-0.07rem', background: '#323232' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={12} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
            </div>
        </div>
    )
}

export default CouponGiftPopupTable

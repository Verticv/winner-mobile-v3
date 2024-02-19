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
        // <div style={{ borderRadius: "1.2rem", overflowY: 'scroll', background: 'linear-gradient(to right, #9d3bbb, #5423a0)', boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.6)', height: 'calc(100vh - 96rem)' }} className="shadow-subNavbar overflow-y-scroll h-full">
        <div style={{ borderRadius: "1.2rem", overflowY: 'scroll', background: 'linear-gradient(to right, #9d3bbb, #5423a0)', boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.6)', height: 'calc(45vh)' }} className="shadow-subNavbar overflow-y-scroll h-full">
            <div style={{ height: '7rem', color: '#ffffff', letterSpacing: '-0.07rem', paddingTop: '1.7rem', paddingRight: '' }}>
                <div style={{ fontSize: '2.625rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '2.9rem' }}>
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>선택</td>
                    <td style={{ width: '23.8125rem', textAlign: 'center' }}>아이디</td>
                    <td style={{ width: '26rem', textAlign: 'center' }}>별명</td>
                </div>
            </div>
            {/* <div style={{ color: '#666666', flex: 1 }}> */}
            <div style={{ color: '#444444', flex: 1 }}>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                {/* <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>louie32</td>
                    <td style={{ width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{truncate('위너테스트2', 10, 10)}</td> */}
                    <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.925rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
                <div style={{ height: '8.725rem', fontSize: '2.625rem', display: 'flex', alignItems: 'center', borderTop: '0.1875rem solid #eeeeee', letterSpacing: '-0.07rem', background: '#ffffff' }}>
                <td style={{ width: '20.6125rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><RadioButton id={1} /></td>
                    <td style={{ width: '23.8125rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '-0.2rem' }}>{truncate('louie32', 17, 17)}</td>
                    <td style={{
                        width: '26rem', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginTop: '0.6rem'
                    }}>{truncate('위너테스트2', 10, 10)}</td>
                </div>
            </div>
        </div>
    )
}

export default CouponGiftPopupTable

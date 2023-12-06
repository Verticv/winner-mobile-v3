import React from 'react';
import './_powerBallResults.scss';

const PowerBallResults = ({ array }) => {

    function Cells({ items }) {
        return items.map(item => (
            <div
                style={{
                    height: "10.89rem", borderBottom: '0.1875rem solid #252525', fontSize: '2.25rem',
                    paddingTop: '0.4rem',
                    backgroundColor: item.count % 2 === 0 ? "#323231" : "#2e2e2d"
                }}
                className="powerballresult-content7"
            >
                <div style={{ width: "10.875rem", paddingRight: '0.3rem' }} className="powerballresult-content8"><div className='powerballresult-content9'><p>{item.count}</p><p>{item.powerball}</p></div></div>
                <div style={{ width: "20.0625rem" }} className="powerballresult-content8"><div className='powerballresult-content9'><p>{item.chosenNum}</p><p style={{ color: "#4c98ff" }}>{item.powerballOdd ? "홀" : "짝"}</p></div></div>
                <div style={{ width: "20.0625rem", paddingLeft: '0.5rem' }} className="powerballresult-content8"><div className='powerballresult-content9'><p>{item.numberSum}</p><p>{item.size}</p></div></div>
                <div style={{ width: "20.0625rem", color: "#e65454", paddingLeft: '0.5rem' }} className="powerballresult-content8"><div className='powerballresult-content9'><p>{item.odd ? "홀" : "짝"}</p><p className='powerballresult-content10'>{item.range}</p></div></div>

                {/* <div style={{width: "10.875rem"}} className="text-center">{item.powerball}</div> */}
                {/* <div style={{width: "20.0625rem", color:"#0056a6"}} className="text-center">{item.powerballOdd ? "홀" : "짝"}</div> */}
                {/* <div style={{width: "20.0625rem"}} className="text-center">{item.size}</div> */}
                {/* <div style={{width: "20.0625rem"}} className="text-center">{item.range}</div> */}
            </div>
        ));
    }

    return (
        <div className="powerballresult-container">
            <div className="powerballresult-content">
                <div style={{ fontSize: '2.25rem' }} className='powerballresult-content1'>
                    <div style={{ marginBottom: '0.1875rem' }} className='powerballresult-content2'>
                        <div style={{ width: "10.875rem", height: '5.25rem', marginRight: '0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem' }} className="powerballresult-content3">회차</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', marginRight: '0.1875rem' }} className="powerballresult-content3">당첨번호결과</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', marginRight: '0.1875rem' }} className="powerballresult-content3">숫자 합</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', borderTopRightRadius: '0.625rem', borderBottomRightRadius: '0.625rem' }} className="powerballresult-content3">홀/짝</div>
                    </div>
                    <div className='powerballresult-content4'>
                        <div style={{ width: "10.875rem", height: '5.25rem', marginRight: '0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem' }} className="powerballresult-content5">파워볼</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', marginRight: '0.1875rem' }} className="powerballresult-content5">파워볼 홀/짝</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', marginRight: '0.1875rem' }} className="powerballresult-content5">대/중/소</div>
                        <div style={{ width: "20.0625rem", height: '5.25rem', borderTopRightRadius: '0.625rem', borderBottomRightRadius: '0.625rem' }} className="powerballresult-content5">파워볼 구간</div>
                    </div>
                </div>
            </div>
            <div className="powerballresult-content6">
                <Cells items={array} />
            </div>
        </div>
    )
}

export default PowerBallResults

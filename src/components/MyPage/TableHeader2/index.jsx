import React from 'react';

const TableHeader2 = ({ smallCard = false, isMinigame = false, middleText = "무" }) => {

    return (
        <div style={{ paddingTop: '1.688rem', paddingBottom: '1rem', display: 'flex', color: 'rgb(238, 238, 238)' , background: 'linear-gradient(to right, rgb(157, 59, 187), rgb(84, 35, 160))', borderTopLeftRadius: '1.125rem', borderTopRightRadius: '1.125rem' }} className="flex w-full  text-14px tracking-tight text-gray-r454545">
            {/* <div style={{ fontSize: '2.625rem', marginLeft: '5.3rem' }} className="h-full flex items-center justify-end">경기일시</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '9.4rem' }} className="h-full flex items-center justify-end">회차</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '14.1rem' }} className="h-full flex items-center justify-end">결과</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '12.8rem' }} className="h-full flex items-center justify-end">배당률</div> */}
            <div style={{ fontSize: '2.625rem', marginLeft: '4.5rem', letterSpacing: '-0.015em' }} className="h-full flex items-center justify-end">경기일시</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '9.8rem', letterSpacing: '-0.015em' }} className="h-full flex items-center justify-end">회차</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '14.0rem', letterSpacing: '-0.015em' }} className="h-full flex items-center justify-end">결과</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '13.2rem', letterSpacing: '-0.015em' }} className="h-full flex items-center justify-end">배당률</div>
        </div>
    )
}

export default TableHeader2

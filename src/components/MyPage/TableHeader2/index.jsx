import React from 'react';

const TableHeader2 = ({ smallCard = false, isMinigame = false, middleText = "무" }) => {

    return (
        <div style={{ paddingTop: '1.7625rem', paddingBottom: '1.4rem', display: 'flex', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} className="flex w-full font-spoqaMedium text-14px tracking-tight text-gray-r454545">
            <div style={{ fontSize: '2.625rem', marginLeft: '5.3rem' }} className="h-full flex items-center justify-end">경기일시</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '9.4rem' }} className="h-full flex items-center justify-end">회차</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '14.1rem' }} className="h-full flex items-center justify-end">결과</div>
            <div style={{ fontSize: '2.625rem', marginLeft: '12.8rem' }} className="h-full flex items-center justify-end">배당률</div>
        </div>
    )
}

export default TableHeader2

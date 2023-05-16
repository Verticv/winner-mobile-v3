import React from 'react';

const TableHeader = ({ smallCard = false, isMinigame = false, middleText = "무", isFreeboard, isCompose }) => {

    if (isMinigame === true) return (
        <div style={{ paddingTop: '1.7625rem', paddingBottom: '1.375rem', display: 'flex', justifyContent: 'right', alignItems: 'center', paddingRight: smallCard ? '1.8rem' : '10.5rem', letterSpacing: '-0.07rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '', marginBottom: '0.3rem' }} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '11rem' : '', flexShrink: 0 }}>회차</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : '11.5rem', flexShrink: 0 }}>승(홈)</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '12.25rem' : '14rem', flexShrink: 0 }}>VS</div>
            <div style={{ fontSize: '2.625rem', marginLeft: smallCard ? '9rem' : '13rem', flexShrink: 0 }}>패(원정)</div>
        </div>
    )
    else return (
        <div style={{ paddingTop: smallCard ? '1.69rem' : '1.8rem', paddingBottom: '1.375rem', display: 'flex', justifyContent: 'right', alignItems: 'center', paddingRight: isCompose ? "2.4rem" : isFreeboard ? '2.2rem' : smallCard ? '1.8rem' : '2rem', letterSpacing: '-0.07rem', color: 'rgb(204, 194, 182)', fontFamily: 'SpoqaHanSansNeoMedium', marginBottom: smallCard ? '' : '0.3rem' }} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
            <div style={{ fontSize: '2.625rem', marginLeft: isCompose ? "2rem" : isFreeboard ? '2rem' : smallCard ? '' : '' }} className="h-full flex items-center justify-end">승(홈)</div>
            <div style={{ fontSize: '2.625rem', marginLeft: isCompose ? "13.7rem" : isFreeboard ? '13.5rem' : smallCard ? '13.5rem' : middleText === "VS" ? '13.75rem' : '14.45rem' }} className="h-full flex items-center justify-end">{middleText}</div>
            <div style={{ fontSize: '2.625rem', marginLeft: isCompose ? "12.5rem" : isFreeboard ? '12.2rem' : smallCard ? '13.2rem' : '13.2rem' }} className="h-full flex items-center justify-end">패(원정)</div>
            <div style={{ fontSize: '2.625rem', marginLeft: isCompose ? "9rem" : isFreeboard ? '8.8rem' : smallCard ? '10rem' : '10rem' }} className="h-full flex items-center justify-end">결과</div>
        </div>
    )
}

export default TableHeader;

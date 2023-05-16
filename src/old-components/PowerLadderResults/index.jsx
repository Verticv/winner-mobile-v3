import React from 'react';
import './_powerLadderResults.scss';

const PowerLadderResults = () => {

    const array = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '3',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]


    function Cells({ items }) {
        return items.map((item, index) => (
            <div
                style={{ height: "7rem", borderBottomWidth: '0.1875rem', fontSize: '2.25rem', 
                backgroundColor: index % 2 === 0 ? "#323231" : "#30302f" }}
                className="powerladderresults-content4"
            >
                <div className="powerladderresults-content5">{item.month} [{item.roundNumber}]</div>
                <div className="powerladderresults-content5">
                    <div
                        style={{ width: "4.5rem", height: "4.5rem", fontSize: '2.25rem', backgroundColor: item.departureNumberColor }}
                        className="powerladderresults-content6"
                    >
                        <p className='powerladderresults-content7'>{item.departureText}</p>
                        <div style={{ width: '2.25rem', height: '2.25rem', fontSize: '1.5rem', top: '-0.3rem', right: item.departureNumberDirection === "right" ? "-0.5rem" : "", left: item.departureNumberDirection === "left" ? "-0.5rem" : "" }} className={`powerladderresults-content8`}
                        >{item.departureNumber}</div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="powerladderresults-container">
            <div className="powerladderresults-content">
                <div style={{ fontSize: '2.25rem' }} className='powerladderresults-content1'>
                    <div style={{ height: '5.25rem', marginRight: '0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem' }} className="powerladderresults-content2">회차</div>
                    <div style={{ height: '5.25rem' }} className="powerladderresults-content2">좌우 출발 3/4줄</div>
                </div>
            </div>
            <div className="powerladderresults-content3 text-585858">
                <Cells items={array} />
            </div>
        </div>
    )
}

export default PowerLadderResults

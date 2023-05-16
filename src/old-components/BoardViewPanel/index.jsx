import React from 'react'
import '../BoardComposeViewPanel/RadioButton.css';
import TableHeader from '../TableHeader'
import CardHeader from '../CardHeader'
import CardResults from '../CardResults'
import CardContent from '../CardContent'

const BoardViewPanel = ({
    checkedState = null,
    setCheckedState = null,
    setAttachedArray = null,
    attachedArray = null,
}) => {

    const handleRemoveItem = (id) => {
        setAttachedArray(attachedArray.filter(card => card.id !== id));
    };

    return (
        <>
            {attachedArray && attachedArray?.map((card, index) => (
                <div key={card.id} style={{ margin: '1.875rem 0.9rem', background: '', boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem', height: '50rem' }}>
                    <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                        <TableHeader smallCard isCompose/>
                        <div style={{ padding: '0 1rem' }} className="w-full">
                            <div className="w-full rounded-lg" style={{ padding: '0.2875rem 0.1875rem' }}>
                                <div className='rounded-lg w-full shadow-to-box' style={{ background: '', border: '0.45rem solid #473b35', borderRadius: '0.4rem' }}>
                                    <CardHeader flag={card.flag} name={card.name} date='2021-06-29 15:45' />
                                    <CardResults
                                        bet={card.bet}
                                        result={card.result}
                                        score={card.score}
                                        team1={card.team1}
                                        team2={card.team2}
                                        stat1={card.stat1}
                                        stat2={card.stat2}
                                        stat3={card.stat3}
                                        isAttached={false}
                                        hasUp={card.hasUp}
                                        hasDown={card.hasDown}
                                        smallCard
                                        smallContent
                                        width92
                                        isCompose
                                    />
                                </div>
                                <CardContent winAmount={card.winAmount} id={card.id} withButtons={false} withInput={false} withCancelButton={true} cancelHandler={handleRemoveItem} checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                            </div>
                        </div>
                    </div>
                    {attachedArray.length - 1 === index && (
                        <div style={{ height: '0.1875rem', marginTop: '5.625rem' }} className={`${attachedArray.length - 1 === index ? "bg-gray-dddddd" : ""} w-full`}></div>
                    )}
                </div>
            ))}
        </>
    )
}

export default BoardViewPanel
